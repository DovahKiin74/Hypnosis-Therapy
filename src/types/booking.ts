export type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
};

export type BookingData = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  notes: string;
  createdAt?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
};

export type BookingResponse = {
  success: boolean;
  message: string;
  bookingId?: string;
};