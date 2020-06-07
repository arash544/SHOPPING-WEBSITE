<template>
  <div class="carousel">
    <carousel-3d
      :autoplay-timeout="2800"
      :width="1902"
      :height="840"
      :controls-visible="true"
      :controls-prev-html="'&#10092;'"
      :controls-next-html="'&#10093;'"
      :controls-width="30"
      :controls-height="60"
      :display="1"
      :clickable="false"
      :border="0"
      :autoplay="true"
    >
      <slide :index="0">
        <img src="slide 2.jpg" alt />
      </slide>
      <slide :index="1">
        <img src="slide 3.jpg" alt />
      </slide>
      <slide :index="2">
        <img src="slide 4.jpg" alt />
      </slide>
      <slide :index="3">
        <img src="slide 0.jpg" alt />
      </slide>
      <slide :index="4">
        <img src="slide1.jpg" alt />
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
export default {
  data: {
    slides: 5
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel {
  margin-top: 98px;
}
</style>