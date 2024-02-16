export const getScrollAnimationHeading = () => {
  return {
    offscreen: {
      x: 0,
      opacity: 1,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
};

export const getScrollAnimationComponents = () => {
  return {
    offscreen: {
      y: 0,
      opacity: 1,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
};
