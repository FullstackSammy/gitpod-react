import React, { useState, useEffect } from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        document.title = count;
    }, [count]);

    useEffect(() => {
        console.log('Creating timer');
        const interval = setInterval(() => {
            console.log('interval executed')
            setTime(time => time + 1);
        }, 1000);
        return () => {
            console.log('cleaning up')
            clearInterval(interval);
        }
    }, [])

  return (
    <div>
        <button onClick={
            () => setCount(count => count +1)
        }>
            Increment Count ({count})
        </button>
        <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectCounter