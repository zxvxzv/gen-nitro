"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [nitroCode, setNitroCode] = useState("");
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
      <h1>Free Discord Nitro Generator</h1>
      <button
        onClick={() => {
          axios
            .get("/api/generateNitro")
            .then((resp) => {
              window.open(
                "https://discord.com/billing/partner-promotions/1180231712274387115/" +
                  resp.data.token, '_blank'
              );
              setNitroCode("https://discord.com/billing/partner-promotions/1180231712274387115/" +
              resp.data.token)
            });
        }}
      >
        Click here to generate nitro!
      </button>
      <u>{nitroCode.length > 0 && <a href={nitroCode}>Click here if the link did not automatically open</a>}</u>
      </div>
    </main>
  );
}
