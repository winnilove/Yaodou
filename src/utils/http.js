import axios from 'axios'
const http = {
    get({url,method,params={}}){
        return axios({
            url,
            method:'GET',
            params
        })
        .then((result)=>{{
            return result.data
        }})
    },
    post({url,method,data={}},header=""){
        return axios({
          method: 'post',
          url,
          data: data
        })
        .then((result)=>{{
            if(header=="headers"){
                return result
            }else{
                return result.data
            }
            
        }})
    }
}
export default http