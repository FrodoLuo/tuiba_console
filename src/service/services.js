import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout=500;
axios.defaults.headers.post['Content-Type']= 'text/plain;charset=utf-8';
axios.defaults.baseURL='127.0.0.1:8080';

export function signUpParty(form){
  console.log(form);
  axios.get('s',{
    param: {
      wd: form.name
    }
  })
}
