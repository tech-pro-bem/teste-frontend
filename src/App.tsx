import { PetGenerator } from "@molecules";

function App() {
    return (
        <div
            style={{
                display: "inline-flex",
                flexDirection: "column",
                gap: "2em",
            }}
            className="App"
        >
            <PetGenerator />
            <PetGenerator animal="dog" />
        </div>
    );
}

export default App;
