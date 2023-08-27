function convert(input, source, target) {
  if (source <= Alphabet.HEXA_DECIMAL && target <= Alphabet.HEXA_DECIMAL) {
    return parseInt(input, source.length).toString(target.length);
  }
  
  if (input < source.length) {
    if (source.length < target.length)
      return target[input];
  }
  
  const decimal = convertToDecimal(input, source, target)
  const conversion = convertFromDecimal(decimal, target);
  return conversion;
}
function convertToDecimal(input, source, target) {
  let decimal = 0;
  for (let i = 0, j = input.length - 1; i < input.length; i++, j--) {
    const index = source.indexOf(input[i]);
    decimal += index * source.length ** j;
  }
  return decimal;
}
function convertFromDecimal(decimal, target) {
  let str = '';
  while (decimal > 0) {
    const index = decimal % target.length;
    str = target[index] + str;
    decimal = Math.floor(decimal / target.length);
  }
  return str;
}