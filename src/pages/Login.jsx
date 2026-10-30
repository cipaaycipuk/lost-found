import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import TextField from '../components/TextField'
import { validateEmail, validatePassword } from '../lib/validators'

export default function Login() {
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {
      email: validateEmail(values.email),
      password: validatePassword(values.password),
    }
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    // TODO (tahap backend): kirim values ke API login
    console.log('login', values)
  }

  return (
    <AuthLayout
      title="Login to your account"
      subtitle="Welcome back. Let's help you find what you've lost."
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email here"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password here"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button
          type="submit"
          className="h-11 w-full rounded-lg bg-black text-sm font-semibold text-white transition hover:bg-neutral-800 active:scale-[0.99]"
        >
          Login
        </button>

        <p className="text-sm">
          Don&apos;t have an account yet?{' '}
          <Link to="/register" className="underline underline-offset-4">
            register here
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}