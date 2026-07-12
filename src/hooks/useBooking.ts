import { useState, useEffect } from 'react';
import { TimeSlot, BookingData, BookingResponse } from '../types/booking';

// Mock available time slots
const generateTimeSlots = (): TimeSlot[] => {
  const slots = [];
  const times = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
  for (let i = 0; i < times.length; i++) {
    slots.push({
      id: `slot-${i}`,
      time: times[i],
      available: Math.random() > 0.3 // Randomly some slots are booked
    });
  }
  return slots;
};

export function useBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({});

  // Fetch time slots when date changes
  useEffect(() => {
    if (selectedDate) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setTimeSlots(generateTimeSlots());
        setLoading(false);
      }, 500);
    }
  }, [selectedDate]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const submitBooking = async (data: BookingData): Promise<BookingResponse> => {
    setSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Mock response
      return {
        success: true,
        message: 'Booking confirmed!',
        bookingId: `BK-${Date.now()}`
      };
    } catch (error) {
      return {
        success: false,
        message: 'Something went wrong. Please try again.'
      };
    } finally {
      setSubmitting(false);
    }
  };

  // Generate available dates for the next 30 days
  const getAvailableDates = (): Date[] => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip weekends (optional)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date);
      }
    }
    return dates;
  };

  return {
    selectedDate,
    selectedTime,
    timeSlots,
    loading,
    submitting,
    bookingData,
    handleDateSelect,
    handleTimeSelect,
    updateBookingData,
    submitBooking,
    getAvailableDates
  };
}