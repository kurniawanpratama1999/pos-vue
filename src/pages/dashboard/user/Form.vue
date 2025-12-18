<script lang="ts">
export interface Role {
  id?: number;
  name?: string;
}

export interface UserById {
  role?: Role;
  roleId?: number;
  name?: string;
  email?: string;
}

export interface DataUserById {
  success: boolean;
  loading: boolean;
  data: UserById;
}

export interface DataRoles {
  success: boolean;
  loading: boolean;
  data: Role[];
}

export interface SendData {
  name: string;
  roleId: number | null;
  email: string;
  password: string;
  password_confirmation: string;
}
</script>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, reactive } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useModalStore } from "../../../store/modal";
import { useAuthFetch } from "../../../utils/useAuthFetch";
import FormInput from "../../../components/FormInput.vue";
import FormSelect from "../../../components/FormSelect.vue";

const route = useRoute();
const router = useRouter();
const modal = useModalStore();
const id = route.params.id as string;

const dataUserById = reactive<DataUserById>({
  success: false,
  loading: true,
  data: {},
});

const dataRoles = reactive<DataRoles>({
  success: false,
  loading: true,
  data: [],
});

const sendData = reactive<SendData>({
  name: "",
  roleId: null,
  email: "",
  password: "",
  password_confirmation: "",
});

onMounted(async () => {
  if (id) {
    const apiUserById = `http://localhost:3000/api/v1/user/${id}`;
    const fetchApiUserById = await useAuthFetch(apiUserById, true, "GET");

    if (fetchApiUserById.success) {
      Object.assign(sendData, {
        name: fetchApiUserById.data.name,
        email: fetchApiUserById.data.email,
        roleId: fetchApiUserById.data.roleId,
      });
    }
  }

  const apiRoles = "http://localhost:3000/api/v1/role";
  const fetchApiRoles = await useAuthFetch(apiRoles, true, "GET");
  if (fetchApiRoles.success) {
    dataRoles.data = fetchApiRoles.data;
  }
});

const createUser = async () => {
  try {
    const apiCreateUser = "http://localhost:3000/api/v1/user";
    const fetchCreateUser = await useAuthFetch(
      apiCreateUser,
      true,
      "POST",
      sendData
    );
    if (fetchCreateUser.success) {
      modal.open("create-user", `Create new user is success`, "default", [
        {
          text: "Ok",
          variant: "green",
          handleClick: () => {
            router.push({ name: "user.index" });
            modal.close();
          },
        },
      ]);
    } else {
      modal.open(
        "create-user",
        `create user ${sendData.name} is failed`,
        "default",
        [
          {
            text: "Ok",
            variant: "green",
            handleClick: () => {
              modal.close();
            },
          },
        ]
      );
    }
  } catch (error) {
    modal.open(
      "create-user",
      `create user ${sendData.name} is failed`,
      "default",
      [
        {
          text: "Ok",
          variant: "green",
          handleClick: () => {
            modal.close();
          },
        },
      ]
    );
  }
};

const updateUser = async () => {
  try {
    const apiUpdateUser = `http://localhost:3000/api/v1/user/${id}`;
    let results;
    if (sendData.password == "" || sendData.password_confirmation == "") {
      const { password, password_confirmation, ...data } = sendData;
      results = data;
    } else {
      results = sendData;
    }

    const fetchApiUpdateUser = await useAuthFetch(
      apiUpdateUser,
      true,
      "PUT",
      results
    );

    if (fetchApiUpdateUser.success) {
      modal.open(
        "update-user",
        `Update user ${sendData.name} is success`,
        "default",
        [
          {
            text: "Ok",
            variant: "green",
            handleClick: () => {
              router.push({ name: "user.index" });
              modal.close();
            },
          },
        ]
      );
    } else {
      modal.open(
        "update-user",
        `Update user ${sendData.name} is failed`,
        "default",
        [
          {
            text: "Ok",
            variant: "green",
            handleClick: () => {
              modal.close();
            },
          },
        ]
      );
    }
  } catch (error) {
    modal.open(
      "create-user",
      `create user ${sendData.name} is failed`,
      "default",
      [
        {
          text: "Ok",
          variant: "green",
          handleClick: () => {
            modal.close();
          },
        },
      ]
    );
  }
};

const handleSubmit = () => {
  if (id) {
    updateUser();
  } else {
    createUser();
  }
};

const askingForDelete = () => {
  modal.open(
    "asking-for-delete",
    `Are you sure wanna delete user ${sendData.name}?`,
    "default",
    [
      {
        text: "Cancel",
        variant: "light",
        handleClick: () => {
          modal.close();
        },
      },
      {
        text: "Delete",
        variant: "red",
        handleClick: async () => {
          const apiDeleteUser = `http://localhost:3000/api/v1/user/${id}/delete`;
          const fetchApiUsers = await useAuthFetch(
            apiDeleteUser,
            true,
            "PATCH"
          );
          if (fetchApiUsers.success) {
            modal.close();
          }
        },
      },
    ]
  );
};
</script>

<template>
  <section class="w-full max-w-sm mx-auto space-y-6 pt-5">
    <h3 v-if="!id" class="text-3xl font-bold">Form Insert New User</h3>
    <h3 v-if="id" class="text-3xl font-bold">
      Update User {{ dataUserById.data?.name }}
    </h3>
    <form class="space-y-4 w-full max-w-sm">
      <FormInput
        id-name="name"
        label="Full Name"
        v-model="sendData.name"
        :required="true"
      />

      <FormSelect
        id-name="roleId"
        label="Role Name"
        :items="dataRoles.data"
        v-model="sendData.roleId"
        :required="true"
      />

      <FormInput
        id-name="email"
        label="Email Address"
        type="email"
        v-model="sendData.email"
        :required="true"
      />

      <FormInput
        id-name="password"
        label="Password"
        type="password"
        v-model="sendData.password"
        :required="!id"
      />

      <FormInput
        id-name="password_confirmation"
        label="Password Confirmation"
        type="password"
        v-model="sendData.password_confirmation"
        :required="!id"
      />

      <div class="flex items-center gap-2">
        <button
          v-if="id"
          @click="askingForDelete"
          type="button"
          class="flex items-center gap-1 bg-red-400 px-3 py-1 rounded"
        >
          <Icon icon="material-symbols:delete" />
          <span>Delete</span>
        </button>
        <RouterLink :to="{ name: 'user.index' }" class="ml-auto">
          <span>Cancel</span>
        </RouterLink>
        <button
          type="button"
          @click="handleSubmit"
          :class="[
            'flex items-center gap-1 rounded px-3 py-1',
            id ? 'bg-blue-400' : 'bg-emerald-400',
          ]"
        >
          <Icon icon="material-symbols:save" />
          <span v-if="id">Update</span>
          <span v-else>Save</span>
        </button>
      </div>
    </form>
  </section>
</template>
