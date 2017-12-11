function * gen() {
    for (let i = 0 ; i < 5 ; i++) yield i;
}
const myGen = gen();

function sum(output){
  if(!output){
  myGen += sum(myGen.next());
}

console.log(sum(myGen));

