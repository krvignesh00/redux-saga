import { takeEvery, call, put, all, takeLatest } from "redux-saga/effects";
import { setData, setLoading, setError } from "./counterSlice";
import axios from "axios";

// Mock API function
const fetchDataFromAPI = async (from, id) => {
  console.log("fetchDataFromAPI");
  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/${from}/${id}`
  //   ); // API call with id as parameter
  //   return response.data;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: from + " " + id + " Data fetched successfully!" });
    }, 5000);
  });
};

function* fetchPost(action) {
  console.log("fetchPost", action);
  try {
    yield put(setLoading(true));
    yield put(setError(null));
    const data = yield call(fetchDataFromAPI, action.name, action.id);
    yield put(setData(data));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

function* fetchUser(action) {
  console.log("fetchUser", action);
  try {
    yield put(setLoading(true));
    yield put(setError(null));
    const data = yield call(fetchDataFromAPI, action.name, action.id);
    console.log(data);
    yield put(setData(data));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

function* watchFetchData() {
  console.log("watchFetchData");
  yield takeEvery("FETCH_POST", fetchPost);
}
function* watchFetchUser() {
  console.log("watchFetchUser");
  yield takeLatest("FETCH_USER", fetchUser);
}

export default function* rootSaga() {
  yield all([watchFetchData(), watchFetchUser()]);
}
