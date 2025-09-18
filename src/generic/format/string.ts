export function truncateString(
  str: string,
  maxLength: number,
  type: 'end' | 'middle',
): string {
  if (str.length <= maxLength) {
    return str
  }

  switch (type) {
    case 'middle': {
      const half = Math.floor(maxLength / 2)
      return `${str.slice(0, half)}...${str.slice(str.length - half)}`
    }
    case 'end':
      return `${str.slice(0, maxLength)}...`
  }
}
