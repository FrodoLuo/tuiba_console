import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout=500;
axios.defaults.headers.post['Content-Type']= 'text/plain;charset=utf-8';
axios.defaults.baseURL='http://localhost:8080';

export function signUpParty(form){
  console.log(form);
  return axios.get('/service',{
    params: {
      name: form.name,
      type: form.type,
      leaderID: form.leaderID
    }
  }).then(function (response){
    console.log('service:' + response.data);
  })
}
