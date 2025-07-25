import JokeCard from "./JokeCard";
import { useJokeStore } from "../stores/useJokeStore";
import { useEffect } from "react";
import LoadMoreButton from "./LoadMoreButton";

const JokeList = () => {
  const { jokes: sampleJokes, loading, fetchJokes } = useJokeStore();

  useEffect(() => {
    fetchJokes();
  }, []);

  if (loading) return <h1>Loading Jokes</h1>;
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sampleJokes.map((joke) => (
        <JokeCard key={joke.id} joke={joke} />
      ))}
      <LoadMoreButton />
    </div>
  );
};

export default JokeList;
