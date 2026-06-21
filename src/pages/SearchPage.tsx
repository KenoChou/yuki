
        const SearchPage = () => (
            <main className="ml-0 md:ml-[240px] flex-1 h-full overflow-y-auto px-margin-mobile md:px-margin-desktop py-section-gap w-full pb-24 md:pb-8">
                <div className="max-w-container-max mx-auto h-full flex flex-col">
                    <div className="w-full max-w-2xl mx-auto mb-section-gap sticky top-4 z-10 mt-8 md:mt-0">
                        <div className="relative flex items-center w-full bg-surface-container-lowest rounded-2xl ambient-shadow border border-surface-container-high transition-all duration-300 focus-within:ring-2 focus-within:ring-surface-tint/20 focus-within:border-transparent">
                            <span className="material-symbols-outlined absolute left-6 text-secondary text-[24px]">search</span>
                            <input className="w-full bg-transparent border-none py-6 pl-16 pr-6 rounded-2xl font-body-lg text-body-lg text-on-surface placeholder-secondary focus:ring-0 outline-none" placeholder="Search files, folders, or tags..." type="text" />
                            <button className="absolute right-4 p-2 rounded-full hover:bg-surface-container-low transition-colors text-secondary">
                                <span className="material-symbols-outlined">tune</span>
                            </button>
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
                            <div className="bg-surface-container-lowest rounded-[24px] border border-[#F0EDE8] p-6 hover-lift cursor-pointer flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <div className="custom-folder-icon flex items-center justify-center">
                                        <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>folder</span>
                                    </div>
                                    <button className="text-secondary hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <h3 className="font-headline-md text-headline-md text-on-surface truncate">Q4 Financial Reports</h3>
                                </div>
                                <div className="mt-auto pt-4 flex justify-between items-center text-label-sm font-label-sm text-secondary">
                                    <span>Oct 24, 2023</span>
                                    <span>1.2 GB</span>
                                </div>
                            </div>
                            <div className="bg-surface-container-lowest rounded-[24px] border border-[#F0EDE8] p-6 hover-lift cursor-pointer flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-xl bg-[#E8D5C4]/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[#a19181]">description</span>
                                    </div>
                                    <button className="text-secondary hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <h3 className="font-headline-md text-headline-md text-on-surface truncate">Project Alpha Briefing</h3>
                                </div>
                                <div className="mt-auto pt-4 flex justify-between items-center text-label-sm font-label-sm text-secondary">
                                    <span>Yesterday</span>
                                    <span>2.4 MB</span>
                                </div>
                            </div>
                            <div className="bg-surface-container-lowest rounded-[24px] border border-[#F0EDE8] p-6 hover-lift cursor-pointer flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center">
                                        <span className="material-symbols-outlined text-secondary">image</span>
                                    </div>
                                    <button className="text-secondary hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <h3 className="font-headline-md text-headline-md text-on-surface truncate">Kyoto Trip Photos</h3>
                                </div>
                                <div className="mt-auto pt-4 flex justify-between items-center text-label-sm font-label-sm text-secondary">
                                    <span>Sep 12, 2023</span>
                                    <span>4.8 GB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
export default SearchPage;