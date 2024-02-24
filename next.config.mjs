/** @type {import('next').NextConfig} */
import remarkFrontmatter from "remark-frontmatter";
import createMDX from "@next/mdx";
import remarkParse from "remark-parse";

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placekitten.com",
                port: '',
                pathname: '**'
            }, {
                protocol: "https",
                hostname: "picsum.photos",
                port: '',
                pathname: '**'
            }
        ]
    }
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkFrontmatter],
        rehypePlugins: []
    },

});

export default withMDX(nextConfig);
