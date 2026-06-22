export function CategoryCard({ category }) {
  if (category.horizontal) {
    return (
      <article className={category.className}>
        <div className="flex-1 pl-4"><h3 className="font-headline-md text-headline-md text-primary">{category.title}</h3><p className="font-body-md text-body-md text-secondary mt-1">{category.detail}</p></div>
        <div className="pr-8"><span className={`material-symbols-outlined ${category.iconSize} text-primary/70 group-hover:rotate-12 transition-transform duration-500 ease-out`}>{category.icon}</span></div>
      </article>
    );
  }

  return (
    <article className={category.className}>
      <div className={category.featured ? 'absolute top-8 left-8 z-10' : ''}>
        <h3 className="font-headline-md text-headline-md text-primary">{category.title}</h3>
        <p className="font-body-md text-body-md text-secondary mt-1">{category.detail}</p>
      </div>
      <div className="flex-1 flex items-center justify-center mt-4">
        <span className={`material-symbols-outlined ${category.iconSize} text-primary/70 ${category.featured ? 'text-primary/80' : ''} group-hover:scale-110 transition-transform duration-500 ease-out`}>{category.icon}</span>
      </div>
      {category.featured && <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center"><span className="material-symbols-outlined text-primary">arrow_forward</span></div>}
    </article>
  );
}
