import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'
import DefaultLayout from './components/DefaultLayout'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout ><Home /></DefaultLayout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
      <Route path="/profile" element={<DefaultLayout><Profile /></DefaultLayout>} />
    </Routes>
  )
}