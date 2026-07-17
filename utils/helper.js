// Format price into Indian currency

export const formatPrice = (price) => {

  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
    }
  ).format(price);

};



// Format date

export const formatDate = (date) => {

  const newDate = new Date(date);

  return newDate.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

};



// Calculate discount price

export const calculateDiscount = (
  price,
  discount
) => {

  const discountAmount =
    (price * discount) / 100;

  return price - discountAmount;

};



// Shorten long text

export const truncateText = (
  text,
  length = 100
) => {

  if (text.length <= length) {
    return text;
  }

  return (
    text.substring(0, length) +
    "..."
  );

};



// Generate rating stars

export const generateStars = (
  rating
) => {

  const fullStars =
    Math.floor(rating);

  const stars = "⭐".repeat(
    fullStars
  );

  return stars;

};



// Scroll page to top

export const scrollToTop = () => {

  window.scrollTo(
    {
      top: 0,
      behavior: "smooth",
    }
  );

};