export const itemActive = {
  data() {
    return {
      isActive: null,
    };
  },
  methods: {
    activeItem(index) {
      this.isActive = index;
    },
  },
};
