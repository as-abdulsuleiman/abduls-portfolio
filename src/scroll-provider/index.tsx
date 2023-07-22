/** @format */

"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { useSessionStorage } from "@mantine/hooks";
interface NavContextProps {
  value: string;
  setValue: (val: string | ((prevState: string) => string)) => void;
}

export const NavContext = createContext<NavContextProps>({
  value: "",
  setValue: () => {},
});

interface ScrollProviderProps {
  children: React.ReactNode;
}

const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [value, setValue, removeValue] = useSessionStorage({
    key: "params",
    defaultValue: "",
  });

  useEffect(() => {
    const alertUser = () => {
      if (value) {
        const target = window.document.getElementById(value);
        if (target) {
          setValue(value);
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      } else {
        setValue("introduction");
      }
    };
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };

    // const handler = () => {
    //   if (value) {
    //     const target = window.document.getElementById(value);
    //     if (target) {
    //       setValue(value);
    //       target.scrollIntoView({
    //         behavior: "smooth",
    //       });
    //     }
    //   } else {
    //     setValue("introduction");
    //   }
    // };

    // if (document.readyState === "complete") {
    //   handler();
    // } else {
    //   window.addEventListener("load", handler);
    //   return () => document.removeEventListener("load", handler);
    // }
  }, [setValue, value]);

  return (
    <NavContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default ScrollProvider;
