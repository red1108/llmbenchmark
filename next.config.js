/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    reactStrictMode: true,
    // env 내용 추가
    env: {
      BASE_URL: process.env.BASE_URL,
    },
};