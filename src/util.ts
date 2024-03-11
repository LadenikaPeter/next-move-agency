export function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const handleKeyPress = (e: any) => {
  const pattern = /[0-9]/;

  let inputChar = String.fromCharCode(e.charCode);

  // Allow backspace
  if (e.keyCode === 8) {
    return;
  }

  // Prevent input if the character is not a digit
  if (!pattern.test(inputChar)) {
    e.preventDefault();
  }
};
