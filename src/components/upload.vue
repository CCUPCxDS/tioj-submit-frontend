<script lang="ts" setup>
import { ref } from 'vue';
import { FileZipOutlined } from '@ant-design/icons-vue';
// 是否上傳成功
const isUploaded = ref(false);

// 定義一個反應式參考來存儲上傳的檔案
const uploadedFile = ref<File | null>(null);
const uploadedFileName = ref<string>('');

// 檔案選擇事件處理器
const handleFileSelect = async(event: Event) => {
  const input = event.target as HTMLInputElement;
  if (!input.files?.length) {
    return;
  }
  uploadedFile.value = input.files[0];
  console.log(input.files[0])
  if(input.files[0].size > 1024 * 1024 * 1){
    alert('檔案大小不能超過1MB');
    return;
  }
  uploadedFileName.value = input.files[0].name;
  
  isUploaded.value = true;
  // 這裡你可以進行更多的操作，比如讀取檔案內容或者上傳到伺服器等
};
</script>

<template>
  <div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
      <div>
        <div v-show="!isUploaded" class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">only zip</p>
        </div>
      </div>
      <div v-show="isUploaded" class="w-full h-full text-center justify-center items-center flex">
        <div>
          <FileZipOutlined class="text-6xl mt-1"/>
          <p class="text-xl mt-2">{{uploadedFileName}}</p>
        </div>
      </div>
      <input id="dropzone-file" type="file" class="hidden" @change="handleFileSelect" accept=".zip"/>
    </label>
  </div>
</template>