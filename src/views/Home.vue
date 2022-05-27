<template>
  <div>
    <div id="heros" class="bg-light w-100 vh-100 position-relative"></div>
    <div class="text-content position-absolute top-50">
      <h1 class="fw-bolder">
        Build a customizable template for your website
      </h1>
      <h3>
        creating a static responding template for you and easy customization.
      </h3>
    </div>
  </div>
</template>

<style scoped>
#heros {
  width: 100%;
  height: 100%;
}
.text-content h1 {
  font-size: 4rem;
}
.text-content h3 {
  font-size: 2.5rem;
}
.text-content {
  width: 70%;
  padding: 0 30px;
  transform: translateY(-50%);
}
</style>
