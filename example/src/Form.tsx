import React, { useState } from "react";
import WheelPicker, { PickerData } from "react-simple-wheel-picker";

const data: PickerData[] = [
  {
    id: "1",
    value: "JavaScript"
  },
  {
    id: "2",
    value: "Go"
  },
  {
    id: "3",
    value: "Ruby"
  },
  {
    id: "4",
    value: "Python"
  },
  {
    id: "5",
    value: "Java"
  },
  {
    id: "6",
    value: "Swift"
  },
  {
    id: "7",
    value: "Elm"
  },
  {
    id: "8",
    value: "Scala"
  },
  {
    id: "9",
    value: "Rust"
  },
  {
    id: "10",
    value: "C"
  }
];

const Form = () => {
  const [language, setLanguage] = useState("");

  const handleOnChange = (target: Element) => {
    if (target.textContent) {
      setLanguage(target.textContent);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          borderRadius: 10,
          width: 400,
          padding: "20px",
          background: "#fff",
          boxShadow: "2px 5px 10px #ccc"
        }}
      >
        <h3>Select your favorite language</h3>
        <p>
          your favorite lauguage is
          <span style={{ fontWeight: "bold", marginLeft: 10 }}>{language}</span>
        </p>
        <div style={{ marginTop: 20 }}>
          <WheelPicker
            data={data}
            selectedID={data[0].id}
            height={200}
            width={150}
            itemHeight={50}
            onChange={handleOnChange}
            color="#aaa"
            activeColor="#333"
            backgroundColor="#fff"
            shadowColor="#ddd"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
