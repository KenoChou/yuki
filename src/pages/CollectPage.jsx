import { useNavigate } from 'react-router-dom';
import { DirectoryCard } from '../components/ui/DirectoryCard';
import { FilePreviewRow } from '../components/ui/FilePreviewRow';
import { previewFiles } from '../data/files';

export function CollectPage() {
  const navigate = useNavigate();

  return (
    <main className="flex-1 ml-0 md:ml-[240px] px-margin-mobile md:px-margin-desktop py-gutter max-w-container-max mx-auto w-full pb-24 md:pb-8">
      <header className="mb-section-gap">
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">File Collection</h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl">Define your source, set your target, and filter by file types to gather your scattered assets into one peaceful space.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-5 space-y-gutter">
          <DirectoryCard title="Source Directory" description="Where should we look for files?" path="/Users/Desktop/Scattered_Files" icon="folder_open" iconClass="file-icon-bg" />
          <DirectoryCard title="Target Directory" description="Where should they be collected?" path="/Volumes/Archive/Organized_2024" icon="snippet_folder" iconClass="bg-tertiary-fixed text-on-tertiary-fixed-variant" filled />
          <div className="bg-surface-container-lowest rounded-[24px] p-6 border border-surface-container-low yuki-shadow">
            <h2 className="font-headline-md text-headline-md mb-2">File Types</h2>
            <p className="font-body-md text-body-md text-secondary mb-4">Specify extensions to target.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['.png', '.jpg', '.pdf', '.docx'].map((ext) => (
                <span key={ext} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-variant text-on-surface-variant font-label-sm text-label-sm">
                  {ext} <button className="hover:text-error transition-colors"><span className="material-symbols-outlined text-[14px]">close</span></button>
                </span>
              ))}
            </div>
            <div className="relative">
              <input className="w-full py-3 px-4 rounded-[16px] border border-outline-variant bg-surface-bright focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim transition-all font-body-md text-body-md" placeholder="Add extension (e.g. mp4)" type="text" />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:bg-surface-variant rounded-full p-1 transition-colors">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
          <div className="pt-4 flex justify-center">
            <button className="w-full max-w-sm py-4 px-8 rounded-full bg-[#F6D4D4] text-primary font-headline-md text-headline-md hover:opacity-90 yuki-shadow yuki-shadow-hover transition-all duration-300 flex items-center justify-center gap-3" onClick={() => navigate('/')}>
              <span className="material-symbols-outlined">auto_awesome</span>
              Start Organizing
            </button>
          </div>
        </div>
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-[24px] border border-surface-container-low yuki-shadow overflow-hidden flex flex-col h-[800px]">
          <div className="p-6 border-b border-surface-container-low flex justify-between items-center bg-surface-bright">
            <div>
              <h2 className="font-headline-md text-headline-md">Preview</h2>
              <p className="font-body-md text-body-md text-secondary">24 files found ready to move.</p>
            </div>
            <button className="p-2 rounded-full hover:bg-surface-variant text-secondary transition-colors"><span className="material-symbols-outlined">filter_list</span></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {previewFiles.map((file) => <FilePreviewRow key={file.name} file={file} />)}
          </div>
          <div className="p-4 bg-surface-container-low border-t border-surface-container text-center">
            <p className="font-label-sm text-label-sm text-secondary">Scroll to see more</p>
          </div>
        </div>
      </div>
    </main>
  );
}
