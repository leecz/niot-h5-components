export default () => {
  return {
    id: 1,
    title: "图片",
    name: "Images",
    type: 1,
    props: {
      images: [],
      mode: "swipe",
      title: ""
    },
    css: {
      base: {
        w: 100,
        pt: 10,
        pb: 10,
        pl: 0,
        pr: 0
      },
      image: {
        bgc: "#0093e5",
        w: 100,
        h: 32
      },
      title: {
        fs: 20,
        fw: "bold",
        color: "#333333",
        pt: 0,
        pb: 0,
        pl: 0,
        pr: 0
      }
    }
  };
};
