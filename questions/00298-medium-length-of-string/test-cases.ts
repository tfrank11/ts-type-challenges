import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString00298<''>, 0>>,
  Expect<Equal<LengthOfString00298<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString00298<'reina'>, 5>>,
  Expect<Equal<LengthOfString00298<'Sound! Euphonium'>, 16>>,
]
