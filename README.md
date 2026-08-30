# 🎂 Pastelería Mil Sabores

Bienvenido al repositorio oficial del sitio web para **Pastelería Mil Sabores**, desarrollado en el marco de la celebración de su **50 Aniversario** y como parte del proyecto académico de gastronomía y desarrollo web para Duoc UC.

---

## 📌 Descripción del Proyecto

El proyecto consiste en una plataforma web e-commerce, intuitiva y atractiva que refleja la tradición, calidad y calidez artesanal de la pastelería. Integra una experiencia de usuario fluida con catálogo de productos, filtros avanzados, carrito de compras dinámico y una sección comunitaria/blog.

### 🌟 Características Principales
* **Navegación Intuitiva y Agradable:** Interfaz basada en tarjetas (*cards*) con espaciados optimizados para una lectura limpia y organizada.
* **Catálogo interactivo con Filtros:** Búsqueda rápida por categorías (Vegana, Sin Gluten, Especiales, Tradicional).
* **Carrito de Compras Funcional:** Gestión dinámicas de productos, subtotales y persistencia de datos mediante `localStorage`.
* **Blog & Comunidad Duoc:** Publicación de noticias, recetas, consejos de repostería e historia del 50 Aniversario (incluyendo el hito del Récord Guinness de 1995).
* **Gestión de Envíos y Contacto:** Formularios para seguimiento de pedidos e interacción en redes sociales.

---

## 🎨 Propuesta de Diseño Visual

El diseño fue desarrollado siguiendo una paleta de colores acogedora y tipografías que evocan nostalgia y tradición:

### 🎨 Colores
* **Fondo Principal:** Crema Pastel (`#FFF5E1`) - Aporta un ambiente cálido y acogedor.
* **Acento Principal:** Chocolate (`#8B4513`) - Utilizado en botones, encabezados y elementos interactivos.
* **Acento Secundario:** Rosa Suave (`#FFC0CB`) - Evoca dulzura y tradición.
* **Texto Principal:** Marrón Oscuro (`#5D4037`) - Garantiza un contraste óptimo.
* **Texto Secundario:** Gris Claro (`#B0BEC5`) / Marrón Medio - Para detalles y descripciones.

### ✒️ Tipografía
* **Encabezados:** [Pacifico](https://fonts.google.com/specimen/Pacifico) (Cursiva artística y artesanal).
* **Texto General:** [Lato](https://fonts.google.com/specimen/Lato) (Sans-serif moderna y legible).

---

## 📁 Estructura del Proyecto

```text
PasteleriaMilSabores/
├── css/
│   └── style.css            # Hoja de estilos globales
├── img/                     # Recursos gráficos y logotipos
├── js/
│   └── script.js            # Lógica central (carrito, renderizado, almacenamiento)
├── pages/
│   ├── blog.html            # Sección de noticias y comunidad Duoc
│   ├── carrito.html         # Gestor del carrito de compras
│   ├── contacto.html        # Gestión de envíos y redes sociales
│   ├── login.html           # Formulario de registro e inicio de sesión
│   ├── nosotros.html        # Historia del 50 aniversario
│   └── productos.html       # Catálogo de productos y filtros
├── index.html               # Página principal de inicio
└── README.md                # Documentación del proyecto
