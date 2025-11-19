type Diff<O, O1> = {
  [K in keyof (O & O1) as K extends keyof (O1 | O) ? never : K]: (O & O1)[K]
}
