import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useFavoriteStore } from "../stores/useFavoriteStore";

const AddToFavoritesButton = ({ joke }) => {
  const { addToFavorite } = useFavoriteStore();
  return (
    <button
      onClick={() => addToFavorite(joke)}
      className={`mt-4 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-blue-500 text-white hover:bg-blue-600`}
    >
      <MdOutlineFavoriteBorder />
    </button>
  );
};

export default AddToFavoritesButton;
