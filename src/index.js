import App from "./components/App.jsx";
import ReactDOM from "react-dom";
ReactDOM.render(<App />, document.getElementById("root"));
const devMods = process.env.NODE_ENV === "development";
if (devMods && module && module.hot) {
  module.hot.accept();
}
