import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useMemo, useState } from "react";

type RichTextAreaProps = {
  value: string;
  onChange: (html: string) => void;
  disabled?: boolean;
};

function waitForTinyMCE(): Promise<void> {
  return new Promise((resolve) => {
    if ((window as any).tinymce) {
      resolve();
      return;
    }

    const interval = setInterval(() => {
      if ((window as any).tinymce) {
        clearInterval(interval);
        resolve();
      }
    }, 50);
  });
}

export default function RichTextEditor({
  value,
  onChange,
  disabled = false,
}: RichTextAreaProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    waitForTinyMCE().then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const init = useMemo(
    () => ({
      height: 500,
      menubar: false,
      statusbar: false,
      branding: false,
      promotion: false,

      // IMPORTANT: host app provides CSS
      skin: false,
      content_css: false,

      plugins: ["lists", "link", "image", "table", "code"],

      toolbar:
        "undo redo | bold italic underline | bullist numlist | table | link image | code",

      table_toolbar:
        "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",

      content_style: `
        body {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
        }
      `,
    }),
    []
  );

  if (!ready) {
    return (
      <div className="p-3 text-sm text-gray-400 border rounded-lg">
        Loading editor…
      </div>
    );
  }

  return (
    <Editor
      licenseKey="gpl"
      value={value}
      readonly={disabled}
      onEditorChange={onChange}
      init={init}
    />
  );
}
