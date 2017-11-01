// @flow

export const pad = (str: string, length: number = 4): string => {
  while (length--) {
    str = '0' + str;
  }
  return str.slice(-length);
};
