import Image from "next/image";
import { API_URL } from "../app/constants";
import defaultProfile from "../app/asserts/default-profile-image.webp";

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
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
                <Image
                  src={credit.profile_path || defaultProfile}
                  width={100}
                  height={150}
                  alt={credit.name}
                />
                <div>{credit.name}</div>
                <div>{credit.character}</div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
