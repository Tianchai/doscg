<template>
  <footer class="row bg-white justify-content-between align-items-center m-0">
    <div class="col-auto">
      <span class="font-weight-bold text-dark">Copyright</span>
      <span class="d-none d-sm-inline text-dark">Tianchai Riengviwat</span>
      <span class="text-dark">© 1994-2020</span>
    </div>
    <div class="col-auto">
      <a
        v-for="(contactData, index) in contact"
        :key="index"
        :href="contactData.href"
        class="text-decoration-none text-dark ml-3"
      >
        <font-awesome-icon :icon="contactData.icon" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      contact: [
        {
          icon: ['fas', 'envelope'],
          label: 'tianchai.riengviwat@gmail.com',
          href: 'mailto:tianchai.riengviwat@gmail.com',
        },
        {
          icon: ['fas', 'mobile-alt'],
          label: '062-545-7474',
          href: 'tel:+6625457474',
        },
        {
          icon: ['fab', 'linkedin-in'],
          label: 'linkedin.com/in/tianchai-r',
          href: 'https://linkedin.com/in/tianchai-r',
        },
        {
          icon: ['fab', 'github'],
          label: 'github.com/tianchai',
          href: 'https://github.com/tianchai',
        },
      ],
    };
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 40px;
  font-size: 13px;
  border-top: 1px solid #e7eaec;
}
</style>
