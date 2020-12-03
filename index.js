function theBeatlesPlay(musicians, instruments){
  let resultArr = [];
  for(let m = 0; m < musicians.length; m++){

    for(let i = 0; i < instruments.length; i++){
        if( m === i){
        resultArr.push(`${musicians[m]} plays ${instruments[i]}`)
        }
      }
    }
  return resultArr;
}


function johnLennonFacts(facts){
  let factsArr = [];
  let f = 0;

  while(f<facts.length){
    factsArr.push(`${facts[f]}!!!`);
    f++;
    }
  return factsArr;
}

function iLoveTheBeatles(p){
  let newArr = [];

  do {
    newArr.push("I love the Beatles!");
    p++;
  } while (p < 15);

  return newArr;
}
