<template>
  <video-jumbo :data="data">
    <div style="margin-bottom: 30px;">
      显示在中间的内容
    </div>
  </video-jumbo>
</template>
<script>
import VideoJumbo from '../videoJumbo';

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
