type LengthOfString00298<S extends string, Acc extends unknown[] = []> = S extends `${infer _}${infer Rest}`
  ? LengthOfString00298<Rest, [...Acc, null]>
  : Acc['length']
