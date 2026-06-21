import { useNavigate } from "react-router-dom"
        const CollectPage = () => {
            const navigate = useNavigate();
            return (
                <main className="flex-1 ml-0 md:ml-[240px] px-margin-mobile md:px-margin-desktop py-gutter max-w-container-max mx-auto w-full pb-24 md:pb-8">
                    <header className="mb-section-gap">
                        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">File Collection</h1>
                        <p className="font-body-lg text-body-lg text-secondary max-w-2xl">Define your source, set your target, and filter by file types to gather your scattered assets into one peaceful space.</p>
                    </header>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                        <div className="lg:col-span-5 space-y-gutter">
                            <div className="bg-surface-container-lowest rounded-[24px] p-6 border border-surface-container-low yuki-shadow yuki-shadow-hover transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full file-icon-bg flex items-center justify-center text-secondary">
                                        <span className="material-symbols-outlined">folder_open</span>
                                    </div>
                                    <h2 className="font-headline-md text-headline-md">Source Directory</h2>
                                </div>
                                <p className="font-body-md text-body-md text-secondary mb-4">Where should we look for files?</p>
                                <button className="w-full py-3 px-4 rounded-xl border border-outline-variant bg-surface-bright hover:bg-surface-container-low transition-colors text-left flex items-center justify-between group">
                                    <span className="font-body-md text-body-md text-on-surface truncate">/Users/Desktop/Scattered_Files</span>
                                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">edit</span>
                                </button>
                            </div>
                            <div className="bg-surface-container-lowest rounded-[24px] p-6 border border-surface-container-low yuki-shadow yuki-shadow-hover transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
                                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>snippet_folder</span>
                                    </div>
                                    <h2 className="font-headline-md text-headline-md">Target Directory</h2>
                                </div>
                                <p className="font-body-md text-body-md text-secondary mb-4">Where should they be collected?</p>
                                <button className="w-full py-3 px-4 rounded-xl border border-outline-variant bg-surface-bright hover:bg-surface-container-low transition-colors text-left flex items-center justify-between group">
                                    <span className="font-body-md text-body-md text-on-surface truncate">/Volumes/Archive/Organized_2024</span>
                                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">edit</span>
                                </button>
                            </div>
                            <div className="bg-surface-container-lowest rounded-[24px] p-6 border border-surface-container-low yuki-shadow">
                                <h2 className="font-headline-md text-headline-md mb-2">File Types</h2>
                                <p className="font-body-md text-body-md text-secondary mb-4">Specify extensions to target.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['.png', '.jpg', '.pdf', '.docx'].map(ext => (
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
                                <button className="p-2 rounded-full hover:bg-surface-variant text-secondary transition-colors">
                                    <span className="material-symbols-outlined">filter_list</span>
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group cursor-default min-h-[64px]">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                                        <span className="material-symbols-outlined">image</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-body-md text-body-md font-medium text-on-surface truncate">Q3_Marketing_Assets_Final.png</div>
                                        <div className="font-label-sm text-label-sm text-secondary truncate">/Users/Desktop/Scattered_Files/Marketing/</div>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <div className="font-body-md text-body-md text-on-surface">4.2 MB</div>
                                        <div className="font-label-sm text-label-sm text-secondary">png</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group cursor-default min-h-[64px]">
                                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                                        <span className="material-symbols-outlined">picture_as_pdf</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-body-md text-body-md font-medium text-on-surface truncate">Client_Contract_Signed_2024.pdf</div>
                                        <div className="font-label-sm text-label-sm text-secondary truncate">/Users/Desktop/Scattered_Files/Docs/</div>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <div className="font-body-md text-body-md text-on-surface">1.1 MB</div>
                                        <div className="font-label-sm text-label-sm text-secondary">pdf</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-surface-container-low border-t border-surface-container text-center">
                                <p className="font-label-sm text-label-sm text-secondary">Scroll to see more</p>
                            </div>
                        </div>
                    </div>
                </main>
            );
        };
export default CollectPage;