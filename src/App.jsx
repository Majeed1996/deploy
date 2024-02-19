import "./App.css";
import { useState } from "react";
import List from "./Component/List";

export default function App() {
  const [info, setInfo] = useState({
    Email: "",
    password: "",
  });
  const [IsValid, setIsValid] = useState({
    Email: false,
    password: false,
  });
  const [IsTouch, setIsTouch] = useState({
    Email: false,
    password: false,
  });
  const [data, setData] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInfo(function (prev) {
      return { ...prev, [name]: value };
    });
    if (name === "Email") {
      if (value.length > 0 && value.includes("@")) {
        setIsValid(function (prev) {
          return {
            ...prev,
            [name]: true,
          };
        });
      } else {
        setIsValid(function (prev) {
          return {
            ...prev,
            [name]: false,
          };
        });
      }
    }
    if (name === "password") {
      if (value.length > 5 && value.length < 10 && value.includes("$")) {
        setIsValid(function (prev) {
          return {
            ...prev,
            [name]: true,
          };
        });
      } else {
        setIsValid(function (prev) {
          return {
            ...prev,
            [name]: false,
          };
        });
      }
    }
  }

  function handleClick(event) {
    setData((prev) => [...prev, info]);
    setInfo({
      Email: "",
      password: "",
    });
    setIsValid({
      Email: "",
      password: "",
    });
    setIsTouch({
      Email: "",
      password: "",
    });
  }

  function handleBlur(event) {
    const { name } = event.target;
    setIsTouch(function (prev) {
      return {
        ...prev,
        [name]: true,
      };
    });
  }

  function remove(id) {
    setData(
      data.filter(function (item, index) {
        return index !== id;
      })
    );
  }

  return (
    <>
      <input
        className={!IsValid.Email && IsTouch.Email ? "invalid" : "valid"}
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        name="Email"
        placeholder="Email"
        value={info.Email}
      />
      {!IsValid.Email && IsTouch.Email && <p>*Required field</p>}
      <input
        className={!IsValid.password && IsTouch.password ? "invalid" : "valid"}
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        name="password"
        placeholder="password"
        value={info.password}
      />
      {!IsValid.password && IsTouch.password && <p>*Required field</p>}

      <button
        onClick={handleClick}
        disabled={!IsValid.Email && !IsValid.password}
      >
        Submit
      </button>
      {data.map(function (item, index) {
        return (
          <List
            id={index}
            item={item.Email}
            password={item.password}
            onRemove={remove}
          />
        );
      })}
    </>
  );
}