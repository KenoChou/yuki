import { stats } from '../data/dashboard';
import { StatCard } from '../components/ui/StatCard';

export function HomePage() {
  return (
    <main className="md:ml-[240px] min-h-screen p-margin-mobile md:p-margin-desktop max-w-[1400px] mx-auto w-full pb-24 md:pb-8">
      <header className="mb-section-gap mt-8 md:mt-0">
        <h2 className="font-headline-lg text-headline-lg md:font-headline-lg text-primary tracking-tight">Good Afternoon, Keno.</h2>
        <p className="font-body-lg text-body-lg text-secondary mt-2">Let's organize your digital world.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-section-gap">
        {stats.map((stat) => <StatCard key={stat.label} stat={stat} />)}
      </div>
    </main>
  );
}
