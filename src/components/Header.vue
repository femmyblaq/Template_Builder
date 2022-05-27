<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-light px-lg-5 py-lg-3">
      <div class="container-fluid">
        <router-link :to="{ name: Home }" class="navbar-brand">
          <h1 class="fw-bolder">
            <span class="text-secondary">T</span>
            <span class="text-primary">E</span>
            <span class="text-danger">M</span>
            <span class="text-warning">P</span>
            <span class="text-info">L</span>
            <span class="text-dark">A</span>
            <span style="color: purple;">T</span>
            <span style="color: orange;">E</span>
          </h1>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <router-link tag="li" to="/" active-class="active"
              ><a class="nav-item nav-link">Home</a>
            </router-link>
            <router-link tag="li" to="/about" active-class="active">
              <a class="nav-item nav-link">About</a>
            </router-link>
            <router-link tag="li" to="/dashboard" active-class="active">
              <a class="nav-item nav-link">Dashboard</a>
            </router-link>
            <router-link tag="li" to="/contact" active-class="active">
              <a class="nav-item nav-link">Contact Us</a>
            </router-link>
            <router-link
              tag="button"
              to="/login"
              class="btn btn-sm btn-outline-dark rounded-0"
              >Sign In / Register</router-link
            >
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
