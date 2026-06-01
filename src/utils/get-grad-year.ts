/**
 * Helper function to convert a year string into a human‐readable label.
 */
export function getYearLabel(year: string): string {
  switch (year) {
    case "2026":
      return "Seniors – Class of 2026";
    case "2027":
      return "Juniors – Class of 2027";
    case "2028":
      return "Sophomores – Class of 2028";
    case "2029":
      return "Freshmen – Class of 2029";
    default:
      return `Class of ${year}`;
  }
}
