type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ?
  First extends U ?
    true :
    Rest extends [] ?
      false :
      Includes<Rest, U> :
  false
