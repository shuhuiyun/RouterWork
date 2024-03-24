<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="home">

<v-form v-slot="{ errors, values, validate }" @submit="onSubmit">

 {{ errors }} {{ values }}

<div class="mb-3">

  <label for="email" class="form-label">Email</label>

  <v-Field id="email" name="email" type="email"

   class="form-control" :class="{ 'is-invalid': errors['email'] }"

   placeholder="請輸入 Email" rules="email|required" v-model="user.email"></v-Field>

  <error-message name="email" class="invalid-feedback"></error-message>

 </div>

 <button class="btn me-2 btn-outline-primary" type="button" @click="validate">驗證</button>

 <button class="btn btn-primary" type="submit">Submit</button>

</v-form>

</div>
</template>

<script>
// @ is an alias to /src
export default {

  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',

  data() {
    return {

      user: {},

    };
  },

  methods: {

    onSubmit() {
      /* eslint-disable */
      console.log(this.user);
    },

  },

  created() {
    /* eslint-disable */
    console.log(this);
  },

};
</script>
