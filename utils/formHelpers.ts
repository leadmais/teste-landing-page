// Regex to allow letters (including accents) and spaces, reject numbers/symbols
export const maskName = (value: string): string => {
  return value.replace(/[^a-zA-Z\u00C0-\u00FF\s]/g, '');
};

// Brazilian Phone Mask (10 or 11 digits)
// Formats: (11) 91234-5678 or (11) 1234-5678
export const maskPhone = (value: string): string => {
  let v = value.replace(/\D/g, ""); // Remove non-digits
  
  if (v.length > 11) {
    v = v.substring(0, 11);
  }

  // Apply masking
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); // (11) 9...
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); // ...-5678

  return v;
};

// Validation Logic
export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // Remove formatting to check pure digits length
  const raw = phone.replace(/\D/g, "");
  // Brazil phones are 10 (landline) or 11 (mobile) digits
  return raw.length >= 10 && raw.length <= 11;
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 3;
};