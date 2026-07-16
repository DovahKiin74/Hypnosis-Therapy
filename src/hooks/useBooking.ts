import { useState, useEffect } from 'react';

const API_URL = 'https://springgreen-mouse-511725.hostingersite.com';

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  notes?: string;
  date: string;
  time: string;
  duration?: number;
  bookingType?: string;
  status: string;
}

export function useBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<{ time: string; available: boolean }[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({});
  const [calendarSettings, setCalendarSettings] = useState<any[]>([]);
  const [settingsLoading, setSettingsLoading] = useState(true);
  const [selectedDuration, setSelectedDuration] = useState(45);
  const [selectedBookingType, setSelectedBookingType] = useState('Discovery');

  useEffect(() => {
    fetchCalendarSettings();
  }, []);

  async function fetchCalendarSettings() {
    setSettingsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api.php?path=settings/calendar/public`);
      if (!response.ok) throw new Error('Failed to fetch settings');
      const data = await response.json();
      setCalendarSettings(data);
    } catch (error) {
      console.error('Error fetching calendar settings:', error);
      const defaults = [
        { day_of_week: 'monday', working_hours_start: '09:00', working_hours_end: '17:00', is_available: true, breaks: [{ id: '1', start: '12:00', end: '15:00' }] },
        { day_of_week: 'tuesday', working_hours_start: '09:00', working_hours_end: '17:00', is_available: true, breaks: [{ id: '1', start: '13:00', end: '14:00' }] },
        { day_of_week: 'wednesday', working_hours_start: '09:00', working_hours_end: '17:00', is_available: true, breaks: [{ id: '1', start: '13:00', end: '14:00' }] },
        { day_of_week: 'thursday', working_hours_start: '09:00', working_hours_end: '17:00', is_available: true, breaks: [{ id: '1', start: '13:00', end: '14:00' }] },
        { day_of_week: 'friday', working_hours_start: '09:00', working_hours_end: '17:00', is_available: true, breaks: [{ id: '1', start: '13:00', end: '14:00' }] },
        { day_of_week: 'saturday', working_hours_start: '09:00', working_hours_end: '17:00', is_available: false, breaks: [{ id: '1', start: '13:00', end: '14:00' }] },
        { day_of_week: 'sunday', working_hours_start: '09:00', working_hours_end: '17:00', is_available: false, breaks: [{ id: '1', start: '13:00', end: '14:00' }] },
      ];
      setCalendarSettings(defaults);
    } finally {
      setSettingsLoading(false);
    }
  }

  useEffect(() => {
    if (selectedDate && calendarSettings.length > 0) {
      generateTimeSlots(selectedDate);
    }
  }, [selectedDate, calendarSettings, selectedDuration]);

  async function generateTimeSlots(date: Date) {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const daySetting = calendarSettings.find((s: any) => s.day_of_week === dayName);
    
    if (!daySetting || !daySetting.is_available) {
      setTimeSlots([]);
      setSelectedTime(null);
      return;
    }

    const start = daySetting.working_hours_start;
    const end = daySetting.working_hours_end;
    const breaks = daySetting.breaks || [];
    
    // Generate all possible time slots based on working hours
    const allSlots: string[] = [];
    let current = new Date(`2000-01-01T${start}`);
    const endTime = new Date(`2000-01-01T${end}`);

    while (current < endTime) {
      const timeStr = current.toTimeString().slice(0, 5);
      
      const isBreak = breaks.some((b: any) => {
        const breakStart = new Date(`2000-01-01T${b.start}`);
        const breakEnd = new Date(`2000-01-01T${b.end}`);
        return current >= breakStart && current < breakEnd;
      });

      if (!isBreak) {
        allSlots.push(timeStr);
      }
      
      current.setMinutes(current.getMinutes() + 15);
    }

    // ✅ Use the WORKING endpoint
    const availableSlots = await getAvailableSlots(date, selectedDuration);
    
    const slots = allSlots.map(time => ({
      time,
      available: availableSlots.includes(time)
    }));

    setTimeSlots(slots);
    setSelectedTime(null);
  }

  // ✅ Use the working endpoint
  async function getAvailableSlots(date: Date, duration: number): Promise<string[]> {
    try {
      const dateStr = date.toISOString().split('T')[0];
      const response = await fetch(`${API_URL}/api.php?path=bookings/available-slots`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: dateStr,
          duration: duration,
        }),
      });
      
      if (!response.ok) return [];
      const data = await response.json();
      return data.availableSlots || [];
    } catch (error) {
      console.error('Error fetching available slots:', error);
      return [];
    }
  }

  const getAvailableDates = () => {
    return [];
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const setDuration = (duration: number, bookingType: string) => {
    setSelectedDuration(duration);
    setSelectedBookingType(bookingType);
    if (selectedDate) {
      generateTimeSlots(selectedDate);
    }
  };

  const submitBooking = async (data: BookingData) => {
    setSubmitting(true);
    try {
      const checkResponse = await fetch(`${API_URL}/api.php?path=bookings/check-availability`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: data.date.split('T')[0],
          time: data.time,
          duration: data.duration || 45,
        }),
      });

      if (!checkResponse.ok) {
        const error = await checkResponse.json();
        return { success: false, message: error.error || 'Time slot not available' };
      }

      const checkData = await checkResponse.json();
      if (checkData.conflictExists) {
        return { success: false, message: checkData.message || 'This time slot is already booked. Please choose another time.' };
      }

      const response = await fetch(`${API_URL}/api.php?path=bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: data.name,
          email: data.email,
          phone: data.phone || '',
          notes: data.notes || '',
          date: data.date.split('T')[0],
          time: data.time,
          duration: data.duration || 45,
          status: 'pending',
          bookingType: data.bookingType || 'Discovery',
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        return { success: true, message: result.message || 'Booking confirmed!', bookingId: result.id };
      } else {
        return { success: false, message: result.error || 'Failed to create booking' };
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      return { success: false, message: 'Something went wrong. Please try again.' };
    } finally {
      setSubmitting(false);
    }
  };

  return {
    selectedDate,
    selectedTime,
    timeSlots,
    loading: loading || settingsLoading,
    submitting,
    bookingData,
    selectedDuration,
    selectedBookingType,
    handleDateSelect,
    handleTimeSelect,
    updateBookingData,
    submitBooking,
    getAvailableDates,
    setDuration,
  };
}