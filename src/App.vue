<template>
  <div id="app">
    <Slideout
      menu="#menu"
      panel="#panel"
      :padding="220"
      :touch="false"
      :toggleSelectors="['.toggle-button']"
      @on-translate="onTranslate"
      @on-beforeopen="onBeforeOpen"
      @on-beforeclose="onBeforeClose"
      @on-open="onOpen"
      @on-close="onClose"
    >
      <nav id="menu">
        <menu-ui />
      </nav>
      <header-ui />
      <main id="panel">
        <router-view />
        <footer-ui />
      </main>
    </Slideout>
  </div>
</template>

<script>
import Slideout from 'vue-slideout';
import Menu from '@/components/layout/Menu';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default {
  name: 'App',
  components: {
    Slideout,
    menuUi: Menu,
    headerUi: Header,
    footerUi: Footer,
  },
  data() {
    return {
      headerEl: null,
    };
  },
  mounted() {
    this.headerEl = document.querySelector('header');
  },
  methods: {
    onTranslate(translated) {
      this.headerEl.style.transform = `translateX(${translated}px)`;
    },
    onBeforeOpen() {
      this.headerEl.style.transition = 'transform 300ms ease';
      this.headerEl.style.transform = 'translateX(220px)';
    },
    onBeforeClose() {
      this.headerEl.style.transition = 'transform 300ms ease';
      this.headerEl.style.transform = 'translateX(0px)';
    },
    onOpen() {
      this.headerEl.style.transition = '';
    },
    onClose() {
      this.headerEl.style.transition = '';
    },
  },
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
article {
  min-height: calc(100vh - 100px);
  margin-top: 60px;
}
.slideout-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 220px;
  height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 0;
  display: none;
  background-color: #2f4050;
  color: white;
}
.slideout-menu-left {
  left: 0;
}
.slideout-menu-right {
  right: 0;
}
.slideout-panel {
  background-color: #f3f3f4;
  position: relative;
  z-index: 1;
  will-change: transform;
  min-height: calc(100vh - 60px);
}
.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}
.slideout-open .slideout-menu {
  display: block;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-200 { width: 200% !important; }
.w-24px { width: 24px !important; }
.w-60px { width: 60px !important; }
.top-0 { top: 0 !important; }
.bottom-0 { bottom: 0 !important; }
.left-0 { left: 0 !important; }
.right-0 { right: 0 !important; }
.drt-ltr { direction: ltr !important; }
.drt-rtl { direction: rtl !important; }
@media screen and (min-width: 576px) {
  .drt-sm-ltr { direction: ltr !important; }
  .drt-sm-rtl { direction: rtl !important; }
}
@media screen and (min-width: 768px) {
  .drt-md-ltr { direction: ltr !important; }
  .drt-md-rtl { direction: rtl !important; }
}
</style>
