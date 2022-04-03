import Button from "../../atomes/Button";
import Input from "../../atomes/Input";
import switcherIcon from "../../../icons/switcher.png";
import Select from "../../atomes/Select";
import Label from "../../atomes/Label";

import "./index.scss";

function Form() {
  const dummySelectOptions = [
    {
      label: "USD",
      value: 1,
    },
    {
      label: "EUR",
      value: 1,
    },
  ];
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="layout" onSubmit={onSubmit}>
      <div className="form-container">
        <div className="layout_form-fields">
          <div className="layout_inner-form">
            <Label title="Amount" />
            <Label title="From" />
            <div>&nbsp;</div>
            <Label title="To" />
            <div>&nbsp;</div>
            <Input />
            <Select options={dummySelectOptions} />
            <img src={switcherIcon} alt="Logo" />
            <Select options={dummySelectOptions} />
            <Button title="convert" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
