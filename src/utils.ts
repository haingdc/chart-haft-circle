import type React from "react";

// Add a fixed delay so you can see the loading state
export async function delayForDemo(promise: Promise<React.FunctionComponent>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
