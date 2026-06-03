import React, { useEffect, useState } from 'react';
import type { SqlEndpoints } from '../Form.types.js';
import { getPreviewUrl } from '../service.js';
import { isAbsoluteUrl, isValidPath } from '../utils.js';
type FilePreviewTriggerProps = {
    filePath: string;
    field_name: string;
    sqlOpsUrls?: SqlEndpoints | undefined;
};

export default function PhotoRenderer({ filePath, field_name, sqlOpsUrls }: FilePreviewTriggerProps) {
    const cleanPath = filePath?.replace(/^[^&]*&/, "");
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    useEffect(() => {

         if (isAbsoluteUrl(cleanPath)) {
              setPreviewUrl(cleanPath);
              return;
            }

        if (!sqlOpsUrls) return;
        let active = true;
        let objectUrl: string | null = null;

            if (!isValidPath(filePath)) {
            console.log("skipping preview:", filePath);
            return;
          }

        getPreviewUrl(cleanPath, sqlOpsUrls).then((url) => {

            if (!active) return;
            objectUrl = url;
            setPreviewUrl(url);
        });

        return () => {
            active = false;
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, [open, cleanPath, sqlOpsUrls]);



    return (
   <div className="h-24 w-24 rounded border border-dashed bg-gray-50 flex items-center justify-center">
        {previewUrl ? (
            <img
                alt={field_name}
                title={field_name}
                src={previewUrl}
                className="h-24 w-24 object-cover rounded"
            />
        ) : (
            <i className="fa-regular fa-image text-gray-400 text-2xl" />
        )}
    </div>
    )
}
