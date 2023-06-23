export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'solar:home-outline' },
  },
  {
    title: 'Collection',
    // to: { name: 'collection' },
    icon: { icon: 'bx:collection' },
    children: [
      { title: 'Lomba', to: 'forum-lomba' },
      { title: 'Scholarship', to: 'forum-scholarship' },
      { title: 'Seminar & Webinar', to: 'forum-seminarwebinar' },
      { title: 'Workshop & Pelatihan', to: 'forum-workshoppelatihan' },
      { title: 'Internship', to: 'forum-internship' },
    ]
  },
]
