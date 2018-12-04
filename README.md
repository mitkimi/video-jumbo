# video-jumbo

> A vue.js Video Jumbo plugin for Slider or Jumbo Page

## Usage

``` bash
# bash
$ npm install video-jumbo

# main.js
import VideoJumbo from 'video-jumbo';
Vue.use(VideoJumbo);

# component template
<video-jumbo :data="videoData"></video-jumbo>
# component js(data)
data() {
  return {
    videoData: {
      backgroundVideoUrl: require('@/assets/myvideo.mp4'), // background video, required, using files in project demo
      popupVideoUrl: 'http://cdn.ipietech.com/videos/myvideo.mp4', // popup video, required, using cdn demo
    }
  }
}
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
