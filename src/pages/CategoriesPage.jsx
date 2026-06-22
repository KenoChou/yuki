import { CategoryCard } from '../components/ui/CategoryCard';
import { categories } from '../data/categories';

export function CategoriesPage() {
  return (
    <main className="flex-1 ml-0 md:ml-[240px] px-margin-mobile md:px-margin-desktop py-gutter min-h-screen flex flex-col w-full pb-24 md:pb-8">
      <header className="mb-section-gap flex justify-between items-end mt-4">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-primary">Categories</h1>
          <p className="font-body-lg text-body-lg text-secondary mt-2 max-w-lg">Everything organized in its right place. A quiet space for your digital belongings.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full border border-surface-container-high hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined text-secondary text-sm">tune</span><span className="font-label-sm text-label-sm text-secondary">Filter View</span>
        </button>
      </header>
      <section className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[240px]">
        {categories.map((category) => <CategoryCard key={category.title} category={category} />)}
      </section>
    </main>
  );
}
