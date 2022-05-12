<script setup>
import { RouterLink, RouterView } from "vue-router";
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import ky from "ky";
import router from "../router";

const myForm = ref();
function validateEmail(value) {
  if (!value) {
    return "This field es required";
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "This field must be a valid email";
  }

  return true;
}

function validatePassword(value) {
  if (!value) {
    return "This field password is required";
  }

  return true;
}

async function onSubmit(values) {
  const resp = await ky
    .post("http://localhost:8000/api/login", {
      json: values,
      throwHttpErrors: false,
    })
    .json();

  if (resp.errors) {
    // const errors = buildFormikErrors(resp.errors);

    myForm.value.setErrors(resp.errors);

    return;
  }

  localStorage.setItem("access_token", resp.access_token);
  router.push({ path: "/" });
}
</script>
<template>
  <div class="form_container">
    <Form @submit="onSubmit" class="container" ref="myForm">
      <h2>Log in</h2>
      <p>
        <Field
          type="email"
          placeholder="Email"
          name="email"
          :rules="validateEmail"
        />
        <ErrorMessage class="error_styles" name="email" />
      </p>
      <p>
        <Field
          type="password"
          placeholder="Password"
          name="password"
          :rules="validatePassword"
        />
        <ErrorMessage class="error_styles" name="password" />
      </p>
      <button>Submit</button>

      <RouterLink class="already_register" to="/register"
        >¿No tienes una cuenta?</RouterLink
      >
    </Form>
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

.error_styles {
  color: red;
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
