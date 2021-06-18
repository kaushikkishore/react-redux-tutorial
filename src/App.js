import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainerV2 from "./component/CakeContainerV2";
import IcecreamContainer from "./component/IcecreamContainer";
import UserContainer from "./component/UserContainer";
import CakeCcontainer from "./component/CakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainerV2 />
        <IcecreamContainer />
        <UserContainer />
        <CakeCcontainer />
      </div>
    </Provider>
  );
}

export default App;
