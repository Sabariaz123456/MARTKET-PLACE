import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains :['cdn.sanity.io']
  }
};

module.exports= nextConfig;