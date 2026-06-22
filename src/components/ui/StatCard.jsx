export function StatCard({ stat }) {
  return (
    <div className="yuki-card p-6 flex flex-col justify-between h-[160px]">
      <div className="flex justify-between items-start">
        <div className={`w-10 h-10 rounded-full ${stat.iconBg} flex items-center justify-center`}>
          <span className={`material-symbols-outlined ${stat.iconColor}`}>{stat.icon}</span>
        </div>
        <span className="font-label-sm text-label-sm text-secondary bg-surface-variant/30 px-3 py-1 rounded-full">{stat.badge}</span>
      </div>
      <div>
        <h3 className="font-headline-lg text-headline-lg text-primary">{stat.value}</h3>
        <p className="font-body-md text-body-md text-secondary mt-1">{stat.label}</p>
      </div>
    </div>
  );
}
