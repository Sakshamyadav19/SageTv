import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default App;
