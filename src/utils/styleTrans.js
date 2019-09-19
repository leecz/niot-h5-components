import keyMatch from "./styleMatch";

export default function(style) {
  if (!style && typeof style !== "object") {
    return "";
  }

  let result = {};
  Object.keys(style).forEach(key => {
    if (style[key] == null || style[key] === "") {
      return;
    }
    let match = keyMatch[key];
    if (!match) {
      return;
    }
    if (typeof match === "object") {
      // w: 100 => width: 100%
      let styleName = match.value || key;
      result[styleName] = `${style[key]}${match.unit}`;
    } else {
      result[match] = style[key];
    }
  });
  return result;
}
