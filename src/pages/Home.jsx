import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterSidebar";
import PostCard from "../components/PostCard";
import PostDetail from "../components/PostDetail";

// Dummy Data
const INITIAL_POSTS = [
  {
    id: 1,
    user: "Rony Parulian",
    avatar: "/users/rony.jpg",
    time: "21 detik yang lalu",
    status: "Kehilangan",
    title: "Tumbler minum leopard",
    location: "Foodcourt",
    date: "10 September 2026",
    category: "Handphone",
    description:
      "Dicari tumbler dengan motif leopard, terakhir simpen di gedung B lt.406",
    image: "/posts-img/tumbler.jpg",
    whatsapp: "08123456789",
    commentsCount: 5,
  },
  {
    id: 2,
    user: "Alyssa Daguise",
    avatar: "/users/alyssa.jpg",
    time: "2 hari yang lalu",
    status: "Ditemukan",
    title: "Hp Cipunk",
    location: "Foodcourt",
    date: "10 September 2026",
    category: "Handphone",
    description:
      "Kemarin aku nemu hp di foodcourt di kursi bagian depan bakmie, kalo ada yg merasa langsung aja chat aku",
    image: "/posts-img/guitar.jpg",
    whatsapp: "08987654321",
    commentsCount: 0,
  },
  {
    id: 3,
    user: "Emily Ashley",
    avatar: "/users/emily.jpg",
    time: "2 hari yang lalu",
    status: "Kehilangan",
    title: "Demokrasi Indonesia",
    location: "Foodcourt",
    date: "10 September 2026",
    category: "Handphone",
    description:
      "Kemarin aku nemu hp di foodcourt di kursi bagian depan bakmie, kalo ada yg merasa langsung aja chat aku",
    image: "/posts-img/imusic.jpg",
    whatsapp: "08987654321",
    commentsCount: 0,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [category, setCategory] = useState("Semua kategori");
  const [location, setLocation] = useState("Semua");
  const [sortBy, setSortBy] = useState("Terbaru");
  const [selectedPost, setSelectedPost] = useState(null);

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
              {selectedPost ? (
                /* Jika ada post yang dipilih -> Tampilkan Detail */
                <PostDetail
                  post={selectedPost}
                  onBack={() => setSelectedPost(null)}
                />
              ) : (
                /* Jika null -> Tampilkan List Postingan */
                filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="cursor-pointer"
                  >
                    <PostCard post={post} />
                  </div>
                ))
              )}
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
