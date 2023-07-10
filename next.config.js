/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    modularizeImports:{
      '@mui/material':{
        transform:'@mui/material/{{member}}',
      },
      '@mui/icons-material':{
        transform:'@mui/icons-material/{{member}}',
      },
      
    },
  images: {
    // loader: 'custom',
    // loaderFile: './image.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'relikon-strapi.ntb.one',
        port: '',
        pathname: '/uploads/**',
      },
      
    ],
    unoptimized: true 
  },
}

module.exports = nextConfig
