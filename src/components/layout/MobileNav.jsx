import { Link, useLocation } from 'react-router-dom';

const mobileItems = [
  { path: '/', icon: 'home' },
  { path: '/search', icon: 'search', highlighted: true },
  { path: '/categories', icon: 'category' },
];

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-surface-container-low px-4 py-2 flex justify-around items-center z-50" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {mobileItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link key={item.path} to={item.path} className={`flex flex-col items-center gap-1 p-2 ${isActive ? 'text-primary' : 'text-secondary'}`}>
            <div className={isActive && item.highlighted ? 'bg-surface-variant/50 px-4 py-1 rounded-full flex items-center justify-center' : ''}>
              <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
            </div>
          </Link>
        );
      })}
      <a href="#" className="flex flex-col items-center gap-1 p-2 text-secondary">
        <span className="material-symbols-outlined text-[24px]">settings</span>
      </a>
    </nav>
  );
}
