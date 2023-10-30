import axios from 'axios'

export function getApi(ctx?: any){

  const api = axios.create({        
    baseURL: 'http://localhost:3000/api/v1/'
  })

  api.interceptors.request.use(config => {
    return Promise.resolve(config);
  })
  

  return api;
}

