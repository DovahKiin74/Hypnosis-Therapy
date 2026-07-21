/// <reference types="vite/client" />

import { useState, useEffect } from 'react';

const API_URL = 'https://purposedrivenhero.com/';

// Check if we're in production (Vite handles this)
const isProd = typeof import.meta !== 'undefined' && import.meta.env?.PROD === true;

// Google Apps Script URL with Cloudflare Worker proxy
const APPS_SCRIPT_URL = isProd
  ? 'https://meet-proxy.malikshahroze123.workers.dev/'
  : 'https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbzJC2C20TQfNYnkoVZ6LY3o2ckY_3u0NMi9cDQ84DneNwNiMgc7VXzKhiNvUjqks7FGjg/exec';

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
  meetLink?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  bookingId?: string;
  meetLink?: string;
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

    const availableSlots = await getAvailableSlots(date, selectedDuration);
    
    const slots = allSlots.map(time => ({
      time,
      available: availableSlots.includes(time)
    }));

    setTimeSlots(slots);
    setSelectedTime(null);
  }

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
      return [];
    }
  }

  // ============================================
  // GENERATE MEET LINK FROM APPS SCRIPT
  // ============================================
  async function generateMeetLink(bookingData: {
    clientName: string;
    email: string;
    date: string;
    time: string;
    duration: number;
    bookingType: string;
  }): Promise<string | null> {
    try {
      const startDateTime = new Date(`${bookingData.date}T${bookingData.time}:00`);
      const endDateTime = new Date(startDateTime.getTime() + bookingData.duration * 60000);
      
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `${bookingData.bookingType} with Mark Siegel`,
          startTime: startDateTime.toISOString(),
          endTime: endDateTime.toISOString(),
          clientEmail: bookingData.email,
          description: `Client: ${bookingData.clientName}`,
          timeZone: 'America/New_York'
        })
      });
      
      if (!response.ok) {
        return null;
      }
      
      const data = await response.json();
      
      if (data.success && data.meetLink) {
        return data.meetLink;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  // ============================================
  // UPDATE BOOKING WITH MEET LINK
  // ============================================
  async function updateBookingWithMeetLink(bookingId: number, meetLink: string) {
    try {
      const response = await fetch(`${API_URL}/api.php?path=bookings/update-meet-link`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingId, meetLink })
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update meet link');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
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

  // ============================================
  // SUBMIT BOOKING WITH MEET LINK
  // ============================================
  const submitBooking = async (data: BookingData): Promise<BookingResponse> => {
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
      
      if (!response.ok) {
        return { success: false, message: result.error || 'Failed to create booking' };
      }
      
      const meetLink = await generateMeetLink({
        clientName: data.name,
        email: data.email,
        date: data.date.split('T')[0],
        time: data.time,
        duration: data.duration || 45,
        bookingType: data.bookingType || 'Discovery'
      });
      let meetLinkSaved = false;
      if (meetLink && result.id) {
        try {
          await updateBookingWithMeetLink(parseInt(result.id), meetLink);
          meetLinkSaved = true;
        } catch (updateError) {
          // console.error('Failed to update booking with Meet link:', updateError);
        }
      } else {
        // console.warn('No Meet link generated for booking #' + result.id);
      }

      return { 
        success: true, 
        message: result.message || 'Booking confirmed!', 
        bookingId: result.id,
        meetLink: meetLink || undefined
      };

    } catch (error) {
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