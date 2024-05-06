"use client";

import { useEffect } from "react";

export default function ErrorContainer() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col max-w-[600px] gap-[20px]">
        <button
          onClick={() => {
            new Promise((resolve, reject) => {
              throw new Error();
            }).catch((error) => {
              alert("handled error");
            });
          }}
        >
          Handeled Error
        </button>
        <button
          onClick={async () => {
            try {
              await new Promise((resolve, reject) => {
                throw new Error();
              });
            } catch (error) {
              alert("handled error2");
            }
          }}
        >
          Handeled Error2
        </button>
        <button
          onClick={() => {
            new Promise((resolve, reject) => {
              throw new Error();
            });
          }}
        >
          Unhandeled Error
        </button>
        <button
          onClick={() => {
            new Promise(function (resolve, reject) {
              setTimeout(() => {
                throw new Error("timeout error");
              }, 1000);
            }).catch(alert);
          }}
        >
          Timeout Error
        </button>
      </div>
    </main>
  );
}
