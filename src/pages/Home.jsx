import JokeList from "../components/JokeList";
import RefreshListButton from "../components/RefreshListButton";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center ">
        <h1 className="text-2xl font-bold px-6 py-6">Random Jokes</h1>
        <RefreshListButton />
      </div>
      <JokeList />
    </div>
  );
}
