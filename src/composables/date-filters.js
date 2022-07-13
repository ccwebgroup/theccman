import { formatDistance } from "date-fns";
import { date } from "quasar";

export const useDateFns = () => {
  function formatShortDate(timestamp) {
    return formatDistance(timestamp, new Date(), { addSuffix: true });
  }

  function formatDateSimple(timestamp) {
    return date.formatDate(timestamp, "MMM D, YYYY");
  }

  return { formatShortDate, formatDateSimple };
};
