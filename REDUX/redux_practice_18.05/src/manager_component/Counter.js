import {useDispatch, useSelector} from "react-redux"

export default function Counter() {

    const dispatch = useDispatch();
    /*(({counter}) => counter);*/
    const counter = useSelector(({counter}) => counter);
    console.log(`rerender ${counter}`);

    const increment = (counter) => dispatch({type: 'INCREMENT', payload: counter});
    const decrement = (counter) => dispatch({type: 'DECREMENT', payload: counter});
    const reset = (counter) => dispatch({type: 'RESET', payload: counter});
  return (
    <div>
        <div>
            <div>
                <div>
                    <h1>Counter: {counter}</h1>
                    <button style={{background: 'green'}} onClick={() => increment(1)}>↗</button>
                    <button style={{background: 'orange'}} onClick={() => decrement(1)}>↘</button>
                    <button style={{background: 'red'}} onClick={() => reset(counter)}>↩</button>
                </div>
                <div>
                    <button className={'hundred-btn'} onClick={() => increment(100)}>100 ↗</button>
                    <button className={'hundred-btn'} onClick={() => decrement(100)}>100↘</button>
                </div>
                <div>
                    <button className={'user-btn'} onClick={() => increment(Number(prompt('type your number to increase the counter')))}>click↗</button>
                    <button className={'user-btn'} onClick={() => decrement(Number(prompt('type your number to decrease the counter')))}>click↘</button>
                </div>
            </div>
        </div>
    </div>
  );
}