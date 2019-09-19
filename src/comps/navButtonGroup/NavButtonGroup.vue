<template>
  <div class="tpl-navbutton-group-wrap" :style="cssBase">
    <a
      v-for="(item, i) in comp.props.links"
      :key="i"
      class="tpl-navbutton-a"
      :href="item.link"
      :style="cssButton"
    >
      <span :style="cssText" class="truncate">{{item.text}}</span>
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
.tpl-navbutton-group-wrap {
  display: flex;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
}
.tpl-navbutton-a {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(230, 235, 238, 0.2);
  overflow: hidden;
  min-height: 40px;
  min-width: 0;
}
a + a {
  border-left: 1px solid #dddddd;
}
.truncate {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>