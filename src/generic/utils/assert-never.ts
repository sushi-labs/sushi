export function assertNever(value: never, message = 'Unexpected value'): never {
  void value
  throw new Error(message)
}
