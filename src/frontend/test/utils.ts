export const waitForRender = async (test: any) => {
  setTimeout(() => {
    test();
  }, 1000);
};
