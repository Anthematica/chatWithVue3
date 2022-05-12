<script setup>
import { ref } from "vue";
import { useUsersStore } from "../../stores/users.js";

const props = defineProps({
  user: {
    required: true,
    type: Object,
  },
});

const store = useUsersStore();

function toggleContact() {
  store.$patch({ toggle: true });

  store.$patch({ currentUser: props.user });
}
</script>
<template>
  <div className="contacts" @click="toggleContact">
    <div className="profile-info">
      <div className="profile-photo">
        <div className="conected"></div>
      </div>
      <div className="profile-text">
        <p className="good_morning">{{ user.name }}</p>
        <p className="user_name">Typing...</p>
      </div>
    </div>
  </div>
</template>
<style>
.contacts {
  padding-block-start: 30px;
  padding-block-end: 30px;
  margin-inline-start: 32px;
  border-radius: 24px;
}

.profile-info {
  padding-inline-start: 26px;
  display: flex;
  align-items: center;
}

.profile-photo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #c4c4c4;
  margin-inline-end: 16px;
  position: relative;
}

.conected {
  width: 12px;
  height: 12px;
  background-color: #47dc44;
  border-radius: 100%;
  position: absolute;
  inset-inline-end: 0px;
  inset-block-end: 0px;
}

.user_name {
  font-size: 1.4rem;
  font-weight: 400;
  color: #41475e;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.3px;
}

.contacts:nth-child(1) {
  margin-block-start: 32px;
}

.contacts:hover {
  background-color: #4784de;
  color: white;
}
</style>
