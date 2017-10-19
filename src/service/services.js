import axios from 'axios'
import Qs from 'qs'

axios.defaults.baseURL='api/';

export function signUpParty(form){
  console.log(form);
  const holderVO = {
    partyName: form.holderName,
    managerUsername: form.holderId,
    partyType: form.holderType,
    contact: form.contact,
    place: form.place,
    schoolName: form.schoolName,
    partyImgUrl: null,
  };
  const formData = new FormData();
  formData.append('holderVO', form);
  console.log(JSON.stringify(holderVO));
  return axios.post(
      'party/registerParty',
    JSON.stringify(holderVO),
    {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      }
  })
}
