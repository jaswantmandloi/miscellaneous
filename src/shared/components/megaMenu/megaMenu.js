import ReactMegaMenu from "react-mega-menu";
import { useState } from "react";

export default function MegaMenu() {
  const [direction, setDirection] = useState(values[1]);

  const clickButton = (direction) => () => {
    setDirection(direction);
  };

  return (
    <div>
      <h1>react-mega-menu Demo</h1>
      <div>
        {values.map((val) => (
          <button key={val} onClick={clickButton(val)}>
            {val}
          </button>
        ))}
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: `${direction !== "LEFT" ? "row" : "row-reverse"}`,
        }}
      >
        <ReactMegaMenu
          styleConfig={styleConfig}
          direction={direction}
          data={MOCK_CATEGORIES}
        />
      </div>
      {/* <div style={{ position: "absolute", top: "50%" }}>
          <h2>Component Outline:</h2>
          <fieldset
            style={{
              width: "30em",
              height: "20em",
              borderColor: "blue"
            }}
          >
            <legend>
              <b>container</b>
            </legend>
            <div
              style={{
                width: "100%",
                height: "95%",
                display: "flex",
                flexDirection: "row"
              }}
            >
              <fieldset style={{ borderColor: "red", width: "20%" }}>
                <legend>
                  <b>menu</b>
                </legend>
                <fieldset style={{ borderColor: "green" }}>
                  <legend>
                    <b>menuItem</b>
                  </legend>
                </fieldset>
                <fieldset style={{ borderColor: "green" }}>
                  <legend>
                    <b>menuItem</b>
                  </legend>
                </fieldset>
                <fieldset style={{ borderColor: "purple" }}>
                  <legend>
                    <b>menuItemSelected</b>
                  </legend>
                </fieldset>
              </fieldset>
              <fieldset style={{ borderColor: "orange", width: "80%" }}>
                <legend>
                  <b>content</b>
                </legend>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <label>data[selected].items</label>
                </div>
              </fieldset>
            </div>
          </fieldset>
        </div> */}
    </div>
  );
}

const values = ["LEFT", "RIGHT"];

const MOCK_CATEGORIES = [
  {
    label: "Category1",
    key: "Category1",
    items: "Category1 content",
  },
  {
    label: "Category2",
    key: "Category2",
    items: "Category2 content",
  },
  {
    label: "Category3",
    key: "Category3",
    items: "Category3 content",
  },
];

const styleConfig = {
  menuProps: {
    style: {
      border: "2px solid red",
      height: "20em",
      width: "10em",
      padding: "2px",
      margin: "0",
    },
  },
  contentProps: {
    style: {
      width: "10em",
      border: "2px solid yellow",
      padding: "2px",
    },
  },
  menuItemProps: {
    style: {
      border: "2px solid green",
      padding: "2px",
      height: "2em",
    },
  },
  menuItemSelectedProps: {
    style: {
      border: "2px solid purple",
      padding: "2px",
      height: "2em",
      backgroundColor: "grey",
    },
  },
  containerProps: {
    style: {
      border: "2px solid blue",
      padding: "2px",
    },
  },
};
