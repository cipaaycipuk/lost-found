export const currentUser = {
  name: 'Syifa Nur Aini',
  email: 'agatha.chelsea@widyatama.ac.id',
  whatsapp: '0813 1212 3476',
  avatar: '/users/emily.jpg', 
}

export const myPosts = [
  {
    id: 1,
    author: currentUser,
    timeAgo: '21 detik yang lalu',
    type: 'kehilangan', // 'kehilangan' | 'ditemukan'
    status: 'open', // 'open' | 'selesai'
    image: '/posts-img/imusic.jpg',
    title: 'Handphone',
    location: 'Foodcourt',
    date: '10 September 2026',
    category: 'Handphone',
    description: 'Dicari tumbler dengan motif leopard, terakhir simpen di gedung B lt.406',
    commentCount: 5,
  },
]

export const savedPosts = []