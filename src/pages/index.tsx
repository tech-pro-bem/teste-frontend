import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

type Data = {
  message: string
}

const Home: NextPage = () => {
  const [data, setData] = useState<Data | undefined>(undefined)

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  if (!data) {
    return <span>Loading...</span>
  }

  return <h1>{data.message}</h1>
}

export default Home
