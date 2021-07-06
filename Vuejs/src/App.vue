<template>
  <div id="app">
    <header-top></header-top>
    <div class="content-body">
      <navbar></navbar>
      <employee></employee>
    </div>
  </div>
</template>

<script>
import HeaderTop from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Employee from './components/employee/Employee.vue';

export default {
  name: 'App',
  components: {
    HeaderTop,
    Navbar,
    Employee
  }
}
</script>

<style>
body {
  margin: 0;
}

.content-body {
    display: flex;
}
</style>
