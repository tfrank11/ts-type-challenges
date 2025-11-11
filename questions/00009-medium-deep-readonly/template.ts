type DeepReadonly<T> = T extends Function
  ? T
  : T extends Object
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : T
