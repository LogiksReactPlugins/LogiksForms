// RichTextToolbar.tsx
import { useTiptap } from '@tiptap/react'

export default function RichTextToolbar() {
  const { editor, isReady } = useTiptap()

  if (!isReady || !editor) return null

  const btn = (active: boolean) =>
    `px-2 py-1 text-sm border rounded 
     ${active ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'}`

  return (
    <div className="flex flex-wrap gap-1 border-b mb-2 pb-2">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={btn(editor.isActive('bold'))}
      >
        B
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={btn(editor.isActive('italic'))}
      >
        I
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={btn(editor.isActive('bulletList'))}
      >
        • List
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={btn(editor.isActive('orderedList'))}
      >
        1. List
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        className="px-2 py-1 text-sm border rounded hover:bg-gray-100 disabled:opacity-40"
      >
        Undo
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        className="px-2 py-1 text-sm border rounded hover:bg-gray-100 disabled:opacity-40"
      >
        Redo
      </button>
    </div>
  )
}
