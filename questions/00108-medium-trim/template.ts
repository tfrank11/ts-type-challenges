type Trim<S extends string> = S extends `${' ' | '\t' | '\n'}${infer Rest}`
  ? Trim<Rest>
  : S extends `${infer First}${' ' | '\t' | '\n'}`
    ? Trim<First>
    : S
