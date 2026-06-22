import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '../../data/navigation';

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="hidden md:flex flex-col h-screen py-gutter px-4 w-[240px] fixed left-0 top-0 bg-surface dark:bg-surface-dim border-r border-surface-container-low z-50">
      <div className="mb-section-gap px-4 mt-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary dark:text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
        <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Yuki</h1>
      </div>
      <div className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} className={`flex items-center space-x-3 px-4 py-3 rounded-full transition-colors group ${isActive ? 'text-primary font-bold bg-surface-variant/50 border-r-2 border-primary scale-[0.98]' : 'text-secondary dark:text-secondary-fixed-dim hover:bg-surface-variant/50'}`}>
              <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
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
}
