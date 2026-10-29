'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, ShieldCheck, Check, Sparkles } from 'lucide-react';

const DATES = [
  { day: 'Fri', date: 'Oct 24', available: true, slots: ['Morning (09:00 - 13:00)', 'Evening (18:00 - 23:00)'] },
  { day: 'Sat', date: 'Oct 25', available: false, slots: [] },
  { day: 'Sun', date: 'Oct 26', available: true, slots: ['Afternoon (14:00 - 18:00)', 'Evening (18:00 - 23:00)'] },
  { day: 'Mon', date: 'Oct 27', available: true, slots: ['Full Day Access'] }
];

export default function BookMyVenuePreview() {
  const [selectedDateIdx, setSelectedDateIdx] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState('Evening (18:00 - 23:00)');
  const [attendees, setAttendees] = useState(75);
  const [reserved, setReserved] = useState(false);

  const activeDate = DATES[selectedDateIdx];
  const baseRate = 850;
  const guestSurcharge = attendees > 50 ? (attendees - 50) * 8 : 0;
  const totalRate = baseRate + guestSurcharge;

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    setReserved(true);
    setTimeout(() => setReserved(false), 3000);
  };

  return (
    <div className="w-full bg-[#0d0f15] border border-white/[0.08] rounded-xl overflow-hidden text-slate-200 text-xs select-none">
      {/* Simulation Top Bar */}
      <div className="px-4 py-2.5 bg-[#141822] border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-slate-400">bookmyvenue.team/reservation-engine</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Atomic Slot Lock</span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h5 className="text-sm font-bold text-white">The Grand Atrium & Terrace</h5>
            <span className="text-[11px] text-slate-400">Capacity: up to 180 guests · Downtown Sector</span>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-amber-400 font-mono">${totalRate}</span>
            <span className="text-[10px] text-slate-400 block">Est. Subtotal</span>
          </div>
        </div>

        {/* Date Selector Row */}
        <div className="mb-4">
          <span className="text-[11px] text-slate-400 block mb-1.5 font-medium">Select Availability Window:</span>
          <div className="grid grid-cols-4 gap-2">
            {DATES.map((item, idx) => (
              <button
                key={item.date}
                type="button"
                disabled={!item.available}
                onClick={() => {
                  setSelectedDateIdx(idx);
                  if (item.slots.length > 0) {
                    setSelectedSlot(item.slots[0]);
                  }
                }}
                className={`p-2 rounded-lg text-center transition-all border ${
                  !item.available
                    ? 'opacity-40 cursor-not-allowed bg-black/20 border-white/[0.04] line-through'
                    : selectedDateIdx === idx
                    ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold'
                    : 'bg-[#151923] border-white/[0.06] text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="text-[10px] font-mono">{item.day}</div>
                <div className="text-xs font-bold mt-0.5">{item.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Slot & Guest Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 bg-[#141822] p-3 rounded-lg border border-white/[0.06]">
          <div>
            <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-1.5">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>Session Time Slot</span>
            </div>
            <select
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              className="w-full bg-[#1b202c] border border-white/10 rounded px-2.5 py-1.5 text-[11px] text-white focus:outline-none"
            >
              {activeDate.slots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3 text-amber-400" />
                <span>Guest Count</span>
              </span>
              <span className="font-mono text-white font-semibold">{attendees}</span>
            </div>
            <input
              type="range"
              min={20}
              max={150}
              step={5}
              value={attendees}
              onChange={(e) => setAttendees(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Reservation Confirmation Button */}
        <form onSubmit={handleReserve} className="flex items-center justify-between pt-2">
          <div className="text-[10px] text-slate-400">
            {reserved
              ? 'Temporary 10-minute slot lock assigned in session database.'
              : 'Interactive reservation state test (no actual card charge).'}
          </div>
          <button
            type="submit"
            className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded text-[11px] transition-colors flex items-center gap-1.5"
          >
            {reserved ? (
              <>
                <Check className="w-3 h-3" />
                <span>Slot Locked</span>
              </>
            ) : (
              <>
                <span>Confirm Hold</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
