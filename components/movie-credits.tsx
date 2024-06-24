import Image from "next/image";
import { API_URL, IMAGE_URL } from "../app/constants";
import defaultProfile from "../app/asserts/default-profile-image.webp";

export async function getCredits(id: string) {
  const response = await fetch(
    `${API_URL}${id}/credits?api_key=${process.env.API_KEY}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch credits for movie with id ${id}`);
  }
  const data = await response.json();
  return data.cast;
}

export default async function MoiveCredits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div>
      <div>
        <ul>
          {credits
            .filter((credit) => credit.character)
            .map((credit) => (
              <li key={credit.id}>
                <div>
                  {credit.profile_path ? (
                    <Image
                      src={`${IMAGE_URL.POSTER}${credit.profile_path}`}
                      width={100}
                      height={150}
                      alt={credit.name}
                    />
                  ) : (
                    <Image
                      src={defaultProfile}
                      width={100}
                      height={150}
                      alt={credit.name}
                    />
                  )}
                </div>
                <div>{credit.name}</div>
                <div>{credit.character}</div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
