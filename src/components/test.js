import React, { createFactory } from "react";
import "./test.css";
import { useState, useEffect } from "react";
import Select from "react-select";

const Test = () => {
  const [datas, getDatas] = useState([{}]);
  const getBerry = async () => {
    const api = await fetch("https://www.boredapi.com/api/activity/");
    const getApi = await api.json();
    const set = new Set([getApi]);
    const result = Array.from(set).map((data) => {
      return {
        // accessibility: data.accessibility,
        activity: data.activity,
        key: data.key,
        // link: data.link,
        // participants: data.participants,
        // price: data.price,
        // type: data.type,
      };
    });
    // console.log(result);
    getDatas(result);
  };
  useEffect(() => {
    getBerry();
  }, []);

  return (
    <div>
      <div className="button_container">
        <button className="btn" onClick={getBerry}>
          <span>Todo List</span>
        </button>
        <p className="description" key={datas[0]}>
          {datas[0].activity}
        </p>
      </div>
    </div>
  );
};

export default Test;
