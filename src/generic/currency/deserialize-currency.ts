export function createCurrencyDeserializer<
  const TConstructors extends Record<string, new (data: any) => any>,
>(constructors: TConstructors) {
  return <TType extends keyof TConstructors & string>(data: {
    type: TType
  }): InstanceType<TConstructors[TType]> => {
    const Constructor = constructors[data.type]
    if (!Constructor) throw new Error(`Unsupported currency type: ${data.type}`)
    return new Constructor(data)
  }
}
