import React from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './styles.css';

// Shared Navigation Components
const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { path: '/', icon: 'home', label: 'Home' },
        { path: '/collect', icon: 'library_add', label: 'Collect' },
        { path: '/search', icon: 'search', label: 'Search' },
        { path: '/categories', icon: 'category', label: 'Categories' },
        { path: '/recent', icon: 'schedule', label: 'Recent' },
    ];

    return (
        <nav className="hidden md:flex flex-col h-screen py-gutter px-4 w-[240px] fixed left-0 top-0 bg-surface dark:bg-surface-dim border-r border-surface-container-low z-50">
            <div className="mb-section-gap px-4 mt-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary dark:text-primary-fixed" style={{fontVariationSettings: "'FILL' 1"}}>cloud_done</span>
                <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Yuki</h1>
            </div>
            <div className="flex-1 space-y-2">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link key={item.path} to={item.path} className={`flex items-center space-x-3 px-4 py-3 rounded-full transition-colors group ${isActive ? 'text-primary font-bold bg-surface-variant/50 border-r-2 border-primary scale-[0.98]' : 'text-secondary dark:text-secondary-fixed-dim hover:bg-surface-variant/50'}`}>
                            <span className="material-symbols-outlined" style={isActive ? {fontVariationSettings: "'FILL' 1"} : {}}>{item.icon}</span>
                            <span className="font-label-sm text-label-sm">{item.label}</span>
                        </Link>
                    );
                })}
                <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-full text-secondary dark:text-secondary-fixed-dim hover:bg-surface-variant/50 transition-colors group">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="font-label-sm text-label-sm">Settings</span>
                </a>
            </div>
            <div className="mt-auto px-4 pb-8 space-y-6">
                <button onClick={() => navigate('/collect')} className="w-full bg-primary-container text-on-primary rounded-full py-3 px-4 font-label-sm text-label-sm hover:opacity-90 transition-opacity">
                    Start Organizing
                </button>
            </div>
        </nav>
    );
};

const MobileNav = () => {
    const location = useLocation();
    
    return (
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-surface-container-low px-4 py-2 flex justify-around items-center z-50" style={{paddingBottom: 'env(safe-area-inset-bottom)'}}>
            <Link to="/" className={`flex flex-col items-center gap-1 p-2 ${location.pathname === '/' ? 'text-primary' : 'text-secondary'}`}>
                <span className="material-symbols-outlined text-[24px]">home</span>
            </Link>
            <Link to="/search" className={`flex flex-col items-center gap-1 p-2 ${location.pathname === '/search' ? 'text-primary' : 'text-secondary'}`}>
                <div className={location.pathname === '/search' ? "bg-surface-variant/50 px-4 py-1 rounded-full flex items-center justify-center" : ""}>
                    <span className="material-symbols-outlined text-[24px]">search</span>
                </div>
            </Link>
            <Link to="/categories" className={`flex flex-col items-center gap-1 p-2 ${location.pathname === '/categories' ? 'text-primary' : 'text-secondary'}`}>
                <span className="material-symbols-outlined text-[24px]">category</span>
            </Link>
            <a href="#" className="flex flex-col items-center gap-1 p-2 text-secondary">
                <span className="material-symbols-outlined text-[24px]">settings</span>
            </a>
        </nav>
    );
};

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


const RecentPage = () => (
    <main className="ml-0 md:ml-[240px] flex-1 px-margin-mobile md:px-margin-desktop py-section-gap w-full min-h-screen pb-24 md:pb-8">
        <div className="max-w-container-max mx-auto">
            <header className="mb-section-gap">
                <h1 className="font-headline-lg text-headline-lg text-primary">Recent Files</h1>
                <p className="font-body-lg text-body-lg text-secondary mt-2">A calm timeline of files you touched most recently.</p>
            </header>
            <section className="bg-surface-container-lowest rounded-[24px] border border-surface-container-low yuki-shadow divide-y divide-surface-container-low overflow-hidden">
                {[
                    ['today', 'Brand moodboard.sketch', 'Images / Design', '128 MB'],
                    ['yesterday', 'Tax documents.zip', 'Archives', '32 MB'],
                    ['Jun 18', 'Meeting notes.md', 'Documents', '24 KB'],
                ].map(([date, name, folder, size]) => (
                    <article key={name} className="p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
                            <span className="material-symbols-outlined">draft</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2 className="font-headline-md text-headline-md text-on-surface truncate">{name}</h2>
                            <p className="font-body-md text-body-md text-secondary truncate">{folder}</p>
                        </div>
                        <div className="text-right shrink-0">
                            <p className="font-label-sm text-label-sm text-secondary uppercase">{date}</p>
                            <p className="font-body-md text-body-md text-on-surface">{size}</p>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    </main>
);

// App Component
const App = () => {
    return (
        <MemoryRouter>
            <div className="flex font-body-md min-h-screen text-on-background">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/collect" element={<CollectPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/recent" element={<RecentPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
                <MobileNav />
            </div>
        </MemoryRouter>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
