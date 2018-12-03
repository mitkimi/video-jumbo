<template>
  <video-jumbo :data="data">
    显示在中间的内容
  </video-jumbo>
</template>
<script>
import VideoJumbo from '@/components/videoJumbo';

export default {
  components: {
    VideoJumbo,
  },
  data() {
    return {
      data: {
        // eslint-disable-next-line
        backgroundVideoUrl: require('@/assets/test.mp4'),
        // eslint-disable-next-line
        popupVideoUrl: require('@/assets/videoplayback.mp4'),
      },
    };
  },
};
</script>
