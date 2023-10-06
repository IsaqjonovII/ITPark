import { useState, useMemo } from "react";
import { BsSearch } from "react-icons/bs";
import StyledNews from "./style";
import { newsData } from "static";
import { INews } from "interfaces";
import LazyImage from "components/LazyImage";

const News = () => {
  const [query, setQuery] = useState<string>("");
  const filteredNews: INews[] = useMemo(() => {
    return newsData.filter((news) => {
      return (
        news.title.toLowerCase().includes(query.toLowerCase()) ||
        news.subtitle.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query, newsData]);

  return (
    <StyledNews>
      <header className="news__header">
        <h1 className="news__title">News</h1>
        <div className="search__wrp">
          <input
            type="search"
            className="search__inp"
            value={query}
            onChange={({ target }) => setQuery(target.value)}
            required
            minLength={4}
            placeholder="Search news..."
          />
          <button
            type="submit"
            role="button"
            tabIndex={0}
            aria-expanded={false}
            aria-label="Search"
          >
            <BsSearch />
          </button>
        </div>
      </header>

      <main className="news__cards__wrp" role="main">
        {filteredNews.map(({ id, title, subtitle, img }) => (
          <div key={id} className="news__card">
            <div className="card__content">
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </div>
            <LazyImage
              className="card__img"
              src={img}
              alt={`Image of ${title}`}
            />
          </div>
        ))}
      </main>
    </StyledNews>
  );
};

export default News;
