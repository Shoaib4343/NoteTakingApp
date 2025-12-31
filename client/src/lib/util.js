export const formatDate = (date) => {
  const d = new Date(date); // ensures it's a Date object
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
