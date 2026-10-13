
export type Publicacion = {
  id: number;
  titulo: string;
  autor: string;
  categoria: string;
  descripcion: string;
  contenido: string[];
  fecha: string;
  emoji: string;
};

export const publicaciones: Publicacion[] = [
  {
    id: 1,
    titulo: "La inteligencia artificial en el desarrollo de software",
    autor: "Karla Choque",
    categoria: "Inteligencia Artificial",
    descripcion:
      "Descubre cómo la inteligencia artificial está cambiando la forma de desarrollar aplicaciones.",
    contenido: [
      "La inteligencia artificial está transformando el desarrollo de software. Actualmente, los programadores pueden utilizar herramientas de IA para analizar código, encontrar errores y automatizar tareas repetitivas.",
      "Estas tecnologías ayudan a mejorar la productividad, pero no reemplazan la necesidad de comprender los fundamentos de programación, arquitectura y seguridad.",
      "El futuro del desarrollo de software estará relacionado con la colaboración entre programadores y herramientas inteligentes. Por ello, es importante aprender a utilizarlas de manera responsable.",
    ],
    fecha: "13 de octubre de 2026",
    emoji: "🤖",
  },
  {
    id: 2,
    titulo: "Cómo proteger nuestras aplicaciones web",
    autor: "Karla Choque",
    categoria: "Ciberseguridad",
    descripcion:
      "Conoce las principales prácticas para desarrollar aplicaciones web seguras.",
    contenido: [
      "La ciberseguridad es fundamental para proteger la información de los usuarios y evitar accesos no autorizados a los sistemas.",
      "Entre las buenas prácticas se encuentran validar los datos, proteger las contraseñas mediante algoritmos de hash seguros y aplicar controles de autenticación y autorización.",
      "También es importante mantener actualizadas las dependencias, utilizar HTTPS y registrar los eventos relevantes para identificar posibles incidentes.",
    ],
    fecha: "12 de octubre de 2026",
    emoji: "🔐",
  },
  {
    id: 3,
    titulo: "Primeros pasos con Amazon Web Services",
    autor: "Ana Torres",
    categoria: "Cloud Computing",
    descripcion:
      "Una introducción a los servicios de AWS y sus principales beneficios.",
    contenido: [
      "Amazon Web Services es una plataforma de computación en la nube que ofrece servicios de almacenamiento, procesamiento, bases de datos y seguridad.",
      "Amazon EC2 permite ejecutar servidores virtuales, mientras que Amazon S3 facilita el almacenamiento de objetos. AWS Lambda permite ejecutar código sin administrar servidores directamente.",
      "Comprender estos servicios es un primer paso para diseñar aplicaciones escalables y desplegarlas en entornos de nube.",
    ],
    fecha: "11 de octubre de 2026",
    emoji: "☁️",
  },
  {
    id: 4,
    titulo: "¿Qué es el desarrollo Backend?",
    autor: "Carlos Mendoza",
    categoria: "Programación",
    descripcion:
      "Aprende qué sucede detrás de una aplicación y cómo funcionan las APIs.",
    contenido: [
      "El backend es la parte de una aplicación encargada de procesar solicitudes, aplicar reglas de negocio y comunicarse con bases de datos.",
      "Tecnologías como Node.js, Python, Java y PostgreSQL permiten construir servicios que gestionan la información de manera estructurada.",
      "Un buen desarrollador backend debe comprender APIs REST, autenticación, bases de datos, control de errores y prácticas de seguridad.",
    ],
    fecha: "10 de octubre de 2026",
    emoji: "💻",
  },
  {
    id: 5,
    titulo: "Next.js: CSR y SSR explicados",
    autor: "Karla Choque",
    categoria: "Programación",
    descripcion:
      "Comprende las diferencias entre renderizar contenido en el navegador y en el servidor.",
    contenido: [
      "Next.js es un framework basado en React que permite desarrollar aplicaciones web utilizando diferentes estrategias de renderizado.",
      "En Client-Side Rendering, la interfaz puede actualizarse de manera interactiva desde el navegador mediante estados y eventos.",
      "En Server-Side Rendering, el servidor genera el contenido HTML para una solicitud. Esta técnica resulta útil cuando necesitamos producir contenido actualizado desde el servidor.",
    ],
    fecha: "9 de octubre de 2026",
    emoji: "⚡",
  },
  {
    id: 6,
    titulo: "La importancia de la seguridad en la nube",
    autor: "Ana Torres",
    categoria: "Ciberseguridad",
    descripcion:
      "Conoce cómo proteger los recursos y la información almacenada en servicios cloud.",
    contenido: [
      "La seguridad en la nube requiere proteger identidades, redes, datos y recursos tecnológicos.",
      "AWS IAM permite administrar permisos de acceso. Amazon CloudWatch facilita el monitoreo y AWS CloudTrail registra actividades realizadas en una cuenta.",
      "Aplicar el principio de mínimo privilegio, cifrar información sensible y revisar los registros de seguridad ayuda a reducir los riesgos.",
    ],
    fecha: "8 de octubre de 2026",
    emoji: "🛡️",
  },
];
