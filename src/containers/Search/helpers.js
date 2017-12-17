import _ from 'lodash';

export function searchHelper(e,data) {
      let query = e.target.value.toLowerCase();
      let local = []
      let m = data.map((elem,i)=>{
        let x = _.mapValues(elem, _.method('toLowerCase'));
        if(query.length >= 2){ //after 2 char in input, begin match search of query
          if(x.title.match(query)){
            local.push(data[i]) 
            console.log(local);
          }
        }
      })
      if(data === undefined){ 
        return []; } //found match - return orignal array using index
      else{ 
        return local; } //no match found yet
  }