<template>
  <div class="tpl-images-wrap" :style="cssBase">
    <div class="tpl-images-header" v-if="title">
      <div class="tpl-images-title" :style="cssTitle">{{ title }}</div>
      <div
        v-if="displayMode === 'fold'"
        @click="onFoldClick"
        class="tpl-images-toggle"
      >
        <span v-show="!showBody">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-caret-right" />
          </svg>
        </span>
        <span v-show="showBody">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-caret-down" />
          </svg>
        </span>
      </div>
    </div>
    <div v-if="isEdit && !flatImages.length">
      <div class="tpl-empty-image">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-image" />
        </svg>
        <span>添加图片</span>
      </div>
    </div>
    <div v-else>
      <div v-if="displayMode === 'swipe'">
        <swiper :options="swiperOption" class="tpl-images-swiper">
          <swiper-slide v-for="(item, i) in flatImages" :key="i">
            <img :src="item.value" :alt="item.label" loading="lazy" />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div v-if="displayMode === 'link'">
        <div v-for="(item, i) in groupImages" :key="i" class="tpl-images-cell">
          <div class="tpl-imagecell-label">{{ item.label }}</div>
          <div
            class="tpl--imagecell-value"
            @click="handleImageShow(item.value)"
          >
            查看
          </div>
        </div>
      </div>
      <div v-if="displayMode === 'expand'">
        <div v-for="(item, i) in groupImages" :key="i">
          <!-- <div class="tpl-images-expand-label">{{ item.label }}</div> -->
          <div v-for="(image, k) in item.value" :key="k">
            <img
              :src="image"
              :alt="image"
              class="tpl-images-expand-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div v-if="displayMode === 'fold'">
        <div v-show="showBody">
          <div v-for="(item, i) in flatImages" :key="i">
            <img
              :src="item.value"
              :alt="item.label"
              loading="lazy"
              class="tpl-images-expand-img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import styleTrans from "../../utils/styleTrans";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { transData } from "../../utils/imagesData";
import PhotoSwipe from "photoswipe/dist/photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { insertHtml } from "./photoswipeHtml";

export default {
  components: {
    swiper,
    swiperSlide,
  },
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
      swiperOption: {
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      showBody: this.comp.props.showBody,
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
      let imageArrays = keys.map((code) => {
        let data = this.dataset.find((d) => d.code === code);
        if (data && !Array.isArray(data.value)) {
          data.value = data.value ? JSON.parse(data.value) : [];
        }
        return data;
      });
      return imageArrays.filter(item => !!item);
    },
    flatImages() {
      return transData(this.groupImages);
    },
    cssBase() {
      return styleTrans(this.comp.css.base);
    },
    cssTitle() {
      return styleTrans(this.comp.css.title);
    },
  },
  methods: {
    onFoldClick() {
      this.showBody = !this.showBody;
    },

    handleImageShow(images) {
      let pswpElement = document.querySelector(".pswp");
      if (!pswpElement) {
        return;
      }
      const items = images.map((url) => {
        return {
          src: url,
          w: 0,
          h: 0,
        };
      });
      let options = {
        index: 0,
        fullscreenEl: false,
        shareEl: false,
        arrowEl: false,
      };
      let gallery = new PhotoSwipe(
        pswpElement,
        PhotoSwipeUI_Default,
        items,
        options
      );
      gallery.listen("imageLoadComplete", function(index, item) {
        if (item.h < 1 || item.w < 1) {
          let img = new Image();
          img.onload = () => {
            item.w = img.width;
            item.h = img.height;
            gallery.invalidateCurrItems();
            gallery.updateSize(true);
          };
          img.src = item.src;
        }
      });
      gallery.init();
    },
    // handleImageShow(images) {
    //   let lightbox = SimpleLightbox.open({
    //     items: images,
    //     loadingCaption: "加载中...",
    //     closeBtnCaption: "关闭",
    //     nextBtnCaption: "下一张",
    //     prevBtnCaption: "上一张"
    //   });
    // }
  },
  mounted() {
    insertHtml();
  },
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
  padding-bottom: 60px;
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
.tpl-images-toggle {
  min-width: 50px;
  color: #6a6a6a;
  font-size: 14px;
  text-align: right;
  padding-right: 15px;
}
</style>
