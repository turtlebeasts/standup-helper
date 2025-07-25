import { MdDelete } from "react-icons/md";

const FavoriteJokeCard = ({ joke, onRemove }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md my-2">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        {joke.setup}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{joke.punchline}</p>
      <button
        onClick={() => onRemove(joke.id)}
        className="mt-4 flex items-center gap-2 text-sm bg-red-500 text-white px-3 py-1.5 rounded hover:bg-red-600 transition"
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default FavoriteJokeCard;
