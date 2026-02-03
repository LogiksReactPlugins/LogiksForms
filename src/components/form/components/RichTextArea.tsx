import { lazy, Suspense, useMemo } from "react";

const Editor = lazy(() =>
  import("@tinymce/tinymce-react").then(m => ({ default: m.Editor }))
);

type RichTextAreaProps = {
  value: string;
  onChange: (html: string) => void;
  disabled?: boolean;
};

export default function RichTextEditor({
  value,
  onChange,
  disabled = false,
}: RichTextAreaProps) {
  const init = useMemo(
    () => ({
      height: 500,
      menubar: false,
      statusbar: false,
      branding: false,
      promotion: false,
      skin: false,
      content_css: false,

      plugins: [
        "lists",
        "link",
        "image",
        "table",
        "code",
      ],

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

  return (
    <Suspense
      fallback={
        <div className="p-3 text-sm text-gray-400 border rounded-lg">
          Loading editor…
        </div>
      }
    >
      <Editor
        licenseKey="gpl"
        value={value}
        readonly={disabled}
        onEditorChange={onChange}
        init={init}
      />
    </Suspense>
  );
}
