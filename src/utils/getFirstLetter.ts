export function getFirstLetter(name?: string): string {
  if (!name || !name.trim()) {
    return '';
  }

  const trimmed = name.trim();
  return trimmed.charAt(0);
}
