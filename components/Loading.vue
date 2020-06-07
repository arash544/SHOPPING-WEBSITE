<template>
  <svg width="150" height="150" class="loading">
    <circle cx="50" cy="50" r="30" stroke="#111" fill="transparent" stroke-width="3" />
  </svg>
</template>

<script>
  export default {
      name:"Loading"
  }
</script>

<style scoped>
.loading{
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    stroke-dasharray: 20;
    stroke-dashoffset:1000;
    animation: loading 2s ease infinite;
}
@keyframes loading{
    to{
        stroke-dashoffset: 0;
    }
}
</style>