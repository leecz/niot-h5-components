import { isArray } from "util";

export function transData(imageArray) {
  let result = [];

  imageArray.forEach(item => {
    if (!item) {
      return;
    }
    let images = item.value;
    if (!Array.isArray(images)) {
      images = JSON.parse(images);
    }
    if (!Array.isArray(images)) {
      return;
    }
    images.forEach(img => {
      result.push({
        label: item.label,
        value: img
      });
    });
  });
  return result;
}
