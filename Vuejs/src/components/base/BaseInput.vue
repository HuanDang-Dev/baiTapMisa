<template>
  <div>
    <label
      class="m-label"
      v-if="label"
    >{{ label }}
      <span v-if="req == true">(<span style="color: red">*</span>)</span>
    </label>
    <input
      :value="value"
      :class="inputClass"
      @input="updateValue"
      @change="updateValue"
      @blur="onBlur()"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    inputClass: {
      type: String,
    },
    label: {
      type: String,
      default: "",
    },
    req: {
      type: Boolean,
    },
    value: [String, Number],
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
    onBlur() {
      this.$emit("blur");
    },
  },
};
</script>