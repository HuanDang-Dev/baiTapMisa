<template>
  <div class="box-selected">
    <div
      :class="selectClass"
      v-on="$listeners"
    >
      {{ value }}
      <i class="fas fa-chevron-down"></i>
    </div>
    <ul
      class="box-option"
      v-show="isShowOptions === true"
    >
      <li
        class="option"
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        :selected="option === value"
        @click="updateValue(index)"
      >
        <i class="fas fa-check"></i>{{ option.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true,
    },
    selectClass: {
      type: String,
    },
    title: {
      type: String,
      default: "",
    },
    isShow: [Boolean],
  },
  data() {
    return {
      value: !this.title == "" ? this.title : this.options[0].name,
      isShowOptions: this.isShow,
    };
  },
  watch: {
    isShow() {
      this.isShowOptions = this.isShow;
    },
    title() {
      this.value = this.title;
    },
  },
  methods: {
    showOption() {
      this.isShowOptions = !this.isShowOptions;
      this.$emit("isShowOption", this.isShowOptions);
    },
    updateValue(index) {
      this.value = this.options[index].name;
      this.isShowOptions = !this.isShowOptions;
      this.$emit("isShowOption", this.isShowOptions);
      this.$emit("isTitleOption", this.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/common/icon.css";
</style>
