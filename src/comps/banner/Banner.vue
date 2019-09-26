<template>
  <div class="tpl-banner-wrap" :style="cssBase">
    <swiper :options="swiperOption" class="tpl-banner-swiper">
      <swiper-slide v-for="(item, i) in currentImages" :key="i">
        <img :src="item.value" :alt="item.label" />
      </swiper-slide>
      <swiper-slide v-if="isEdit && !currentImages.length">
        <div class="tpl-empty-image">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-image" />
          </svg>
          <span>添加 BANNER 图</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import styleTrans from "../../utils/styleTrans";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { transData } from "../../utils/imagesData";
export default {
  components: {
    swiper,
    swiperSlide
  },
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
  data() {
    return {
      swiperOption: {
        loop: false
      }
    };
  },
  computed: {
    currentImages() {
      if (!this.comp.props) {
        return [];
      }
      let keys = this.comp.props.images || [];
      let imageArrays = keys.map(code =>
        this.dataset.find(d => d.code === code)
      );
      return transData(imageArrays);
    },
    cssBase() {
      return styleTrans(this.comp.css.base);
    }
  }
};
</script>

<style scoped>
.tpl-banner-wrap {
  padding: 0;
}
.tpl-banner-swiper {
  height: 224px;
}
.tpl-banner-swiper img {
  width: 100%;
}
.tpl-empty-image {
  font-size: 60px;
  text-align: center;
  width: 100%;
  margin-top: 60px;
  color: #666666;
}
.tpl-empty-image span {
  display: block;
  font-size: 12px;
}
</style>