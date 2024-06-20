/* eslint-disable */
import 'maaybe';

import { thisMayReturnMaybe } from './mod';

const value = thisMayReturnMaybe();
document.getElementById('app')!.innerText = isMaybe(value) ? 'Maybe' : 'Not Maybe';
