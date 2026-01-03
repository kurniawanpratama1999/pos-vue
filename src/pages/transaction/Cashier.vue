<script setup lang="ts">
import UiButton from "@/components/UiButton.vue";
import UiFormControl from "@/components/UiFormControl.vue";
import UiFormSelect from "@/components/UiFormSelect.vue";
import UiIcon from "@/components/UiIcon.vue";
import { categories, products } from "@/store/dummyData";
import { computed, ref, watch } from "vue";

const searchProduct = ref<string>("");
const searchCategory = ref<string>("");

const copiedProduct = products.map((p: any) => ({
  ...p,
  category_name: categories[p.category_id - 1]?.name,
  quantity: p.quantity ?? 0,
  isActive: true,
}));
const filterProduct = ref<any>(copiedProduct);

watch(
  [searchProduct, searchCategory],
  (items) => {
    const productIndex = items[0];
    const categoryIndex = items[1];

    filterProduct.value = filterProduct.value.map((p: any) => {
      const byName = p.name
        .toLocaleLowerCase()
        .includes(productIndex.toLocaleLowerCase());

      const byCategoryName = p.category_name
        ?.toLocaleLowerCase()
        .includes(productIndex.toLocaleLowerCase());

      const byCategoryId = p.category_id.toString().includes(categoryIndex);

      if ((byName || byCategoryName) && byCategoryId) {
        return { ...p, isActive: true };
      } else {
        return { ...p, isActive: false };
      }
    });
  },

  { immediate: true }
);

const increment = (id: number) => {
  const findProduct = filterProduct.value.find((p: any) => p.id === id);
  if (findProduct) {
    findProduct.quantity = findProduct.quantity + 1;
  }
};
const decrement = (id: number) => {
  const findProduct = filterProduct.value.find((p: any) => p.id === id);
  if (findProduct && findProduct.quantity > 0) {
    findProduct.quantity = findProduct.quantity - 1;
  }
};
const clear = () => {
  filterProduct.value = filterProduct.value.map((p: any) => ({
    ...p,
    quantity: 0,
  }));
};
const deleteById = (id: number) => {
  filterProduct.value = filterProduct.value.map((p: any) =>
    p.id == id
      ? {
          ...p,
          quantity: 0,
        }
      : { ...p }
  );
};
const handleTrx = (name: string) => {
  searchProduct.value = name;
};
const numberToRupiah = (nominal: number) => {
  return new Intl.NumberFormat("id-ID").format(nominal);
};

const trxs = computed(() => {
  return filterProduct.value.filter((p: any) => p.quantity > 0);
});

const subtotal = computed(() => {
  const nominal = trxs.value.reduce(
    (a: any, b: any) => a + b.price * b.quantity,
    0
  );
  return numberToRupiah(nominal);
});

const tax = computed(() => {
  const nominal = trxs.value.reduce(
    (a: any, b: any) => a + b.price * b.quantity,
    0
  );
  return numberToRupiah(nominal * 0.1);
});

const total = computed(() => {
  const subtotalStrToNumber = subtotal.value.replace(".", "");
  const taxStrToNumber = tax.value.replace(".", "");
  return numberToRupiah(Number(subtotalStrToNumber) + Number(taxStrToNumber));
});
</script>

<template>
  <div class="grid grid-cols-[1fr_450px]">
    <section class="h-[calc(100dvh-3rem)] overflow-y-auto overflow-x-hidden">
      <div class="grid grid-cols-2 max-w-lg mx-auto gap-3 p-4">
        <UiFormControl
          v-model="searchProduct"
          id="search-product"
          label="Product"
          input-style="bg-neutral-100"
          placeholder="Search Product"
          :required="false" />
        <UiFormSelect
          v-model="searchCategory"
          id="search-product"
          name="Search product"
          label="category"
          input-style="bg-neutral-100"
          :required="false"
          :isBlank="true"
          :items="
            [...categories].map((c) => ({ ...c, id: c.id.toString() }))
          " />
      </div>
      <div class="grid grid-cols-2 gap-5 p-4">
        <template v-for="(product, iProduct) in filterProduct" :key="iProduct">
          <div
            v-if="product.isActive"
            :class="[
              'flex gap-2 shadow rounded p-2',
              'bg-neutral-100 hover:bg-neutral-50',
              product.quantity > 0
                ? 'border-l-4 border-amber-500'
                : 'border-l-4 border-transparent hover:border-emerald-400',
            ]">
            <div
              @click="increment(product.id)"
              class="min-h-32 max-h-32 min-w-32 max-w-32 rounded bg-neutral-300 cursor-pointer"></div>
            <div class="flex flex-col w-full">
              <h2
                :class="[
                  'text-lg font-bold',
                  product.quantity > 0 ? 'text-amber-600' : 'text-black',
                ]">
                {{ product.name }}
              </h2>
              <p>{{ product.description }}</p>
              <div class="mt-auto py-2 flex items-center justify-between">
                <p class="text-lg font-bold text-emerald-600 font-mono">
                  {{
                    new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(product.price)
                  }}
                </p>

                <div
                  class="flex items-center gap-x-2 rounded bg-neutral-300/30 px-3">
                  <button
                    @click="decrement(product.id)"
                    class="text-xl font-bold text-red-500">
                    -
                  </button>
                  <label :for="`${product.id}-${product.name}`">
                    <input
                      type="number"
                      :name="`${product.id}-${product.name}`"
                      :id="`${product.id}-${product.name}`"
                      min="0"
                      max="99"
                      :value="product.quantity"
                      class="py-1 border-0 outline-0 text-center" />
                  </label>
                  <button
                    @click="increment(product.id)"
                    class="text-xl font-bold text-emerald-500">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>

    <!-- TRX -->
    <section
      class="h-[calc(100dvh-3rem)] bg-neutral-100 shadow p-2 grid grid-rows-[auto_1fr_auto]">
      <div class="flex items-center mb-1">
        <table class="text-xs [&_td]:text-nowrap [&_td]:p-1 w-full">
          <thead>
            <tr>
              <th></th>
              <th class="w-full"></th>

              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Running ID</td>
              <td>: 1234567890</td>

              <td>Cashier</td>
              <td>: Kurniawan Pratama</td>
            </tr>
            <tr>
              <td>Date Now</td>
              <td>: 01 Januari 2026</td>
              <td>Employee ID</td>
              <td>: 1234567890</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="overflow-y-auto relative">
        <table
          class="text-xs [&_td]:text-nowrap [&_th]:py-2 [&_th]:px-2 [&_td]:py-2 w-full text-left">
          <thead class="bg-emerald-400 text-white sticky top-0">
            <tr>
              <th></th>
              <th class="w-full">Name</th>
              <th colspan="2">Disc.</th>
              <th colspan="2" class="px-0!">Qty</th>
              <th colspan="2">Subtotal</th>
            </tr>
          </thead>

          <tbody>
            <template v-if="trxs">
              <tr
                v-for="(product, iProduct) in trxs"
                :key="`trxs-${iProduct}`"
                class="[&_td]:align-text-top border-b-2 border-neutral-200 cursor-pointer">
                <td class="pr-2 align-middle">
                  <button @click="deleteById(product.id)">
                    <UiIcon icon="delete" class="text-xs text-red-500" />
                  </button>
                </td>

                <td class="pr-3" @click="handleTrx(product.name)">
                  {{ product.name }}
                </td>

                <td class="pr-1 font-mono">Rp</td>
                <td class="pr-3 font-mono">0</td>

                <td class="pr-1 font-mono">x</td>
                <td class="pr-3 font-mono">{{ product.quantity }}</td>

                <td class="pr-1 font-mono">Rp</td>
                <td class="pr-3 text-right font-mono">
                  {{ numberToRupiah(product.price * product.quantity) }}
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <div class="h-fit">
        <div class="flex items-center gap-2">
          <UiButton class-name="w-full" color="blue" @click="clear"
            >Clear</UiButton
          >
          <UiButton class-name="w-full">Syncronize</UiButton>
        </div>
        <div>
          <table class="[&_td]:text-nowrap [&_td]:p-1">
            <thead>
              <tr>
                <th class="w-full"></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody class="[&_td]:last:text-right">
              <tr>
                <td>Subtotal</td>
                <td>Rp</td>
                <td>
                  {{ subtotal }}
                </td>
              </tr>
              <tr>
                <td>Pajak (10%)</td>
                <td>Rp</td>
                <td>{{ tax }}</td>
              </tr>
              <tr>
                <td>Total ({{ trxs.length }} items)</td>
                <td>Rp</td>
                <td>{{ total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
