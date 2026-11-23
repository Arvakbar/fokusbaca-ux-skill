import { articles, formatArticleDate } from '../data/articles'
import mountainCover from '../assets/buthak-cover.jpg'

function ArticleCard({ article, featured }) {
  return (
    <li className={featured ? 'featured-card' : 'collection-card'}>
      <article className="article-card">
        {featured && (
          <div className="feature-cover">
            <img className="feature-image" src={mountainCover} alt="" width="960" height="877" />
          </div>
        )}
        <div className="card-copy">
          <div className="metadata">
            <span className="category">{article.category}</span>
            <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
          </div>
          <h3>
            <a href={`#/artikel/${article.slug}`}>{article.title}</a>
          </h3>
          <p>{article.summary}</p>
          {article.priceExample && <span className="price-label">Ilustrasi — bukan harga aktual</span>}
        </div>
      </article>
    </li>
  )
}

export default function ArticleList({ query, setQuery, headingRef }) {
  const keyword = query.trim().toLocaleLowerCase('id-ID')
  const matches = articles.filter(({ title, summary, category }) =>
    [title, summary, category].some((value) => value.toLocaleLowerCase('id-ID').includes(keyword)),
  )

  function clearSearch() {
    setQuery('')
    document.getElementById('article-search').focus()
  }

  return (
    <main id="konten" className="page-width list-page">
      <section className="list-intro" aria-labelledby="page-title">
        <div>
          <h1 id="page-title" ref={headingRef} tabIndex={-1}>Jelajahi artikel</h1>
          <p>Temukan bacaan yang Anda butuhkan dari koleksi artikel demonstrasi FokusBaca.</p>
        </div>
        <div className="search" role="search" aria-label="Pencarian artikel">
          <label htmlFor="article-search">Cari artikel</label>
          <div className="search-field">
            <span className="search-icon" aria-hidden="true" />
            <input
              id="article-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Contoh: Gunung Buthak"
              autoComplete="off"
            />
            {query && <button type="button" className="search-clear" onClick={clearSearch} aria-label="Hapus pencarian">×</button>}
          </div>
        </div>
      </section>

      <section aria-labelledby="collection-title" className="collection">
        <div className="collection-heading">
          <h2 id="collection-title">{keyword ? 'Hasil pencarian' : 'Koleksi bacaan'}</h2>
          <p role="status">{matches.length} artikel</p>
        </div>
        {matches.length > 0 ? (
          <ul className="article-grid">
            {matches.map((article) => (
              <ArticleCard key={article.slug} article={article} featured={article.priceExample && !keyword} />
            ))}
          </ul>
        ) : (
          <div className="empty-state">
            <h3>Tidak ada artikel yang cocok</h3>
            <p>Coba kata kunci dari judul, ringkasan, atau kategori.</p>
            <button type="button" className="button primary-button" onClick={clearSearch}>Hapus pencarian</button>
          </div>
        )}
      </section>
    </main>
  )
}
