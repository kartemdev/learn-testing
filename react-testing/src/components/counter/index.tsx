import { useDispatch } from "react-redux"
import useAppSelector from "../../hooks/use-app-selector";
import { getCounterValue } from "../../store/selectors/get-counter-value";
import { decrement, increment } from "../../store/reducers/counter-reduceser";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useAppSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">value: {value}</h1>
      <button data-testid="increment-btn" onClick={onIncrement}>increment</button>
      <button data-testid="decrement-btn" onClick={onDecrement}>decrement</button>
    </div>
  )
}

export default Counter
