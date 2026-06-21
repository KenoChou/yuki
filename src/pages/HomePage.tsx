

// Pages
        const HomePage = () => (
            <main className="md:ml-[240px] min-h-screen p-margin-mobile md:p-margin-desktop max-w-[1400px] mx-auto w-full pb-24 md:pb-8">
                <header className="mb-section-gap mt-8 md:mt-0">
                    <h2 className="font-headline-lg text-headline-lg md:font-headline-lg text-primary tracking-tight">Good Afternoon, Keno.</h2>
                    <p className="font-body-lg text-body-lg text-secondary mt-2">Let's organize your digital world.</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-section-gap">
                    <div className="yuki-card p-6 flex flex-col justify-between h-[160px]">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 rounded-full bg-sky-light flex items-center justify-center">
                                <span className="material-symbols-outlined accent-sky">folder_open</span>
                            </div>
                            <span className="font-label-sm text-label-sm text-secondary bg-surface-variant/30 px-3 py-1 rounded-full">+124 this week</span>
                        </div>
                        <div>
                            <h3 className="font-headline-lg text-headline-lg text-primary">12,482</h3>
                            <p className="font-body-md text-body-md text-secondary mt-1">Total Files</p>
                        </div>
                    </div>
                    <div className="yuki-card p-6 flex flex-col justify-between h-[160px]">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 rounded-full bg-cherry-light flex items-center justify-center">
                                <span className="material-symbols-outlined accent-cherry">image</span>
                            </div>
                            <span className="font-label-sm text-label-sm text-secondary bg-surface-variant/30 px-3 py-1 rounded-full">48% of space</span>
                        </div>
                        <div>
                            <h3 className="font-headline-lg text-headline-lg text-primary">5,201</h3>
                            <p className="font-body-md text-body-md text-secondary mt-1">Images</p>
                        </div>
                    </div>
                    <div className="yuki-card p-6 flex flex-col justify-between h-[160px]">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 rounded-full bg-matcha-light flex items-center justify-center">
                                <span className="material-symbols-outlined accent-matcha">description</span>
                            </div>
                            <span className="font-label-sm text-label-sm text-secondary bg-surface-variant/30 px-3 py-1 rounded-full">Neatly filed</span>
                        </div>
                        <div>
                            <h3 className="font-headline-lg text-headline-lg text-primary">4,890</h3>
                            <p className="font-body-md text-body-md text-secondary mt-1">Documents</p>
                        </div>
                    </div>
                    <div className="yuki-card p-6 flex flex-col justify-between h-[160px]">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center">
                                <span className="material-symbols-outlined accent-lavender">movie</span>
                            </div>
                            <span className="font-label-sm text-label-sm text-secondary bg-surface-variant/30 px-3 py-1 rounded-full">Large files</span>
                        </div>
                        <div>
                            <h3 className="font-headline-lg text-headline-lg text-primary">824</h3>
                            <p className="font-body-md text-body-md text-secondary mt-1">Videos</p>
                        </div>
                    </div>
                </div>
            </main>
        );
        export default HomePage;