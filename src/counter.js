import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const { value, data, loading, error } = useSelector((state) => state.counter);

  const fetch = (type, name, id) => ({
    type: type,
    name: name, 
    id: id, 
  });

  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <button
        onClick={() => {
          dispatch(fetch("FETCH_USER", "users", value));
          dispatch(fetch("FETCH_USER", "users", value + 1));
        }}
      >
        Fetch User Data
      </button>
      <button
        onClick={() => {
          dispatch(fetch("FETCH_POST", "posts", value));
          dispatch(fetch("FETCH_POST", "posts", value + 1));
        }}
      >
        Fetch Post Datas
      </button>
      <h2>Data from API:</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && data?.name && <p>User: {data?.name}</p>}
      {data && data?.body && <p>Post: {data?.body}</p>}
    </div>
  );
};

export default App;
