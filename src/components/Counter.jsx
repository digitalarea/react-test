import React, { useState } from "react";

const Counter = function () {
    const [count, setCount] = useState(0)

    function plus() {
        setCount(count +1);
    }
    
    function minus() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={minus}>Меньше</button>
            <button onClick={plus}>Больше</button>
        </div>
    )

}

export default Counter;