install:
	npm ci
publish:
	npm publish --dry-run
check:
	node bin/gendiff.js file1.json file2.json