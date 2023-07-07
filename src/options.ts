import axios from "axios";
import newsAPI from "./const/news.api";

export type TPlatform = "cnn" | "cnbc" | "republika" | "tempo" | "kumparan" | "okezone" | "bbc" | "tribun" | "vice" | "suara" | "voa"
export const PLATFORMS = [
  "cnn", "cnbc", "republika", "tempo", "kumparan", "okezone", "bbc", "tribun", "vice", "suara", "voa"
]

export async function getBreakingNews(platform?: TPlatform, count?: number, debug?: boolean) {
  const url = platform ? newsAPI[platform] : newsAPI.cnn;
  const data = await axios.get(url).then((res) => {
    const result = res.data

    if (result.code === 200) {
      const news = result.data

      return news?.slice(0, count ?? 5)
    }

    return result
  })

  return data
}
