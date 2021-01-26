import "./cards.css";
import german from "./card-german.html";
import italian from "./card-italian.html";
import asian from "./card-asian.html";

export default {
  title: "Components/Cards",
  parameters: { layout: "centered" },
};

export const germancard = () => german;
export const italiancard = () => italian;
export const asiancard = () => asian;
