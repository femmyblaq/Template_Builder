<template>
  <div>
    <div
      class="main-view p-4"
      :class="{ slideMain: toggleSideBar, footerMenu: footerSlide }"
    >
      <h1>Here comes my dashboard.</h1>
      <router-view> </router-view>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    toggleSideBar() {
      return this.$store.getters.toggleSide;
    },
    footerSlide() {
      return this.$store.state.footerSlide;
    },
  },
};
</script>
<style scoped>
.main-view {
  height: 90%;
  left: 22%;
  /* margin-left: 22%; */
  border: 1px solid black;
  width: 78%;
  position: absolute;
  transition: 0.5s ease all;
}
.slideMain {
  width: 100% !important;
  left: 0 !important;
}
.footerMenu {
  width: 96% !important;
  left: 4% !important;
}
.box:hover {
  width: 300px;
}
</style>
