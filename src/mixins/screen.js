export default {
  computed: {
    isTablet () {
      return this.size.innerWidth < 991 && this.size.innerWidth >= 767
    },
    isDesktop () {
      return this.size.innerWidth >= 991
    },
    isPhone () {
      return this.size.innerWidth < 767
    },
    isMobile () {
      return this.isPhone || this.isTablet
    }
  },
  data () {
    return {
      size: {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      }
    }
  },
  methods: {
    handleResize: function () {
      this.size = {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      }
    }
  },
  mounted: function () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }
}
