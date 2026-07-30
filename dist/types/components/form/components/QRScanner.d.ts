interface QRScannerProps {
    open: boolean;
    onClose: () => void;
    onScan: (value: string) => void;
}
export default function QRScanner({ open, onClose, onScan }: QRScannerProps): import("react").JSX.Element | null;
export {};
//# sourceMappingURL=QRScanner.d.ts.map