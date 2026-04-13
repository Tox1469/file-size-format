const UNITS_BIN = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'];
const UNITS_DEC = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

export interface FormatOptions {
  binary?: boolean;
  decimals?: number;
  space?: boolean;
}

export function formatSize(bytes: number, opts: FormatOptions = {}): string {
  const { binary = false, decimals = 2, space = true } = opts;
  if (!Number.isFinite(bytes)) return 'NaN';
  const neg = bytes < 0;
  bytes = Math.abs(bytes);
  const base = binary ? 1024 : 1000;
  const units = binary ? UNITS_BIN : UNITS_DEC;
  if (bytes < base) {
    return `${neg ? '-' : ''}${bytes}${space ? ' ' : ''}${units[0]}`;
  }
  let i = Math.floor(Math.log(bytes) / Math.log(base));
  if (i >= units.length) i = units.length - 1;
  const value = bytes / Math.pow(base, i);
  return `${neg ? '-' : ''}${value.toFixed(decimals)}${space ? ' ' : ''}${units[i]}`;
}

export function parseSize(str: string): number {
  const m = str.trim().match(/^(-?\d+(?:\.\d+)?)\s*([KMGTP]?i?B)?$/i);
  if (!m) return NaN;
  const value = parseFloat(m[1]);
  const unit = (m[2] || 'B').toUpperCase();
  const map: Record<string, number> = {
    B: 1,
    KB: 1e3,
    MB: 1e6,
    GB: 1e9,
    TB: 1e12,
    PB: 1e15,
    KIB: 1024,
    MIB: 1024 ** 2,
    GIB: 1024 ** 3,
    TIB: 1024 ** 4,
    PIB: 1024 ** 5,
  };
  const mult = map[unit];
  return mult ? value * mult : NaN;
}
