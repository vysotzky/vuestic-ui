export const convertFromCamelToKebab = (value: string) => {
  return value.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}