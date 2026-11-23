import { useLayoutEffect, useRef } from 'react'
import { formatArticleDate } from '../data/articles'

const textSizes = [
  { value: 'small', label: 'Kecil' },
  { value: 'normal', label: 'Standar' },
  { value: 'large', label: 'Besar' },
]

export default function ArticleDetail({ article, focusMode, setFocusMode, textSize, setTextSize, headingRef }) {
  const readingRef = useRef(null)
  const readingPosition = useRef(null)

  function rememberPosition() {
    const blocks = readingRef.current.querySelectorAll('h2, p, dt, dd')
    const block = Array.from(blocks).find((element) => element.getBoundingClientRect().bottom > 0)

    if (block && block.getBoundingClientRect().top < window.innerHeight) {
      const { top, height } = block.getBoundingClientRect()
      readingPosition.current = { block, top, height }
    }
  }

  useLayoutEffect(() => {
    const position = readingPosition.current
    if (!position) return

    readingPosition.current = null
    const { top, height } = position.block.getBoundingClientRect()
    const previousOffset = Math.max(0, -position.top)
    const offsetChange = previousOffset * (height / position.height - 1)
    window.scrollBy(0, top - position.top + offsetChange)
  }, [focusMode, textSize])

  return (
    <main id="konten" className="page-width detail-page">
      <nav className="back-nav" aria-label="Navigasi artikel">
        <a href="#/">Kembali ke daftar</a>
      </nav>
      <article className="detail-layout">
        <header className="detail-heading">
          <div className="metadata">
            <span className="category">{article.category}</span>
            <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
            <span>Artikel demonstrasi</span>
          </div>
          <h1 ref={headingRef} tabIndex={-1}>{article.title}</h1>
          <p className="article-summary">{article.summary}</p>
        </header>
        <section className="reading-controls" aria-labelledby="reading-settings">
          <h2 id="reading-settings">Pengaturan baca</h2>
          <button
            type="button"
            className="button focus-button"
            aria-pressed={focusMode}
            onClick={() => {
              rememberPosition()
              setFocusMode(!focusMode)
            }}
          >
            {focusMode ? 'Nonaktifkan Mode Fokus' : 'Aktifkan Mode Fokus'}
          </button>
          <fieldset>
            <legend>Ukuran teks</legend>
            <div className="size-options">
              {textSizes.map(({ value, label }) => (
                <button
                  type="button"
                  key={value}
                  aria-pressed={textSize === value}
                  onClick={() => {
                    if (textSize === value) return
                    rememberPosition()
                    setTextSize(value)
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>
        </section>
        <div className="reading-content" data-text-size={textSize} ref={readingRef}>
          {article.facts?.length > 0 && (
            <section className="key-facts" aria-labelledby="key-facts-heading">
              <h2 id="key-facts-heading">Informasi kunci</h2>
              {article.priceExample && <p className="price-label">Ilustrasi — bukan harga aktual</p>}
              <dl>
                {article.facts.map(({ label, value, section }) => (
                  <div key={section} className="fact-row">
                    <dt>{label}</dt>
                    <dd>
                      <a
                        href={`#/artikel/${article.slug}#${section}`}
                        onClick={(event) => {
                          if (event.currentTarget.href !== window.location.href || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

                          event.preventDefault()
                          const heading = document.getElementById(section)
                          heading.focus({ preventScroll: true })
                          heading.scrollIntoView({ block: 'start' })
                        }}
                      >
                        {value}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
          <div className="article-body">
            {article.sections.map(({ id, title, paragraphs }) => (
              <section key={id} aria-labelledby={id}>
                <h2 id={id} tabIndex={-1}>{title}</h2>
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
