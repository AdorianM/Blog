/** @type {import('next').NextConfig} */
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

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
        remarkPlugins: [remarkFrontmatter, remarkGfm],
        rehypePlugins: []
    },

});

export default withMDX(nextConfig);
