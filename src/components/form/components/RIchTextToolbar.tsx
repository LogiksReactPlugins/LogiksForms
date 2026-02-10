// RichTextToolbar.tsx
import type { Editor } from '@tiptap/react';
import { ToolbarButton } from './ToolbarBtn.js';
import HeadingDropdown from './HeadingDropDown.js';


function Divider() {
  return <div className="w-px h-5 bg-gray-300 mx-1" />
}

export default function RichTextToolbar({ editor }: { editor: Editor }) {



  return (
    <div className="flex items-center gap-1 px-2 py-1 border-b bg-gray-50">
      <ToolbarButton
        title="Bold"
        icon="fa-solid fa-bold"
        onClick={() => editor.chain().focus().toggleBold().run()}

        active={editor.isActive('bold')}
      />


      <ToolbarButton

        title="Italic"
        icon="fa-solid fa-italic"
        active={editor.isActive('italic')}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      />

      <ToolbarButton

        title="Underline"
        icon="fa-solid fa-underline"
        active={editor.isActive('underline')}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      />



      <Divider />
      {/* Headings */}


      <HeadingDropdown editor={editor} />



      <Divider />

      {/* Lists */}
      <ToolbarButton
        title="Bullet List"
        icon="fa-solid fa-list-ul"
        active={editor.isActive('bulletList')}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      />
      <ToolbarButton
        title="Ordered List"
        icon="fa-solid fa-list-ol"
        active={editor.isActive('orderedList')}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      />

      <Divider />

      {/* Link */}
      <ToolbarButton
        icon="fa-solid fa-link"
        title="Add Link"
        active={editor.isActive('link')}
        onClick={() => {
          const previousUrl = editor.getAttributes('link').href
          let url = window.prompt('Enter URL', previousUrl)

          if (url === null) return

          if (url === '') {
            editor.chain().focus().unsetLink().run()
            return
          }

          // normalize URL
          if (!/^https?:\/\//i.test(url)) {
            url = `https://${url}`
          }

          const { empty } = editor.state.selection

          if (empty) {
            // NO selection → insert link text
            editor
              .chain()
              .focus()
              .insertContent({
                type: 'text',
                text: url,
                marks: [
                  {
                    type: 'link',
                    attrs: { href: url },
                  },
                ],
              })
              .run()
          } else {
            //  Selection exists → link selection
            editor
              .chain()
              .focus()
              .extendMarkRange('link')
              .setLink({ href: url })
              .run()
          }
        }}
      />
      <ToolbarButton
        title="Insert Image"
        icon="fa-regular fa-image"
        active={editor.isActive('image')}
        onClick={() => {
          const url = prompt("Enter image URL");
          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
      />
      <Divider />
      {/* table */}
      <ToolbarButton
        title="Insert Table"
        icon="fa-solid fa-table"
        active={editor.isActive('table')}
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run()
        }
      />
      <Divider />

      {/* code */}
      <ToolbarButton
        title="Code Block"
        icon="fa-solid fa-code"
        active={editor.isActive("codeBlock")}
        disabled={!editor.can().toggleCodeBlock()}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      />

      <div className="flex-1" />

      {/* Undo / Redo */}
      <ToolbarButton
        title="Undo"
        icon="fa-solid fa-rotate-left"
        disabled={!editor.can().undo()}
        onClick={() => editor.chain().focus().undo().run()}
      />
      <ToolbarButton
        title="Redo"
        icon="fa-solid fa-rotate-right"
        disabled={!editor.can().redo()}
        onClick={() => editor.chain().focus().redo().run()}
      />
    </div>
  )
}
