
import {
  MapPin,
  CalendarDays,
  MessageSquareReply,
  Bookmark,
  PhoneLog,
} from "lucide-react";

export default function PostCard({ post }) {
  const isKehilangan = post.status === "Kehilangan";

  return (
    <article
      className={`rounded-lg border border-gray-200 bg-white p-5 shadow-sm space-y-4 border-l-5 transition hover:shadow-md ${
        isKehilangan
          ? "border-l-[#FF5F00]"
          : "border-l-[#0025D7]"
      }`}
    >
      {/* Header Post */}
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

      {/* Detail Konten */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-5">
          {post.title}
        </h2>

        <div className="flex flex-wrap gap-3 text-sm mb-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-100/90 px-3 py-2 font-medium text-gray-500 border border-black/10">
            <MapPin size={18} />
            {post.location}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-gray-100/90 px-3 py-1 font-medium text-gray-500 border border-black/10">
            <CalendarDays size={18} />
            {post.date}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-gray-100/90 px-3 py-1 font-medium text-gray-500 border border-black/10">
            {post.category}
          </span>
        </div>

        <p className="text-md text-gray-600 leading-relaxed">
          {post.description}
        </p>
      </div>

      {/* Footer Post */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-5 text-sm text-gray-400 font-medium">
          <button className="flex items-center gap-2 hover:text-black transition">
            <MessageSquareReply size={20} />
            <span>{post.commentsCount || 0}</span>
          </button>

          <button className="flex items-center gap-1 hover:text-black transition">
            <Bookmark size={20} />
            <span>Simpan</span>
          </button>
        </div>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${post.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-[#232323] px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          <PhoneLog size={18} />
          Hubungi Whatsapp
        </a>
      </div>
    </article>
  );
}
