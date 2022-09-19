// fliegdoc.config.js
const { HTMLTheme } = require('fliegdoc');

module.exports = {
	baseUrl: 'https://cfna.github.io/cfwest-api/',
	outDir: './docs',
	readme: './README.md',
	modules: [
		{
			package: './packages/common/package.json',
			tsconfig: './packages/common/tsconfig.json',
			mainFile: './packages/common/src/index.ts'
		},
        {
			package: './packages/login/package.json',
			tsconfig: './packages/login/tsconfig.json',
			mainFile: './packages/login/src/index.ts'
		},
        {
			package: './packages/ranking/package.json',
			tsconfig: './packages/ranking/tsconfig.json',
			mainFile: './packages/ranking/src/index.ts'
		}
	],
	title: '[Unofficial] CrossFire West Api Docs', // appears in the page title and header
	externalLinks: {
        "GitHub": "https://github.com/cfna/cfwest-api"
    }, // e.g.: { "GitHub": "https://github.com/fliegwerk/fliegdoc" }
	hidePrivateMembers: true,
	theme: HTMLTheme
};