import PetCard from "../../components/petCard/PetCard"
import { PageContent } from "./styles"

function Homepage() {
  return (
    <PageContent>
      <PetCard title="Gatinho" petType={"cat"}/>
      <PetCard title="Cachorrinho" petType={"dog"}/>
    </PageContent>
  )
}

export default Homepage