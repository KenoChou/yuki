export function DirectoryCard({ title, description, path, icon, iconClass, filled }) {
  return (
    <div className="bg-surface-container-lowest rounded-[24px] p-6 border border-surface-container-low yuki-shadow yuki-shadow-hover transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full ${iconClass} flex items-center justify-center text-secondary`}>
          <span className="material-symbols-outlined" style={filled ? { fontVariationSettings: "'FILL' 1" } : {}}>{icon}</span>
        </div>
        <h2 className="font-headline-md text-headline-md">{title}</h2>
      </div>
      <p className="font-body-md text-body-md text-secondary mb-4">{description}</p>
      <button className="w-full py-3 px-4 rounded-xl border border-outline-variant bg-surface-bright hover:bg-surface-container-low transition-colors text-left flex items-center justify-between group">
        <span className="font-body-md text-body-md text-on-surface truncate">{path}</span>
        <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">edit</span>
      </button>
    </div>
  );
}
