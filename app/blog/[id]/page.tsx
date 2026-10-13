
export const instant = false;

import Link from "next/link";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { publicaciones } from "../../../data/publicaciones";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DetallePublicacion({ params }: Props) {
  // Fuerza el renderizado dinámico en el servidor.
  await connection();

  // Obtiene el ID recibido mediante la ruta dinámica.
  const { id } = await params;

  // Busca el artículo correspondiente.
  const publicacion = publicaciones.find(
    (p) => p.id === Number(id)
  );

  // Si no existe, muestra la página 404.
  if (!publicacion) {
    notFound();
  }

  return (
    <main>
      <header className="navbar">
        <Link href="/" className="logo">
          <span className="logo-icon">✦</span> TechBlog
        </Link>
        <span className="nav-label">Mini Blog con Next.js</span>
      </header>

      <section className="detail-container">
        <Link href="/" className="back-link">
          ← Volver a las publicaciones
        </Link>

        <article className="detail-article">
          <div className="detail-top">
            <span className="post-category">
              {publicacion.categoria}
            </span>
            <span className="ssr-badge">● SSR Activo</span>
          </div>

          <div className="detail-icon">
            {publicacion.emoji}
          </div>

          <h1>{publicacion.titulo}</h1>
          <p className="detail-description">
            {publicacion.descripcion}
          </p>

          <div className="detail-author">
            <span className="avatar">
              {publicacion.autor.charAt(0)}
            </span>
            <div>
              <strong>{publicacion.autor}</strong>
              <small>{publicacion.fecha}</small>
            </div>
          </div>

          <hr className="article-divider" />

          <div className="article-body">
            {publicacion.contenido.map((parrafo, index) => (
              <p key={index}>{parrafo}</p>
            ))}
          </div>

          <div className="article-end">
            <p>¿Te gustó este artículo? ¡Sigue aprendiendo!</p>
            <Link href="/" className="back-button">
              ← Explorar más publicaciones
            </Link>
          </div>
        </article>
      </section>

      <footer className="footer">
        <p>© 2026 TechBlog · Mini Blog con Next.js</p>
        <p>Desarrollado por Karla Paola Choque Moran</p>
      </footer>
    </main>
  );
}
