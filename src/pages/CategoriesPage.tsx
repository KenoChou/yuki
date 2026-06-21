   const CategoriesPage = () => (
            <main className="flex-1 ml-0 md:ml-[240px] px-margin-mobile md:px-margin-desktop py-gutter min-h-screen flex flex-col w-full pb-24 md:pb-8">
                <header className="mb-section-gap flex justify-between items-end mt-4">
                    <div>
                        <h1 className="font-headline-lg text-headline-lg text-primary">Categories</h1>
                        <p className="font-body-lg text-body-lg text-secondary mt-2 max-w-lg">Everything organized in its right place. A quiet space for your digital belongings.</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full border border-surface-container-high hover:bg-surface-container transition-colors">
                        <span className="material-symbols-outlined text-secondary text-sm">tune</span>
                        <span className="font-label-sm text-label-sm text-secondary">Filter View</span>
                    </button>
                </header>
                <section className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[240px]">
                    <article className="bento-card col-span-1 md:col-span-2 row-span-2 rounded-[32px] bg-bento-pink p-8 flex flex-col relative overflow-hidden cursor-pointer group">
                        <div className="absolute top-8 left-8 z-10">
                            <h3 className="font-headline-md text-headline-md text-primary">Images</h3>
                            <p className="font-body-md text-body-md text-secondary mt-1">2,401 Items</p>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[120px] text-primary/80 group-hover:scale-110 transition-transform duration-500 ease-out">image</span>
                        </div>
                        <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary">arrow_forward</span>
                        </div>
                    </article>
                    <article className="bento-card rounded-[24px] bg-bento-blue p-6 flex flex-col relative cursor-pointer group">
                        <div>
                            <h3 className="font-headline-md text-headline-md text-primary">Documents</h3>
                            <p className="font-body-md text-body-md text-secondary mt-1">842 Items</p>
                        </div>
                        <div className="flex-1 flex items-center justify-center mt-4">
                            <span className="material-symbols-outlined text-[80px] text-primary/70 group-hover:scale-110 transition-transform duration-500 ease-out">description</span>
                        </div>
                    </article>
                    <article className="bento-card rounded-[24px] bg-bento-lavender p-6 flex flex-col relative cursor-pointer group">
                        <div>
                            <h3 className="font-headline-md text-headline-md text-primary">Videos</h3>
                            <p className="font-body-md text-body-md text-secondary mt-1">156 Items</p>
                        </div>
                        <div className="flex-1 flex items-center justify-center mt-4">
                            <span className="material-symbols-outlined text-[80px] text-primary/70 group-hover:scale-110 transition-transform duration-500 ease-out">movie</span>
                        </div>
                    </article>
                    <article className="bento-card rounded-[24px] bg-surface-container-lowest border border-surface-container-highest p-6 flex flex-col relative cursor-pointer group shadow-[0_8px_30px_-12px_rgba(0,0,0,0.02)]">
                        <div>
                            <h3 className="font-headline-md text-headline-md text-primary">Code</h3>
                            <p className="font-body-md text-body-md text-secondary mt-1">45 Projects</p>
                        </div>
                        <div className="flex-1 flex items-center justify-center mt-4">
                            <span className="material-symbols-outlined text-[80px] text-primary/70 group-hover:scale-110 transition-transform duration-500 ease-out">code</span>
                        </div>
                    </article>
                    <article className="bento-card col-span-1 md:col-span-2 rounded-[24px] bg-bento-green p-6 flex flex-row items-center relative cursor-pointer group">
                        <div className="flex-1 pl-4">
                            <h3 className="font-headline-md text-headline-md text-primary">Audio</h3>
                            <p className="font-body-md text-body-md text-secondary mt-1">320 Tracks</p>
                        </div>
                        <div className="pr-8">
                            <span className="material-symbols-outlined text-[100px] text-primary/70 group-hover:rotate-12 transition-transform duration-500 ease-out">headphones</span>
                        </div>
                    </article>
                    <article className="bento-card rounded-[24px] bg-bento-milktea p-6 flex flex-col relative cursor-pointer group">
                        <div>
                            <h3 className="font-headline-md text-headline-md text-primary">Archives</h3>
                            <p className="font-body-md text-body-md text-secondary mt-1">5.2 GB</p>
                        </div>
                        <div className="flex-1 flex items-center justify-center mt-4">
                            <span className="material-symbols-outlined text-[80px] text-primary/70 group-hover:scale-110 transition-transform duration-500 ease-out">inventory_2</span>
                        </div>
                    </article>
                </section>
            </main>
        );
export default CategoriesPage;