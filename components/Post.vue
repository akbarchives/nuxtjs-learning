<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: ['title'],
  data() {
    return {
      description: 'A blog post about some stuff',
    };
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.description },
      ],
    };
  },
};
</script>
