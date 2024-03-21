import Vue from 'vue';
import debounce from 'lodash.debounce';

const responsiveMixin = {
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0
    };
  },
  created() {
    this.updateWindowSize();
    window.addEventListener('resize', this.debouncedUpdateWindowSize);
  },
  destroyed() {
    window.removeEventListener('resize', this.debouncedUpdateWindowSize);
  },
  methods: {
    updateWindowSize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
    debouncedUpdateWindowSize: debounce(function() {
      this.updateWindowSize();
    }, 100)
  }
};

Vue.mixin(responsiveMixin);

export default responsiveMixin;
