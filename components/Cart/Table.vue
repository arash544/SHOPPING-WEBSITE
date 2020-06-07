<template>
  <tr>
    {{text}}
    <img :src="pic" />
    <slot></slot>
  </tr>
</template>

<script>
export default {
  name: "Table",
  props: ["text", "pic"]
};
</script>

<style lang="scss" scoped>
img {
  width: 3vw;
  background-color: black;
}
</style>