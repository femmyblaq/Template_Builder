<template>
  <div class="container-fluid m-0 p-0">
    <app-headers
      v-if="
        ![
          'Dashboard',
          'TheLayout',
          'Categories',
          'Account',
          'Save',
          'help',
        ].includes($route.name)
      "
    ></app-headers>
    <router-view></router-view>
    <app-footer
      v-if="
        ![
          'Dashboard',
          'TheLayout',
          'Categories',
          'Account',
          'Save',
          'help',
        ].includes($route.name)
      "
    ></app-footer>
  </div>
</template>

<script>
import appHeaders from "./components/Header.vue";
import appFooter from "./components/Footer.vue";
export default {
  components: {
    appHeaders,
    appFooter,
  },
};
</script>

<style></style>
