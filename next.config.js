/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";
import createMDX from "@next/mdx";
/** @type {import("next").NextConfig} */
const config = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  experimental: {
    viewTransition: true,
  },
};
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});
export default withMDX(config);
