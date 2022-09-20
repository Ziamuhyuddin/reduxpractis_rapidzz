import axios from 'axios';
import {useDispatch} from 'react-redux';
import * as Actions from './cart-Action-Types';
const fetchCOVIDState = async () => {
  return fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(response => response.json())
    .then(data => data);
};

export const _incrementCount = payload => {
  return {
    type: Actions.INCREMENT_COUNT,
    payload: payload,
  };
};
export const _decrementCount = payload => {
  console.log('in actions', payload);
  debugger;
  return function (dispatch) {
    return fetchCOVIDState().then(
      res => {
        dispatch(_CovidReport(res));
      },

      //sauce => dispatch(makeASandwich(forPerson, sauce)),
      //  error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    );
  };
  // return {
  //   type: Actions.DECREMENT_COUNT,
  //   payload:payload
  // };
};
// export const _offlineAction=()=>{
//  return{
//   type:Actions.OFFLINE_ACTION,
//   meta:{
//     offline: {
//       // the network action to execute:
//       effect: { dispatch(_decrementCount()) },
//       // action to dispatch when effect succeeds:
//       commit: { type: 'FOLLOW_USER_COMMIT', meta: { userId } },
//       // action to dispatch if network action fails permanently:
//       rollback: { type: 'FOLLOW_USER_ROLLBACK', meta: { userId } }
//     }
//   }
//  }
// }
export const _CovidReport = (payload, onResponse) => {
  debugger;
  return {
    type: Actions.COVID_REPORT,
    payload,
    onResponse,
  };
};

// meta: {
//   offline: {
//     // the network action to execute:
//     effect: { url: '/api/register', method: 'POST', body: `name=${name}&email=${email}`, headers: { 'content-type': 'application/x-www-form-urlencoded' } },
//     // action to dispatch when effect succeeds:
//     commit: { type: 'REGISTER_USER_COMMIT', meta: { name, email } },
//     // action to dispatch if network action fails permanently:
//     rollback: { type: 'REGISTER_USER_ROLLBACK', meta: { name, email } }
//   }
// }
