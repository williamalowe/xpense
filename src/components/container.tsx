export default function Container({ children }: {
  children: React.ReactNode,
}) {
  return (
    <div className="w-[800px] h-[600px] bg-white rounded-[4rem] flex overflow-hidden">
      {children}
    </div>
  )
}
