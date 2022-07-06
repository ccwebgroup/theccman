import { formatDistance } from "date-fns";

export const useDateFns = () => {
  function formatShortDate(timestamp) {
    return formatDistance(timestamp, new Date(), { addSuffix: true });
  }

  return { formatShortDate };
};
