import Logo from './Logo'

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-page lg:grid lg:grid-cols-12 lg:gap-8 lg:p-6">
      {/* Panel Kiri: Dibuat lebih lebar dengan col-span-7 (sekitar 58% lebar layar) */}
      <aside
        className="relative hidden flex-col justify-between overflow-hidden rounded-3xl bg-black bg-cover bg-center p-12 lg:flex lg:col-span-7"
        style={{ backgroundImage: "url('/gradient.png')" }}
      >
        <h2 className="relative z-10 max-w-lg text-4xl font-medium leading-tight text-white xl:text-5xl">
          Helping lost things find their way back home.
        </h2>
      </aside>

      {/* Area Form: Mengambil col-span-5 (sekitar 42% lebar layar) */}
      <main className="flex min-h-screen flex-col px-6 py-8 lg:col-span-5 lg:min-h-0 lg:justify-center lg:px-8 lg:py-0">
        <div className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md">
          <Logo className="justify-center lg:justify-start" />

          <div className="mt-16 lg:mt-10">
            <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">{title}</h1>
            <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
          </div>

          <div className="mt-6">{children}</div>
        </div>
      </main>
    </div>
  )
}