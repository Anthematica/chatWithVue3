<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onBeforeMount } from "vue";
import { useUsersStore } from "./stores/users";
import ky from "ky";

const usersStore = useUsersStore();

onBeforeMount(async () => {
  const resp = await ky.get("http://localhost:8000/api/v1/users").json();

  usersStore.$patch({
    users: resp.data,
  });
});
</script>

<template>
  <RouterView />
</template>

<style></style>
