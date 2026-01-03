<script setup lang="ts" generic="H extends ArrayLike<string>, B extends object">
import { type RouteRecordName } from "vue-router";
import UiButton from "./UiButton.vue";
import UiFormControl from "./UiFormControl.vue";
import { reactive, ref, Teleport } from "vue";
import UiIcon from "./UiIcon.vue";

interface PropsListDatatable {
  title: string;
  heads: H[];
  bodies: ({ id: number } & B)[];
  addRoute: RouteRecordName;
  editRoute: RouteRecordName;
  apiDelete: string;
}

const props = defineProps<PropsListDatatable>();

const isActionActive = ref<boolean>(false);
const setActionPosition = reactive<{ x: number; y: number }>({ x: 0, y: 0 });
const willActionActive = ref<string | false>(false);
const actionPosition = (event: MouseEvent) => {
  console.log(event.clientX);
  setActionPosition.y = event.clientY;
  setActionPosition.x = event.clientX;
};

const toggleActions = (id: number, event?: MouseEvent) => {
  isActionActive.value = !isActionActive.value;
  if (isActionActive.value) {
    willActionActive.value = `action-${id}`;
    if (event) {
      actionPosition(event);
    }
  } else {
    willActionActive.value = false;
  }
};
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-5">
      <div>
        <h3 class="text-xl font-bold">
          {{ props.title }}
          <small class="text-xs text-black/50 font-normal font-montserrat">
            ~
            {{
              bodies.length == 0
                ? "No data"
                : bodies.length == 1
                ? `1 entry`
                : `${bodies.length} entries`
            }}</small
          >
        </h3>
      </div>
      <UiButton className="flex items-center gap-x-1" :to="{ name: addRoute }">
        <UiIcon icon="plus" />
        <span>Tambah</span>
      </UiButton>
    </div>

    <div class="bg-neutral-100 rounded shadow">
      <div class="flex items-center gap-x-3 p-3 border-b-2 border-neutral-300">
        <UiFormControl
          id="search"
          :required="false"
          class="max-w-3xs"
          variant="dark"
          inputStyle="bg-neutral-200 border-0" />
        <div
          v-if="bodies.length > 10"
          class="ml-auto gap-x-1 flex items-center">
          <label class="text-nowrap" for="rows">rows :</label>
          <input
            class="border-0 outline-0 bg-neutral-200 px-2 py-1 rounded"
            type="number"
            id="rows"
            name="rows"
            :min="Math.floor(bodies.length / 2)"
            max="50"
            :value="Math.floor(bodies.length / 2)" />
        </div>
      </div>

      <div class="overflow-auto">
        <table class="w-full">
          <thead :class="['[&_td]:px-5 [&_td]:py-2 [&_td]:text-nowrap']">
            <tr class="border-b-2 border-neutral-300">
              <td class="w-[50px] sticky left-0 bg-neutral-100">
                <label :for="`check-all`" class="flex justify-center">
                  <input
                    type="checkbox"
                    :name="`check-all`"
                    :id="`check-all`" />
                </label>
              </td>
              <td
                v-for="(head, iHead) in props.heads"
                :key="`head-${iHead}`"
                :class="[
                  iHead == 0
                    ? 'border-r-2 border-neutral-200 sticky left-[50px] bg-neutral-100'
                    : 'border-0',
                ]">
                {{ head }}
              </td>
            </tr>
          </thead>
          <tbody :class="['[&_td]:px-5 [&_td]:py-2 [&_td]:text-nowrap']">
            <tr
              v-for="(body, iBody) in props.bodies"
              :key="`body-${iBody}`"
              :class="[
                willActionActive == `action-${body.id}`
                  ? 'bg-neutral-300'
                  : 'bg-transparent',
                'border-b-2 border-neutral-200 has-checked:bg-black/10 has-checked:italic',
              ]">
              <td :class="'sticky left-0 bg-neutral-100 z-1'">
                <label :for="`check-${body.id}`" class="flex justify-center">
                  <input
                    type="checkbox"
                    :name="`check-${body.id}`"
                    :id="`check-${body.id}`" />
                </label>
              </td>
              <template v-for="([key, val], index) in Object.entries(body)">
                <td
                  v-if="key !== 'id'"
                  :key="`data-${body.id}`"
                  :class="[
                    willActionActive == `action-${body.id}`
                      ? 'bg-neutral-300'
                      : 'bg-neutral-100',
                    index == 1
                      ? 'border-r-2 border-neutral-200 sticky left-[50px] z-1'
                      : 'border-0',
                  ]">
                  <div class="grid grid-cols-[1fr_auto] gap-x-2 relative">
                    <span>{{ val }}</span>
                    <UiButton
                      v-if="index == 1"
                      variant="ghost"
                      @click="toggleActions(body.id, $event)">
                      <UiIcon icon="dotsY" />
                    </UiButton>
                  </div>
                  <Teleport to="body">
                    <div
                      v-if="
                        index == 1 && willActionActive == `action-${body.id}`
                      "
                      class="fixed z-2 top-0 left-0 right-0 bottom-0"
                      @click="toggleActions(body.id)"></div>
                    <div
                      v-if="
                        index == 1 && willActionActive == `action-${body.id}`
                      "
                      :style="{
                        top: `${
                          setActionPosition.y > 550
                            ? setActionPosition.y - 80
                            : setActionPosition.y
                        }px`,
                        left: `${
                          setActionPosition.x > 550
                            ? setActionPosition.x - 110
                            : setActionPosition.x + 10
                        }px`,
                      }"
                      :id="`action-${body.id}-${index}`"
                      :class="[
                        'fixed px-3 py-2 grid gap-1 bg-neutral-50 rounded shadow z-5',
                      ]">
                      <UiButton
                        variant="ghost"
                        :to="{
                          name: props.editRoute,
                          params: { id: body.id },
                        }"
                        class-name="text-left">
                        edit
                      </UiButton>
                      <UiButton
                        @click="console.log('wow')"
                        color="red"
                        variant="ghost"
                        class-name="text-left">
                        delete
                      </UiButton>
                    </div>
                  </Teleport>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
