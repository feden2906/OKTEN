import React, {useState} from "react";
import "./App.css";
import Item from "./components/item/item.js";

let gStore = [
    {make: "Fender", model: "stratocaster", solidBody: true},
    {make: "Gretsch", model: "G2410TG", solidBody: false},
    {make: "Charvel", model: "Pro-Mod", solidBody: true},
    {make: "Danelectro", model: "Stock-59", solidBody: true},
    {make: "Gibson", model: "ES-335", solidBody: false},
    {make: "Godin", model: "ACS", solidBody: false},
    {make: "Suhr", model: "Classic-T", solidBody: true},
    {make: "Heritage", model: "H-150", solidBody: true},
    {make: "Teuffel", model: "Tesla", solidBody: true},
    {make: "Ibanez", model: "AS", solidBody: false},
    {make: "Anderson", model: "angel", solidBody: true}
];

function App() {
    let [arrG, setArrG] = useState(gStore);
    let [count, setCount] = useState(0);
    let [hundred, setHundred] = useState(0);

    const deleteItem = () => {
        arrG.pop();
        setArrG([...arrG]);
        console.log(arrG);
    }

    const increase = () => setCount(++count);
    const decrease = () => setCount(--count);

    const reset = () => {
        setCount(0);
        setHundred(0);
    };

    const up100 = () => {
        hundred = hundred + 100;
        setHundred(hundred);
    };
    const down100 = () => {
        hundred = hundred - 100;
        setHundred(hundred);
    };


    return (
        <div className="container">
            {
                arrG.map((value, index) =>
                <Item
                    key={index}
                    {...value}
                />
            )
            }
            <button onClick={deleteItem}>delete item</button>
            <div className="btn-set">
                <button className="up-btn" onClick={increase}>🡅</button>
                <span className="block">{`Count(step by 1): ${count}`}</span>
                <button className="down-btn" onClick={decrease}>🡇</button>
            </div>
            <div className="btn-set">
                <button className="reset-btn" onClick={reset}>⭯</button>
            </div>
            <div className="btn-set">
                <button className="up-btn" onClick={up100}>🡅</button>
                <span className="block">{`Count(step by 100): ${hundred}`}</span>
                <button className="down-btn" onClick={down100}>🡇</button>
            </div>

        </div>

    );
}

export default App;
