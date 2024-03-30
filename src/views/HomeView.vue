<script setup>
import upload from "../components/upload.vue";
import { ref } from 'vue';
import { login } from "../functions/login";

const ProblemID = ref("");
const username = ref("");
const password = ref("");

const clickHandler = async () => {
  console.log("click");
  const res = await login(username.value, password.value);
  console.log(res);
};
</script>

<template>
  <div class = "flex justify-center items-center" id = "content">
    <div class = "flex justify-center flex-col">
      <upload class = "w-[30rem]"/>
      <input type = "text" placeholder="Problem ID" class="data-input" v-model="ProblemID">
      <input type = "text" placeholder="Judge 帳號" class="data-input" v-model="username">
      <input type = "password" placeholder="Judge 密碼" class="data-input" v-model="password">
      <button type="submit" class="text-xl bg-purple-400 p-3 rounded-lg m-2 hover:bg-purple-500" @click="clickHandler">
        Submit
      </button>
    </div>
  </div>
</template>