export const getPastYears = (count: number): number[] => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: count }, (_, i) => currentYear - i);
};
