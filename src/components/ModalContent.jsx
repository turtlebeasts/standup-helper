import { useFavoriteStore } from "../stores/useFavoriteStore";
import FavoriteJokeCard from "./FavoriteJokeCard";

export default function ModalContent() {
  const { favorites, removeFromFavorite } = useFavoriteStore();
  if (!favorites.length) return <p>No jokes in your favorites</p>;
  return (
    <div>
      {favorites.map((joke) => (
        <FavoriteJokeCard
          key={joke.id}
          joke={joke}
          onRemove={removeFromFavorite}
        />
      ))}
    </div>
  );
}
