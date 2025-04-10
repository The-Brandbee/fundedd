"use client";
import { useEffect } from "react";

export default function DecipherEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://deciphercredit.net/embed/script.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="decipher"
      style={{ height: "300px", width: "100%" }}
      data-src="https://deciphercredit.net/products/jLKUVok3gGvYLdeHHbIxeGBKWkDubUR7PqnpdHrUYIpy2ulB5ZH2l2qzacDB/application/embed"
    ></div>
  );
}
