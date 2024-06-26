"use server";
import { API_URL } from "../../../constants";
import { Video } from "../../../../components/movie-videos";

const apiKey = process.env.API_KEY;

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}${id}?api_key=${apiKey}`);
  return response.json();
}

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}${id}/credits?api_key=${apiKey}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch credits for movie with id ${id}`);
  }
  const data = await response.json();
  return data.cast;
}

export async function getVideos(id: string): Promise<Video[]> {
  const response = await fetch(`${API_URL}${id}/videos?api_key=${apiKey}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch videos for movie with id ${id}`);
  }
  const data = await response.json();
  return data.results || [];
}
