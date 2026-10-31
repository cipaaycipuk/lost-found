import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Dummy Data untuk Simulasi Feed Postingan
const INITIAL_POSTS = [
  {
    id: 1,
    user: "Rayyanza Cipung",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rayyanza",
    time: "12 September 2026",
    status: "Kehilangan", // 'Kehilangan' | 'Ditemukan'
    title: "Tumbler minum leopard",
    location: "Kantin / Foodcourt",
    category: "Tumbler",
    description:
      "Dicari tumbler dengan motif leopard, terakhir simpen di kantin/foodcourt ujung. Please kalo nemu chat aku ya!",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=500&auto=format&fit=crop",
    whatsapp: "08123456789",
  },
  {
    id: 2,
    user: "Prilly Latuconsina",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prilly",
    time: "Kemarin",
    status: "Ditemukan",
    title: "Kunci Motor Honda",
    location: "Gedung B Lt.406",
    category: "Aksesori",
    description:
      "Nemu kunci motor ada gantungan boneka kecil di kursi bagian depan. Yang merasa kehilangan bisa chat.",
    image: null,
    whatsapp: "08987654321",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Semua"); // 'Semua' | 'Kehilangan' | 'Ditemukan'
  //   const [searchQuery, setSearchQuery] = useState('')

  // Filter Postingan berdasarkan Tab
  const filteredPosts = INITIAL_POSTS.filter((post) => {
    if (activeTab === "Kehilangan") return post.status === "Kehilangan";
    if (activeTab === "Ditemukan") return post.status === "Ditemukan";
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800">
      <div className="w-full">
        <Navbar onSearch={(query) => console.log("Search:", query)} />

        {/* 2. MAIN LAYOUT */}
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* KOLOM KIRI: FEED POSTINGAN (col-span-8) */}
            <main className="lg:col-span-8 space-y-6">
              {/* Filter Tabs */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <div className="flex gap-2">
                  {["Semua", "Kehilangan", "Ditemukan"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                        activeTab === tab
                          ? "bg-black text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* List Postingan */}
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-4"
                  >
                    {/* Header Post */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.avatar}
                          alt={post.user}
                          className="h-10 w-10 rounded-full bg-gray-100"
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            {post.user}
                          </h3>
                          <p className="text-xs text-gray-400">{post.time}</p>
                        </div>
                      </div>
                      {/* Badge Status */}
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          post.status === "Kehilangan"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {post.status}
                      </span>
                    </div>

                    {/* Body Post */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-bold text-gray-900">
                        {post.title}
                      </h2>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                        <span>
                          📍 Lokasi:{" "}
                          <strong className="text-gray-700">
                            {post.location}
                          </strong>
                        </span>
                        <span>
                          📁 Kategori:{" "}
                          <strong className="text-gray-700">
                            {post.category}
                          </strong>
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {post.description}
                      </p>
                    </div>

                    {/* Foto Barang (Opsional) */}
                    {post.image && (
                      <div className="overflow-hidden rounded-xl border border-gray-100 max-h-72">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    {/* Footer Post & Action */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <a
                        href={`https://wa.me/${post.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
                      >
                        Hubungi Whatsapp
                      </a>
                      <button className="text-xs font-medium text-gray-500 hover:text-black">
                        Bookmark / Simpan
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </main>

            {/* KOLOM KANAN: SIDEBAR (col-span-4) - Hidden di Mobile */}
            <aside className="hidden lg:col-span-4 lg:block space-y-6">
              {/* Banner CTA */}
              <div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 text-white space-y-3">
                <h3 className="text-lg font-bold leading-snug">
                  Kehilangan barang di kampus atau sekitarnya?
                </h3>
                <p className="text-xs text-gray-300">
                  Buat laporan segera untuk membantu barangmu cepat ditemukan
                  oleh teman-teman kampus.
                </p>
                <Link
                  to="/buat-laporan"
                  className="inline-block w-full rounded-xl bg-white py-2.5 text-center text-xs font-bold text-black transition hover:bg-gray-100"
                >
                  Buat Laporan Sekarang
                </Link>
              </div>

              {/* Menu Navigasi Sidebar */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Navigasi
                  </p>
                  <nav className="flex flex-col space-y-1 text-sm font-medium">
                    <Link
                      to="/"
                      className="rounded-lg bg-gray-100 px-3 py-2 text-black"
                    >
                      Beranda
                    </Link>
                    <Link
                      to="/buat-laporan"
                      className="rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      Buat Laporan
                    </Link>
                    <Link
                      to="/tersimpan"
                      className="rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      Tersimpan
                    </Link>
                    <Link
                      to="/profil"
                      className="rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      Profil Saya
                    </Link>
                  </nav>
                </div>

                <div className="border-t border-gray-100 pt-3 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Bantuan
                  </p>
                  <nav className="flex flex-col space-y-1 text-sm font-medium">
                    <Link
                      to="/panduan"
                      className="rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      Panduan Keamanan
                    </Link>
                    <Link
                      to="/faq"
                      className="rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      Pertanyaan Umum
                    </Link>
                    <a
                      href="#"
                      className="rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      Hubungi Admin
                    </a>
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
