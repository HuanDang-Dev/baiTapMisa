<template>
  <div class="popup-detail">
    <div class="popup-model"></div>
    <div class="popup-content">
      <div class="popup-header">
        <div class="popup-header-title">{{title}}</div>
        <div class="popup-header-close">
          <base-button
            @click="cancelpopup"
            buttonClass="popup-btnClose icon-close "
          >
          </base-button>
        </div>
      </div>
      <div class="popup-body">
        <div
          class="popup-box"
          :class="status"
        ><i class="fas fa-exclamation-triangle"></i></div>
        <slot></slot>
      </div>
    </div>
    <div class="popup-footer">
      <div class="box-footer">
        <div>
          <base-button
            @click="cancelpopup"
            buttonClass="btn btn-cancel"
          >{{textButtonLeft}}</base-button>
        </div>
        <div>
          <base-button
            @click="continueEvent"
            buttonClass="m-btn btn"
            :class="status == 'dangerous' ? status : ''"
          >
            {{textButtonRight}}
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
export default {
  inheritAttrs: false,
  props: {
    title: {
      type: String,
    },
    textButtonLeft: {
      type: String,
      default: "",
    },
    textButtonRight: {
      type: String,
      default: "",
    },
    status: {
      type: String,
    },
  },
  components: {
    BaseButton,
  },
  methods: {
    cancelpopup() {
      this.$emit("cancelPopupEvent");
    },
    continueEvent() {
      this.$emit("continuePopupEvent");
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/common/popup.css";
</style>
