import React, {useState} from 'react';

function ClickCounter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count => count + 1);
    }

    return (
        <div>
            <button onClick = {handleClick}>
                Click me
            </button>
            <p>You clicked {count} {count==1 ? 'time' : 'times'}</p>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(ClickCounter));
export default ClickCounter;