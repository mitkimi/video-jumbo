export default {
  name: 'videoJumbo',
  components: { },
  data() {
    return {
      mitShowPopupVideo: false,
      backgroundVideoUrl: 'http://cdn.gecacademy.cn/gecfe/gec-12%E7%A7%92.mp4',
      popupVideoUrl: 'http://cdn.gecacademy.cn/gecfe/gec-12%E7%A7%92.mp4',
    };
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
