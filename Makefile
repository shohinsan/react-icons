NAME    := Shohin Abdulkhamidov
EMAIL   := abd.shohin@gmail.com
URL     := https://noura.software
LICENSE := MIT

run:
	lsof -i :5173 | awk 'NR!=1 {print $$2}' | xargs -r kill -9
	npm run dev


# Store your npm token in your .npmrc file
setup: setup1 setup2 setup3 setup4

setup1:
	npm set init-author-name '$(NAME)'
	npm set init-author-email '$(EMAIL)'
	npm set init-author-url '$(URL)'
	npm set init-license '$(LICENSE)'
	npm set save-exact true

setup2:
	npm i --save-dev @types/node

# Replace interactive login with token auth
setup3:
	echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc

setup4:
	npm publish

format:
	npm run lint
	npm run format
	npm run test

link:
	npm link
	npm link @insidiouss/react-icons

# npm access grant read-write shohinsan:@meetx
# npm install eslint prettier --save-dev
# npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-prettier eslint-config-prettier --save-dev