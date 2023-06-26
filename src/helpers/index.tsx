export function isValueValid(input: any, regex: RegExp): boolean {
  return regex.test(input);
}
