
function barn( cols, rows, fill){
  var cow = [];

  for(var i=0; i < cols; i++){
      cow.push([]);

      for(var j=0; j <rows; j++){
      cow[i].push(fill);
      }
  }
  return cow;
}

console.log(barn(5,10,0));