<template>
  <div
    class="box-selected"
    ref="selectOptions"
  >
    <div
      :class="selectClass"
      v-on="$listeners"
    >
      {{ value }}
      <i class="fas fa-chevron-down"></i>
    </div>
    <ul
      class="box-option"
      v-show="isShowSelectOptions === true"
    >
      <li
        class="option"
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        :selected="option === value"
        @click="activeItem(index), updateValue(index)"
        :class="{ active : isActive == index }"
      >
        <i class="fas fa-check"></i>{{ option.name }}
      </li>
    </ul>
  </div>
</template>
<script>
/**
  Giá trị isActive luôn bị reset về -1 nên active không chạy đúng
 */
import { itemActive } from "../../mixins/itemActive";
import { clickOutside } from "../../mixins/clickOutside";
export default {
  mixins: [itemActive, clickOutside],
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
      isShowSelectOptions: this.isShow,
    };
  },
  watch: {
    isShow() {
      this.isShowSelectOptions = this.isShow;
    },
    title() {
      this.value = this.title;
    },
  },
  methods: {
    updateValue(index) {
      this.value = this.options[index].name;
      this.isShowSelectOptions = !this.isShowSelectOptions;
      this.$emit("isShowSelectOption", this.isShowSelectOptions);
      this.$emit("isTitleOption", this.value);
    },
  },
};
</script>
