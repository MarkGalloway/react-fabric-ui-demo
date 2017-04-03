import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'

import { AppraisalsApi } from './api';
import { setIsLoading, setAppraisals, setAppraisal, addAppraisal } from './actions';
import * as t from './actionTypes';


function* fetchAppraisals() {
  yield put(setIsLoading(true));

  const appraisals = yield call(AppraisalsApi.getAll);
  yield put(setAppraisals(appraisals));

  yield put(setIsLoading(false));
}

function* createAppraisal(action) {
  yield put(setIsLoading(true));

  const appraisal = yield call(AppraisalsApi.insertOne, action.payload);
  yield put(addAppraisal(appraisal));

  yield put(setIsLoading(false));
}

function* updateAppraisal(action) {
  yield put(setIsLoading(true));

  const appraisal = yield call(AppraisalsApi.updateOne, action.payload.id, action.payload);
  yield put(setAppraisal(appraisal.id, appraisal));

  yield put(setIsLoading(false));
}


export default function* rootSaga() {
  yield takeLatest(t.FETCH_APPRAISALS, fetchAppraisals);
  yield takeEvery(t.CREATE_APPRAISAL, createAppraisal);
  yield takeEvery(t.UPDATE_APPRAISAL, updateAppraisal);
}
