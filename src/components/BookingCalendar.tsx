import { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  addMonths,
  subMonths,
  isBefore,
  startOfToday,
} from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface BookingCalendarProps {
  selectedDate: Date | null;
  selectedTime: string | null;
  timeSlots: { time: string; available: boolean }[];
  loading: boolean;
  availableDates: Date[];
  onDateSelect: (date: Date) => void;
  onTimeSelect: (time: string) => void;
}

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function BookingCalendar({
  selectedDate,
  selectedTime,
  timeSlots,
  loading,
  onDateSelect,
  onTimeSelect,
}: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = startOfToday();

  const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 });
  const end = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start, end });

  // ✅ Check if current month is before today's month
  const isCurrentMonthBeforeToday = 
    currentMonth.getFullYear() < today.getFullYear() ||
    (currentMonth.getFullYear() === today.getFullYear() && 
     currentMonth.getMonth() < today.getMonth());

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => {
    if (!isCurrentMonthBeforeToday) {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
  };

  // Group time slots by hour
  const groupedSlots = timeSlots.reduce((acc, slot) => {
    const hour = slot.time.split(':')[0];
    if (!acc[hour]) acc[hour] = [];
    acc[hour].push(slot);
    return acc;
  }, {} as Record<string, typeof timeSlots>);

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      
      {/* LEFT: Calendar */}
      <div className="md:w-1/2">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-stone-800">
            {format(currentMonth, 'MMMM yyyy')}
          </h3>
          <div className="flex gap-1">
            <button
              onClick={prevMonth}
              disabled={isCurrentMonthBeforeToday}
              className={`
                p-1 rounded-full transition-colors
                ${isCurrentMonthBeforeToday 
                  ? 'text-stone-200 cursor-not-allowed' 
                  : 'text-stone-400 hover:text-stone-600 hover:bg-stone-100'
                }
              `}
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button
              onClick={nextMonth}
              className="p-1 rounded-full hover:bg-stone-100 transition-colors text-stone-400 hover:text-stone-600"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-center text-[10px] font-medium text-stone-400 py-1"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid - Fully Rounded */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day: Date) => {
            const isCurrentMonth = isSameMonth(day, currentMonth);
            const isSelected = selectedDate && isSameDay(day, selectedDate);
            const isTodayDate = isToday(day);
            // ✅ Disable past dates
            const isPastDate = isBefore(day, today) && !isToday(day);

            return (
              <button
                key={day.toISOString()}
                onClick={() => onDateSelect(day)}
                disabled={!isCurrentMonth || isPastDate}
                className={`
                  aspect-square w-full rounded-full text-sm font-medium transition-all duration-200 text-center
                  ${!isCurrentMonth ? 'text-stone-200 cursor-not-allowed' : ''}
                  ${isPastDate && isCurrentMonth ? 'text-stone-300 cursor-not-allowed' : ''}
                  ${isSelected ? 'bg-[#0951f6] text-white shadow-sm' : ''}
                  ${isTodayDate && !isSelected ? 'border-2 border-[#000] text-[#0951f6]' : ''}
                  ${!isSelected && !isTodayDate && !isPastDate && isCurrentMonth ? 'hover:bg-stone-50 text-stone-700' : ''}
                `}
              >
                {format(day, 'd')}
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT: Time Slots */}
      <div className="md:w-1/2">
        {selectedDate ? (
          <>
            <h4 className="text-sm font-medium text-stone-600 mb-3">
              {format(selectedDate, 'EEEE, MMM d')}
            </h4>

            {loading ? (
              <div className="flex items-center justify-center py-6">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-stone-200 border-t-[#000]" />
              </div>
            ) : timeSlots.length === 0 ? (
              <div className="text-center py-6 text-sm text-stone-400">
                No available times
              </div>
            ) : (
              <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
                {Object.entries(groupedSlots).map(([hour, slots]) => {
                  const hourNum = parseInt(hour);
                  const ampm = hourNum >= 12 ? 'PM' : 'AM';
                  const displayHour = hourNum > 12 ? hourNum - 12 : hourNum || 12;

                  return (
                    <div key={hour}>
                      <div className="text-[10px] font-medium text-stone-400 mb-1">
                        {displayHour}:00 {ampm}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {slots.map((slot) => (
                          <button
                            key={slot.time}
                            onClick={() => slot.available && onTimeSelect(slot.time)}
                            disabled={!slot.available}
                            className={`
                              px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
                              ${selectedTime === slot.time ? 'bg-[#0951f6] text-white' : ''}
                              ${slot.available && selectedTime !== slot.time ? 'bg-stone-50 text-stone-700 hover:bg-stone-100' : ''}
                              ${!slot.available ? 'bg-stone-50/50 text-stone-300 cursor-not-allowed line-through' : ''}
                            `}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Legend */}
            <div className="mt-4 flex items-center gap-3 text-[10px] text-stone-400">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-[#0951f6]" />
                Selected
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-stone-100 border border-stone-200" />
                Available
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-stone-50 border border-stone-200 line-through" />
                Unavailable
              </span>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-sm text-stone-400">
            Select a date
          </div>
        )}
      </div>
    </div>
  );
}