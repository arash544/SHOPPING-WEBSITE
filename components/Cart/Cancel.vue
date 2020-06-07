<template>
  <button class="btn btn-dark" @click="$emit('removeItem')">&times;</button>
</template>

<script>
export default {
  name: "Cancel"
};
</script>

<style lang="scss" scoped>
</style>