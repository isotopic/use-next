/** @type {import('next').NextConfig} */
const nextConfig = {
    /*
    output: 'export',
    distDir: 'dist',
    */
    images: { unoptimized: true },
    env:{
        NEXTAUTH_SECRET: '1a3d74d87be1ceb78fa6c7729d29d912'
    }
}

module.exports = nextConfig
