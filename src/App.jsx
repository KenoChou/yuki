import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { MobileNav } from './components/layout/MobileNav';
import { CategoriesPage } from './pages/CategoriesPage';
import { CollectPage } from './pages/CollectPage';
import { HomePage } from './pages/HomePage';
import { RecentPage } from './pages/RecentPage';
import { SearchPage } from './pages/SearchPage';

export function App() {
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
}
