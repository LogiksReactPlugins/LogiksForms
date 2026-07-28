import React, { useMemo, useState, useRef } from "react";
import axios from "axios";
import type { FormToolbar, ToolbarAction } from "../Form.types.js";
import QRScanner from "./QRScanner.js";
import { parseSerializedData } from "../utils.js";

interface FormToolbarProps {
  toolbar?: FormToolbar | undefined;
  methods?: Record<string, any>;
  sqlOpsUrls?: any;
  populateForm: (data: Record<string, any>) => void;
}

export default function FormToolbar({
  toolbar,
  methods = {},
  sqlOpsUrls,
  populateForm,
}: FormToolbarProps) {
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const docInputRef = useRef<HTMLInputElement>(null);
  const pendingActionRef = useRef<ToolbarAction | null>(null);

  const actions = useMemo<[string, ToolbarAction][]>(
    () => Object.entries(toolbar ?? {}) as [string, ToolbarAction][],
    [toolbar],
  );
  if (!toolbar || actions.length === 0) return null;

  const executeAction = async (
    config: ToolbarAction,
    payload: Record<string, any>,
  ) => {
    try {
      let response: any = {};



      if (config.type === "method") {
        const fn = methods?.[config.method!];

        if (!fn) {
          console.warn(`Method '${config.method}' not found.`);
          return;
        }

        response = await fn(payload);
      }

      if (config.type === "api") {
        let body: FormData | Record<string, any>;
        const headers = {
          Authorization: `Bearer ${sqlOpsUrls.accessToken}`,
        };

        if (payload.file) {
          const formData = new FormData();
          formData.append("file", payload.file);
          body = formData;
        } else {
          body = payload;
        }

        const { data } = await axios({
          method: config.method || "POST",
          url: `${sqlOpsUrls.baseURL}${config.endpoint}`,
          data: body,
          headers,
        });

        response =
          data?.results?.options ?? data?.data ?? data?.results ?? data;
      }

      if (response && typeof response === "object") {
   

        populateForm(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToolbarAction = async (key: string, config: ToolbarAction) => {
    switch (key) {
      case "camera":
        pendingActionRef.current = config;
        if (cameraInputRef.current) {
          cameraInputRef.current.value = "";
          cameraInputRef.current.click();
        }

        // TODO
        // const image = await openCamera();
        // await executeAction(config,{file:image});
        break;

      case "qrcode":
        pendingActionRef.current = config;
        setShowQRScanner(true);
        break;

      case "doc":
        pendingActionRef.current = config;

        if (docInputRef.current) {
          docInputRef.current.value = "";
          docInputRef.current.click();
        }

        break;

      default:
        console.warn(`Unknown toolbar action '${key}'`);
    }
  };

  const handleFileSelection = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];

    if (!file || !pendingActionRef.current) {
      pendingActionRef.current = null;
      e.target.value = "";
      return;
    }

    try {
      await executeAction(pendingActionRef.current, {
        file,
      });
    } finally {
      pendingActionRef.current = null;

      // Allow selecting same file again
      e.target.value = "";
    }
  };

  const renderButton = (key: string, config: ToolbarAction, full = true) => (
    <button
      key={key}
      type="button"
      title={config.tooltip}
      onClick={() => {
        setShowMenu(false);
        handleToolbarAction(key, config);
      }}
      className="inline-flex items-center gap-2 px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      {config.icon && (
        <i className={`${config.icon} text-[13px] text-gray-500`} />
      )}
      {full && <span className="whitespace-nowrap">{config.tooltip}</span>}
    </button>
  );
  const [singleAction] = actions;


  return (
    <div className="mb-4 flex items-center justify-end gap-2 pb-3 border-b border-gray-100">
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelection}
      />

      <input
        ref={docInputRef}
        type="file"
        className="hidden"
        onChange={handleFileSelection}
      />
      {/* Desktop */}
      <div className="hidden md:flex gap-2">
        {actions.map(([key, config]) => renderButton(key, config))}
      </div>

      {/* Mobile */}
      <div className="md:hidden relative">
        {actions.length === 1 && singleAction ? (
          renderButton(singleAction[0], singleAction[1], false)
        ) : (
          <>
            <button
              type="button"
              onClick={() => setShowMenu((prev) => !prev)}
              className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-150 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              <i className="fa fa-ellipsis-v" />
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-black/5 z-50 overflow-hidden divide-y divide-gray-50">
                {actions.map(([key, config]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setShowMenu(false);
                      handleToolbarAction(key, config);
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    {config.icon && (
                      <i
                        className={`${config.icon} text-[13px] text-gray-400`}
                      />
                    )}
                    <span>{config.tooltip}</span>
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <QRScanner
        open={showQRScanner}
        onClose={() => {
          pendingActionRef.current = null;
          setShowQRScanner(false);
        }}
        onScan={async (value) => {
          setShowQRScanner(false);

          if (!pendingActionRef.current) return;

          try {
           
            const result = parseSerializedData(value);
            if (!result.success) {
              console.warn(result.error);
              return;
            }
            populateForm(result.data!);
          } finally {
            pendingActionRef.current = null;
          }
        }}
      />
    </div>
  );
}
