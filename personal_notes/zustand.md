install zustand
```npm install zustand```

1. create a store
store is a hook! You can put anything in it: primitives, objects, functions. The set function merges state
```
import { create } from 'zustand'

const useStore = create(
  (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
      updateBears: (newBears) => set({ bears: newBears }),
  })
)
```

2. bind your components
```
function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} bears around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```
