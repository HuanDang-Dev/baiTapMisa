<template>
  <div class="popup-detail">
    <div class="popup-model"></div>
    <div class="popup-content">
      <div class="popup-header">
        <div class="popup-header-title">Đóng Thông Tin Nhân viên</div>
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
        <span>Bạn có chắc muốn đóng form nhập " <b>Thông tin nhân viên</b> " hay không?</span>
      </div>
    </div>
    <div class="popup-footer">
      <div class="box-footer">
        <div>
          <base-button
            @click="continueEvent"
            buttonClass="btn btn-cancel"
          >Tiếp tục</base-button>
        </div>
        <div>
          <base-button
            @click="cancelpopup"
            buttonClass="m-btn btn"
            :class="status == 'dangerous' ? status : ''"
          >
            Đóng
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
@import "../../assets/css/common/button.css";
@import "../../assets/css/common/icon.css";
@import "../../assets/css/common/popup.css";
</style>
