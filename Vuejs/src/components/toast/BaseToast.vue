<template>
  <div class="toast-detail">
    <div class="toast-body">
      <div class="toast-box"><i class="fas fa-check"></i></div>
      <span>Thành công</span>
    </div>
    <div class="toast-header-close">
      <base-button
        @click="canceltoast"
        buttonClass="popup-btnClose icon-close "
      >
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    status: {
      type: String,
    },
  },
  methods: {
    canceltoast() {
      this.$emit("canceltoastEvent");
    },
    continueEvent() {
      this.$emit("continuetoastEvent");
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/common/toast.css";
</style>
