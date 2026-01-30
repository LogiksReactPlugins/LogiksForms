import React, { useEffect, useState } from 'react';
import type { SqlEndpoints } from '../Form.types.js';
import { getPreviewUrl } from '../service.js';
type FilePreviewTriggerProps = {
    filePath: string;
    field_name: string;
    sqlOpsUrls?: SqlEndpoints | undefined;
};

export default function PhotoRenderer({ filePath, field_name, sqlOpsUrls }: FilePreviewTriggerProps) {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    useEffect(() => {

        if (!open || !sqlOpsUrls) return;
        let active = true;
        let objectUrl: string | null = null;

        getPreviewUrl(filePath, sqlOpsUrls).then((url) => {

            if (!active) return;
            objectUrl = url;
            setPreviewUrl(url);
        });

        return () => {
            active = false;
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, [open, filePath, sqlOpsUrls]);

    if (!previewUrl) return null;

    return (
        <img alt={field_name}
            title={field_name}
            src={previewUrl} 
            className="h-24 w-24 object-cover rounded border border-dashed  cursor-pointer hover:opacity-90"
            />
    )
}
