<template>
  <div>
    <div
      id="header"
      :class="{ slideHeader: toggleSideBar, footerSlide: footerSlide }"
      class="shadow-sm bg-light ms-auto position-relative"
    >
      <div class="bar position-relative top-50 ms-4" @click="menuToggle">
        <span></span>
        <span class="mt-1"></span>
        <span class="mt-1"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    menuToggle() {
      return this.$store.dispatch("toggleMenu");
    },
  },
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
#header {
  height: 50px;
  width: 78%;
  transition: 0.5s ease all;
  z-index: 1;
}
#header .bar {
  transform: translateY(-50%);
  cursor: pointer;
  width: 50px;
}
.bar span {
  width: 20px;
  height: 3px;
  /* margin: 5px 5px; */
  border-radius: 5px;
  background-color: #757575;
  display: flex;
  flex-direction: column;
}
.slideHeader {
  width: 100% !important;
  left: 0 !important;
}
.footerSlide {
  width: 96% !important;
}
@media (min-width: 820px) and (max-width: 1180px) {
  #header {
    width: 63.5%;
  }
  .slideHeader {
    width: 100% !important;
  }
}
@media (min-width: 768px) and (max-width: 819px) {
  #header {
    width: 60.8%;
  }
  .slideHeader {
    width: 100% !important;
  }
}
</style>
