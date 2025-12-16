<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, reactive } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import FormInput from "../../../components/FormInput.vue";
import FormSelect from "../../../components/FormSelect.vue";

interface Role {
  id?: number;
  name?: string;
}

interface UserById {
  role?: Role;
  roleId?: number;
  name?: string;
  email?: string;
}

interface DataUserById {
  success: boolean;
  loading: boolean;
  data: UserById;
}

interface DataRoles {
  success: boolean;
  loading: boolean;
  data: Role[];
}

interface SendData {
  name: string;
  roleId: number | null;
  email: string;
  password: string;
  password_confirmation: string;
}

const route = useRoute();
const router = useRouter();
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

onMounted(() => {
  const HitApiUserById = async () => {
    try {
      const api = `http://localhost:3000/api/v1/user/${id}`;
      const fetchUser = await fetch(api, {
        method: "get",
        headers: {
          "x-current-url": window.location.pathname,
        },
      });

      if (!fetchUser.ok) {
        throw new Error("Fetch user is not ok");
      }

      const response = await fetchUser.json();

      if (!response.success) {
        throw new Error("response for fetching user is failed");
      }

      dataUserById.success = true;
      dataUserById.data = response.data;
      const { name, email, roleId } = dataUserById.data;

      Object.assign(sendData, {
        name,
        email,
        roleId,
      });
    } catch (error) {
      dataUserById.success = false;
    } finally {
      dataUserById.loading = false;
    }
  };

  const HitApiRole = async () => {
    try {
      const api = `http://localhost:3000/api/v1/role`;
      const fetchRoles = await fetch(api, {
        method: "get",
        headers: {
          "x-current-url": window.location.pathname,
        },
      });

      const response = await fetchRoles.json();

      if (!response.success) {
        throw new Error("response for fetching roles is failed");
      }

      dataRoles.success = true;
      dataRoles.data = response.data;
    } catch (error: any) {
      console.log(error.message);
      dataRoles.success = false;
    } finally {
      dataRoles.loading = false;
    }
  };

  if (id) {
    HitApiUserById();
  }

  HitApiRole();
});

const createUser = async () => {
  try {
    const apiCreateUser = "http://localhost:3000/api/v1/user";
    const hitApiCreateUser = await fetch(apiCreateUser, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-current-url": window.location.pathname,
      },
      body: JSON.stringify(sendData),
    });

    const response = await hitApiCreateUser.json();
    console.log(response);
  } catch (error) {
    console.log(error);
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
    const hitApiUpdateUser = await fetch(apiUpdateUser, {
      credentials: "include",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-current-url": window.location.pathname,
      },
      body: JSON.stringify(results),
    });

    const response = await hitApiUpdateUser.json();
    if (response.success) {
      router.push({ name: "user.index" });
    }
  } catch (error) {
    console.log(error);
  }
};

const handleSubmit = () => {
  console.log({ ...sendData });

  if (id) {
    updateUser();
  } else {
    createUser();
  }
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
          class="flex items-center gap-1 bg-emerald-400 rounded px-3 py-1"
        >
          <Icon icon="material-symbols:save" />
          <span>Save</span>
        </button>
      </div>
    </form>
  </section>
</template>
