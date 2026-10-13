
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { publicaciones } from "../data/publicaciones";

export default function Home() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [autor, setAutor] = useState("Todos");
  const [resultados, setResultados] = useState(publicaciones);

  const categorias = [
    "Todas",
    ...new Set(publicaciones.map((p) => p.categoria)),
  ];

  const autores = [
    "Todos",
    ...new Set(publicaciones.map((p) => p.autor)),
  ];

  // CSR: filtrar desde el navegador sin recargar la página.
  useEffect(() => {
    const filtradas = publicaciones.filter((p) => {
      const coincideBusqueda =
        p.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(busqueda.toLowerCase());

      const coincideCategoria =
        categoria === "Todas" || p.categoria === categoria;

      const coincideAutor =
        autor === "Todos" || p.autor === autor;

      return coincideBusqueda && coincideCategoria && coincideAutor;
    });

    setResultados(filtradas);
  }, [busqueda, categoria, autor]);

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setAutor("Todos");
  };

  return (
    <main>
      <header className="navbar">
        <Link href="/" className="logo">
          <span className="logo-icon">✦</span> TechBlog
        </Link>
        <span className="nav-label">Mini Blog con Next.js</span>
      </header>

      <section className="hero">
        <span className="hero-tag">✦ APRENDE · EXPLORA · DESCUBRE</span>
        <h1>
          Explora el mundo <span>tech.</span>
        </h1>
        <p>
          Tu espacio para descubrir las últimas ideas sobre
          programación, inteligencia artificial, cloud y
          ciberseguridad.
        </p>

        <div className="hero-stats">
          <div>
            <strong>{publicaciones.length}</strong>
            <span>Publicaciones</span>
          </div>
          <div>
            <strong>{autores.length - 1}</strong>
            <span>Autores</span>
          </div>
          <div>
            <strong>{categorias.length - 1}</strong>
            <span>Categorías</span>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">NUESTRO CONTENIDO</span>
            <h2>Explora las publicaciones</h2>
            <p>Encuentra artículos sobre los temas que más te interesan.</p>
          </div>
          <span className="csr-badge">● CSR Activo</span>
        </div>

        <div className="filters">
          <input
            type="text"
            placeholder="🔎 Buscar por título o descripción..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="search-input"
          />

          <div className="filter-row">
            <select
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            >
              {autores.map((a) => (
                <option key={a} value={a}>
                  {a === "Todos" ? "Todos los autores" : a}
                </option>
              ))}
            </select>

            <button className="clear-button" onClick={limpiarFiltros}>
              Limpiar filtros ↺
            </button>
          </div>

          <div className="categories">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setCategoria(c)}
                className={categoria === c ? "category active" : "category"}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="result-count">
          Mostrando <strong>{resultados.length}</strong> publicaciones
        </p>

        <div className="post-grid">
          {resultados.map((post) => (
            <article key={post.id} className="post-card">
              <div className="post-icon">{post.emoji}</div>

              <div className="post-content">
                <span className="post-category">
                  {post.categoria}
                </span>

                <h3>{post.titulo}</h3>
                <p>{post.descripcion}</p>

                <div className="post-footer">
                  <div className="post-author">
                    <span className="avatar">
                      {post.autor.charAt(0)}
                    </span>
                    <div>
                      <strong>{post.autor}</strong>
                      <small>{post.fecha}</small>
                    </div>
                  </div>

                  <Link href={`/blog/${post.id}`} className="read-link">
                    Leer artículo →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {resultados.length === 0 && (
          <div className="empty-state">
            <span>🔍</span>
            <h3>No encontramos publicaciones</h3>
            <p>Prueba con otra búsqueda o categoría.</p>
            <button onClick={limpiarFiltros}>Ver todas</button>
          </div>
        )}
      </section>

      <footer className="footer">
        <p>© 2026 TechBlog · Mini Blog con Next.js</p>
        <p>Desarrollado por Karla Paola Choque Moran</p>
      </footer>
    </main>
  );
}
