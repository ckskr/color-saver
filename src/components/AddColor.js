import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./AddColor.css";

export default function AddColor() {
  const [color, setColor] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          setColor([
            ...color,
            {
              hex: inputValue,
              id: nanoid(),
            },
          ]);
          setInputValue("");
        }}
      >
        <div className="add_color_input">
          <input
            required
            type="text"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <input
            required
            type="color"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <button type="submit">add color</button>
        </div>
      </form>
      <div className="card_div">
        {color.map((colorItem) => {
          return (
            <article
              className="add_card_container"
              style={{ backgroundColor: colorItem.hex }}
            >
              <div key={colorItem.id} className="add_color_card">
                <p className="add_card_content">
                  {colorItem.name}
                  <button
                    className="add_color_button"
                    type="button"
                    style={{ backgroundColor: colorItem.hex }}
                    onClick={() => navigator.clipboard.writeText(colorItem.hex)}
                  >
                    {colorItem.hex}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setColor(
                        color.filter((brokkoli) => brokkoli.id !== colorItem.id)
                      );
                    }}
                  >
                    x
                  </button>
                </p>
              </div>
            </article>
          );
        })}
      </div>
      ;
    </>
  );
}
