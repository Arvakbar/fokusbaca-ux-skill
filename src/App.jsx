import { Component, useLayoutEffect, useRef, useState } from 'react'
import ArticleDetail from './components/ArticleDetail'
import ArticleList from './components/ArticleList'
import { articles } from './data/articles'
import './App.css'

function readRoute() {
  const [path = '', section] = window.location.hash.slice(1).split('#')
  const slug = /^\/artikel\/([^/]+)\/?$/.exec(path)?.[1]
  return { path, section, slug }
}

function RecoveryPage({ headingRef, renderError = false }) {
  return (
    <main id="konten" className="page-width recovery-page">
      <h1 ref={headingRef} tabIndex={-1}>{renderError ? 'Halaman gagal ditampilkan' : 'Artikel tidak ditemukan'}</h1>
      <p>{renderError ? 'Muat ulang daftar artikel untuk mencoba lagi.' : 'Tautan ini tidak mengarah ke artikel dalam koleksi FokusBaca.'}</p>
      <a className="button primary-button" href={renderError ? window.location.pathname : '#/'}>Kembali ke daftar</a>
    </main>
  )
}

class ContentBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    return this.state.hasError ? <RecoveryPage renderError /> : this.props.children
  }
}

function App() {
  const [route, setRoute] = useState(readRoute)
  const [query, setQuery] = useState('')
  const [focusMode, setFocusMode] = useState(false)
  const [textSize, setTextSize] = useState('normal')
  const headingRef = useRef(null)
  const previousPath = useRef(null)

  const { path, section, slug } = route
  const isHome = path === '/' || path === ''
  const article = articles.find((item) => item.slug === slug)
  const isFocused = Boolean(article && focusMode)

  useLayoutEffect(() => {
    function updateRoute() {
      setRoute(readRoute())
    }

    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  useLayoutEffect(() => {
    const pathChanged = previousPath.current !== path
    const hadPreviousPath = previousPath.current !== null
    previousPath.current = path
    document.title = article ? `${article.title} | FokusBaca` : isHome ? 'FokusBaca — Koleksi artikel demonstrasi' : 'Artikel tidak ditemukan | FokusBaca'

    const target = article?.sections.some(({ id }) => id === section) && document.getElementById(section)
    if (target) {
      target.focus({ preventScroll: true })
      target.scrollIntoView({ block: 'start' })
    } else if (pathChanged) {
      window.scrollTo(0, 0)
      if (hadPreviousPath) headingRef.current?.focus({ preventScroll: true })
    }
  }, [article, isHome, path, section])

  return (
    <div className={isFocused ? 'site focus-mode' : 'site'}>
      <header className="masthead">
        <div className="page-width masthead-inner">
          {isFocused ? (
            <span className="wordmark">FokusBaca</span>
          ) : (
            <a className="wordmark" href="#/" aria-current={isHome ? 'page' : undefined}>FokusBaca</a>
          )}
          <span className="site-description">Prototipe membaca independen</span>
        </div>
      </header>
      <ContentBoundary key={path}>
        {isHome ? (
          <ArticleList query={query} setQuery={setQuery} headingRef={headingRef} />
        ) : article ? (
          <ArticleDetail
            article={article}
            focusMode={focusMode}
            setFocusMode={setFocusMode}
            textSize={textSize}
            setTextSize={setTextSize}
            headingRef={headingRef}
          />
        ) : (
          <RecoveryPage headingRef={headingRef} />
        )}
      </ContentBoundary>
      <footer className="site-footer">
        <div className="page-width footer-inner">
          <span className="footer-wordmark">FokusBaca</span>
          <p>Koleksi artikel demonstrasi untuk studi pengalaman membaca.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
