export default () => {
  return {
    id: 1,
    title: "导航组",
    name: "NavButtonGroup",
    type: 1,
    props: {
      links: [
        { text: "按钮1", link: "" },
        { text: "按钮2", link: "" },
        { text: "按钮3", link: "" }
      ]
    },
    css: {
      base: {
        w: 100,
        pt: 0,
        pb: 0,
        pl: 0,
        pr: 0
      },
      text: {
        fs: 14,
        fw: "",
        c: "#333333"
      },
      button: {
        bgc: "rgba(230, 235, 238, 0.2)",
        h: 50
      }
    }
  };
};
