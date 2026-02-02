import type { ReactNode } from 'react'

type BaseProps = {
  title: string
  active?: boolean
  disabled?: boolean
  onClick: () => void
}

type IconButtonProps = BaseProps & {
  icon: string
  children?: never
}

type ChildrenButtonProps = BaseProps & {
  children: ReactNode
  icon?: never
}

type ToolbarButtonProps = IconButtonProps | ChildrenButtonProps

export function ToolbarButton(props: ToolbarButtonProps) {
  const { title, active, disabled, onClick } = props

  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`
        h-8 min-w-[32px] px-2
        flex items-center justify-center gap-1
        rounded-md text-sm transition
        ${active
          ? 'bg-indigo-100 text-indigo-700'
          : 'text-gray-600 hover:bg-gray-100'}
        disabled:opacity-40 disabled:cursor-not-allowed
      `}
    >
      {'icon' in props ? (
        <i className={props.icon} />
      ) : (
        props.children
      )}
    </button>
  )
}
