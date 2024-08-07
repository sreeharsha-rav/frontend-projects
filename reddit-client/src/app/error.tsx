'use client';
 
import { useEffect } from 'react';
 
/**
 * Error component to display when an error occurs in the segment, particularly when fetching data for the main homepage.
 * 
 * @param {Object} props - The props object.
 * @param {Error & { digest?: string }} props.error - The error object.
 * @param {() => void} props.reset - The function to reset the segment.
 * @returns {JSX.Element} The error component.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2 className="mt-32 text-center text-2xl">Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}