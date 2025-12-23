<script setup lang="ts">
import { useDataStore } from "../../store/data";
import UiActiveLink from "./UiActiveLink.vue";
const dataStore = useDataStore();
const me = dataStore.original.me;
</script>

<template>
  <aside
    :class="[
      'fixed top-0 left-0 bottom-0',
      'w-(--container-3xs)',
      'bg-neutral-100',
    ]"
  >
    <div class="p-2 h-16">
      <div class="bg-emerald-400 rounded p-2 text-white flex items-center">
        <h1 class="text-2xl font-bold">POSVUE <small>1.0</small></h1>
      </div>
    </div>
    <div class="p-2 space-y-4 h-[calc(100dvh-4rem)] flex flex-col">
      <nav id="nav-1">
        <h2 class="text-lg font-bold mb-1"># Master Setting</h2>
        <ul class="flex flex-col pl-8 gap-1 list-disc">
          <!-- <li><UiActiveLink :href="{name: 'anchor'}">Anchor</UiActiveLink></li> -->
          <li><UiActiveLink :href="{ name: 'role' }">Role</UiActiveLink></li>
          <li><UiActiveLink :href="{ name: 'user' }">User</UiActiveLink></li>
          <!-- <li><UiActiveLink href="">Acc  ess</UiActiveLink></li> -->
        </ul>
      </nav>

      <!-- <nav id="nav-2">
        <h2 class="text-lg font-bold mb-1"># General Setting</h2>
        <ul class="flex flex-col pl-8 gap-1 list-disc">
          <li><UiActiveLink href="">Category</UiActiveLink></li>
          <li><UiActiveLink href="">Product</UiActiveLink></li>
          <li><UiActiveLink href="">Variant</UiActiveLink></li>
        </ul>
      </nav> -->

      <!-- <nav id="nav-3">
        <h2 class="text-lg font-bold mb-1"># Operator Access</h2>
        <ul class="flex flex-col pl-8 gap-1 list-disc">
          <li><UiActiveLink href="">Cashier</UiActiveLink></li>
          <li><UiActiveLink href="">History</UiActiveLink></li>
          <li><UiActiveLink href="">Report</UiActiveLink></li>
        </ul>
      </nav> -->

      <nav class="mt-auto border-t border-t-neutral-400 pt-2">
        <h2 class="text-lg font-bold mb-1"># {{ me?.name }}</h2>
        <div class="flex flex-col pl-[1.1rem] gap-1">
          <p>Logout</p>
        </div>
      </nav>
    </div>
  </aside>
</template>
