import { useState, useRef, useEffect } from 'react'
import type { Editor } from '@tiptap/react'
import { ToolbarButton } from './ToolbarBtn.js'

const PRESET_COLORS = [
  '#000000', '#4B5563', '#EF4444', '#F97316',
  '#EAB308', '#22C55E', '#06B6D4', '#3B82F6',
  '#6366F1', '#A855F7', '#EC4899', '#FFFFFF',
]

export default function TextColorPicker({ editor }: { editor: Editor }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const nativeInputRef = useRef<HTMLInputElement>(null)

  const currentColor = editor.getAttributes('textStyle').color || '#000000'

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const applyColor = (color: string) => {
    editor.chain().focus().setColor(color).run()
    setOpen(false)
  }

  return (
    <div className="relative" ref={containerRef}>
   <ToolbarButton
        title="Text Color"
        active={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="relative flex flex-col items-center leading-none">
          <i className="fa-solid fa-font text-sm" />
          <span
            className="w-4 h-[3px] rounded-sm mt-0.5"
            style={{ backgroundColor: currentColor }}
          />
        </span>
      </ToolbarButton>

      {open && (
        <div className="absolute z-20 top-full left-0 mt-1 w-44 rounded-md border border-gray-200 bg-white shadow-lg p-2">
          <div className="grid grid-cols-6 gap-1.5 mb-2">
            {PRESET_COLORS.map((color) => (
              <button
                key={color}
                type="button"
                title={color}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => applyColor(color)}
                className={`
                  w-5 h-5 rounded-full border
                  ${currentColor.toLowerCase() === color.toLowerCase()
                    ? 'ring-2 ring-indigo-500 ring-offset-1'
                    : 'border-gray-300'}
                `}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => nativeInputRef.current?.click()}
            className="w-full flex items-center gap-2 px-2 py-1 text-xs text-gray-600 rounded hover:bg-gray-100"
          >
            <span
              className="w-3 h-3 rounded-full border border-gray-300"
              style={{ backgroundColor: currentColor }}
            />
            Custom color…
          </button>

          <input
            ref={nativeInputRef}
            type="color"
            className="w-0 h-0 opacity-0 absolute"
            value={currentColor}
            onChange={(e) => applyColor(e.target.value)}
          />
        </div>
      )}
    </div>
  )
}