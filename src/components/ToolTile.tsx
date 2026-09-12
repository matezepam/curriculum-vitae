import { toolIcons } from '../constants/toolIcons'

type ToolTileProps = {
  name: string
}

export function ToolTile({ name }: ToolTileProps) {
  return (
    <span className="tool-tile">
      <img src={toolIcons[name] || '/tool-icons/engineering.svg'} alt="" />
      <span>{name}</span>
    </span>
  )
}
