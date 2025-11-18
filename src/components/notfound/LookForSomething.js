import React from "react";

export default function LookForSomething() {
  return (
    <div className="maxWidthContainer search-main-container">
      <div className="row flex-wrap justify-center">
        <div className="grid-col-10 text-center">
          <h2 className="heading-xxl">Looking for something</h2>
        </div>
        <div className="grid-col-6 grid-col-8-md grid-col-12-sm centered flex-column text-center">
          <div className="form-row">
            <div className="selectWrap active">
              <input
                id="search-field"
                type="search"
                autoComplete="off"
                autoFocus="true"
                className="textfield pad-r-lg-all overflow-hidden text-overflow"
                aria-controls="Search our site"
                aria-expanded="true"
                aria-label="Search our site"
                placeholder="Search our site"
              />
              <button
                className="search-button btn-reset flex-centered touch-space link-icon type-base no-hover touch-space absolute right6 top2"
                role="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    className="svg-base"
                    d="M21.45 20A11 11 0 1020 21.45l8.26 8.26 1.42-1.42zM13 22a9 9 0 119-9 9 9 0 01-9 9z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
