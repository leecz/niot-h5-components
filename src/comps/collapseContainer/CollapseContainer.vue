<template>
  <div class="tpl-collapse-wrap" :style="cssBase">
    <div class="tpl-collapse-header">
      <div class="tpl-collapse-title" :style="title">
        {{ comp.props.title }}
      </div>
      <div @click="onClick" class="tpl-collapse-toggle">
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
    <div v-show="showBody">
      <div v-for="(comp, i) in compList" :key="i">
        <component :comp="comp" :is="comp.name" :dataset="dataset"></component>
      </div>
    </div>
  </div>
</template>

<script>
import styleTrans from "../../utils/styleTrans";
// import baseComps from "../baseComps";

import RichText from "../text/RichText";
import Cells from "../cells/Cells";
import NavButton from "../navButton/NavButton";
import NavButtonGroup from "../navButtonGroup/NavButtonGroup";
import Images from "../images/Images";
import AVideo from "../aVideo/AVideo";
import Banner from "../banner/Banner";
import DynamicCells from "../dynamicCells/DynamicCells";
import PureCells from "../pureCells/PureCells";

export default {
  components: {
    RichText,
    Cells,
    NavButton,
    NavButtonGroup,
    Images,
    AVideo,
    Banner,
    DynamicCells,
    PureCells
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
      showBody: this.comp.props.showBody
    };
  },
  computed: {
    compList() {
      return this.comp.children || [];
    },
    title() {
      return styleTrans(this.comp.css.title);
    },
    cssBase() {
      return styleTrans(this.comp.css.base);
    }
  },
  methods: {
    onClick() {
      this.showBody = !this.showBody;
    }
  }
};
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
<style scoped>
.tpl-cell {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  font-size: 14px;
  line-height: 1.2;
}
.tpl-collapse-title {
  padding: 10px 0;
}
.tpl-cell-value {
  max-width: 62%;
  word-break: break-all;
}
.tpl-cell-label {
  word-break: break-all;
  width: 32%;
  padding-right: 10px;
}
.tpl-collapse-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tpl-collapse-wrap {
  padding: 15px;
}
.tpl-collapse-toggle {
  min-width: 50px;
  color: #6a6a6a;
  font-size: 14px;
  text-align: right;
  margin-right: 15px;
}
.tpl-collapse-left {
  justify-content: start;
}
.tpl-collapse-right {
  justify-content: space-between;
}
</style>
