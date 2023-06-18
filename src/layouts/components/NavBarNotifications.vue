<script setup>
import Notifications from '@core/components/Notifications.vue';

// Images

import avatar4 from '@images/avatars/ava-si-3.png';
import avatar8 from '@images/avatars/ava-si-8.png';


const notifications = [
  {
    img: avatar8,
    title: 'Sholarship: Informasi Beasiswa Bank Indonesia 2023 ',
    subtitle: 'Administator FST . March 29, 2023 at 1:43 PM',
    time: 'Today',
  },
  {
    img: avatar4,
    text: 'Tom Holland',
    title: 'Webinar: Growth mindset in Digital Era ',
    subtitle: 'Departement Information Systems . March 20, 2023 at 2:45 PM',
    time: 'Yesterday',
  },
  {
    img: avatar8,
    title: 'New message received 👋🏻',
    subtitle: 'You have 10 unread messages',
    time: '11 Aug',
  },
]
</script>

<template>
  <Notifications :notifications="notifications" />
</template>
