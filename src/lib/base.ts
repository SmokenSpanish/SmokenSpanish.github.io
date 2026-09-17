/** Vite BASE_URL always ends with `/`. */
export function withBase(path: string): string {
  const normalized = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
}

export function routerBasename(): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base === '' ? '/' : base;
}
