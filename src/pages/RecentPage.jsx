import { recentFiles } from '../data/files';

export function RecentPage() {
  return (
    <main className="ml-0 md:ml-[240px] flex-1 px-margin-mobile md:px-margin-desktop py-section-gap w-full min-h-screen pb-24 md:pb-8">
      <div className="max-w-container-max mx-auto">
        <header className="mb-section-gap">
          <h1 className="font-headline-lg text-headline-lg text-primary">Recent Files</h1>
          <p className="font-body-lg text-body-lg text-secondary mt-2">A calm timeline of files you touched most recently.</p>
        </header>
        <section className="bg-surface-container-lowest rounded-[24px] border border-surface-container-low yuki-shadow divide-y divide-surface-container-low overflow-hidden">
          {recentFiles.map((file) => (
            <article key={file.name} className="p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors">
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant"><span className="material-symbols-outlined">draft</span></div>
              <div className="flex-1 min-w-0"><h2 className="font-headline-md text-headline-md text-on-surface truncate">{file.name}</h2><p className="font-body-md text-body-md text-secondary truncate">{file.folder}</p></div>
              <div className="text-right shrink-0"><p className="font-label-sm text-label-sm text-secondary uppercase">{file.date}</p><p className="font-body-md text-body-md text-on-surface">{file.size}</p></div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
