export const compose =
  (...fns) =>
  val =>
    fns.reduceRight((prev, fn) => fn(prev), val);

export const pipe =
  (...fns) =>
  val =>
    fns.reduce((prev, fn) => fn(prev), val);
