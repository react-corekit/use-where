import React from "react";

/**
  Provides methods to determinate where the script is running.
 */
export const useWhere = () => {
  // Returns true if there is a browser's window object.
  const isBrowser = () =>
    typeof window !== "undefined" &&
    {}.toString.call(window) === "[object Window]";
  // Returns true if there is a node's global object.
  const isNode = () =>
    typeof global !== "undefined" &&
    {}.toString.call(global) === "[object global]";
  const isServer = () => !isBrowser();

  return [isBrowser, isNode, isServer];
};
