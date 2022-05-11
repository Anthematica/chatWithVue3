<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="form_container">
    <form class="container">
      <h2>Log in</h2>
      <p>
        <input type="email" placeholder="Email" v-model="email" />
      </p>
      <p>
        <input type="password" placeholder="Password" v-model="password" />
      </p>
      <button type="submit">Submit</button>

      <RouterLink class="already_register" to="/register"
        >¿No tienes una cuenta?</RouterLink
      >
    </form>
  </div>

  <RouterView />
</template>

<style>
.form_container {
  width: 100%;
  height: 100vh;
  background-color: #3eaf7c;
  display: flex;
  align-items: center;
}

h2 {
  text-align: center;
}

.already_register {
  text-decoration: none;
  width: fit-content;
  align-self: flex-end;
  margin-block-start: 10px;
  font-size: 1.4rem;
  color: #3498db;
  font-weight: 500;
}
.container {
  font-size: 1.6rem;
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}

input {
  border: none;
  outline: none;
  border-bottom: 1px solid #ddd;
  font-size: 1em;
  padding: 5px 0;
  margin: 10px 0 5px 0;
  width: 100%;
}

button {
  background-color: #3498db;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  color: white;
  justify-self: center;
  cursor: pointer;
}
</style>
