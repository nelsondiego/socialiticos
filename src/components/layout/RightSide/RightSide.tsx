import Calendar from "./Calendar"


export const RightSide = () => {
  return (
    <div className="hidden md:block md:sticky md:top-[80px] md:h-[calc(100vh-80px)] md:overflow-y-auto">
      <Calendar />
    </div>
  )
}
