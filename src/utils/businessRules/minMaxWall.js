const minHeightWidth = 1;
const maxHeightWidth = 15;

const ruleLength = (length, min, max) => length >= min && length <= max;

export default (height, width) => {
  const ruleHeight = ruleLength(height, minHeightWidth, maxHeightWidth);
  const ruleWidth = ruleLength(width, minHeightWidth, maxHeightWidth);

  if (ruleHeight && ruleWidth) return true;
  return false;
};
