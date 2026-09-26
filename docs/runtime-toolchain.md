# Runtime and TypeScript toolchain

Node 26.10.0 is pinned in `.node-version` and the development container. Its optional Python feature is pinned to stable Python 3.14.7.

The production build uses **stable TypeScript 7.0.2** through the `typescript-native` npm alias. `npm run typecheck` invokes its explicit path so competing `tsc` links cannot select the wrong compiler.

`typescript-eslint` 8.70.1 still requires the TypeScript JavaScript API `<6.1.0`; native TypeScript 7 does not provide that API. **TypeScript 6.0.3 remains as the supported parser/language-service dependency only**, while the build uses version 7. This is an intentional dual-toolchain migration. The former `legacy-peer-deps=true` workaround is removed: installs now enforce peer and runtime compatibility. Remove the parser compatibility dependency once a released parser supports native TypeScript.

Run `npm ci`, `npm run build`, `npm run lint`, `npx playwright install --with-deps`, and `npm test`. CI builds and lints before executing the existing browser suite. No lint rules or compiler strictness options were removed.
