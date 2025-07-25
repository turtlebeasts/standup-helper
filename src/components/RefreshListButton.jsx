import { IoRefreshCircleSharp } from "react-icons/io5";
import { useJokeStore } from "../stores/useJokeStore";

export default function RefreshListButton() {
  const { fetchJokes } = useJokeStore();
  return (
    <button onClick={fetchJokes}>
      <IoRefreshCircleSharp className="text-2xl" />
    </button>
  );
}
