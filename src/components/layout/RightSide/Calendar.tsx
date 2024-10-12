import { Card } from "@/components/ui-utils/Card";
import { Button } from "@/components/ui/button";
import { events } from "@/mock/mockdata";
import { CalendarDays, EllipsisVertical } from "lucide-react";

const Calendar = () => {
  return (
    <Card className="flex text-gray-500 flex-col gap-2 divide-y divide-gray-100">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold ">Eventos</h2>
        <Button variant="ghost" size="icon">
          <EllipsisVertical className="h-4 w-4 " />
        </Button>
      </div>
      <div className="flex flex-col gap-2 py-2">
        {events.map((event) => (
          <div key={event.id} className="flex gap-2 py-1">
            <CalendarDays className="h-4 w-4 mt-1" />
            <div className="flex flex-col gap-1">
              <p className="font-medium text-sm">{event.title}</p>
              <span className="text-xs">{event.date}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Calendar;
