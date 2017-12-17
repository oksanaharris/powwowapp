import _ from 'lodash';

export function searchHelper(e,data) {
      let local = [];
      let all = [];
      let query = e.target.value.toLowerCase();
      let split = data.map((elem)=>{
        all.push(elem.Artist,elem.Site,elem);
      })
      //console.log(all);

      let res = all.map((elem,i) => {
        return Object.keys(elem);
      }).reduce((prev,curr) => {
        return prev.concat(curr);
      }).map((elem)=>{
        return all.filter((key,i)=>{
          let x = _.mapValues(key, _.method('toLowerCase'));
          if(query.length >2){
            if(x[elem] !== undefined && x[elem].match(query)){
              local.push(all[i]);
            }
          }
        })
      })

      if(data === undefined){ 
        return []; }
      else{
        let uni = [...new Set(local)]; //this makes it unique, which fixes the problem of the function been called on change, that way its live action.
        return uni; }
  }