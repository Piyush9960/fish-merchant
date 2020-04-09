import React from "react";
import { fishDataType } from "../FishCards/FishData";
import "./OrderFormStyle.css";

const OrderForm = ({
  props,
  name,
  mobNo,
  changeFormHandler,
//   submitHandler,
}: {
  props: fishDataType;
  name: string;
  mobNo: string;
  changeFormHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   submitHandler: (event: (event: React.FormEvent<HTMLInputElement>) => void) => void;
}) => {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input
            type="text"
            onChange={(e) => changeFormHandler(e)}
            name="name"
            value={name}
            className="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            required
          />
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputNumber1">Mob No</label>
          <input
            type="number"
            name="mobNo"
            pattern="[1-9]{1}[0-9]{9}"
            maxLength={10}
            value={mobNo}
            onChange={(e) => changeFormHandler(e)}
            className="form-control"
            id="exampleInputNumber1"
            placeholder="Mob No."
          />
        </div>

        {/* <button type="submit"
        className="btn btn-primary">
          Submit
        </button> */}
      </form>
    </>
  );
};

export default OrderForm;
