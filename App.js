import ReactDOM from "react-dom/client";

import { store } from "./src/store/store";
import { Provider } from "react-redux";
import Counter from "./src/counter";

const App = () => {
  return (
    <Provider store={store}>
      <h1>App</h1>
      <Counter />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
