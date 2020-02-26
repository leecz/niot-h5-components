<template>
  <div class="tpl-cells-wrap" :style="cssBase">
    <div
      v-for="(item, i) in currentDataset"
      :key="i"
      class="tpl-cell"
      :class="modeClass"
    >
      <div :style="cellLabel" class="tpl-cell-label">{{ item.label }}</div>
      <div :style="cellValue" class="tpl-cell-value">{{ item.value }}</div>
    </div>
    <div v-if="isEdit && !currentDataset.length" class="tpl-cell">
      <div class="tpl-cell-label">标签</div>
      <div class="tpl-cell-value">值</div>
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
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // showBody: this.comp.props.showBody
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
    // title() {
    //   return styleTrans(this.comp.css.title);
    // },
    cssBase() {
      return styleTrans(this.comp.css.base);
    },
    modeClass() {
      return {
        "tpl-cells-left": this.comp.props.mode === "left"
      };
    }
  }
};
</script>

<style scoped>
.tpl-cells-wrap {
  min-height: 30px;
}
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
.tpl-cell-label {
  word-break: break-all;
  width: 32%;
  padding-right: 10px;
}
.tpl-cells-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tpl-cells-toggle {
  min-width: 50px;
  color: #6a6a6a;
  font-size: 14px;
  text-align: right;
}
.tpl-cells-left {
  justify-content: start;
}
.tpl-cells-right {
  justify-content: space-between;
}
</style>
