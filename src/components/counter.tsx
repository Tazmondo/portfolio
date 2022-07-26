import * as React from "react";
import {useEffect, useState} from "react";

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let id = setInterval(() => {
            setCount(count => count + 1);
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])

    return <div>
        <span>Count is {count}!</span>
    </div>
}

export default Counter