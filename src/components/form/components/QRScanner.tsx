import { useEffect, useRef, useState, useId } from "react";
import { Html5Qrcode, Html5QrcodeScannerState } from "html5-qrcode";
import jsQRImport from "jsqr";

interface QRScannerProps {
  open: boolean;
  onClose: () => void;
  onScan: (value: string) => void;
}

const jsQR = jsQRImport as unknown as (
  data: Uint8ClampedArray,
  width: number,
  height: number,
) => { data: string } | null;

export default function QRScanner({ open, onClose, onScan }: QRScannerProps) {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const startPromiseRef = useRef<Promise<void> | null>(null);
  const readerId = useId().replace(/:/g, "");
  const mountedRef = useRef(true);
  const sessionIdRef = useRef(0);

  const [isStarting, setIsStarting] = useState(true);

  const [loadingMode, setLoadingMode] = useState<"camera" | "upload">("camera");
  const [error, setError] = useState<string | null>(null);
  const [torchOn, setTorchOn] = useState(false);
  const [torchSupported, setTorchSupported] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const stopScanner = async () => {
    // Wait for any in-flight start() before attempting to stop —
    // calling stop() while start() is still pending can throw
    // and leave the camera stream running.
    if (startPromiseRef.current) {
      try {
        await startPromiseRef.current;
      } catch {
        // start already failed, nothing to stop
      }
    }

    if (!scannerRef.current) return;

    try {
      const state = scannerRef.current.getState();
      if (
        state === Html5QrcodeScannerState.SCANNING ||
        state === Html5QrcodeScannerState.PAUSED
      ) {
        await scannerRef.current.stop();
      }
      scannerRef.current.clear();
    } catch (err) {
      console.warn(err);
    }

    scannerRef.current = null;
    startPromiseRef.current = null;
  };





const handleFileUpload = async (
  e: React.ChangeEvent<HTMLInputElement>,
) => {
  const file = e.target.files?.[0];
  e.target.value = "";

  if (!file) return;

  setError(null);
  setIsStarting(true);
  setLoadingMode("upload");

  try {
    const img = new Image();

    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });

    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas not supported");

    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height,
    );

    const result = jsQR(
      imageData.data,
      imageData.width,
      imageData.height,
    );

    URL.revokeObjectURL(img.src);

    if (!result) {
      throw new Error("QR not found");
    }

    onScan(result.data);
  } catch (err) {
    console.error(err);
    setError("Couldn't find a QR code in that image.");
  } finally {
    setIsStarting(false);
  }
};

  const handleClose = async () => {
    await stopScanner();
    onClose();
  };

  const startScanning = async () => {
    await stopScanner();
    const session = ++sessionIdRef.current;
    setError(null);
    setIsStarting(true);
    setLoadingMode("camera");
    setTorchOn(false);
    setTorchSupported(false);

    try {
      const cameras = await Html5Qrcode.getCameras();

      if (!cameras.length) {
        throw new Error("No camera found");
      }

      if (session !== sessionIdRef.current || !mountedRef.current) return;
      const [firstCamera] = cameras;

      if (!firstCamera) {
        throw new Error("No camera found");
      }

      const camera =
        cameras.find((c) => /back|rear|environment/i.test(c.label)) ??
        firstCamera;

      const scanner = new Html5Qrcode(readerId);
      scannerRef.current = scanner;

      const startPromise = scanner
        .start(
          camera.id,
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
          },
          async (decodedText) => {
            await stopScanner();
            onScan(decodedText);
          },
          () => {
            // Ignore scan failures while scanning
          },
        )
        .then(() => {
          if (session !== sessionIdRef.current || !mountedRef.current) {
            scanner.stop().catch(() => {});
            scanner.clear();
            return;
          }
          setIsStarting(false);

          try {
            const capabilities = scanner.getRunningTrackCameraCapabilities();
            const torchFeature = capabilities.torchFeature();
            setTorchSupported(torchFeature.isSupported());
          } catch {
            setTorchSupported(false);
          }
        });

      startPromiseRef.current = startPromise;
      await startPromise;
    } catch (err: any) {
      if (session !== sessionIdRef.current || !mountedRef.current) return;
      setIsStarting(false);
      setError(
        err?.name === "NotAllowedError"
          ? "Camera access was denied. Please allow camera permission and try again."
          : err?.message === "No camera found"
            ? "No camera was found on this device."
            : "Unable to start the camera. Please try again.",
      );
      console.error(err);
    }
  };

  const toggleTorch = async () => {
    if (!scannerRef.current) return;

    try {
      const capabilities =
        scannerRef.current.getRunningTrackCameraCapabilities();
      const next = !torchOn;
      await capabilities.torchFeature().apply(next);
      setTorchOn(next);
    } catch (err) {
      console.warn("Torch toggle failed", err);
    }
  };
  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    void startScanning();

    return () => {
      void stopScanner();
    };
  }, [open]);

  if (!open) return null;

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black p-0 sm:p-4">
  <input
    ref={fileInputRef}
    type="file"
    accept="image/*"
    className="hidden"
    onChange={handleFileUpload}
  />

  <div className="relative h-full w-full overflow-hidden bg-black sm:h-auto sm:max-w-md sm:rounded-2xl sm:aspect-square sm:min-h-[480px]">
    {/* Full-bleed video */}
   <div
          id={readerId}
          className="h-full w-full [&_video]:!h-full [&_video]:!w-full [&_video]:!object-cover [&_#reader_img]:!hidden [&>div>div>div]:!border-0 [&_div[style*='border']]:!border-0"
        />

    {/* Top floating controls — overlaid on video, transparent gradient for legibility */}
    <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent px-4 py-4">
      <h2 className="text-base font-medium text-white drop-shadow">
        Scan QR Code
      </h2>

      <div className="flex items-center gap-2">
        {torchSupported && (
          <button
            type="button"
            onClick={toggleTorch}
            title={torchOn ? "Turn off flashlight" : "Turn on flashlight"}
            className={`flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-colors ${
              torchOn
                ? "bg-yellow-400/90 text-yellow-900"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            <i className="fa fa-bolt text-[13px]" />
          </button>
        )}

        <button
          type="button"
          onClick={handleClose}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
        >
          <i className="fa fa-times text-[15px]" />
        </button>
      </div>
    </div>

    {/* Loading overlay */}
    {isStarting && !error && (
     <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 text-white">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        <span className="text-sm">
          {loadingMode === "upload" ? "Reading image…" : "Starting camera…"}
        </span>
      </div>
    )}

    {/* Error overlay */}
    {error && (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/85 px-6 text-center text-white">
        <i className="fa fa-video-slash text-2xl text-red-400" />
        <span className="text-sm">{error}</span>
        <div className="mt-1 flex gap-2">
          <button
            type="button"
            onClick={() => startScanning()}
            className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-gray-800 hover:bg-gray-100"
          >
            Retry
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-full border border-white/40 px-4 py-1.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Upload
          </button>
        </div>
        <button
          type="button"
          onClick={handleClose}
          className="mt-3 text-sm font-medium text-white/70 underline underline-offset-2 hover:text-white"
        >
          Close
        </button>
      </div>
    )}

    {/* Scan-target spotlight */}
    {!isStarting && !error && (
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[240px] w-[240px] rounded-2xl shadow-[0_0_0_9999px_rgba(0,0,0,0.55)]">
          <span className="absolute left-0 top-0 h-9 w-9 rounded-tl-2xl border-l-4 border-t-4 border-white" />
          <span className="absolute right-0 top-0 h-9 w-9 rounded-tr-2xl border-r-4 border-t-4 border-white" />
          <span className="absolute bottom-0 left-0 h-9 w-9 rounded-bl-2xl border-b-4 border-l-4 border-white" />
          <span className="absolute bottom-0 right-0 h-9 w-9 rounded-br-2xl border-b-4 border-r-4 border-white" />
        </div>
      </div>
    )}

    {/* Bottom floating helper + upload link, no redundant Close */}
    {!isStarting && !error && (
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 bg-gradient-to-t from-black/60 to-transparent px-4 pb-6 pt-8 text-center">
        <p className="text-sm text-white/90 drop-shadow">
          Position the QR code within the frame
        </p>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="text-sm font-medium text-white underline underline-offset-2 hover:text-white/80"
        >
          Upload QR image instead
        </button>
      </div>
    )}
  </div>
</div>
  );
}
