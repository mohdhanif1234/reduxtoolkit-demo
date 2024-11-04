import { selectCounterValue } from "../redux/features/counter/counterSelectors";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import {
  increment,
  decrement,
  reset,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector(selectCounterValue);

  return (
    <div>
      <h1>Counter : {counterValue}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
