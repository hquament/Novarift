import { sellCardsData, newCardsData } from "./data.js";

let sellCardsRef = document.getElementsByClassName("sell-cards")[0];
let sellCardsContent = sellCardsData
  .map((item) => {
    return `<div class="sell-card">
          <img src=${item.imgSrc} alt="" />
          <h2>W${item.title}</h2>
          <div class="card-over">
            <div class="rect-button">Find out more</div>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.8396 1.10095H6.8396V6.10095M6.8396 1.10095L0.8396 7.10095L6.8396 1.10095Z"
                stroke="#EBECF2"
                stroke-width="1.5"
                stroke-linecap="square"
              />
            </svg>
          </div>
        </div>
    `;
  })
  .join("");
sellCardsRef.innerHTML = sellCardsContent;

let newCardsRef = document.getElementsByClassName("new-cards")[0];
let newCardsContent = newCardsData
  .map((item) => {
    return `<div class="new-card">
    <div class="card-over">
      <div class="rect-button">Find out more</div>
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.8396 1.10095H6.8396V6.10095M6.8396 1.10095L0.8396 7.10095L6.8396 1.10095Z"
          stroke="#EBECF2"
          stroke-width="1.5"
          stroke-linecap="square"
        />
      </svg>
    </div>

    <div class="new-card-img">
      <img src=${item.imgSrc} alt="" />
    </div>
    <div class="new-card-content">
      <h2>${item.title}</h2>
      <p>
       ${item.content}
      </p>
    </div>
  </div>
    `;
  })
  .join("");
newCardsRef.innerHTML = newCardsContent;
