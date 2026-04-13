[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/file-size-format/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/file-size-format/actions)
[![License](https://img.shields.io/github/license/Tox1469/file-size-format?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/file-size-format?style=flat-square)](https://github.com/Tox1469/file-size-format/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/file-size-format?style=flat-square)](https://github.com/Tox1469/file-size-format/stargazers)

---

# file-size-format

Converte bytes em strings legiveis (KB, MB, GB, TB) e vice-versa. Suporta bases decimal (1000) e binaria (1024).

## Instalacao

```bash
npm install file-size-format
```

## Uso

```ts
import { formatSize, parseSize } from "file-size-format";

formatSize(1536);                     // "1.54 KB"
formatSize(1536, { binary: true });   // "1.50 KiB"
parseSize("2.5 MB");                  // 2500000
```

## API

- `formatSize(bytes: number, opts?): string`
- `parseSize(str: string): number`

## Licenca

MIT