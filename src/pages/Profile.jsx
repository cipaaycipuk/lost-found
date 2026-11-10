import { useState } from 'react'
import Avatar from '../components/Avatar'
import PostCard from '../components/PostCard'
import { currentUser, myPosts, savedPosts } from '../lib/dummyData'

const TABS = [
  { key: 'posts', label: 'Postingan', items: myPosts },
  { key: 'saved', label: 'Tersimpan', items: savedPosts },
]

export default function Profile() {
  const [activeTab, setActiveTab] = useState('posts')
  const current = TABS.find((tab) => tab.key === activeTab)
  const doneCount = myPosts.filter((post) => post.status === 'selesai').length

  return (
    <div className="mx-auto max-w-4xl px-4 pb-8 pt-10 lg:px-8 mt-8">
      {/* Header profil */}
      <section className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-10 sm:text-left mb-10">
        <Avatar
          src={currentUser.avatar}
          name={currentUser.name}
          className="size-36 shrink-0 text-4xl sm:size-[160px] sm:text-6xl"
        />

        <div className="w-full min-w-0 flex-1">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h1 className="text-3xl font-bold sm:text-4xl">{currentUser.name}</h1>
              <p className="mt-1 break-all text-lg sm:break-normal">{currentUser.email}</p>
              <p className="text-lg">Whatsapp: {currentUser.whatsapp}</p>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-lg border border-neutral-700 px-6 py-2 text-lg hover:bg-white"
            >
              Edit Profil
            </button>
          </div>

          <p className="mt-6 text-lg sm:mt-8">
            {myPosts.length} postingan <span className="mx-2">•</span> {doneCount} selesai
          </p>
        </div>
      </section>

      {/* Tab */}
      <div role="tablist" className="mt-10 flex gap-8 border-b-2 border-gray-300">
        {TABS.map((tab) => {
          const isActive = tab.key === activeTab
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.key)}
              className={`-mb-0.5 border-b-2 pb-3 text-lg ${
                isActive ? 'border-black font-bold' : 'border-transparent text-gray-700'
              }`}
            >
              {tab.label} ({tab.items.length})
            </button>
          )
        })}
      </div>

      {/* Daftar kartu: satu kartu per baris */}
      <div className="mt-6 space-y-6">
        {current.items.length === 0 ? (
          <p className="py-12 text-center text-gray-400">Belum ada {current.label.toLowerCase()}.</p>
        ) : (
          current.items.map((post) => (
            <PostCard key={post.id} post={post} isOwner={activeTab === 'posts'} />
          ))
        )}
      </div>
    </div>
  )
}