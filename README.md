# React Debugging Checkpoint

A small React application for the GoMyCode debugging checkpoint. It includes multiple components, state, props, two reproducible bugs, corrected code, and regression tests.

## Run locally

Use Node.js 22.12+ or a supported newer LTS release.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The corrected app opens by default. Click **Open buggy example** to reproduce the original problems. Both versions remain available for inspection.

```bash
npm test
npm run build
```

## Component tree

Corrected app: `App` → `FixedCounter` → `CounterDisplay` and `CounterButton`.

Buggy app: `App` → `BuggyApp` → `BuggyDisplay`.

`FixedCounter` owns the count state. It passes the number to `CounterDisplay` and a click handler to `CounterButton`.

## Debugging report

These are intentionally seeded sample bugs, permitted by the checkpoint's option to use a simple sample application.

| Issue | Cause in original code | Correction |
| --- | --- | --- |
| The number is missing | `<BuggyDisplay />` receives no `count` prop | Pass `<CounterDisplay count={count} />` |
| Increase moves state down | `setCount(count - 1)` subtracts one | `setCount(previousCount => previousCount + 1)` |

The missing prop hides the other bug on the page: the internal number changes, but the display remains blank. Inspecting both state and props separates the two problems. The functional state updater calculates the next count from the previous count supplied by React.

### React Developer Tools inspection — hands-on step

1. Install the official React Developer Tools extension from your browser's extension store and reload the local app.
2. Open browser developer tools and select **Components**.
3. Open the buggy example and select `BuggyApp`. Under hooks, inspect the initial state `0`.
4. Click **Increase count** and observe state changing to `-1`, then `-2`.
5. Select `BuggyDisplay`. Its props do not contain `count`. Capture this finding.
6. Open the corrected example and select `FixedCounter`. Its state starts at `0`.
7. Click three times. State should become `3`. Select `CounterDisplay` and confirm its `count` prop is `3`.
8. Reset the counter and confirm both state and displayed value return to `0`. Capture the corrected state and props.

These are inspection instructions, not a claim that the extension has already been used. The automated checks below verify rendering and interactions; they do not replace inspecting the React component tree. Add actual DevTools screenshots after completing this step. No fabricated screenshots or inspection results are included.

### Verification completed

- Automated interaction test: corrected counter initially displays `0`, reaches `3` after three clicks, and returns to `0` after reset.
- Automated reproduction test: buggy example displays no number before or after clicking.
- Production build: checked with `npm run build`.

The test does not inspect the buggy component's internal state. The subtraction bug is visible in its source and can be observed using the DevTools steps above.

## Files

- `src/App.jsx`: corrected app and links between the two examples.
- `examples/BuggyApp.jsx`: original buggy example.
- `src/App.test.jsx`: interaction and reproduction tests.
- `src/index.css`: responsive presentation.

## Submission

Use this repository URL for the GitHub link submission after completing the hands-on React DevTools inspection. Uploading the repository does not submit the link to the GoMyCode platform.
