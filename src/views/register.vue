<template>
  <div>
    <h1 class="text-center mt-5">Authentication</h1>

    <div class="card m-auto shadow p-4 w-50">
      <h5 class="text-info text-center">REGISTRATION</h5>
      <form @submit.prevent="onSubmit">
        <div class="row">
          <label
            ><strong>Names <span class="text-danger">*</span></strong></label
          >
          <div class="col-md-6">
            <input type="text" class="form-control" v-model="first_name" />
            <p>First</p>
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" v-model="last_name" />
            <p>Last</p>
          </div>
          <div class="col-md-6">
            <label
              ><strong
                >Username <span class="text-danger">*</span></strong
              ></label
            >
            <input type="text" class="form-control" v-model="user_name" />
          </div>
          <div class="col-md-6">
            <label
              ><strong
                >Phone Number <span class="text-danger">*</span></strong
              ></label
            >
            <input type="number" class="form-control" v-model="phone_no" />
          </div>
          <div class="col-12">
            <label
              ><strong>Email <span class="text-danger">*</span></strong></label
            >
            <input type="email" class="form-control" v-model="email" />
          </div>
          <div class="col-md-6">
            <label
              ><strong
                >Password <span class="text-danger">*</span></strong
              ></label
            >
            <input type="password" class="form-control" v-model="password" />
          </div>
          <div class="col-md-6">
            <label
              ><strong
                >Confirm Password <span class="text-danger">*</span></strong
              ></label
            >
            <input
              type="password"
              class="form-control"
              v-model="confirm_password"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-info w-100 mt-4 br-0">
          Register
        </button>
        <p class="mt-2">
          Have existing account?
          <a href="" class="text-decoration-none text-info">signin</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      user_name: "",
      phone_no: null,
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        first_name: this.first_name,
        last_name: this.last_name,
        user_name: this.user_name,
        phone_no: this.phone_no,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
      };
      console.log(formData);
      axios
        .post("/register", formData)
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
