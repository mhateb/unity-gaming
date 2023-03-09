/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
	  styledComponents: true,
	},
	experimental: {
	  fontLoaders: [
		{
		  loader: '@next/font/google',
		  options: { subsets: ['latin'], weight: ['400', '500', '600', '700'] },
		},
	  ],
	},
}

module.exports = nextConfig
