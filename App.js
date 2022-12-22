import { Provider } from "react-redux";
import { store } from "./redux/store";
import StackNavigation from "./screens";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}
