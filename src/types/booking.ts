export type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
};

// types/booking.ts
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

export type BookingResponse = {
  success: boolean;
  message: string;
  bookingId?: string;
};