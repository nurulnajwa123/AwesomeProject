export function passwordValidator(password) {
  if (!password) return "Password cannot be empty."
  if (password.length < 8) return 'Password must be at least 8 characters long.'
  return ''
}