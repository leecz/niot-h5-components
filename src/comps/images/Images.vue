<template>
  <div class="tpl-images-wrap" :style="cssBase">
    <swiper :options="swiperOption" class="tpl-images-swiper">
      <swiper-slide v-for="(item, i) in currentImages" :key="i">
        <img :src="item.value" :alt="item.label" />
      </swiper-slide>
      <swiper-slide v-if="!currentImages.length">
        <div class="tpl-empty-image">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-image" />
          </svg>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import styleTrans from "../../utils/styleTrans";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
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
      return keys.map(code => this.dataset.find(d => d.code === code) || {});
    },
    cssBase() {
      return styleTrans(this.comp.css.base);
    }
  }
};
</script>

<style scoped>
.tpl-images-wrap {
  padding: 0;
}
.tpl-images-swiper {
  min-height: 224px;
}
.tpl-images-swiper img {
  width: 100%;
}
.tpl-empty-image {
  font-size: 40px;
  text-align: center;
  width: 100%;
  margin-top: 90px;
  color: #dddddd;
}
</style>