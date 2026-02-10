import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';

import Image from "@tiptap/extension-image";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableCell } from "@tiptap/extension-table-cell";
import RichTextToolbar from './RIchTextToolbar.js'

type RichTextEditorProps = {
  value: string
  onChange: (html: string) => void
  disabled?: boolean
}

export default function RichTextEditor({
  value,
  onChange,
  disabled
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
      link: {
        openOnClick: false,
        autolink: true,
      },
    }),
      Underline,
  
      Image,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,

    ],
    content: value || '',
    editable: !disabled,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'tiptap focus:outline-none min-h-[120px]',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  if (!editor) return null;

  const baseInputClasses = `
  w-full rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${disabled
      ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed"
      : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`;

 const focusClasses = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `;


  return (

    <div
      className={`
    ${baseInputClasses} ${focusClasses} py-2focus-within:ring-1 focus-within:ring-indigo-500
  `}
    >
      {!disabled && <RichTextToolbar editor={editor} />}
      <EditorContent
        editor={editor}
        className="tiptap max-w-none p-3 min-h-[200px] max-h-[220px] overflow-auto focus:outline-none"
      />
    </div>

  )
}



