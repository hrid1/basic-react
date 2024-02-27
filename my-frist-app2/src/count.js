import { useState } from "react"

export function Counter2(){

    const [count, setCount] = useState(0) ;
    const increseValue = () => setCount(count+1);
    const decreseValue = () => setCount(count-1);

    return (
        
            <div>
                <h1>Count-2: {count}</h1>
                <button onClick={increseValue}>Increse</button>
                <button onClick={decreseValue}>Decrese</button>
            </div>
        
    )

}