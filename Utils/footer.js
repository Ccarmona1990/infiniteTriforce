
// Current year 
export function thisYear() {
  const currentYear = new Date().getFullYear();
  const date = document.getElementById('date');
  date.textContent = currentYear;
}