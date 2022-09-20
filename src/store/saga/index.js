import {all, fork} from 'redux-saga/effects';
import dataSaga from './COVID';

export default function* saga() {
  yield all([fork(dataSaga)]);
}
