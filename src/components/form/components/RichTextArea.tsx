import { Tiptap, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

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
    extensions: [StarterKit],
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

  if (!editor) return null

  return (
    <Tiptap instance={editor}>
      <div
        className={`
          border rounded-lg px-3 py-2 bg-white
          transition
          ${disabled ? 'bg-gray-100 opacity-70' : 'hover:border-gray-400'}
          focus-within:ring-2 focus-within:ring-indigo-500
        `}
      >
        <Tiptap.Content />
      </div>
    </Tiptap>
  )
}
