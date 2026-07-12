import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

type BookingCalendarProps = {
  selectedDate: Date | null;
  selectedTime: string | null;
  timeSlots: { id: string; time: string; available: boolean }[];
  loading: boolean;
  availableDates: Date[];
  onDateSelect: (date: Date) => void;
  onTimeSelect: (time: string) => void;
};

export function BookingCalendar({
  selectedDate,
  selectedTime,
  timeSlots,
  loading,
  availableDates,
  onDateSelect,
  onTimeSelect
}: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const isDateAvailable = (date: Date): boolean => {
    return availableDates.some(d => d.toDateString() === date.toDateString());
  };

  const isDateSelected = (date: Date): boolean => {
    return selectedDate ? date.toDateString() === selectedDate.toDateString() : false;
  };

  const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const days = getDaysInMonth(currentMonth);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
      {/* Date Picker */}
      <div>
        <h3 className="font-display text-sm font-semibold text-[#17362f] mb-4">
          1. Select a Date
        </h3>
        <div className="rounded-[20px] border border-[#e8edea] bg-white p-4">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevMonth}
              className="rounded-full p-2 hover:bg-[#eef3f0] transition-colors"
            >
              <ChevronLeftIcon size={20} className="text-[#718078]" />
            </button>
            <span className="font-display font-semibold text-[#17362f]">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
            <button
              onClick={nextMonth}
              className="rounded-full p-2 hover:bg-[#eef3f0] transition-colors"
            >
              <ChevronRightIcon size={20} className="text-[#718078]" />
            </button>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="py-1 text-xs font-medium text-[#718078]">
                {day}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 gap-1 mt-1">
            {days.map((date) => {
              const available = isDateAvailable(date);
              const selected = isDateSelected(date);
              const isToday = date.toDateString() === new Date().toDateString();

              return (
                <button
                  key={date.toISOString()}
                  onClick={() => available && onDateSelect(date)}
                  disabled={!available}
                  className={`
                    aspect-square rounded-full flex items-center justify-center text-sm
                    transition-all duration-200
                    ${available ? 'cursor-pointer hover:bg-[#eef3f0]' : 'cursor-not-allowed text-[#d0dcd4]'}
                    ${selected ? 'bg-[#4e7b64] text-white hover:bg-[#3a624f]' : ''}
                    ${isToday && !selected ? 'border border-[#4e7b64] text-[#17362f]' : ''}
                  `}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        {selectedDate && (
          <p className="mt-3 text-sm text-[#4d6259]">
            Selected: <span className="font-medium">{formatDate(selectedDate)}</span>
          </p>
        )}
      </div>

      {/* Time Slots */}
      <div>
        <h3 className="font-display text-sm font-semibold text-[#17362f] mb-4">
          2. Select a Time
        </h3>
        <div className="rounded-[20px] border border-[#e8edea] bg-white p-4 min-h-[200px]">
          {!selectedDate ? (
            <div className="flex h-40 items-center justify-center text-sm text-[#718078]">
              Please select a date first
            </div>
          ) : loading ? (
            <div className="flex h-40 items-center justify-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[#4e7b64] border-t-transparent"></div>
            </div>
          ) : timeSlots.length === 0 ? (
            <div className="flex h-40 items-center justify-center text-sm text-[#718078]">
              No available time slots for this date
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => slot.available && onTimeSelect(slot.time)}
                  disabled={!slot.available}
                  className={`
                    rounded-[12px] py-2.5 px-3 text-sm font-medium
                    transition-all duration-200
                    ${slot.available && selectedTime === slot.time 
                      ? 'bg-[#4e7b64] text-white' 
                      : slot.available
                      ? 'bg-[#eef3f0] text-[#17362f] hover:bg-[#dce6e0] cursor-pointer'
                      : 'bg-[#f6f7f5] text-[#d0dcd4] cursor-not-allowed line-through'
                    }
                  `}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedTime && (
          <p className="mt-3 text-sm text-[#4d6259]">
            Selected: <span className="font-medium">{selectedTime}</span>
          </p>
        )}
      </div>
    </div>
  );
}