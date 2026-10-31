import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TriangleAlert, ArrowRight, MapPin, CalendarDays, MessageSquareReply, Bookmark, PhoneLog } from "lucide-react";

// Dummy Data Simulasi Feed Postingan
const INITIAL_POSTS = [
  {
    id: 1,
    user: "Rayyanza Cipung",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rayyanza",
    time: "21 detik yang lalu",
    status: "Kehilangan", // 'Kehilangan' | 'Ditemukan'
    title: "Tumbler minum leopard",
    location: "Foodcourt",
    date: "10 September 2026",
    category: "Handphone",
    description:
      "Dicari tumbler dengan motif leopard, terakhir simpen di gedung B lt.406",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=500&auto=format&fit=crop",
    whatsapp: "08123456789",
    commentsCount: 5,
  },
  {
    id: 2,
    user: "Rayyanza Cipung",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rayyanza2",
    time: "2 hari yang lalu",
    status: "Ditemukan",
    title: "Hp Cipunk",
    location: "Foodcourt",
    date: "10 September 2026",
    category: "Handphone",
    description:
      "Kemarin aku nemu hp di foodcourt di kursi bagian depan bakmie, kalo ada yg merasa langsung aja chat aku",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop",
    whatsapp: "08987654321",
    commentsCount: 0,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [category, setCategory] = useState("Semua kategori");
  const [location, setLocation] = useState("Semua");
  const [sortBy, setSortBy] = useState("Terbaru");

  // Filter Postingan berdasarkan Tab
  const filteredPosts = INITIAL_POSTS.filter((post) => {
    if (activeTab === "Kehilangan") return post.status === "Kehilangan";
    if (activeTab === "Ditemukan") return post.status === "Ditemukan";
    return true;
  });

  const handleResetFilter = () => {
    setActiveTab("Semua");
    setCategory("Semua kategori");
    setLocation("Semua");
    setSortBy("Terbaru");
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 flex flex-col justify-between w-full">
      <div className="w-full">
        {/* Navbar */}
        <Navbar onSearch={(query) => console.log("Search:", query)} />

        {/* MAIN LAYOUT: Grid 12 Kolom */}
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-10 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* 1. KOLOM KIRI: SIDEBAR FILTER (col-span-4) */}
            <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
              {/* Box Filter */}
              <div className="rounded-lg border border-gray-200/80 bg-white p-5 shadow-sm space-y-4">
                {/* Jenis Laporan Tab */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-2">
                    Jenis Laporan
                  </label>
                  <div className="flex gap-1 rounded-lg bg-gray-100/80 p-1">
                    {["Semua", "Kehilangan", "Ditemukan"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 rounded-lg py-1.5 text-xs font-medium transition ${
                          activeTab === tab
                            ? "bg-black text-white shadow-sm"
                            : "text-gray-600 hover:text-black"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Select Kategori */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">
                    Kategori
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs text-gray-700 outline-none focus:border-black focus:bg-white transition"
                  >
                    <option>Semua kategori</option>
                    <option>Elektronik</option>
                    <option>Aksesori</option>
                    <option>Dokumen</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                {/* Select Lokasi */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">
                    Lokasi
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs text-gray-700 outline-none focus:border-black focus:bg-white transition"
                  >
                    <option>Semua</option>
                    <option>Foodcourt / Kantin</option>
                    <option>Gedung A</option>
                    <option>Gedung B</option>
                    <option>Perpustakaan</option>
                  </select>
                </div>

                {/* Urutkan Berdasarkan */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">
                    Urutkan berdasarkan
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs text-gray-700 outline-none focus:border-black focus:bg-white transition"
                  >
                    <option>Terbaru</option>
                    <option>Terlama</option>
                  </select>
                </div>

                {/* Reset Filter Link */}
                <button
                  onClick={handleResetFilter}
                  className="text-xs font-medium text-gray-500 underline hover:text-black transition pt-1 block"
                >
                  Reset filter
                </button>
              </div>

              {/* Box Panduan Singkat Keamanan */}
              <div className="rounded-lg border border-gray-200/80 bg-white p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-black font-semibold text-sm leading-tight">
                  <TriangleAlert size={18} className="text-amber-600" />
                  <span>Panduan Singkat Keamanan</span>
                </div>
                <ul className="text-xs text-gray-700 space-y-1.5 list-disc pl-4 leading-tight">
                  <li>Jangan tulis info pribadi (PIN, nomor KTM) di deskripsi.</li>
                  <li>Minta pemilik menyebut ciri barang sebelum menyerahkan.</li>
                  <li>Bertemu di tempat ramai di area kampus.</li>
                </ul>
                <Link
                  to="/panduan"
                  className="text-xs gap-1 font-semibold text-[#001994] underline pt-1 flex items-center"
                >
                  Selengkapnya <ArrowRight size={10} className="text-[#001994]"/>
                </Link>
              </div>
            </aside>

            {/* 2. KOLOM KANAN: UTAS POSTINGAN FEED (col-span-8) */}
            <main className="lg:col-span-8 space-y-5">
              {filteredPosts.map((post) => {
                const isKehilangan = post.status === "Kehilangan";

                return (
                  <article
                    key={post.id}
                    className={`rounded-lg border border-gray-200 bg-white p-5 shadow-sm space-y-4 border-l-5 transition hover:shadow-md ${
                      isKehilangan ? "border-l-[#FF5F00]" : "border-l-[#0025D7]"
                    }`}
                  >
                    {/* Header Post (Avatar, Nama, Waktu & Badge Status) */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.avatar}
                          alt={post.user}
                          className="h-9 w-9 rounded-full bg-gray-100 object-cover"
                        />
                        <div>
                          <h3 className="text-md font-bold text-gray-900">
                            {post.user}
                          </h3>
                          <p className="text-[11px] text-gray-400">
                            {post.time}
                          </p>
                        </div>
                      </div>

                      {/* Badge Status */}
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-bold ${
                          isKehilangan
                            ? "bg-[#FCEEE3] text-[#FF5F00]"
                            : "bg-[#D8DEFF] text-[#0025D7]"
                        }`}
                      >
                        {post.status}
                      </span>
                    </div>

                    {/* Foto Barang */}
                    {post.image && (
                      <div className="overflow-hidden rounded-md bg-gray-100 max-h-[380px]">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    {/* Detail Konten & Tags */}
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-5">
                        {post.title}
                      </h2>

                      {/* Pills Metadata (Lokasi, Tanggal, Kategori) */}
                      <div className="flex flex-wrap gap-3 text-sm mb-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100/90 px-3 py-2 font-medium text-gray-500 border border-black/10">
                          <MapPin size={18} className="text-gray-500/70"/> {post.location}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100/90 px-3 py-1 font-medium text-gray-500 border border-black/10">
                          <CalendarDays size={18} className="text-gray-500/70" /> {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100/90 px-3 py-1 font-medium text-gray-500 border border-black/10">
                          {post.category}
                        </span>
                      </div>

                      {/* Deskripsi */}
                      <p className="text-md text-gray-600 leading-relaxed">
                        {post.description}
                      </p>
                    </div>

                    {/* Footer Post & Whatsapp Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      {/* Icon Komentar & Simpan */}
                      <div className="flex items-center gap-5 text-sm text-gray-400 font-medium">
                        <button className="flex items-center gap-2 hover:text-black transition">
                          <MessageSquareReply size={20}/> <span>{post.commentsCount || 0}</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-black transition">
                          <Bookmark size={20}/> <span>Simpan</span>
                        </button>
                      </div>

                      {/* Tombol Whatsapp */}
                      <a
                        href={`https://wa.me/${post.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-[#232323] px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
                      >
                        <PhoneLog size={18} /> Hubungi Whatsapp
                      </a>
                    </div>
                  </article>
                );
              })}
            </main>

          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}