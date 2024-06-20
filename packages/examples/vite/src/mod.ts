export const thisMayReturnMaybe = () => {
  if (Math.random() > 0.5) {
    return maybe;
  }
  return null;
};
