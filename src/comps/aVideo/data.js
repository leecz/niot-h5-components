export default () => {
  return {
    id: 1,
    title: "视频",
    name: "AVideo",
    type: 1,
    anim: {
      type: 1,
      duration: 1,
      delay: 0.4
    },
    props: {
      title: "视频 标题",
      code: `<iframe src="//player.bilibili.com/player.html?aid=67710037&cid=117366857&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>`
    },
    css: {
      base: {
        w: 100,
        pt: 15,
        pb: 0,
        pl: 15,
        pr: 15
      },
      title: {
        fs: 16,
        fw: "bold",
        c: "#333333",
        pt: 0,
        pb: 0,
        pl: 0,
        pr: 0
      }
    }
  };
};
