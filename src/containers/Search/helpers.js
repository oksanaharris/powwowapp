import _ from 'lodash';

export function searchHelper(e,data) {
      let query = e.target.value.toLowerCase();
      let m = data.map((elem,i)=>{
        let x = _.mapValues(elem, _.method('toLowerCase'));
        if(query.length >= 2){ //after 2 char in input, begin match search of query
          if(x.title.match(query)){ data = data[i] }
        }
      })
      if(data !== undefined){ return data; } //found match - return orignal array using index
      else{ return []; } //no match found yet
  }