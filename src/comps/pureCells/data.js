/*
 * @Author: Chris Young
 * @Date: 2020-02-26 13:51:51
 * @LastEditors: Chris Young
 * @LastEditTime: 2020-11-23 15:30:07
 * @Description: file content
 */
export default () => {
  return {
    id: 1,
    title: "列表",
    name: "PureCells",
    type: 1,
    props: {
      // title: "标题",
      // showBody: true,
      mode: "left", // [left, right]
      datakeys: []
    },
    css: {
      base: {
        w: 100,
        pt: 0,
        pb: 0,
        pl: 15,
        pr: 15
      },
      // title: {
      //   fs: 20,
      //   fw: "bold",
      //   color: "#333333"
      // },
      cellLabel: {
        fs: 14,
        fw: "",
        c: "#6a6a6a"
      },
      cellValue: {
        fs: 14,
        fw: "",
        c: "#333333"
      }
    }
  };
};
