// uno.config.ts
import { defineConfig } from 'unocss';
import presentWind from 'unocss/preset-wind';

export default defineConfig({
  // ...UnoCSS options
  presets: [presentWind()],
});
