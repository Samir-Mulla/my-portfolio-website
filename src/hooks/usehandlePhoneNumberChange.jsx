export const handlePhoneNumberChange = (e) => {
  const inputValue = e.target.value;
  const numericValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters

  // Update the input field value with only numeric characters
  e.target.value = numericValue;
};
