import dark from "./defineTheme/dark"
import light from "./defineTheme/light"

export type CustomTheme = typeof dark // -- 获取当前 them 类型 --> 在自定义类型文件（styled.d.ts）中配置对应 DefaultTheme 类型 --> 使其后续在样式中使用是可以有更好的支持

const THEME = { dark, light }

export default THEME
