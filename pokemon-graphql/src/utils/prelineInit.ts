let prelineLoaded = false;
let HSStaticMethods: typeof import('preline').HSStaticMethods;

export const loadPreline = async () => {
  if (!prelineLoaded) {
    const preline = await import('preline');
    HSStaticMethods = preline.HSStaticMethods;
    prelineLoaded = true
  }
  return HSStaticMethods;
}