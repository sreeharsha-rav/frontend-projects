import { memo } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useCounterStore } from '../stores/countStore'
import { shallow } from 'zustand/shallow'

export const Route = createFileRoute('/')({
  component: Index,
})

const CountDisplay = memo(() => {
  const count = useCounterStore((state) => state.count)
  console.log('rendering count display')
  console.log('count updated', count)
  return <h2 className="text-2xl">Count: {count}</h2>
})

function Index() {
  const { increment, decrement } = useCounterStore(
    (state) => ({ increment: state.increment, decrement: state.decrement }),
    shallow
  )
  console.log('rendering index page')

  return (
    <div className="p-2">
      <p>Index Page</p>
      <CountDisplay />
      <button onClick={increment} className='text-green-500 border border-green-500 rounded-md px-2 py-1 mr-2'>Increment</button>
      <button onClick={decrement} className='text-red-500 border border-red-500 rounded-md px-2 py-1'>Decrement</button>
    </div>
  )
}
