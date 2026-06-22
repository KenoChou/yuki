import { SuggestedFileCard } from '../components/ui/SuggestedFileCard';
import { suggestedFiles } from '../data/files';

export function SearchPage() {
  return (
    <main className="ml-0 md:ml-[240px] flex-1 h-full overflow-y-auto px-margin-mobile md:px-margin-desktop py-section-gap w-full pb-24 md:pb-8">
      <div className="max-w-container-max mx-auto h-full flex flex-col">
        <div className="w-full max-w-2xl mx-auto mb-section-gap sticky top-4 z-10 mt-8 md:mt-0">
          <div className="relative flex items-center w-full bg-surface-container-lowest rounded-2xl ambient-shadow border border-surface-container-high transition-all duration-300 focus-within:ring-2 focus-within:ring-surface-tint/20 focus-within:border-transparent">
            <span className="material-symbols-outlined absolute left-6 text-secondary text-[24px]">search</span>
            <input className="w-full bg-transparent border-none py-6 pl-16 pr-6 rounded-2xl font-body-lg text-body-lg text-on-surface placeholder-secondary focus:ring-0 outline-none" placeholder="Search files, folders, or tags..." type="text" />
            <button className="absolute right-4 p-2 rounded-full hover:bg-surface-container-low transition-colors text-secondary"><span className="material-symbols-outlined">tune</span></button>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-primary mb-2 hidden md:block">Suggested Results</h1>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2 md:hidden">Suggested Results</h1>
              <p className="font-body-md text-body-md text-secondary">Based on your recent activity</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
            {suggestedFiles.map((file) => <SuggestedFileCard key={file.name} file={file} />)}
          </div>
        </div>
      </div>
    </main>
  );
}
