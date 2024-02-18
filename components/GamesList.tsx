import { ContentMetadata } from "@/types/types";
import GamePreview from "./GamePreview";
import getMetadata from "./getMetadata";

const GamesList = () => {
    const gamesMetadata = getMetadata<ContentMetadata>("content/games/")

    return (
        <div>
            <h2 className="text-center py-10">
                Games by Future Camel
            </h2>
            <div className="dynamic-grid gap-8">
                {gamesMetadata.map((game) => (
                    <GamePreview key={game.slug} {...game} />
                ))}
            </div>
        </div>
    );
}

export default GamesList;