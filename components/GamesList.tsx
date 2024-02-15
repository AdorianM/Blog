import GamePreview from "./GamePreview";
import getContentMetadata from "./getContentMetadata";

const GamesList = () => {
    const gamesMetadata = getContentMetadata("content/games/")

    return (
        <div>
            <h2 className="text-4xl text-center py-10">
                Games by Future Camel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {gamesMetadata.map((game) => (
                    <GamePreview key={game.slug} {...game} />
                ))}
            </div>
        </div>
    );
}

export default GamesList;