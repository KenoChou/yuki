export function FilePreviewRow({ file }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group cursor-default min-h-[64px]">
      <div className={`w-10 h-10 rounded-lg ${file.bg} flex items-center justify-center ${file.color} shrink-0`}>
        <span className="material-symbols-outlined">{file.icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-body-md text-body-md font-medium text-on-surface truncate">{file.name}</div>
        <div className="font-label-sm text-label-sm text-secondary truncate">{file.folder}</div>
      </div>
      <div className="text-right shrink-0">
        <div className="font-body-md text-body-md text-on-surface">{file.size}</div>
        <div className="font-label-sm text-label-sm text-secondary">{file.type}</div>
      </div>
    </div>
  );
}
