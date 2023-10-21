export const removeAccents = (s: string, options?: { toLowerCase: boolean }): string => {
  if (!s) {
    return s
  }
  if (options?.toLowerCase) {
    s = s.toLowerCase()
  }
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export const didValueMatch = (v1?: string | null, v2?: string | null): boolean => {
  return (
    removeAccents(v1 || '', { toLowerCase: true }) ===
    removeAccents(v2 || '', { toLowerCase: true })
  )
}
