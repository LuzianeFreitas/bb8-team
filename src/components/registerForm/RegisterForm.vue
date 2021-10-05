<template>
    <b-form>
      <b-form-group
        id="input-group-1"
        label-for="name"
        class="form-group"
      >
        <b-form-input
          id="name"
          type="name"
          placeholder="name"
          required
        ></b-form-input>
      </b-form-group>

            <b-form-group
        id="input-group-2"
        label-for="email"
        class="form-group"
      >
        <b-form-input
          id="email"
          type="email"
          placeholder="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label-for="password" class="form-group">
        <b-form-input
          id="password"
          placeholder="password"
          required
        ></b-form-input>
      </b-form-group>

            <b-form-group id="input-group-4" label-for="confirmPassword" class="form-group">
        <b-form-input
          id="confirmPassword"
          placeholder="confirm Password"
          required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-3" class="form-group">
        <b-form-checkbox-group
          id="logged"
        >
          <b-form-checkbox value="me">I accept the <strong>Terms of Use</strong> </b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button class="w-100 btn-register" type="submit">Register</b-button>
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

    .btn-register {
      background: var(--light-yellow);
      border: 1px solid var(--light-yellow);

      transition: filter 0.2s;
    }

    .btn-register:hover {
      filter: brightness(0.9);
      background: var(--light-yellow);
      border: 1px solid var(--light-yellow);
    }
</style>