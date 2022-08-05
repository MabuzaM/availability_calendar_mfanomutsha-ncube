export function checkSlotAvailability (time, jobLength, date, availability) {
  const unavailableSlots = [9,10,11,12,13,14,15,16,17]
    .filter(slot => !availability.includes(slot))
  const jobDurationSlots = Array.from({length: jobLength}, (_, i) => i + time)
  const bookingRunsOverFullSlot = unavailableSlots
    .some(slot => jobDurationSlots.includes(slot))

  if (!availability.includes(time)) {
    return 'Full'
  }

  if (
    !availability.includes(time + jobLength)
    || bookingRunsOverFullSlot
  ) {
    return 'Unavailable'
  }

  return 'Available'
}
