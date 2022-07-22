import "./ColorCard.css";

export default function ColorCard({ color }) {
  const colors = [
    {
      name: "Lavender Blue",
      hex: "#dcccff",
      id: "dcccff",
    },

    {
      name: "Magnolia",
      hex: "#f6f2ff",
      id: "f6f2ff",
    },

    {
      name: "Orchid",
      hex: "#e07be0",
      id: "e07be0",
    },
    {
      name: "Amaranth M P",
      hex: "#932f6d",
      id: "932f6d",
    },
  ];

  return (
    <article className="card_container">
      {colors.map((color) => (
        <div
          key={color.id}
          className="color_card"
          style={{ backgroundColor: color.hex }}
        >
          <p className="card_content">
            {color.name}
            <button
              className="color_button"
              type="buton"
              style={{ backgroundColor: color.hex }}
              onClick={() => navigator.clipboard.writeText(color.hex)}
            >
              {color.hex}
            </button>
          </p>
        </div>
      ))}
    </article>
  );
}
