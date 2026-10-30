import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import TextField from '../components/TextField'
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from '../lib/validators'

export default function Register() {
  const [values, setValues] = useState({ name: '', email: '', password: '', contact: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {
      name: validateName(values.name),
      email: validateEmail(values.email),
      password: validatePassword(values.password),
      contact: validatePhone(values.contact),
    }
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    // TODO (tahap backend): kirim values ke API register
    console.log('register', values)
  }

  return (
    <AuthLayout
      title="Register new account"
      subtitle="Join us in making lost things find their way home."
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <TextField
          label="Name"
          name="name"
          autoComplete="name"
          placeholder="What should we call you?"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Make sure you enter your widyatama email here"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="We recommend to combine symbol and angka"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <TextField
          label="Contact"
          name="contact"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="Add your phone number (Whatsapp recommend)"
          value={values.contact}
          onChange={handleChange}
          error={errors.contact}
        />

        <button
          type="submit"
          className="h-11 w-full rounded-lg bg-black text-sm font-semibold text-white transition hover:bg-neutral-800 active:scale-[0.99]"
        >
          Register
        </button>

        <p className="text-sm">
          Already have an account?{' '}
          <Link to="/login" className="underline underline-offset-4">
            login here
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}