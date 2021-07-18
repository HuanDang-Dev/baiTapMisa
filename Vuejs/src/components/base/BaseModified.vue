<template>
  <div class="box-modified">
    <!-- v-bind="$attrs"  sử dụng để kế thừa thuộc tính được thêm vào từ cha -->
    <!-- <base-button
      buttonClass="m-btn btn__white"
      @click="modifiedEvent"
    >Modified</base-button> -->
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
.box-modified {
  position: absolute;
}
</style>
