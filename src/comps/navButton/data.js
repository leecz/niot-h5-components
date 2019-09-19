export default () => {
  return {
    id: 1,
    title: "导航",
    name: "NavButton",
    type: 1,
    props: {
      text: "按钮",
      link: ""
    },
    css: {
      base: {
        w: 100,
        pt: 15,
        pb: 15,
        pl: 15,
        pr: 15
      },
      text: {
        fs: 14,
        fw: "",
        c: "#ffffff"
      },
      button: {
        bgc: "#0093e5",
        w: 100,
        h: 48
      }
    }
  };
};
