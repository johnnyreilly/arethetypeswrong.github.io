# @apollo__client-3.7.16.tgz

```
$ attw @apollo__client-3.7.16.tgz -f table-flipped


@apollo/client v3.7.16

👺 Import resolved to an ESM type declaration file, but a CommonJS JavaScript file. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseESM.md

⚠️ A require call resolved to an ESM JavaScript file, which is an error in Node and some bundlers. CommonJS consumers will need to use a dynamic import. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/CJSResolvesToESM.md

🥴 Import found in a type declaration file failed to resolve. Either this indicates that runtime resolution errors will occur, or (more likely) the types misrepresent the contents of the JavaScript files. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/InternalResolutionError.md


┌─────────────────────────────────────────┬────────┬──────────────────────────────┬──────────────────────────────┬─────────┐
│                                         │ node10 │ node16 (from CJS)            │ node16 (from ESM)            │ bundler │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client"                        │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/cache"                  │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/core"                   │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/errors"                 │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/link/batch"             │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/link/batch-http"        │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/link/context"           │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/link/core"              │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/link/error"             │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/link/http"              │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/link/persisted-queries" │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/link/retry"             │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/link/schema"            │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/link/subscriptions"     │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/link/utils"             │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/link/ws"                │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/react"                  │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/react/components"       │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/react/context"          │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/react/hoc"              │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/react/hooks"            │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/react/parser"           │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/react/ssr"              │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/testing"                │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/testing/core"           │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/utilities"              │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
├─────────────────────────────────────────┼────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@apollo/client/utilities/globals"      │ 🟢     │ 👺 Masquerading as ESM       │ 👺 Masquerading as ESM       │ 🟢      │
│                                         │        │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │         │
│                                         │        │ 🥴 Internal resolution error │                              │         │
└─────────────────────────────────────────┴────────┴──────────────────────────────┴──────────────────────────────┴─────────┘


```

Exit code: 1