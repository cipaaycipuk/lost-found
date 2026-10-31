import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="w-full bg-black text-white pt-12 lg:pt-16 pb-32 lg:pb-44 px-6 lg:px-16 mt-20 bg-no-repeat"
      style={{
        backgroundImage: "url('/bg-footer.png')",
        backgroundSize: '100% 100%', // KUNCI UTAMA: Memaksa gambar pas 100% lebar & 100% tinggi tanpa gap!
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Konten Atas */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between mb-16 lg:mb-24">
          
          {/* Kiri: Judul CTA & Tombol */}
          <div className="space-y-6 max-w-lg">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl text-white">
              Kehilangan barang di kampus atau sekitarnya<span className="text-[#e0531c]">?</span>
            </h2>

            <Link
              to="/buat-laporan"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#2a2a2a] px-3.5 py-2 text-sm font-medium text-gray-200 transition hover:bg-[#383838] hover:text-white border border-gray-700/50"
            >
              <span>Buat laporan</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e0531c] text-xs font-bold text-white">
                +
              </span>
            </Link>
          </div>

          {/* Kanan: Link Navigasi & Bantuan */}
          <div className="flex flex-wrap gap-12 sm:gap-16 text-sm">
            {/* Navigasi */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Navigasi</h3>
              <ul className="space-y-2 font-medium text-gray-200">
                <li>
                  <Link to="/" className="inline-flex items-center gap-2 hover:text-white transition">
                    <span className="text-[#e0531c]">•</span> Beranda
                  </Link>
                </li>
                <li>
                  <Link to="/buat-laporan" className="inline-flex items-center gap-2 hover:text-white transition">
                    <span className="text-[#e0531c]">•</span> Buat Laporan
                  </Link>
                </li>
                <li>
                  <Link to="/tersimpan" className="inline-flex items-center gap-2 hover:text-white transition">
                    <span className="text-[#e0531c]">•</span> Tersimpan
                  </Link>
                </li>
                <li>
                  <Link to="/profil" className="inline-flex items-center gap-2 hover:text-white transition">
                    <span className="text-[#e0531c]">•</span> Profil Saya
                  </Link>
                </li>
              </ul>
            </div>

            {/* Bantuan */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Bantuan</h3>
              <ul className="space-y-2 font-medium text-gray-200">
                <li>
                  <Link to="/panduan" className="inline-flex items-center gap-2 hover:text-white transition">
                    <span className="text-[#e0531c]">•</span> Panduan Keamanan
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="inline-flex items-center gap-2 hover:text-white transition">
                    <span className="text-[#e0531c]">•</span> Pertanyaan Umum
                  </Link>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center gap-2 hover:text-white transition">
                    <span className="text-[#e0531c]">•</span> Hubungi Admin
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Garis Pembatas */}
        <hr className="mb-6 border-gray-800/80" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 font-medium">
          <p>©2026 Lost &amp; Found Campus</p>
          <p>Created by kelompok 2 PTI</p>
        </div>

      </div>
    </footer>
  )
}