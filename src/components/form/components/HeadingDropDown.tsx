import type { Editor } from '@tiptap/react';
import { useState } from 'react'

export default function HeadingDropdown({ editor }: { editor: Editor }) {
  
  const [open, setOpen] = useState(false)

  if ( !editor) return null

  const currentLabel = editor.isActive('heading', { level: 1 })
    ? 'Heading 1'
    : editor.isActive('heading', { level: 2 })
    ? 'Heading 2'
    : 'Paragraph'

  return (
    <div className="relative">
      <button
        type="button"
        onMouseDown={(e) => {
          e.preventDefault()
          setOpen((v) => !v)
        }}
        className="
          h-8 px-2 flex items-center gap-2
          rounded-md text-sm
          text-gray-700 hover:bg-gray-100
        "
      >
        <i className="fa-solid fa-heading" />
        <span className="text-xs font-medium">{currentLabel}</span>
        <i className="fa-solid fa-chevron-down text-[10px]" />
      </button>

      {open && (
        <div className="absolute z-20 mt-1 w-40 bg-white border rounded-md shadow">
          <DropdownItem
            label="Paragraph"
            onClick={() => {
              editor.chain().focus().setParagraph().run()
              setOpen(false)
            }}
          />
          <DropdownItem
            label="Heading 1"
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 1 }).run()
              setOpen(false)
            }}
          />
          <DropdownItem
            label="Heading 2"
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 2 }).run()
              setOpen(false)
            }}
          />
        </div>
      )}
    </div>
  )
}

function DropdownItem({
  label,
  onClick,
}: {
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => {
        e.preventDefault()
        onClick()
      }}
      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
    >
      {label}
    </button>
  )
}
