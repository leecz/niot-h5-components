<template>
  <div class="tpl-cells-wrap" :style="cssBase">
    <div class="tpl-cells-header">
      <div class="tpl-cells-title" :style="title">{{ comp.props.title }}</div>
      <div @click="onClick" class="tpl-cells-toggle">
        <span v-show="!showBody">
          展开
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-caret-down" />
          </svg>
        </span>
        <span v-show="showBody">
          收起
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-caret-up" />
          </svg>
        </span>
      </div>
    </div>
    <div v-show="showBody">
      <div v-for="(item, i) in currentDataset" :key="i" class="tpl-cell">
        <div :style="cellLabel">{{item.label}}</div>
        <div :style="cellValue" class="tpl-cell-value">{{item.value}}</div>
      </div>
    </div>
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
    }
  },
  data() {
    return {
      showBody: this.comp.props.showBody
    };
  },
  computed: {
    currentDataset() {
      let keys = this.comp.props.datakeys || [];
      return keys.map(code => this.dataset.find(d => d.code === code) || {});
    },
    cellLabel() {
      return styleTrans(this.comp.css.cellLabel);
    },
    cellValue() {
      return styleTrans(this.comp.css.cellValue);
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
.tpl-cells-title {
  padding: 10px 0;
}
.tpl-cell-value {
  max-width: 62%;
  word-break: break-all;
}
.tpl-cells-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tpl-cells-wrap {
  padding: 15px;
}
.tpl-cells-toggle {
  min-width: 50px;
  color: #6a6a6a;
  font-size: 14px;
  text-align: right;
}
</style>