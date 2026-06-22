export function SuggestedFileCard({ file }) {
  return (
    <div className="bg-surface-container-lowest rounded-[24px] border border-[#F0EDE8] p-6 hover-lift cursor-pointer flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className={`${file.iconClass} flex items-center justify-center`}>
          <span className={`material-symbols-outlined ${file.iconColor ?? 'text-secondary'}`} style={file.filled ? { fontVariationSettings: "'FILL' 1" } : {}}>{file.icon}</span>
        </div>
        <button className="text-secondary hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
      </div>
      <div className="mt-2"><h3 className="font-headline-md text-headline-md text-on-surface truncate">{file.name}</h3></div>
      <div className="mt-auto pt-4 flex justify-between items-center text-label-sm font-label-sm text-secondary">
        <span>{file.date}</span><span>{file.size}</span>
      </div>
    </div>
  );
}
