import axios from 'axios'
import Qs from 'qs'

axios.defaults.baseURL='api/';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

export function signUpParty(form){
  console.log(form);
  const holderVO = {
    holderName: form.holderName,
    holderId: form.holderId,
    holderType: form.holderType,
    contact: form.contact,
    place: form.place,
    portraitUrl: '',
    backgroundUrl: '',
  };
  const formData = new FormData();
  formData.append('holderVO', form);
  axios.post('holder/registerHolder',{
    holderVO: JSON.stringify(holderVO),
  })
}
