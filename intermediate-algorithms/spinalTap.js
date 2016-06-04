/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  //              $1     $2     $3    $4     $5   $6      $7    $8      $9    $10
  var regex = /([a-z])([A-Z])|([_])([a-z])|([_])([A-Z])|([\s])([a-z])|([\s])([A-Z])/g;
  return str.replace(regex, '$1-$2$4$6$8$10').toLowerCase();
}

console.log(spinalCase('ThisIs_spinal Tap'));
