import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    // 顶部小菜单图标布局
    ["top-menu-icon", "text-white m-inline-2 font-size-4 hover:text-black transition-all-200 cursor-pointer"]
  ],
  rules: [
    [
      /^bg-rgba-([\.\d]+)-([\.\d]+)-([\.\d]+)-([\.\d]+)$/,
      ([_, r, g, b, a]) => ({ "background-color": `rgba(${r}, ${g}, ${b}, ${a})` })
    ],
    [
      /^color-([a-z]+)/,
      (_, color) => ({ "background-color": `${color}` })
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
