import { FileItem } from "../types/file"

interface Props {
  file: FileItem
}

export default function FileCard({ file }: Props) {
  return (
    <div className="p-4 rounded-xl border bg-white">
      <h3>{file.name}</h3>

      <p>{file.path}</p>

      <span>{file.ext}</span>
    </div>
  )
}