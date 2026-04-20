import React, { useEffect, useState } from 'react'
import './News.css'

export default function News() {

    const [news, setNews] = useState([])
    const [search, setSearch] = useState('india')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [dark, setDark] = useState(false)

    const API_KEY = import.meta.env.VITE_NEWS_API_KEY

    // ================= THEME LOGIC =================

    // Load theme (localStorage + system preference)
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")

        if (savedTheme === "dark") {
            setDark(true)
        } else if (savedTheme === "light") {
            setDark(false)
        } else {
            // system theme detect
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            setDark(prefersDark)
        }
    }, [])

    // Apply theme
    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.body.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [dark])

    // ================= NEWS API =================

    async function getNewsData() {
        try {
            setLoading(true)
            setError('')
            setNews([])

            let res = await fetch(
                `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${API_KEY}`
            )

            let data = await res.json()

            if (data.status !== "ok") {
                throw new Error("Failed to fetch news")
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

                {/* Dark Mode Button */}
                <button
                    onClick={() => setDark(!dark)}
                    style={{
                        marginTop: "10px",
                        padding: "6px 12px",
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>

            {/* Search */}
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    getNewsData()
                }}
                className="search-form"
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
            {!loading && news.length > 0 && (
                <div className="grid">
                    {news.map((e, i) => (
                        <div key={i} className="card">
                            <img
                                src={e.urlToImage || "https://via.placeholder.com/300"}
                                alt=""
                            />

                            <div className="card-body">
                                <h2>{e.title}</h2>
                                <p>{e.description}</p>

                                <a href={e.url} target="_blank" rel="noreferrer">
                                    Read more →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}