import { useState, useEffect } from 'react'

function useFetch (url) {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          console.log(response)
          
          if (!response.ok) {
            throw new Error('could not fetch the data for that resource')
          }

          return response.json()
        })
        .then((data) => {
          console.log(data)
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err => {
          setIsPending(false)
          setError(err.message)
        })
    }, 1000)
  }, [url])

  return { data, isPending, error }
}

export default useFetch