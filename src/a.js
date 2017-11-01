// @flow

import config from './constants/config';
import {pad} from './utils/string';

function foo(x: ?string): string {
  if (x) {
    return x;
  }
  return 'default string';
}

foo('test');

pad('a');
pad('1');

console.log(config.URL_BAI_DU);
