<template>
  <div class="tpl-navbutton-wrap" :style="cssBase">
    <a class="tpl-navbutton-a" :href="comp.props.link" :style="cssButton">
      <span :style="cssText" class="truncate">{{comp.props.text}}</span>
    </a>
  </div>
</template>
<script>
import styleTrans from "../../utils/styleTrans";
export default {
  props: {
    comp: {
      type: Object,
      required: true
    }
  },
  computed: {
    cssText() {
      return styleTrans(this.comp.css.text);
    },
    cssButton() {
      return styleTrans(this.comp.css.button);
    },
    cssBase() {
      return styleTrans(this.comp.css.base);
    }
  }
};
</script>

<style scoped>
.tpl-navbutton-wrap {
  padding: 10px;
}
.tpl-navbutton-a {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background: #0093e5;
  color: #ffffff;
  padding: 10px;
  min-height: 40px;
  margin: 0 auto;
}
.truncate {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>