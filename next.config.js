const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  output: "export",
  // 支持 latex
  latex: true,
  // 支持静态图片
  staticImage: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    // next 工程本身配置内容
    reactStrictMode: true,
}

module.exports = withNextra(nextConfig)
