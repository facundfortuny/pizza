"use client";
import { useState } from "react";
import DoughSelector from "../components/doughSelector";
import Biga from "../components/biga/bigaCalc";
import Pizza from "../components/pizza/pizzaCalc";

export default function Main() {
  const [dough, setDough] = useState<string>("pizza");
  return (
    <main>
      <DoughSelector onClick={setDough} />
      {dough === "pizza" ? <Pizza /> : <Biga />}
    </main>
  );
}
