import GamesList from "@/components/GamesList"
import Container from "@/components/Container"

const GamesPage = () => {
    return (
        <div className="mt-32">
            <Container>
                <h1>Future Camel Games</h1>
                <GamesList />
            </Container>
        </div>
    )
}

export default GamesPage;