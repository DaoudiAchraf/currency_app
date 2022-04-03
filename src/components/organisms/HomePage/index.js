import logo from "../../../icons/hatch_studio-logo.png";
import Form from "../../molecules/Form";
import Link from "../../atomes/Link";

import "./index.scss";

function App() {
  return (
    <div className="container">
      <div className="first-background">
        <img src={logo} alt="Logo" />
        <h1>Convert currencies in real-time</h1>
      </div>

      <div className="form-layout">
        <Form />
      </div>

      <div className="second-background">
        <div className="history-container">
          <Link to="/history">View conversion history {">"}</Link>
        </div>

        <div className="second-background-footer">
          <span>1 EUR =</span>
          <h1>55322.45:</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
