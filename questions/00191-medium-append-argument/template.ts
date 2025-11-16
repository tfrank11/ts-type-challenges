type AppendArgument<Fn extends Function, A> = Fn extends (...a: infer Args) => infer Rtn
  ? (...args: [...Args, A]) => Rtn
  : never
