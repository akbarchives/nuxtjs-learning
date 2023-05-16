<template>
  <div
    class="w-full sm:w-full md:w-full lg:w-2/3 lg:mx-64 rounded-lg overflow-hidden mb-6 bg-white flex flex-col sm:flex-col md:flex-row-reverse justify-center items-center shadow-lg"
  >
    <slot></slot>
    <h2 class="p-4 ml-8">
      <span class="text-xl font-semibold py-4">{{ id }} {{ title }}</span>
      <br />
      {{ desc }}
    </h2>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  title: String,
  desc: String,
  imgURL: String,
});
</script>
