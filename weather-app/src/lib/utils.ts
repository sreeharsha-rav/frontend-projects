export const debounce = (func: Function, delay: number, { leading = false } = {}) => {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let resolveList: Function[] = [];

  return (...args: any[]) => {
    if (!timerId && leading) {
      func(...args);
    }
    if (timerId) {
      clearTimeout(timerId);
    }

    return new Promise<void>((resolve) => {
      resolveList.push(resolve);
      timerId = setTimeout(async () => {
        await func(...args);
        timerId = null;
        resolveList.forEach((res) => res());
        resolveList = [];
      }, delay);
    });
  };
};