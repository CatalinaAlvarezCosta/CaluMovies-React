import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ min, max, idProducto }) => {
  const [minusDisabled, setMinusDisabled] = useState(false);
  const [addDisabled, setAddDisabled] = useState(false);
  const [count, setCount] = useState(min);

  const handleChangeAdd = () => {
    if (count < max) {
      setCount(count + 1);
      setMinusDisabled(false);
    } else if (count === max) {
      setAddDisabled(true);
    } else {
      setAddDisabled(false);
    }
  };

  const handleChangeMinus = () => {
    if (count > min) {
      setCount(count - 1);
      setAddDisabled(false);
    } else if (count === min) {
      setMinusDisabled(true);
    } else setMinusDisabled(false);
  };

  return (
    <div>
      {" "}
      <div id={`${idProducto}Count`}>
        <Button
          className="d-inline"
          type="button"
          onClick={(e) => handleChangeMinus()}
          variant="light"
          disabled={minusDisabled}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-dash resta"
            viewBox="0 0 16 16"
          >
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>{" "}
        </Button>{" "}
        <p className="d-inline">{count}</p>{" "}
        <Button
          className="d-inline"
          type="button"
          variant="light"
          disabled={addDisabled}
          onClick={(e) => handleChangeAdd()}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-plus suma"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>{" "}
        </Button>
      </div>
    </div>
  );
};
export default ItemCount;
