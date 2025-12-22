<template lang="html">
  <!-- MAIN START -->
  <main :class="['min-h-dvh w-full']">
    <div :class="['container mx-auto h-full']">
      <router-view />
    </div>
  </main>
  <!-- MAIN END -->

  <!-- FOOTER START -->
  <footer :class="['h-10 w-full']">
    <div
      :class="['containter mx-auto h-full', 'bg-emerald-700', 'flex-center']"
    >
      <a
        href="https://github.com/kurniawanpratama1999/pos-vue"
        class="block text-center text-white text-xs"
      >
        github:kurniawanpratama1999/pos-vue
      </a>
    </div>
  </footer>
  <!-- FOOTER END-->
</template>
