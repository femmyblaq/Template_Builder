<template>
  <div>
    <div
      id="sidebar"
      class="position-absolute bg-light shadow "
      :class="{ slideFooter: footerSlide, slideSide: toggleSideBar }"
    >
      <div
        style="background-color: #e9e7e7"
        class="brand d-flex justify-content-around text-center"
      >
        <img
          src="../assets/template.png"
          class="w-75"
          v-if="!footerSlide"
          v-show="!toggleSideBar"
        />
        <i
          v-else
          class="icons fa-solid fa-oil-well m-auto text-danger fa-2x"
        ></i>
        <h1 class="text-secondary fw-bold d-lg-none" @click="closeSide">
          &times;
        </h1>
      </div>
      <div class="sidebar-content d-flex justify-content-center">
        <ul class="list-unstyled navbar-nav w-100">
          <router-link
            tag="li"
            to="dashboard"
            class="nav-link active"
            aria-selected="true"
            ><a
              v-if="!footerSlide"
              v-show="!toggleSideBar"
              class="nav-link  text-decoration-none fs-6 text-secondary"
              ><span class="mx-3"><i class="fas fa-home"></i> </span> Home</a
            ><a
              v-else
              class="icons nav-link text-decoration-none fs-6 text-secondary d-flex"
              ><span class="m-auto"><i class="fas fa-home fs-5"></i> </span></a
          ></router-link>
          <router-link
            class="nav-link"
            tag="li"
            to="categories"
            aria-selected="false"
            ><a
              v-if="!footerSlide"
              v-show="!toggleSideBar"
              class="nav-link  text-decoration-none fs-6 text-secondary"
              ><span class="mx-3"
                ><i class="fa fa-list-alt" aria-hidden="true"></i
              ></span>
              Categories </a
            ><a
              v-else
              class="icons nav-link  text-decoration-none fs-6 text-secondary d-flex"
              ><span class="m-auto"
                ><i
                  class="fa fa-list-alt fs-5"
                  aria-hidden="true"
                ></i></span></a
          ></router-link>
          <router-link
            tag="li"
            to="save"
            class="nav-link"
            aria-selected="false"
          >
            <a
              v-if="!footerSlide"
              v-show="!toggleSideBar"
              class="nav-link  text-decoration-none fs-6 text-secondary"
              ><span class="mx-3"><i class="far fa-bookmark"></i></span> Saved
              for Later</a
            ><a
              v-else
              class="icons nav-link  text-decoration-none text-center fs-6 text-secondary d-flex"
              ><span class="m-auto"
                ><i class="far fa-bookmark fs-5"></i></span></a
          ></router-link>
          <router-link
            tag="li"
            to="/account"
            class="nav-link"
            aria-selected="false"
          >
            <a
              v-if="!footerSlide"
              v-show="!toggleSideBar"
              class="nav-link  text-decoration-none fs-6 text-secondary"
              ><span class="mx-3"><i class="fa-regular fa-user"></i></span>
              Account</a
            ><a
              v-else
              class="icons nav-link  text-decoration-none fs-6 text-secondary d-flex"
              ><span class="m-auto"
                ><i class="fa-regular fa-user fs-5"></i></span></a
          ></router-link>
        </ul>
      </div>
      <div class="">
        <div
          @click="closeSide"
          class="sidebar-footer d-flex justify-content-end position-absolute bottom-0 fload-end"
          v-show="footerSlide"
        >
          <!-- <div class="d-flex justify-content-end align-items-center"> -->
          <i class="fa-solid fa-angle-right my-auto mx-4 fs-4 fw-bolder"></i>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // footerSlide: null,
    };
  },
  methods: {
    closeSide() {
      return this.$store.dispatch("slideFooter");
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
<style>
#sidebar {
  width: 22%;
  /* background-color: #ccc; */
  overflow: hidden;
  height: 100vh;
  z-index: 1;
  transition: 0.5s ease all;
}
#sidebar .brand {
  min-height: 50px;
  width: 100%;
}
/* #sidebar .brand .display {
  display: block;
  transition: display 2s;
  font-size: 4rem !important;
} */

/* #sidebar .sidebar-content ul li .i {
  display: none;
} */
.showicon {
  display: block !important;
  transition: all 2s;
  /* height: 50px !important;
  width: 50px !important;
  margin: auto 0 auto -35px;
  padding-top: 20px !important; */
  /* transform: translateX(-100%); */
}
.display {
  visibility: hidden;
}

.slideSide {
  margin-left: -22% !important;
  transition: 0.5s ease all;
}
.slideFooter {
  width: 4% !important;
  transition: 0.5s ease all;
}
#sidebar .sidebar-content ul li {
  width: 100%;
  cursor: pointer;
}
#sidebar .sidebar-content ul li a,
#sidebar .brand img {
  transition: 0.2s;
}
#sidebar .sidebar-content ul li.active {
  font-weight: 500;
  background-color: #ccc;
  color: #000 !important;
}

#sidebar .sidebar-content ul li:hover {
  background-color: #ccc;
  color: #000 !important;
}
#sidebar .sidebar-content ul li:hover,
#sidebar .sidebar-content ul li:active a {
  color: #000 !important;
  font-weight: 500;
}
#sidebar .sidebar-footer {
  width: 100%;
  height: 50px;
  background-color: rgb(233, 231, 231);
  cursor: pointer;
  transition: all 1s;
}
#sidebar .sidebar-footer:hover {
  background-color: #929191;
  color: #fff !important;
}
#sidebar .sidebar-footer:hover i {
  color: #ccc;
}
#sidebar .sidebar-footer i {
  color: #929191;
  transition: color 1s;
}
</style>
