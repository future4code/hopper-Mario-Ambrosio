import Router from "./router/router";
import GlobalStyled from "./GlobalStyled";
import { GlobalState } from "./Global/GlobalState";

const App = () => {
  return (
    <div>

      <GlobalState>
      <Router />
      </GlobalState>

      <GlobalStyled />
      
    </div>
  );
}

export default App;
