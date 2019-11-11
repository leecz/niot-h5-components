<template>
  <div class="tpl-images-wrap" :style="cssBase">
    <div class="tpl-images-header" v-if="title">
      <div class="tpl-images-title" :style="cssTitle">{{title}}</div>
    </div>
    <swiper :options="swiperOption" class="tpl-images-swiper">
      <swiper-slide v-for="(item, i) in currentImages" :key="i">
        <img :src="item.value" :alt="item.label" />
      </swiper-slide>
      <swiper-slide v-if="isEdit && !currentImages.length">
        <div class="tpl-empty-image">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-image" />
          </svg>
          <span>添加图片</span>
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
    title() {
      return this.comp.props.title;
    },
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
    },
    cssTitle() {
      return styleTrans(this.comp.css.title);
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
.tpl-images-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tpl-images-title {
  margin-bottom: 10px;
}
</style>