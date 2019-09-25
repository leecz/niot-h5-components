export default () => {
  return {
    id: 1,
    title: "Banner图",
    name: "Banner",
    type: 2,
    props: {
      images: ["s_product_picture"]
    },
    css: {
      base: {
        w: 100
      },
      image: {
        bgc: "#0093e5",
        w: 100,
        h: 32
      }
    }
  };
};
