<template>
    <b-form>
      <b-form-group
        id="input-group-1"
        label-for="email"
        class="form-group"
      >
        <b-form-input
          id="email"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="password" class="form-group">
        <b-form-input
          id="password"
          placeholder="password"
          required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-3" class="form-group">
        <b-form-checkbox-group
          id="logged"
        >
          <b-form-checkbox value="me">Keep me logged in</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <!-- <b-button class="w-100 btn-logIn"> <router-link to="/Home">Log in</router-link></b-button> -->
      <button  class="w-100 btn-logIn"><router-link to="/Home">Log in</router-link></button>
    </b-form>
</template>

<script>
export default {
    
}
</script>

<style>
    .form-group {
      padding-bottom: 1.8rem;
    }

    .btn-logIn {
      background: var(--light-orange);
      border: 1px solid var(--light-orange);

      transition: filter 0.2s;
    }

    .btn-logIn:hover {
      filter: brightness(0.9);
      background: var(--light-orange);
      border: 1px solid var(--light-orange);
    }
</style>