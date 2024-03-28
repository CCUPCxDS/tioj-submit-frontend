<script setup lang="ts">
import upload from "../components/upload.vue";
</script>

<template>
  <div class = "flex justify-center items-center" id = "content">
    <form method="post" action="" class = "flex justify-center flex-col">
      <upload class = "w-[30rem]"/>
      <input type = "text" name="problem" placeholder="Problem ID" class="data-input">
      <input type = "text" name="user" placeholder="Judge 帳號" class="data-input">
      <input type = "password" name="password" placeholder="Judge 密碼" class="data-input">
      <button type="submit" class="text-xl bg-purple-400 p-3 rounded-lg m-2 hover:bg-purple-500">
        Submit
      </button>
    </form>
  </div>
</template>