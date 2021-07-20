<template>
  <div class="box-modified">
    <base-button
      @click="deleteEvent"
      buttonClass="m-btn btn-dangerous"
    >Delete</base-button>
  </div>
</template>

<script>
export default {
  methods: {
    deleteEvent() {
      this.$emit("delete");
    },
  },
};
</script>

<style scoped>
.box-modified {
  position: absolute;
}
</style>
