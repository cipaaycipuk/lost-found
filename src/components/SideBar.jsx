import { Link } from "react-router-dom";
import { TriangleAlert, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function SideBar() {
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
          Selengkapnya <ArrowRight size={10} className="text-[#001994]" />
        </Link>
      </div>
    </aside>
  );
}
