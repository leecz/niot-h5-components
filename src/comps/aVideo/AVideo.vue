<template>
  <div class="tpl-video-wrap" :style="cssBase">
    <div class="tpl-video-title" :style="cssText">{{comp.props.title}}</div>
    <div v-if="!showVideo">
      <div class="tpl-empty-video">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-video" />
        </svg>
      </div>
    </div>
    <div v-show="showVideo" v-html="comp.props.code" ref="avideo" class="video-content-wrap"></div>
  </div>
</template>
<script>
import styleTrans from "../../utils/styleTrans";
export default {
  props: {
    comp: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showVideo: false
    };
  },
  computed: {
    cssText() {
      return styleTrans(this.comp.css.title);
    },
    cssBase() {
      return styleTrans(this.comp.css.base);
    }
  },
  mounted() {
    let iframe = this.$refs.avideo.querySelector("iframe");
    if (iframe) {
      iframe.onload = () => {
        this.showVideo = true;
      };
    }
  }
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
  font-size: 40px;
  text-align: center;
  width: 100%;
  margin-top: 90px;
  color: #dddddd;
  min-height: 200px;
}
</style>