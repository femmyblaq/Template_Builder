<template>
  <div>
    <h1 class="text-center mt-5">Authentication</h1>

    <div class="card m-auto shadow p-4 w-50">
      <h5 class="text-info text-center">LOG IN</h5>
      <form @submit.prevent="onSubmit">
        <div class="row">
          <div class="col-12">
            <label
              ><strong>Email <span class="text-danger">*</span></strong></label
            >
            <input type="email" class="form-control" v-model="email" />
          </div>
          <div class="col-md-12">
            <label
              ><strong
                >Password <span class="text-danger">*</span></strong
              ></label
            >
            <input type="password" class="form-control" v-model="password" />
          </div>
        </div>
        <button type="submit" class="btn btn-info w-100 mt-4 br-0">
          Log in
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "femmyblaq@gmail.com",
      password: "555555",
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData);
      axios
        .post("/login", {
          email: formData.email,
          password: formData.password,
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
input {
  border: none;
  background-color: #ddd;
  font-size: 16px;
  padding: 3px;
}
input:focus {
  border: none;
  outline: none;
  background-color: #c8ebf1;
}
</style>
