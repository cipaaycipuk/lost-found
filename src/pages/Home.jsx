import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterSidebar";
import PostCard from "../components/PostCard";

// Dummy Data
const INITIAL_POSTS = [
  {
    id: 1,
    user: "Rayyanza Cipung",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rayyanza",
    time: "21 detik yang lalu",
    status: "Kehilangan",
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

  // Filter berdasarkan jenis laporan
  const filteredPosts = INITIAL_POSTS.filter((post) => {
    if (activeTab === "Kehilangan") {
      return post.status === "Kehilangan";
    }

    if (activeTab === "Ditemukan") {
      return post.status === "Ditemukan";
    }

    return true;
  });

  // Reset Filter
  const handleResetFilter = () => {
    setActiveTab("Semua");
    setCategory("Semua kategori");
    setLocation("Semua");
    setSortBy("Terbaru");
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 flex flex-col justify-between w-full">
      <div className="w-full">
        <Navbar onSearch={(query) => console.log("Search:", query)} />

        <div className="mx-auto max-w-7xl px-4 pb-8 pt-10 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* Sidebar Filter */}
            <FilterSidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              category={category}
              setCategory={setCategory}
              location={location}
              setLocation={setLocation}
              sortBy={sortBy}
              setSortBy={setSortBy}
              onReset={handleResetFilter}
            />

            {/* Feed Postingan */}
            <main className="lg:col-span-8 space-y-5">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </main>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
