import logo from "../../../icons/hatch_studio-logo.png";
import Link from "../../atomes/Link";
import Table from "../../atomes/Table";
import "./index.scss";

function App() {
  return (
    <div className="history-page_layout">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <Link to="/">{"<"} Go back</Link>
        <Table/>
    </div>
  );
}

export default App;
