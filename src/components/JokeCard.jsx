import AddToFavoritesButton from "./HeartButton";

const JokeCard = ({ joke }) => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:scale-[1.02] transition-transform duration-200">
      <h3 className="font-semibold text-lg">{joke.setup}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{joke.punchline}</p>
      <AddToFavoritesButton joke={joke} />
    </div>
  );
};

export default JokeCard;
