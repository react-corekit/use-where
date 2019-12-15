import * as React from "react";

export const useWhere = () => {
  const isBrowser = () =>
    typeof window !== "undefined" &&
    {}.toString.call(window) === "[object Window]";
  const isNode = () =>
    typeof global !== "undefined" &&
    {}.toString.call(global) === "[object global]";
  const isServer = () => !isBrowser();

  return () => [isBrowser, isNode, isServer];
};
