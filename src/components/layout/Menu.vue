<template>
  <aside>
    <ul class="nav-menu">
      <li class="nav-header">
        <b-avatar src="/static/profile.png" size="5rem" />
        <div class="font-weight-bold mt-2" id="full-name">Tianchai Riengviwat</div>
        <div class="mt-1" id="title">Full-Stack Developer</div>
      </li>
      <li
        v-for="(menuData, index) in menu"
        :key="index"
        :class="{ 'active': $route.name == menuData.name }"
      >
        <router-link :to="{ name: menuData.name}">
          <span class="nav-label">{{ menuData.label }}</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menu: [
        {
          label: 'CV',
          name: 'CV',
        },
      ],
    };
  },
};
</script>

<style scoped>
.nav-menu {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav-menu > li {
  display: block;
  position: relative;]
  width: 100%;
  flex-basis: 100%;
}
.nav-menu > li > a {
  display: block;
  padding: 14px 20px 14px 25px;
  color: #a7b1c2;
  font-weight: 600;
}
.nav-menu > li > a:hover, .nav-menu > li > a:focus {
  text-decoration: none;
  background-color: #293846;
  color: white;
}
.nav-menu > li.active {
  border-left: 4px solid #19aa8d;
  background: #293846;
}
.nav-menu > li.active > a {
  color: #ffffff;
}
.nav-header {
  padding: 33px 25px;
  background-color: #2f4050;
  background-image: url('/static/header-profile.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.nav-header #full-name {
  font-size: 13px;
  color: #dfe4ed;
}
.nav-header #title {
  font-size: 13px;
  color: #8095a8;
}
</style>
