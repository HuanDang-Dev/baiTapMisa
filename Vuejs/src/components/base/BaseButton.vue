<template>
  <div>
    <!-- v-bind="$attrs"  sử dụng để kế thừa thuộc tính được thêm vào từ cha -->
    <button v-on="$listeners" v-bind="$attrs" :class="buttonClass">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/common/button.css";
</style>
