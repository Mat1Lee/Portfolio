import React from "react";
import "./Loading.css";
import { PulseLoader } from "react-spinners";
import { useState, useEffect } from "react";

export default function Loading() {
  const [loading, SetLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoading(false);
    }, 2000);
  }, []);
  if (loading === true) {
    return (
      <div className="loading">
        <div class="ring">Loading
        <span></span>
      </div>
      </div>
      
    );
  } else {
    return (
      <>
        {/* <div className="doneLoadingLeft"/> */}
        <div className="doneLoadingLeft" />

        <div className="doneLoadingMiddle" />
        <div className="doneLoadingRight" />
      </>
    );
  }
}
