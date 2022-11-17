const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
  
    let newMat = letters[0].map((col, i) => letters.map(row => row[i]));
  
    const verticalJoin = newMat.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
  
    return false;
};  