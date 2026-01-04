<script setup lang="ts">
import UiActiveLink from "@/components/UiActiveLink.vue";
import UiIcon from "@/components/UiIcon.vue";

interface Props {
  isAsideActive?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isAsideActive: false,
});
</script>

<template>
  <aside
    :class="[
      'fixed top-12',
      isAsideActive ? 'left-0' : '-left-(--container-4xs)',
      'bottom-0 w-4xs bg-neutral-100 shadow z-100',
    ]">
    <nav class="p-3 space-y-5">
      <!-- MASTER MENU -->
      <div class="flex flex-col">
        <h2
          class="border-b-2 border-neutral-200 font-bold text-neutral-700 py-1 flex items-center gap-x-1">
          <UiIcon icon="crown" />
          Master Menu
        </h2>
        <ul class="flex flex-col py-1 space-y-1.5 list-disc pl-5 text-sm">
          <li>
            <UiActiveLink :to="{ name: 'user' }"> User </UiActiveLink>
          </li>
          <li>
            <UiActiveLink :to="{ name: 'role' }"> Rolename </UiActiveLink>
          </li>
          <li class="list-none"></li>
          <li>
            <UiActiveLink :to="{ name: 'url' }"> Url </UiActiveLink>
          </li>
          <li>
            <UiActiveLink :to="{ name: 'permission' }">
              Permission
            </UiActiveLink>
          </li>
        </ul>
      </div>

      <!-- General Menu -->
      <div class="flex flex-col">
        <h2
          class="border-b-2 border-neutral-200 font-bold text-neutral-700 py-1 flex items-center gap-x-1">
          <UiIcon icon="general" />
          General Menu
        </h2>
        <ul class="flex flex-col py-1 space-y-1.5 list-disc pl-5 text-sm">
          <li>
            <UiActiveLink :to="{ name: 'product' }"> Product </UiActiveLink>
          </li>
          <li>
            <UiActiveLink :to="{ name: 'variant' }">
              Product Variant
            </UiActiveLink>
          </li>
          <li>
            <UiActiveLink :to="{ name: 'category' }">
              Product Category
            </UiActiveLink>
          </li>
          <li class="list-none"></li>
          <li>
            <UiActiveLink :to="{ name: 'discount' }"> Discount </UiActiveLink>
          </li>
          <li>
            <UiActiveLink :to="{ name: 'condition' }">
              Discount Condition
            </UiActiveLink>
          </li>
        </ul>
      </div>

      <!-- Navbar Menu -->
      <div class="flex flex-col lg:hidden">
        <h2
          class="border-b-2 border-neutral-200 font-bold text-neutral-700 py-1 flex items-center gap-x-1">
          <UiIcon icon="general" />
          Navigation Menu
        </h2>
        <ul class="flex flex-col py-1 space-y-1.5 list-disc pl-5 text-sm">
          <li>
            <UiActiveLink to="/"> Dashboard </UiActiveLink>
          </li>
          <li>
            <UiActiveLink :to="{ name: 'transaction' }">
              Transaction
            </UiActiveLink>
          </li>
          <li class="list-none"></li>
          <li>
            <UiActiveLink to="/"> Order Detail </UiActiveLink>
          </li>
          <li>
            <UiActiveLink to="/"> Logout </UiActiveLink>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>
