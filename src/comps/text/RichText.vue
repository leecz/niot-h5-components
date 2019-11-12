<template>
  <div class="tpl-text-container">
    <div class="ql-snow">
      <div class="ql-editor">
        <div v-if="comp.props" v-html="comp.props.text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comp: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped>
.tpl-text-container {
  width: 100%;
  min-height: 50px;
  font-size: 14px;
}
</style>