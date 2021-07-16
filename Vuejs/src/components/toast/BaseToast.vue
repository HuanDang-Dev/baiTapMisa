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
import BaseButton from "../base/BaseButton.vue";
export default {
  inheritAttrs: false,
  props: {
    status: {
      type: String,
    },
  },
  components: {
    BaseButton,
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
@import "../../assets/css/common/button.css";
@import "../../assets/css/common/icon.css";
@import "../../assets/css/common/toast.css";
</style>
