import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";
interface Video {
  id: string;
  key: string;
  name: string;
}
async function getVideos(id: string): Promise<Video[]> {
  const response = await fetch(
    `${API_URL}${id}/videos?api_key=${process.env.API_KEY}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch videos for movie with id ${id}`);
  }
  const data = await response.json();
  return data.results || [];
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
