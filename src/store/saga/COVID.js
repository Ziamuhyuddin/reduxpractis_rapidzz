import axios from 'axios';
import {put, takeEvery, call, take} from 'redux-saga/effects';
import {COVID_REPORT} from '../cart/cart-Action-Types';

const getData = () => {
  debugger;
  return axios
    .get('https://api.covidtracking.com/v1/us/daily.json')
    .then(res => res)
    .catch(err => {
      throw err;
    });
};
function* fetchData(action) {
  try {
    debugger;
    console.log(action);
    const {payload, onResponse} = action;
    //for axios

    // const dd = yield axios.get(
    //   'https://api.covidtracking.com/v1/us/daily.json',
    // );

    //for fetch

    //const dd =yield fetch('https://api.covidtracking.com/v1/us/daily.json')
    //   .then(response => response.json())
    //   .then(data => data);

    //for outer function
    const dd = yield call(getData);
    console.log(dd);
    yield call(onResponse, {status: 1, txt: 'successfully get the data'});

    // const {payload, onResponse} = action;
    // const URL = url.logIn;
    // const sendData = {
    //     method: 'POST',
    //     url: URL,
    //     data: payload,
    // };
    // console.log('login API send data: ', JSON.stringify(sendData));
    // // @ts-ignore
    // const data = yield call(axiosInstance, sendData);
    // yield put({
    //     type: LOGIN_SUCCESS,
    //     data: data.data,
    // });

    // console.log('login API success: ', data.data);

    // yield call(onResponse, data.data);
  } catch (error) {
    const {onResponse} = action;
    console.log('login API fails: ', error);
    // yield put({
    //   type: LOGIN_FAILURE,
    //   error,
    // });
    yield call(onResponse, {status: 0, txt: 'something went wrong. Try later'});
  }
}

function* dataSaga() {
  yield takeEvery(COVID_REPORT, fetchData);
}

export default dataSaga;
