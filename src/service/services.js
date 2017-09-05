import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout=500;
axios.defaults.headers.post['Content-Type']= 'text/plain;charset=utf-8';
axios.defaults.baseURL='localhost:8080';

export function signUpParty(form){
  axios.get('',{

  })
}
