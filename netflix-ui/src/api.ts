export async function fetchMovies(type: string) {
    const urlMap: any = {
        popular: "https://api.tvmaze.com/shows",
        top_rated: "https://api.tvmaze.com/shows",
        upcoming: "https://api.tvmaze.com/shows",
    };

    const res = await fetch(urlMap[type]);
    const data = await res.json();

    // convert to TMDB-like format
    return data.slice(0, 20).map((item: any) => ({
        id: item.id,
        poster_path: item.image?.medium,
        title: item.name,
    }));
}