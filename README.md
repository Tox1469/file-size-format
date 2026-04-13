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
