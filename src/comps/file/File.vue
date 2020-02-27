<template>
  <div class="tpl-file-wrap" :style="cssBase">
    <div class="tpl-file-btn" @click="openFile">
      <div class="tpl-file-left">
        <svg
          class="icon"
          aria-hidden="true"
          style="color: #0093E5; font-size: 28px; "
        >
          <use xlink:href="#icon-file-alt" />
        </svg>
        <span class="tpl-file-name">{{ fileName }}</span>
      </div>
      <div>
        <svg
          class="icon"
          aria-hidden="true"
          style="font-size: 16px; color: #D8D8D8"
        >
          <use xlink:href="#icon-arrow-right" />
        </svg>
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
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fileData() {
      let code = this.comp.props.code;
      return this.dataset.find(d => d.code === code) || {};
    },
    fileUrl() {
      return JSON.parse(this.fileData.value)[0];
    },
    fileName() {
      return this.fileData.label || "文件";
    },
    cssText() {
      return styleTrans(this.comp.css.title);
    },
    cssBase() {
      return styleTrans(this.comp.css.base);
    }
  },
  methods: {
    openFile() {
      if (this.isEdit) {
        return;
      }
      window.open(this.fileUrl, "_blank");
    }
  }
};
</script>

<style>
.tpl-file-wrap {
  width: 100%;
  padding: 15px;
}

.tpl-file-btn {
  height: 60px;
  padding: 0 10px;
  background: rgba(245, 246, 250, 1);
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tpl-file-name {
  margin-left: 3px;
  font-size: 15px;
  color: #333333;
}
.tpl-file-left {
  display: flex;
  align-items: center;
}
</style>
