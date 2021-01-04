<template>
  <header class="row bg-white justify-content-between align-items-center m-0">
    <div class="col-auto">
      <a class="toggle-button">☰</a>
    </div>
    <div class="col-auto">
      <p class="h3 font-weight-bold m-0">{{ $route.name }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  backface-visibility: hidden;
  border-bottom: 1px solid #e7eaec;
}
.toggle-button {
  display: inline-block;
  width: 37px;
  height: 29px;
  padding: 4px 12px;
  text-align: center;
  vertical-align: middle;
  color: white;
  background-color: #1ab394;
  border-color: #1ab394;
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;
  transition:
    color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
}
.toggle-button:hover {
  background-color: #18a689;
  border-color: #18a689;
}
</style>
