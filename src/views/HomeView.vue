<script setup>
import Chat from "../components/Chat/Chat.vue";
import { useLogUser } from "../stores/logUser.js";
import { onBeforeMount } from "vue";

const store = useLogUser();

onBeforeMount(() => {
  store.logIn();
});
</script>

<template>
  <main class="home_container">
    <Chat></Chat>
  </main>
</template>

<style>
.home_container {
  display: flex;
}
</style>
