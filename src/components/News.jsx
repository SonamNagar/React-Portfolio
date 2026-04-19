import React, { useEffect, useState } from 'react'
import './News.css'

export default function News() {

    const [news, setNews] = useState([])
    const [search, setSearch] = useState('india')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    

    async function getNewsData() {
        try {
            setLoading(true)
            setError('')
            setNews([])

            let res = await fetch(
                `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=bceb6d71b4854378b4cd07d63717ad16`
            )

            let data = await res.json()

            if (data.status !== "ok") {
                throw new Error("Failed")
            }

            setNews(data.articles || [])

        } catch (err) {
            setError("Something went wrong 😢")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getNewsData()
    }, [])

    return (
        <div className="container">

            {/* Header */}
            <div className="header">
                <h2>📰 News App</h2>
                <p>Latest news around the world</p>
            </div>

            {/* Search */}
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    getNewsData()
                }}
                className="search-box"
            >
                <input
                    type="text"
                    placeholder="Search news..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button disabled={loading}>
                    {loading ? "Searching..." : "Search"}
                </button>
            </form>

            {/* Loading */}
            {loading && <div className="loader"></div>}

            {/* Error */}
            {error && <h2 className="error">{error}</h2>}

            {/* Empty */}
            {!loading && news.length === 0 && !error && (
                <h2 className="empty">No news found</h2>
            )}

            {/* News Grid */}
            <div className="grid">
                {news.map((e, i) => (
                    <div key={i} className="card">

                        <img
                            src={e.urlToImage || "https://via.placeholder.com/300"}
                            alt=""
                        />

                        <div className="card-body">
                            <h3>{e.title}</h3>
                            <p>{e.description}</p>

                            <a href={e.url} target="_blank" rel="noreferrer">
                                Read more →
                            </a>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}