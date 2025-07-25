import { useJokeStore } from "../stores/useJokeStore";

export default function LoadMoreButton() {
  const { loading, moreLoading, loadMore } = useJokeStore();
  if (loading) return <></>;
  if (moreLoading) return <p>Loading More contents...</p>;
  return (
    <button onClick={loadMore} className="bg-gray-600 py-5 text-white">
      Load More
    </button>
  );
}
