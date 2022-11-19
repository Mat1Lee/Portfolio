import React from "react";
import "./Loading.css";

import { useState, useEffect } from "react";

export default function Loading() {
  const [loading, SetLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoading(false);
    }, 800);
  }, []);
  if (loading === true) {
    return (
      <div className="loading">
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
      </div>
    );
  } else {
    return (
      <>
        <div className="doneLoadingLeft" />
        <div className="doneLoadingLeft" />
        <div className="doneLoadingRight" />
      </>
    );
  }
}
