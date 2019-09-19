export default () => {
  return {
    id: 1,
    title: "文字",
    name: "RichText",
    type: 1,
    anim: {
      type: 1,
      duration: 1,
      delay: 0.4
    },
    props: {
      text: "<p>这是文本组件</p>"
    },
    css: {
      base: {
        w: 100,
        pt: 0,
        pb: 0,
        pl: 0,
        pr: 0
      }
    }
  };
};
