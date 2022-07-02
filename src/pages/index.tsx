import type { NextPage } from 'next'

import AnimalCard from '../components/AnimalCard'

const Home: NextPage = () => {
  return (
    <main>
      <div className="container">
        <AnimalCard animal="cat" />
        <AnimalCard animal="dog" variant="secondary" />
      </div>
    </main>
  )
}

export default Home
