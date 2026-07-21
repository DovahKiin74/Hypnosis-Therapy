import React, { useState } from 'react';
import { 
  MailIcon, 
  PhoneIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  UserIcon,
  MessageCircleIcon,
  SendIcon,
  UsersIcon,
  SparklesIcon,
  VideoIcon,
  XIcon,
  GlobeIcon
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
    borderColor: 'border-[#b8d9ce]',
    durationMinutes: 15,
    bookingTypeLabel: 'Networking'
  },
  {
    id: 'discovery' as BookingType,
    title: 'Discovery Call',
    duration: '45 min',
    description: 'Deep dive into your challenges.',
    icon: SparklesIcon,
    color: 'bg-[#e8edf4]',
    textColor: 'text-[#1a3a5a]',
    borderColor: 'border-[#b8cde0]',
    durationMinutes: 45,
    bookingTypeLabel: 'Discovery'
  },
  {
    id: 'private' as BookingType,
    title: 'Private Session',
    duration: '90 min',
    description: 'Full session with Zoom link.',
    icon: VideoIcon,
    color: 'bg-[#f4e8f0]',
    textColor: 'text-[#4a1a3a]',
    borderColor: 'border-[#dcc4d4]',
    durationMinutes: 90,
    bookingTypeLabel: 'Private Session'
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
    getAvailableDates,
    setDuration,
  } = useBooking();

  const [step, setStep] = useState<'calendar' | 'form' | 'success'>('calendar');
  const [selectedType, setSelectedType] = useState<BookingType>('discovery');
  const [bookingResponse, setBookingResponse] = useState<{ message: string; bookingId?: string; meetLink?: string } | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleTypeSelect = (type: BookingType) => {
    setSelectedType(type);
    const typeData = bookingTypes.find(t => t.id === type);
    if (typeData) {
      setDuration(typeData.durationMinutes, typeData.bookingTypeLabel);
    }
  };

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      setStep('form');
    }
  };

  // Add this helper at the top of your file (after imports)
  function getEasternTimeDisplay(): string {
    const now = new Date();
    const month = now.getMonth();
    // March (2) to October (10) is Daylight Saving (EDT)
    const abbr = (month >= 2 && month <= 10) ? 'EDT' : 'EST';
    const offset = abbr === 'EDT' ? 'UTC -4' : 'UTC -5';
    return `${abbr} (${offset})`;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const typeData = bookingTypes.find(t => t.id === selectedType);
    
    const fullData: BookingData = {
      name: bookingData.name || '',
      email: bookingData.email || '',
      phone: bookingData.phone || '',
      notes: bookingData.notes || '',
      date: selectedDate?.toISOString() || '',
      time: selectedTime || '',
      duration: typeData?.durationMinutes || 45,
      bookingType: typeData?.bookingTypeLabel || 'Discovery',
      status: 'pending'
    };

    const response = await submitBooking(fullData);
    setBookingResponse(response);
    if (response.success) {
      setShowModal(true);
    } else {
      alert(response.message);
    }
  };

  const availableDates = getAvailableDates();

  return (
    <main className="w-full bg-[#f6f7f5] text-[#0951f6] px-[16px] py-[16px]">
      <div className="mx-auto flex flex-col gap-5 sm:gap-7 max-w-[1600px]">

        {/* Hero Section */}
        <section className="overflow-hidden rounded-[24px] bg-[#0951f6] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20 text-center relative">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#000]/10"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#000]/10"></div>
          
          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#000]/20 text-[#d7e9dc]">
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

        {/* Booking Section: Image Left | Calendar Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT: Mark's Image */}
          <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-stone-100 sticky top-24 flex flex-col hidden lg:flex">
            <div className="w-full overflow-hidden ">
              <img
                src="/mark.jpg"
                alt="Mark Siegel"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* RIGHT: Booking Calendar */}
          <div className="bg-white rounded-[24px] p-6 sm:p-8 shadow-sm border border-stone-100">            
            {/* Call Type Selector */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {bookingTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleTypeSelect(type.id)}
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

            {/* Selected Type Description */}
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
                <p className="text-sm font-medium text-[#0951f6]">
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
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-stone-400 flex items-center gap-1.5">
                    <GlobeIcon className="h-3.5 w-3.5" />
                    All times in {getEasternTimeDisplay()}
                  </span>
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
                <h2 className="text-xl font-semibold text-stone-900">
                  Your Details
                </h2>
                <p className="mt-1 text-sm text-stone-400">
                  Fill in your information to confirm the booking.
                </p>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <UserIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={bookingData.name || ''}
                          onChange={(e) => updateBookingData({ name: e.target.value })}
                          disabled={submitting}
                          className="w-full rounded-xl border border-stone-200 bg-white pl-11 pr-4 py-3 text-sm text-stone-700 outline-none transition-all field-design disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <PhoneIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                        <input
                          type="tel"
                          required
                          placeholder="(123) 456-7890"
                          value={bookingData.phone || ''}
                          onChange={(e) => {
                            const value = e.target.value;
                            const digitsOnly = value.replace(/[^0-9]/g, '');
                            if (digitsOnly.length <= 15) {
                              const cleaned = value.replace(/[^0-9\s\(\)\-]/g, '');
                              updateBookingData({ phone: cleaned });
                            }
                          }}
                          disabled={submitting}
                          maxLength={20}
                          className="w-full rounded-xl border border-stone-200 bg-white pl-11 pr-4 py-3 text-sm text-stone-700 placeholder:text-stone-400 field-design transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MailIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={bookingData.email || ''}
                        onChange={(e) => updateBookingData({ email: e.target.value })}
                        disabled={submitting}
                        className="w-full rounded-xl border border-stone-200 bg-white pl-11 pr-4 py-3 text-sm text-stone-700 placeholder:text-stone-400 field-design transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      Notes
                    </label>
                    <div className="relative">
                      <MessageCircleIcon size={18} className="absolute left-4 top-4 text-stone-400" />
                      <textarea
                        placeholder="Anything you'd like me to know?"
                        rows={3}
                        value={bookingData.notes || ''}
                        onChange={(e) => updateBookingData({ notes: e.target.value })}
                        disabled={submitting}
                        className="w-full rounded-xl border border-stone-200 bg-white pl-11 pr-4 py-3 text-sm text-stone-700 placeholder:text-stone-400 field-design resize-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
                    {/* Back button - hidden when submitting */}
                    {!submitting && (
                      <button
                        type="button"
                        onClick={() => setStep('calendar')}
                        className="px-6 py-3 text-sm font-medium text-stone-500 hover:text-stone-700 transition-colors"
                      >
                        Back
                      </button>
                    )}
                    
                    <RippleButton
                      icon={!submitting ? <SendIcon size={16} /> : undefined}
                      className={`
                        ${submitting 
                          ? 'bg-stone-700 text-white/70 cursor-not-allowed hover:bg-stone-700' 
                          : ''
                        }
                      `}
                    >
                      {submitting ? 'Booking...' : 'Confirm Booking'}
                    </RippleButton>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        <Footer />
      </div>

      {/* ============================================
          SUCCESS MODAL OVERLAY
      ============================================ */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4"
        >
          <div 
            className="relative max-w-[480px] w-full bg-white rounded-3xl py-12 px-8 shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Shield with Tick Image */}
            <div className="w-[140px] h-auto mx-auto relative">
              <div className="">
                <div>
                  <img 
                    src="/Tick.png" 
                    alt="Confirmed" 
                    className="relative z-[2] w-32 h-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl font-bold text-black">Confirmed!</h2>
            <p className="mt-1.5 text-sm text-stone-500">
              A confirmation email with the details has been sent to <strong>{bookingData.email || 'you@example.com'}</strong>.
            </p>

            {/* Done Button with Ripple Effect */}
            <a 
              href="https://linen-guanaco-339583.hostingersite.com" 
              className="block w-full mt-8 md:mt-12 lg:mt-16"
            >
              <RippleButton className="w-full text-center justify-center">
                Done
              </RippleButton>
            </a>
          </div>
        </div>
      )}
    </main>
  );
}