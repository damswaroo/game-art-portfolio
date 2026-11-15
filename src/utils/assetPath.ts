const BASE_URL = import.meta.env.BASE_URL || '/';

const normalizeBase = (base: string): string => {
  if (!base || base === '/') return '/';
  return base.endsWith('/') ? base : `${base}/`;
};

/**
 * Resolves static public asset paths using Vite's `import.meta.env.BASE_URL`
 * so assets work both in local/AI Studio dev (`/`) and GitHub Pages (`/game-art-portfolio/`).
 * - External URLs (`http://`, `https://`, `//`, `data:`, `blob:`) are returned untouched.
 * - Paths that already include `BASE_URL` are not prefixed twice.
 */
export const resolveAssetUrl = (path?: string): string => {
  if (!path) return '';
  const trimmed = path.trim();
  if (!trimmed) return '';

  if (/^(https?:)?\/\/|^data:|^blob:/i.test(trimmed)) {
    return trimmed;
  }

  const base = normalizeBase(BASE_URL);
  let resolved: string;

  if (base !== '/' && (trimmed.startsWith(base) || trimmed === base.slice(0, -1))) {
    resolved = trimmed;
  } else {
    const cleanRelative = trimmed.replace(/^\/+/, '');
    resolved = `${base}${cleanRelative}`;
  }

  try {
    return encodeURI(decodeURI(resolved));
  } catch {
    return encodeURI(resolved);
  }
};
