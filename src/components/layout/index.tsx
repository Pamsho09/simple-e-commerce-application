import React from "react";
import Header from "../header";
import style from "./index.module.css";

export default function Index({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.container}>
      <Header />
      {children}
    </div>
  );
}
