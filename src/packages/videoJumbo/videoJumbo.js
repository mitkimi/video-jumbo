export default {
  name: 'videoJumbo',
  components: { },
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      pageData: {
        playBtn: require('./img/play.png'),
        closeBtn: require('./img/close.png')
      },
      mitShowPopupVideo: false,
      backgroundVideoUrl: '',
      popupVideoUrl: '',
    };
  },
  mounted() {
    this.backgroundVideoUrl = this.data.backgroundVideoUrl;
    this.popupVideoUrl = this.data.popupVideoUrl;
  },
  methods: {
    handleMitShowPopupVideo() {
      this.mitShowPopupVideo = true;
    },
    handleMitHidePopupVideo() {
      this.mitShowPopupVideo = false;
      this.$refs.popupVideo.pause();
    },
  },
};
