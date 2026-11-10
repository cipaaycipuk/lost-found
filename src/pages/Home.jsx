import { useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import PostCard from "../components/PostCard";
import PostDetail from "../components/PostDetail";

// Dummy Data
const INITIAL_POSTS = [
  {
    author: {
      name: "Rony Parulian",
      email: 'agatha.chelsea@widyatama.ac.id',
      whatsapp: '0813 1212 3476',
      avatar: "/users/rony.jpg", 
    },
    id: 1,
    timeAgo: "21 detik yang lalu",
    type: "Kehilangan",
    status: 'open', // 'open' | 'selesai'
    image: "/posts-img/tumbler.jpg",
    title: "Tumbler minum leopard",
    location: "Foodcourt",
    date: "10 September 2026",
    category: "Handphone",
    description:
      "Dicari tumbler dengan motif leopard, terakhir simpen di gedung B lt.406",
    commentsCount: 5,
  },
  {
    author: {
      name: "Rony Parulian",
      email: 'agatha.chelsea@widyatama.ac.id',
      whatsapp: '0813 1212 3476',
      avatar: "/users/rony.jpg", 
    },
    id: 1,
    timeAgo: "21 detik yang lalu",
    type: "Ditemukan",
    status: 'open', // 'open' | 'selesai'
    image: "/posts-img/tumbler.jpg",
    title: "Tumbler minum leopard",
    location: "Foodcourt",
    date: "10 September 2026",
    category: "Handphone",
    description:
      "Dicari tumbler dengan motif leopard, terakhir simpen di gedung B lt.406",
    commentsCount: 5,
  },
  {
    author: {
      name: "Rony Parulian",
      email: 'agatha.chelsea@widyatama.ac.id',
      whatsapp: '0813 1212 3476',
      avatar: "/users/rony.jpg", 
    },
    id: 1,
    timeAgo: "21 detik yang lalu",
    type: "Kehilangan",
    status: 'open', // 'open' | 'selesai'
    image: "/posts-img/tumbler.jpg",
    title: "Tumbler minum leopard",
    location: "Foodcourt",
    date: "10 September 2026",
    category: "Handphone",
    description:
      "Dicari tumbler dengan motif leopard, terakhir simpen di gedung B lt.406",
    commentsCount: 5,
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
  );
}
