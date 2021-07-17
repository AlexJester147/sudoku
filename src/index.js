module.exports = function solveSudoku(array){

  function valid(array, row, col, value){

for (let i=0; i < 9; i++){
  const m = 3 * Math.floor(row/3) + Math.floor(i/3);
  const n = 3 * Math.floor(col/3) + i%3;
  if (array[row][i] == value || array[i][col] == value || array[m][n] == value){
    return false;
  }
}
return true;
}


for (let i=0; i < 9; i++){
  for (let j=0; j < 9; j++){
    if (array[i][j] == 0){
      for (let k=1; k <=9; k++){
        if (valid(array, i, j, k)){
          array[i][j]=k;
          if(solveSudoku(array)){
            return array;
          } 
          else {
            array[i][j]=0;
          }
        }
      }
      return false;
    }
  }
}

return array;

};
