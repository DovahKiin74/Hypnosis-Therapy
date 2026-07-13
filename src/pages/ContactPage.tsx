import React, { useState } from 'react';
import { 
  MailIcon, 
  PhoneIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  UserIcon,
  MessageCircleIcon,
  SendIcon,
  CheckCircleIcon,
  UsersIcon,
  SparklesIcon,
  VideoIcon
} from 'lucide-react';
import { RippleButton } from '../components/RippleButton';
import { Footer } from '../components/Footer';
import { BookingCalendar } from '../components/BookingCalendar';
import { useBooking } from '../hooks/useBooking';
import { BookingData } from '../types/booking';

type BookingType = 'networking' | 'discovery' | 'private';

const bookingTypes = [
  {
    id: 'networking' as BookingType,
    title: 'Networking',
    duration: '15 min',
    description: 'Quick connect to explore synergies.',
    icon: UsersIcon,
    color: 'bg-[#e8f4f0]',
    textColor: 'text-[#1a4d3e]',
    borderColor: 'border-[#b8d9ce]'
  },
  {
    id: 'discovery' as BookingType,
    title: 'Discovery Call',
    duration: '45 min',
    description: 'Deep dive into your challenges.',
    icon: SparklesIcon,
    color: 'bg-[#e8edf4]',
    textColor: 'text-[#1a3a5a]',
    borderColor: 'border-[#b8cde0]'
  },
  {
    id: 'private' as BookingType,
    title: 'Private Session',
    duration: '90 min',
    description: 'Full session with Zoom link.',
    icon: VideoIcon,
    color: 'bg-[#f4e8f0]',
    textColor: 'text-[#4a1a3a]',
    borderColor: 'border-[#dcc4d4]'
  }
];

export function ContactPage() {
  const {
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
  } = useBooking();

  const [step, setStep] = useState<'calendar' | 'form' | 'success'>('calendar');
  const [selectedType, setSelectedType] = useState<BookingType>('discovery');
  const [bookingResponse, setBookingResponse] = useState<{ message: string; bookingId?: string } | null>(null);

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      setStep('form');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullData: BookingData = {
      name: bookingData.name || '',
      email: bookingData.email || '',
      phone: bookingData.phone || '',
      date: selectedDate?.toISOString() || '',
      time: selectedTime || '',
      notes: bookingData.notes || '',
      status: 'pending'
    };

    const response = await submitBooking(fullData);
    setBookingResponse(response);
    if (response.success) {
      setStep('success');
    }
  };

  const availableDates = getAvailableDates();

  return (
    <main className="w-full bg-[#f6f7f5] text-[#17362f] px-[16px] py-[16px]">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-5 sm:gap-7">

        {/* Hero Section */}
        <section className="overflow-hidden rounded-[24px] bg-[#17362f] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20 text-center relative">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#4e7b64]/10"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#4e7b64]/10"></div>
          
          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4e7b64]/20 text-[#d7e9dc]">
              <CalendarDaysIcon size={28} />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#d7e9dc]">
              Let's Talk
            </p>
            <h1 className="font-display mt-3 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Start Your Decision Diagnosis
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-white/80 sm:text-lg">
              Book a call that fits your needs — whether it's a quick connect, a deep discovery,
              or a full private session. Choose what works for you.
            </p>
          </div>
        </section>

        {/* Booking Calendar - Centered with max width */}
        <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-[24px] bg-white p-6 sm:p-8">
          
          {/* Call Type Selector - Horizontal Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {bookingTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`
                  flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200
                  ${selectedType === type.id 
                    ? `${type.color} ${type.textColor} shadow-sm` 
                    : 'bg-[#f6f7f5] text-[#718078] hover:bg-[#eef3f0]'
                  }
                `}
              >
                <type.icon size={14} />
                {type.title}
                <span className="text-[10px] opacity-60">({type.duration})</span>
              </button>
            ))}
          </div>

          {/* Show selected type description */}
          <div className="mb-6 flex items-center gap-3 p-3 rounded-[12px] bg-[#eef3f0]">
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bookingTypes.find(t => t.id === selectedType)?.color}`}>
              {bookingTypes.find(t => t.id === selectedType)?.icon && 
                React.createElement(bookingTypes.find(t => t.id === selectedType)!.icon, { 
                  size: 18,
                  className: bookingTypes.find(t => t.id === selectedType)?.textColor
                })
              }
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#17362f]">
                {bookingTypes.find(t => t.id === selectedType)?.title}
              </p>
              <p className="text-xs text-[#718078]">
                {bookingTypes.find(t => t.id === selectedType)?.description}
              </p>
            </div>
            <span className="text-xs text-[#718078]">
              {bookingTypes.find(t => t.id === selectedType)?.duration}
            </span>
          </div>

          {step === 'calendar' && (
            <>
              <BookingCalendar
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                timeSlots={timeSlots}
                loading={loading}
                availableDates={availableDates}
                onDateSelect={handleDateSelect}
                onTimeSelect={handleTimeSelect}
              />
              <div className="mt-6 flex justify-end">
                <RippleButton
                  onClick={handleNext}
                  className={!selectedDate || !selectedTime ? 'opacity-50 cursor-not-allowed' : ''}
                  icon={<ArrowRightIcon size={16} />}
                >
                  Continue to Details
                </RippleButton>
              </div>
            </>
          )}

          {step === 'form' && (
            <>
              <div className="mb-6 flex items-center gap-3">
                <button
                  onClick={() => setStep('calendar')}
                  className="text-sm text-[#718078] hover:text-[#4e7b64] transition-colors"
                >
                  ← Back
                </button>
                <span className="text-sm text-[#718078]">
                  {bookingTypes.find(t => t.id === selectedType)?.title} • {selectedDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {selectedTime}
                </span>
              </div>
              <h2 className="font-display text-xl font-semibold text-[#17362f]">
                Your Details
              </h2>
              <p className="mt-1 text-sm text-[#718078]">
                Fill in your information to confirm the booking.
              </p>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-[#17362f] mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <UserIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#89978f]" />
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={bookingData.name || ''}
                      onChange={(e) => updateBookingData({ name: e.target.value })}
                      className="w-full rounded-full border border-[#dce6e0] bg-white px-11 py-3 text-sm text-[#17362f] placeholder:text-[#89978f] focus:border-[#4e7b64] focus:outline-none focus:ring-2 focus:ring-[#4e7b64]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#17362f] mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <MailIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#89978f]" />
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={bookingData.email || ''}
                      onChange={(e) => updateBookingData({ email: e.target.value })}
                      className="w-full rounded-full border border-[#dce6e0] bg-white px-11 py-3 text-sm text-[#17362f] placeholder:text-[#89978f] focus:border-[#4e7b64] focus:outline-none focus:ring-2 focus:ring-[#4e7b64]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#17362f] mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <PhoneIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#89978f]" />
                    <input
                      type="tel"
                      required
                      placeholder="(123) 456-7890"
                      value={bookingData.phone || ''}
                      onChange={(e) => updateBookingData({ phone: e.target.value })}
                      className="w-full rounded-full border border-[#dce6e0] bg-white px-11 py-3 text-sm text-[#17362f] placeholder:text-[#89978f] focus:border-[#4e7b64] focus:outline-none focus:ring-2 focus:ring-[#4e7b64]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#17362f] mb-1.5">
                    Notes (Optional)
                  </label>
                  <div className="relative">
                    <MessageCircleIcon size={18} className="absolute left-4 top-4 text-[#89978f]" />
                    <textarea
                      placeholder="Anything you'd like me to know?"
                      rows={3}
                      value={bookingData.notes || ''}
                      onChange={(e) => updateBookingData({ notes: e.target.value })}
                      className="w-full rounded-[20px] border border-[#dce6e0] bg-white px-11 py-3 text-sm text-[#17362f] placeholder:text-[#89978f] focus:border-[#4e7b64] focus:outline-none focus:ring-2 focus:ring-[#4e7b64]/20 resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep('calendar')}
                    className="rounded-full border border-[#dce6e0] px-6 py-3 text-sm font-medium text-[#718078] hover:bg-[#eef3f0] transition-colors"
                  >
                    Back
                  </button>
                  <RippleButton
                    icon={<SendIcon size={16} />}
                  >
                    {submitting ? 'Booking...' : 'Confirm Booking'}
                  </RippleButton>
                </div>
              </form>
            </>
          )}

          {step === 'success' && bookingResponse && (
            <div className="text-center py-8">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#cbe0d0] text-[#275b43]">
                <CheckCircleIcon size={40} />
              </div>
              <h2 className="font-display mt-4 text-2xl font-semibold text-[#17362f]">
                Booking Confirmed!
              </h2>
              <p className="mt-2 text-sm text-[#4d6259]">
                {bookingResponse.message}
              </p>
              {bookingResponse.bookingId && (
                <p className="mt-1 text-xs text-[#718078]">
                  Booking ID: {bookingResponse.bookingId}
                </p>
              )}
              <p className="mt-4 text-sm text-[#4d6259]">
                A confirmation email has been sent to your inbox.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <RippleButton
                  href="/"
                  icon={<ArrowRightIcon size={16} />}
                >
                  Return Home
                </RippleButton>
                <RippleButton
                  href="/blogs"
                  icon={<ArrowRightIcon size={16} />}
                >
                  Read Our Blog
                </RippleButton>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </main>
  );
}