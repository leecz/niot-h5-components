<template>
  <div class="tpl-cells-wrap">
    <div class="tpl-cells-header">
      <div class="tpl-cells-title">{{ title }}</div>
      <div @click="onClick" class="tpl-cells-toggle">
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
      <div
        v-for="(item, i) in currentDataset"
        :key="i"
        class="tpl-cell"
        :class="modeClass"
      >
        <div class="tpl-cell-label">{{ item.label }}</div>
        <div class="tpl-cell-value">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import styleTrans from "../../utils/styleTrans";
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    dataset: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showBody: true
    };
  },
  computed: {
    currentDataset() {
      return this.dataset || []
    },

    modeClass() {
      return {
        "tpl-cells-left": false
      };
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
.tpl-cells-wrap {
  padding: 15px;
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
