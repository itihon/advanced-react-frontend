import { useState } from "react";
import classes from "./Counter.module.scss";
import useTheme from "../theme/useTheme";

export default function Counter() {
  const [count, setCount] = useState(0);
  const { theme } = useTheme();

  return (
    <div className={`${classes.counter} ${theme}`}>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Count</button> 
    </div>
  );
}