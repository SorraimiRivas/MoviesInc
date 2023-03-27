export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options = {month: 'short', day: 'numeric', year: 'numeric'};
  return date.toLocaleDateString(undefined, options);
};

const formatDateString = (dateString: string): string => {
  const formattedDate = formatDate(dateString);
  return formattedDate;
};
