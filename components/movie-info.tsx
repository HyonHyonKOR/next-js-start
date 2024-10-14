import { URL } from "../app/(home)/page";
import style from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const info = await getMovie(id);
  return (
    <div className={style.container}>
      <img src={info.poster_path} className={style.poster} alt={info.title} />
      <div className={style.info}>
        <h1 className={style.title}>{info.title}</h1>
        <h3>⭐️ {info.vote_average.toFixed(1)}</h3>
        <p>{info.overview}</p>
        <a href={info.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
