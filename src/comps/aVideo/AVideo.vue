<!--
 * @Author: Chris Young
 * @Date: 2019-09-17 14:37:29
 * @LastEditors: Chris Young
 * @LastEditTime: 2020-09-17 09:34:47
 * @Description: file content
-->
<template>
  <div class="tpl-video-wrap" :style="cssBase">
    <div class="tpl-video-title" :style="cssText">{{ comp.props.title }}</div>
    <div v-if="isEdit && !videoCode">
      <div class="tpl-empty-video">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-video" />
        </svg>
        <span>添加视频</span>
      </div>
    </div>
    <div v-show="isUrlVedio" class="tpl-video-wrap">
      <video
        :id="rid"
        class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9"
        playsinline="true"
        width="100%"
      >
        <source :src="videoCode" type="video/mp4">
      </video>
    </div>
    <div
      v-show="!isUrlVedio"
      v-html="videoCode"
      ref="avideo"
      class="video-content-wrap"
    ></div>
  </div>
</template>
<script>
import videojs from "video.js";


import video_zhCN from 'video.js/dist/lang/zh-CN.json'
import "video.js/dist/video-js.css";

import video_en from  'video.js/dist/lang/en.json'
videojs.addLanguage('zh-CN', video_zhCN);
videojs.addLanguage('en', video_en);

import styleTrans from "../../utils/styleTrans";
export default {
  props: {
    comp: {
      type: Object,
      required: true,
    },
    dataset: {
      type: Array,
      required: true,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      player: null,
      rid: 'v' + Math.random()
        .toString(36)
        .substring(7),
    };
  },
  computed: {
    videoCode() {
      let code = this.comp.props.code;
      let video = this.dataset.find((d) => d.code === code) || {};
      return video.value || "";
    },
    isUrlVedio() {
      return (
        this.videoCode.startsWith("http://") ||
        this.videoCode.startsWith("https://")
      );
    },
    cssText() {
      return styleTrans(this.comp.css.title);
    },
    cssBase() {
      return styleTrans(this.comp.css.base);
    },
  },
  watch: {
    videoCode() {
      this.changeVideo();
    },
  },
  methods: {
    changeVideo() {
      if (this.isUrlVedio && this.player) {
        this.player.src({
          src: this.videoCode,
          type: "video/mp4",
        });
      } 
    },
    initVedio() {
      let options = {
        controls: true,
        autoplay: false,
        preload: "none",
        bigPlayButton: true,
        textTrackDisplay: true,
        posterImage: true,
        errorDisplay: false,
        controlBar: true,
        // playbackRates: [0.5, 1, 1.5, 2],
        controlBar: {
          volumePanel: {
            inline: false,
          },
          fullscreenToggle: false,
          pictureInPictureToggle: false
        },
      };
      this.player = videojs(this.rid, options, function onPlayerReady() {
        if (this.isUrlVedio) {
          this.player.src({
            src: this.videoCode,
            type: "video/mp4",
          });
        }
      });
    },
  },
  mounted() {
    this.initVedio();
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style>
.tpl-video-wrap {
  width: 100%;
  padding: 0;
}
.tpl-video-title {
  margin-bottom: 10px;
}
.video-content-wrap > iframe {
  width: 100%;
}
.tpl-empty-video {
  font-size: 60px;
  text-align: center;
  width: 100%;
  margin-top: 60px;
  color: #666666;
  min-height: 150px;
}
.tpl-empty-video span {
  display: block;
  font-size: 12px;
}
.tpl-video-wrap {
  width: 100%;
}
</style>
