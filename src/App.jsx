import { useState } from 'react';
import BuggyApp from '../examples/BuggyApp.jsx';
import './index.css';

export function CounterDisplay({ count }) {
  return <h2 aria-live="polite">Current count: {count}</h2>;
}

export function CounterButton({ onIncrease }) {
  return <button onClick={onIncrease}>Increase count</button>;
}

export function FixedCounter() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(previousCount => previousCount + 1);
  }
  return <section>
    <h1>React Debugging Checkpoint</h1>
    <p>Each click should increase the count by one.</p>
    <CounterDisplay count={count} />
    <CounterButton onIncrease={increaseCount} />
    <button className="secondary" onClick={() => setCount(0)}>Reset count</button>
  </section>;
}

export default function App() {
  const buggy = new URLSearchParams(window.location.search).get('mode') === 'buggy';
  return <main>
    <p className="eyebrow">GOMYCODE · STATE & PROPS</p>
    {buggy ? <BuggyApp /> : <FixedCounter />}
    <aside>
      <h2>{buggy ? 'Before debugging' : 'After debugging'}</h2>
      <p>{buggy ? 'The display is missing its count prop and the handler subtracts one.' : 'The display receives its count prop and the handler adds one.'}</p>
      <a href={buggy ? '?' : '?mode=buggy'}>{buggy ? 'Open corrected example' : 'Open buggy example'}</a>
    </aside>
  </main>;
}
