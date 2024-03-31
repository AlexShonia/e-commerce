import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store.js";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App.jsx";
import "./index.css";
import "./bootstrap.min.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
