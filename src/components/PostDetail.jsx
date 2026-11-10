import { useState } from "react";
import { ArrowLeft, MessageCircle, Bookmark, X } from "lucide-react";

export default function PostDetail({ post, onBack }) {
  const [commentText, setCommentText] = useState("");
  const isKehilangan = post.type === "Kehilangan";
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Dummy Komentar bawaan jika tidak ada di objek post
  const comments = post.comments || [
    {
      id: 1,
      user: "Agatha Chelsea",
      avatar: "/users/emily.jpg",
      text: "Di ujung sebelah mana nya kak?",
    },
    {
      id: 2,
      user: "Rony Parulian",
      avatar: "/users/rony.jpg",
      text: "Iya kak ujung mananya ya",
      isReply: true, // Untuk posisi menjorok ke dalam
    },
  ];

  const handleSendComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    // Logika kirim komentar dapat ditambahkan di sini
    setCommentText("");
  };

  return (
    <article
      className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm space-y-6 border-l-[6px] transition ${
        isKehilangan ? "border-l-[#FF5F00]" : "border-l-[#0025D7]"
      }`}
    >
      {/* 1. Tombol Kembali */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-black transition"
      >
        <ArrowLeft size={16} />
        <span>Kembali</span>
      </button>

      {/* 2. Header Post (User Avatar & Status Badge) */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.user}
            className="h-10 w-10 rounded-full bg-gray-100 object-cover"
          />
          <div>
            <h3 className="text-md font-bold text-gray-900">{post.author.name}</h3>
            <p className="text-xs text-gray-400">{post.timeAgo}</p>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-bold ${
            isKehilangan
              ? "bg-[#FCEEE3] text-[#FF5F00]"
              : "bg-[#D8DEFF] text-[#0025D7]"
          }`}
        >
          {post.type}
        </span>
      </div>

      {/* 3. Foto Gambar Utama */}
      {post.image && (
        <div
          className="aspect-square w-full overflow-hidden rounded-md bg-gray-100 cursor-pointer"
          onClick={() => setIsImageOpen(true)}
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover object-center transition hover:scale-[1.02]"
          />
        </div>
      )}

      {/* 4. Judul & Tabel Informasi Detail */}
      <div className="space-y-4">
        <h1 className="text-lg font-bold text-gray-900">{post.title}</h1>

        {/* Tabel Informasi */}
        <div className="rounded-xl border border-gray-100 divide-y divide-gray-100 text-xs">
          <div className="grid grid-cols-12 p-3 bg-gray-50/50">
            <span className="col-span-4 text-gray-400">Lokasi terakhir</span>
            <span className="col-span-8 font-semibold text-gray-800">
              {post.location}
            </span>
          </div>
          <div className="grid grid-cols-12 p-3">
            <span className="col-span-4 text-gray-400">Tanggal hilang</span>
            <span className="col-span-8 font-semibold text-gray-800">
              {post.date || "12 September 2026"}
            </span>
          </div>
          <div className="grid grid-cols-12 p-3 bg-gray-50/50">
            <span className="col-span-4 text-gray-400">Kategori</span>
            <span className="col-span-8 font-semibold text-gray-800">
              {post.category}
            </span>
          </div>
          <div className="grid grid-cols-12 p-3">
            <span className="col-span-4 text-gray-400">Status</span>
            <span className="col-span-8 font-semibold text-gray-800">
              {isKehilangan ? "Masih dicari" : "Sudah ditemukan"}
            </span>
          </div>
        </div>

        {/* Section Deskripsi */}
        <div className="space-y-1.5 pt-2">
          <h4 className="text-xs font-bold text-gray-900">Deskripsi</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            {post.description}
          </p>
        </div>

        {/* Tombol Aksi */}
        <div className="flex items-center gap-3 pt-2">
          <a
            href={`https://wa.me/${post.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-neutral-800"
          >
            <MessageCircle size={14} />
            <span>Hubungi Whatsapp</span>
          </a>

          <button className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition">
            <Bookmark size={14} />
            <span>Simpan</span>
          </button>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 5. Section Komentar */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-gray-900">
          Komentar ({comments.length})
        </h3>

        {/* List Komentar */}
        <div className="space-y-3">
          {comments.map((item) => (
            <div
              key={item.id}
              className={`flex items-start gap-2.5 ${
                item.isReply ? "ml-6" : ""
              }`}
            >
              <img
                src={item.avatar}
                alt={item.user}
                className="h-7 w-7 rounded-full bg-gray-100 object-cover"
              />
              <div className="rounded-2xl bg-gray-50 px-3.5 py-2 space-y-0.5 text-xs">
                <span className="font-bold text-gray-900 block">
                  {item.user}
                </span>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Form Komentar */}
        <form
          onSubmit={handleSendComment}
          className="flex items-center gap-2 pt-2"
        >
          <input
            type="text"
            placeholder="Tulis komentar..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-black focus:bg-white transition"
          />
          <button
            type="submit"
            className="rounded-lg bg-gray-200 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-black hover:text-white transition"
          >
            Kirim
          </button>
        </form>
      </div>
      {isImageOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsImageOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsImageOpen(false)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X size={28} />
          </button>

          {/* Full Image */}
          <img
            src={post.image}
            alt={post.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw] rounded-md object-contain"
          />
        </div>
      )}
    </article>
  );
}
