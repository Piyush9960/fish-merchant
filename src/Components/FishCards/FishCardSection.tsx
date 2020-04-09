import React, { useState } from "react";
import "./FishCardsStyle.css";
import { fishDataType } from "./FishData";
import { Button, Modal } from "react-bootstrap";
import OrderForm from "../OrderForm/OrderForm";
import {Link} from 'react-router-dom';

const FishCardSection = ({
  props,
  AddToCartHandler,
}: {
  props: fishDataType;
  AddToCartHandler: (id: string, totalPrice: number) => void;
}) => {
  const [inputQty, setInputQty] = useState(1);
  const [show, setShow] = useState(false);

  const [state, setState] = useState<{
    name: string;
    mobNo: string;
  }>({
    name: "",
    mobNo: "",
  });

  const changeFormHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const quantityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputQty(+e.target.value);
  };
  // console.log(state)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   const submitHandler = (event: React.FormEvent<HTMLInputElement> ) => {
//     event.preventDefault();
//     alert(`Thanks ${state.name}`);
//     setShow(false);
//   };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.fishName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OrderForm
            props={props}
            name={state.name}
            mobNo={state.mobNo}
            changeFormHandler={changeFormHandler}
            // submitHandler={submitHandler}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" size="sm" >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="col-xs-12 col-sm-4 my-3">
        <div className="card">
          <Link to="" className="img-card" >
            <img src={props.imgUrl} alt="img1" />
          </Link>
          <div className="card-content">
            <h4 className="card-title">{props.fishName}</h4>
            <p className="price-section">
              <span className="grey-3">
                Current Price: ₹ {props.currentPrice}
              </span>
            </p>
            <p className="price-section">
              <span className="grey-3">
                Total Price: ₹ {+props.currentPrice * inputQty}
              </span>
            </p>
            <div className="input-group input-group-sm mt-2 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Quantity
                </span>
              </div>
              <input
                type="number"
                className="form-control "
                min={1}
                max={100}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={quantityHandler}
                value={inputQty}
              />
            </div>

            <Button
              variant="primary"
              size="sm"
              className="float-left"
              onClick={handleShow}
            >
              Order Now
            </Button>
            <button
              onClick={() =>
                AddToCartHandler(props.id, +props.currentPrice * inputQty)
              }
              className="btn btn-info btn-sm float-right"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FishCardSection;
