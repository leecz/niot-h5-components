export default () => {
  return {
    id: 1,
    title: "折叠容器",
    name: "CollapseContainer",
    type: 3, // 容器类型，可以包含其他组件
    props: {
      title: "标签标题",
      showBody: true
    },
    children: [],
    css: {
      base: {
        w: 100,
        pt: 0,
        pb: 0,
        pl: 0,
        pr: 0
      },
      title: {
        fs: 20,
        fw: "bold",
        color: "#333333",
        pt: 15,
        pb: 15,
        pl: 15,
        pr: 0
      }
    }
  };
};
