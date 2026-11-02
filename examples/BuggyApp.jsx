import { useState } from 'react';

export function BuggyDisplay({ count }) {
  return <h2>Current count: {count}</h2>;
}

export default function BuggyApp() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count - 1); // Bug: wrong direction.
  }
  return <section>
    <h1>React Debugging Checkpoint</h1>
    <p>This example intentionally contains two bugs.</p>
    <BuggyDisplay />
    <button onClick={increaseCount}>Increase count</button>
  </section>;
}
