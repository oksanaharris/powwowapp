import _ from 'lodash';

export function searchHelper(e,obj) {
      let data = obj;
      let res;
      let query = e.target.value.toLowerCase();
      console.log(query);
      console.log(data);
      let m = data.map((elem,i)=>{
        let x = _.mapValues(elem, _.method('toLowerCase'));
        if(query.length >= 2){
          if(x.title.match(query)){
            res = data[i]
          }
        }
      })
      if(res !== undefined){
          return res;
      } 
      else{
        return [];
      }

  }