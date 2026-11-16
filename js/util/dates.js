// Parsed as local calendar dates so a join date never shifts to the previous day in negative UTC offsets.
function parseIsoDate(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function hasReachedAnniversary(start, reference) {
  if (reference.getMonth() !== start.getMonth()) {
    return reference.getMonth() > start.getMonth();
  }
  return reference.getDate() >= start.getDate();
}

function isOnAnniversary(start, reference) {
  return reference.getMonth() === start.getMonth() && reference.getDate() === start.getDate();
}

export function yearsSince(isoDate, referenceDate = new Date()) {
  const start = parseIsoDate(isoDate);
  const completedYears = referenceDate.getFullYear() - start.getFullYear();
  return hasReachedAnniversary(start, referenceDate) ? completedYears : completedYears - 1;
}

export function hasPartialYearSince(isoDate, referenceDate = new Date()) {
  return !isOnAnniversary(parseIsoDate(isoDate), referenceDate);
}
