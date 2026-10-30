import Logo from './Logo'

export default function AuthLayout({ title, subtitle, children }) {
  return (
    // Outer Container
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-0 lg:p-10">
      
      <div className="w-full min-h-screen bg-page px-6 py-8 flex flex-col justify-center lg:min-h-0 lg:max-w-4xl lg:h-[640px] lg:bg-white lg:rounded-[18px] lg:shadow-2xl lg:shadow-black/10 lg:border lg:border-gray-100 lg:p-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        
        <aside
          className="relative hidden h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-black bg-cover bg-center p-8 lg:flex"
          style={{ backgroundImage: "url('/gradient.png')" }}
        >
          <h2 className="relative z-10 max-w-xs text-3xl font-medium leading-tight text-white xl:text-4xl">
            Helping lost things find their way back home.
          </h2>
        </aside>

        <main className="w-full max-w-sm mx-auto flex flex-col justify-center lg:max-w-none lg:px-4">
          <Logo className="justify-center lg:justify-start" />

          <div className="mt-8 lg:mt-6">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">{title}</h1>
            <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
          </div>

          <div className="mt-6">{children}</div>
        </main>

      </div>
    </div>
  )
}