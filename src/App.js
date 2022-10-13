import "./App.css";
// import React, { useEffect, useState } from "react";
// // import Test from "./components/test";
// import Axios from "axios";
import Test from "./components/test";

const App = () => {
  // const [number, setNumber] = useState(0);

  // const rubah = (hitung) => {
  //   if (hitung === "-") {
  //     setNumber((state) => state - 1);
  //   } else if (hitung === "+") {
  //     setNumber((state) => state + 1);
  //   }
  // };
  // const [name, setName] = useState("adi");

  // const changeName = () => {
  //   if (name === "adi") {
  //     setName("zulhayad");
  //   } else {
  //     setName("adi");
  //   }
  // };
  // const [datas, setDatas] = useState({});
  // useEffect(() => {
  //   Axios({
  //     method: "GET",
  //     url: `${process.env.REACT_APP_BASEURL}`,
  //   }).then((result) => setDatas(result.data));
  // }, []);
  // console.log(datas);
  return (
    <div>
      <Test />
    </div>
  );
};

export default App;
