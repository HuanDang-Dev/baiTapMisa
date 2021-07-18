export const itemActive = {
  data() {
    return {
      isActive: -1,
    };
  },
  methods: {
    activeItem(index) {
      this.isActive = index;
    },
  },
};
