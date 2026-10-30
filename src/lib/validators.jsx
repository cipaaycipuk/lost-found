// Ganti kalau domain email kampus berbeda. Ini validasi UX saja; yang sebenarnya di backend.
export const EMAIL_DOMAIN = '@widyatama.ac.id'

export function validateEmail(value) {
  const email = value.trim().toLowerCase()
  if (!email) return 'Email wajib diisi'
  if (!email.endsWith(EMAIL_DOMAIN)) return `Gunakan email kampus (${EMAIL_DOMAIN})`
  if (email.length <= EMAIL_DOMAIN.length) return 'Email tidak valid'
  return ''
}

export function validatePassword(value) {
  if (!value) return 'Password wajib diisi'
  if (value.length < 8) return 'Password minimal 8 karakter'
  return ''
}

export function validateName(value) {
  if (!value.trim()) return 'Nama wajib diisi'
  return ''
}

export function validatePhone(value) {
  const phone = value.replace(/[\s-]/g, '')
  if (!phone) return 'Nomor kontak wajib diisi'
  if (!/^(\+62|62|0)8\d{8,11}$/.test(phone)) return 'Nomor tidak valid, contoh: 081212123476'
  return ''
}