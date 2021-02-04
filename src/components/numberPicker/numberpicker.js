import { createElement } from "../../utils/createElement";
import numberPickerStories from "./numberPicker.stories";

let counter = 0;

const descriptionText = createElement( "Protion Picker" ) {
} 

const plusButton = createElement("button", {
    className: "btn",
    innerText: " - ",
    onclick: function() {
        counter.value = Number(counter.value) - 1;
    }
  }),

const minusButton = createElement("button", {
    className: "btn",
    innerText: " + ",
    onclick: function() {
        counter.value = Number(counter.value) + 1;
        // counter.value = Math.max(0, counter.value - 1 ) ;

    }
  }),

const counter = createElement("input", {
    className: "input",
    type: "number",
})


export function numberPicker() {

/* <div>
    <p></p>
    <button></button>
    <input></input>
    <button></button>
</div> */


  return createElement("div", {
    className: "div",
    children: [plus, counter, minus],
  });
}
