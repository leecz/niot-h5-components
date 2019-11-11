<template>
  <div class="tpl-images-wrap" :style="cssBase">
    <div class="tpl-images-header" v-if="title">
      <div class="tpl-images-title" :style="cssTitle">{{title}}</div>
    </div>
    <div v-if="displayMode === 'swipe'">
      <swiper :options="swiperOption" class="tpl-images-swiper">
        <swiper-slide v-for="(item, i) in flatImages" :key="i">
          <img :src="item.value" :alt="item.label" />
        </swiper-slide>
        <swiper-slide v-if="isEdit && !groupImages.length">
          <div class="tpl-empty-image">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-image" />
            </svg>
            <span>添加图片</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div v-if="displayMode === 'link'">
      <div v-for="(item,i) in groupImages" :key="i" class="tpl-images-cell">
        <div class="tpl-imagecell-label">{{item.label}}</div>
        <div class="tpl--imagecell-value" @click="handleImageShow(item.value)">查看</div>
      </div>
    </div>
    <div v-if="displayMode === 'expand'">
      <div v-for="(item,i) in groupImages" :key="i">
        <div class="tpl-images-expand-label">{{item.label}}</div>
        <div v-for="(image,k) in item.value" :key="k">
          <img :src="image" :alt="image" class="tpl-images-expand-img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import styleTrans from "../../utils/styleTrans";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { transData } from "../../utils/imagesData";
const SimpleLightbox = require("simple-lightbox");
import "simple-lightbox/dist/simpleLightbox.css";

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
    displayMode() {
      return this.comp.props.mode || "swipe";
    },
    title() {
      return this.comp.props.title;
    },
    groupImages() {
      if (!this.comp.props) {
        return [];
      }
      let keys = this.comp.props.images || [];
      let imageArrays = keys.map(code => {
        let data = this.dataset.find(d => d.code === code);
        if (!Array.isArray(data.value)) {
          data.value = JSON.parse(data.value);
        }
        return data;
      });
      return imageArrays;
    },
    flatImages() {
      return transData(this.groupImages);
    },
    cssBase() {
      return styleTrans(this.comp.css.base);
    },
    cssTitle() {
      return styleTrans(this.comp.css.title);
    }
  },
  methods: {
    handleImageShow(images) {
      let lightbox = SimpleLightbox.open({
        items: images,
        loadingCaption: "加载中...",
        closeBtnCaption: "关闭",
        nextBtnCaption: "下一张",
        prevBtnCaption: "上一张"
      });
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
.tpl-images-cell {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
}
.tpl-imagecell-label {
  word-break: break-all;
  width: 60%;
  font-size: 14px;
  color: #333333;
}
.tpl--imagecell-value {
  max-width: 35%;
  word-break: break-all;
  font-size: 14px;
  color: #0078d7;
}
.tpl-images-expand-label {
  padding-bottom: 5px;
  padding-top: 8px;
}
.tpl-images-expand-img {
  width: 100%;
  margin-bottom: 5px;
}
</style>