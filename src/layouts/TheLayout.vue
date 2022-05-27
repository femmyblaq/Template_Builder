<template>
  <div id="dashboard">
    <Sidebar />
    <Dasheader />
    <MainView />
  </div>
</template>

<script>
import Dasheader from "./Dasheader.vue";
import Sidebar from "./Sidebar.vue";
import MainView from "./TheMainView.vue";
export default {
  components: {
    Dasheader,
    Sidebar,
    MainView,
  },
  computed: {
    toggleSideBar() {
      return this.$store.getters.toggleSide;
    },
  },
  created() {
    return this.$store.dispatch("mobileView");
  },
};
</script>
<style>
#dashboard {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@media (min-width: 200px) and (max-width: 340px) {
  .main-view {
    height: 90%;
    left: 0 !important;
    width: 100% !important;
  }
  #sidebar {
    width: 220px !important;
  }
  #header {
    width: 100% !important;
  }
}
@media (min-width: 340px) and (max-width: 720px) {
  .main-view {
    height: 90%;
    left: 0 !important;
    width: 100% !important;
  }
  #sidebar {
    width: 280px !important;
  }
  #header {
    width: 100% !important;
  }
}
@media (min-width: 820px) and (max-width: 1180px) {
  .main-view {
    height: 100%;
    left: 37% !important;
    border: 1px solid black;
    width: 63% !important;
  }
  #sidebar {
    width: 300px !important;
  }
}
@media (min-width: 768px) and (max-width: 819px) {
  .main-view {
    height: 100%;
    left: 39.2% !important;
    border: 1px solid black;
    width: 60.8% !important;
  }
  #sidebar {
    width: 300px !important;
  }
}
</style>
