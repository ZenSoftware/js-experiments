export const compose =
  (...fns) =>
  val =>
    fns.reduceRight((prev, fn) => fn(prev), val);
