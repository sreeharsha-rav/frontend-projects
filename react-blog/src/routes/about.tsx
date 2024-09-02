import { createFileRoute } from '@tanstack/react-router'
import { useCounterStore } from '../stores/countStore'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const { count, increment, decrement } = useCounterStore()
  console.log('rendering about page')
  console.log('about count updated', count)
  return (
    <div className="p-2">
      <p>About Page</p>
      <h2 className="text-2xl">Count: {count}</h2>
      <button onClick={increment} className='text-green-500 border border-green-500 rounded-md px-2 py-1 mr-2'>Increment</button>
      <button onClick={decrement} className='text-red-500 border border-red-500 rounded-md px-2 py-1'>Decrement</button>
    </div>
  )
}
