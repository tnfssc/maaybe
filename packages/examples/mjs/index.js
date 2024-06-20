import 'maaybe';

/** @param {unknown} value */
function PrintValue(value) {
  switch (true) {
    case isMaybe(value):
      console.log('MaybeValue', value);
      break;
    default:
      console.log('NotMaybeValue', value);
  }
}

[maybe, true, false, null, undefined, 0, '', [], {}, new Date()].forEach((value) => {
  PrintValue(value);
});
