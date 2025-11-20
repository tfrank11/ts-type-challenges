type AnyOf<T extends readonly any[]> = T[number] extends (0 | false | '' | { [k: string]: never } | [] | undefined | null)
  ? false
  : true
