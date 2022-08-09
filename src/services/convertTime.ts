export const convertMS = (sec: number) => {
  const hours = Math.floor(sec / 3600); // get hours
  const minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  const seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; // Return is HH : MM : SS
};
