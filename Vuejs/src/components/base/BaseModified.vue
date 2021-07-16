<template>
  <div class="box-modified">
    <!-- v-bind="$attrs"  sử dụng để kế thừa thuộc tính được thêm vào từ cha -->
    <base-button
      buttonClass="m-btn"
      style="margin-right: 10px"
      @click="modifiedEvent"
    >Modified</base-button>
    <base-button
      @click="deleteEvent()"
      buttonClass="m-btn dangerous"
    >Delete</base-button>
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  methods: {
    modifiedEvent() {
      this.$emit("modified");
    },
    deleteEvent() {
      this.$emit("delete");
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/common/button.css";

.box-modified {
  display: flex;
  position: absolute;
  background-color: #d8d8d8;
  width: 185px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 0px 1px 1px rgb(232 232 232);
}
</style>
