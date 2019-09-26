<template>
  <div class="tpl-video-wrap" :style="cssBase">
    <div class="tpl-video-title" :style="cssText">{{comp.props.title}}</div>
    <div v-if="isEdit && !videoCode">
      <div class="tpl-empty-video">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-video" />
        </svg>
        <span>添加视频</span>
      </div>
    </div>
    <div v-show="videoCode" v-html="videoCode" ref="avideo" class="video-content-wrap"></div>
  </div>
</template>
<script>
import styleTrans from "../../utils/styleTrans";
export default {
  props: {
    comp: {
      type: Object,
      required: true
    },
    dataset: {
      type: Array,
      required: true
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    videoCode() {
      let code = this.comp.props.code;
      let video = this.dataset.find(d => d.code === code) || {};
      return video.value;
    },
    cssText() {
      return styleTrans(this.comp.css.title);
    },
    cssBase() {
      return styleTrans(this.comp.css.base);
    }
  },
  mounted() {}
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
</style>