<script setup>
import { RouterLink, RouterView } from "vue-router";
import { reactive, computed } from "vue";
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const state = reactive({
  name: "",
  email: "",
  password: "",
});

const rules = computed(() => {
  const localRules = {
    name: { required },
    email: { required },
    password: { required },
  };

  return localRules;
});

const v$ = useValidate(rules, state);
</script>

<template>
  <div class="form_container">
    <form class="container">
      <h2>Create an Account</h2>
      <p>
        <input type="text" placeholder="Name" v-model="v$.name.$model" />
        <span v-if="v$.name.$error"> Name field is required </span>
      </p>
      <p>
        <input type="email" placeholder="Email" v-model="v$.email.$model" />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          v-model="v$.password.$model"
        />
      </p>
      <button type="submit">Log in</button>

      <RouterLink class="already_register" to="/login"
        >¿Ya tienes una cuenta?</RouterLink
      >
    </form>
  </div>

  <RouterView />
</template>

<style>
h2 {
  text-align: center;
}

.form_container {
  width: 100%;
  height: 100vh;
  background-color: #3eaf7c;
  display: flex;
  align-items: center;
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
