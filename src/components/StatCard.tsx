interface Props {
  title: string
  value: string
}

export default function StatCard({
  title,
  value
}: Props) {
  return (
    <div className="bg-white p-6 rounded-3xl">
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  )
}