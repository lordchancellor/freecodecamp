/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function specChar(c) {
  switch(c) {
    case '&':
      return '&amp;';
    case '<':
      return '&lt;';
    case '>':
      return '&gt;';
    case '"':
      return '&quot;';
    case '\'':
      return '&apos;';
    default:
      return c;
  }
}

function convertHTML(str) {
  return str.replace(/[&<>"']/g, specChar);
}

convertHTML("Dolce & Gabbana");
