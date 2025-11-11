type MyReturnType<T extends Function> = T extends (...a: any) => infer R ? R : never
