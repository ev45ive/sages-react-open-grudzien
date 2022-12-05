//https://www.npmjs.com/package/classnames
export const classNames = (...classes: (string | false)[]) =>
  classes.filter(Boolean).join(" ");
