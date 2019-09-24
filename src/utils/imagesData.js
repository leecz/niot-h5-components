export function transData(imageArray) {
  let result = [];

  imageArray.forEach(item => {
    if (!item.value) {
      return;
    }
    let images = JSON.parse(item.value);
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
