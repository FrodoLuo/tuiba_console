import axios from 'axios'
import Qs from 'qs'

axios.defaults.baseURL='api/';

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
  return axios.post(
      'holder/registerHolder',
    JSON.stringify(holderVO),
    {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      }
  })
}
