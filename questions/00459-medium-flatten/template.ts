type Flatten<Arr extends unknown[]> = Arr extends [infer First, ...infer Rest]
  ? First extends unknown[] ?
      [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : Arr
