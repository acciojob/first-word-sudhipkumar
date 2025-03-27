function firstWord(s) {
  // Trim leading and trailing spaces
  s = s.trim();
  
  // Find the index of the first space
  let index = s.indexOf(' ');
  
  // If there is no space, return the entire string
  return index === -1 ? s : s.substring(0, index);
}

// Do not change the code below
// const s = prompt("Enter String:");
// alert(firstWord(s));
