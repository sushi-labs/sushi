export const truncateText = (str: string, chars = 5): string => {
  if (str) {
    if (str.length <= chars) {
      return str
    }
    return `${str.slice(0, chars)}...${str.slice(str.length - chars)}`
  }
  return ''
}
