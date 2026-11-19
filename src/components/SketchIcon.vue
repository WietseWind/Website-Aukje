<script setup>
defineProps({ name: { type: String, default: 'paw' } })
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'whatsapp'">
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.5-4.7a8.5 8.5 0 1 1 16-4.3Z" />
      <path d="m8.2 7.4 1.3 2.5-1 1c1 1.8 2 2.8 3.9 3.6l.9-1.1 2.7 1.2c-.2 1.6-1.2 2.1-2.7 1.7-3.9-1.1-6.3-3.5-7-6.7-.2-1 .6-2.1 1.9-2.2Z" />
    </template>
    <template v-else-if="name === 'mail'">
      <rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" />
    </template>
    <template v-else-if="name === 'instagram'">
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'location'">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" />
    </template>
    <template v-else-if="name === 'flower'">
      <path d="M12 7c-5-8-10-1-5 3-9-1-8 8-1 7-5 7 4 10 6 3 3 7 11 3 6-3 8 1 8-8 1-7 4-5-3-11-7-3Z" transform="translate(1 -2) scale(.92)" /><circle cx="12" cy="11" r="2.2" />
    </template>
    <template v-else-if="name === 'heart'">
      <path d="M20.2 5.8c-2-2.2-5.7-1.8-8.2 1.5-2.5-3.3-6.2-3.7-8.2-1.5C-1 11.5 12 20 12 20s13-8.5 8.2-14.2Z" />
    </template>
    <template v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
    </template>
    <template v-else-if="name === 'sun'">
      <circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
    </template>
    <template v-else-if="name === 'chevron'"><path d="m7 10 5 5 5-5" /></template>
    <template v-else-if="name === 'menu'"><path d="M4 8h16M4 16h16" /></template>
    <template v-else-if="name === 'close'"><path d="m6 6 12 12M6 18 18 6" /></template>
    <template v-else>
      <path d="M6.8 14.7C4 17.8 6 21 9 20c2-.7 4-.7 6 0 3 1 5-2.2 2.2-5.3-1.6-1.8-2.9-3.7-5.2-3.7s-3.6 1.9-5.2 3.7Z" />
      <ellipse cx="4.8" cy="9.8" rx="1.8" ry="2.7" transform="rotate(-24 4.8 9.8)" /><ellipse cx="9.2" cy="5.6" rx="1.8" ry="2.6" transform="rotate(-9 9.2 5.6)" /><ellipse cx="14.8" cy="5.6" rx="1.8" ry="2.6" transform="rotate(9 14.8 5.6)" /><ellipse cx="19.2" cy="9.8" rx="1.8" ry="2.7" transform="rotate(24 19.2 9.8)" />
    </template>
  </svg>
</template>
