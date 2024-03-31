<script lang='ts' setup>
import upload from "../components/zipUpload.vue";
import { ref } from 'vue';
import { postInform } from "../functions/postinform";

const ProblemID = ref("");
const username = ref("");
const password = ref("");
let zipfile : File | null = null;

const acceptFile = (file) => {
  zipfile = file;
};

const clickHandler = async () => {
  
  if (ProblemID.value === "" || username.value === "" || password.value === "" || zipfile === null) {
    alert("請輸入完整資料");
    return;
  }
  console.log(ProblemID.value, username.value, password.value, zipfile);
  await postInform(ProblemID.value, username.value, password.value, zipfile);
};
</script>

<template>
  <div class = "flex justify-center items-center" id = "content">
    <div class = "flex justify-center flex-col">
      <upload class = "w-[30rem]" @updatefile="acceptFile"/>
      <input type = "text" placeholder="Problem ID" class="data-input" v-model="ProblemID">
      <input type = "text" placeholder="Judge 帳號" class="data-input" v-model="username">
      <input type = "password" placeholder="Judge 密碼" class="data-input" v-model="password">
      <button type="submit" class="text-xl bg-purple-400 p-3 rounded-lg m-2 hover:bg-purple-500" @click="clickHandler">
        Submit
      </button>
    </div>
  </div>
</template>../functions/postinform../components/zipUpload.vue