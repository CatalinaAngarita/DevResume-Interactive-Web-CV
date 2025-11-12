# DevResume - Hoja de Vida Interactiva

Portafolio web interactivo desarrollado con HTML, CSS y JavaScript que muestra la hoja de vida de manera moderna y profesional.

## 🎨 Características

- **Diseño Moderno**: Paleta de colores morados y negros con gradientes elegantes
- **Modo Oscuro/Claro**: Toggle para cambiar entre temas con persistencia en localStorage
- **Diseño Responsive**: Adaptable a todos los dispositivos (móvil, tablet, escritorio)
- **Animaciones Suaves**: Efectos de scroll, hover y transiciones fluidas
- **Navegación Intuitiva**: Menú hamburguesa en móvil y scroll spy para resaltar sección activa
- **Secciones Completas**:
  - **Inicio**: Landing page con presentación personal e imagen LEGO
  - **Acerca de**: Información personal y tecnologías que manejo
  - **Proyectos**: Galería de proyectos con efectos hover
  - **Contacto**: Formulario de contacto funcional

## 📁 Estructura del Proyecto

```
DevResume-Interactive-Web-CV/
│
├── index.html          # Estructura HTML principal
├── style.css           # Estilos CSS con paleta morada/negra
├── script.js           # Funcionalidad JavaScript
├── README.md           # Este archivo
│
└── assets/
    ├── img/
    │   └── lego-figure.png  # ⚠️ IMPORTANTE: Coloca tu imagen LEGO aquí
    ├── icons/
    └── projects/
```

## 🖼️ Configuración de la Imagen LEGO

**IMPORTANTE**: Para que la imagen LEGO se muestre correctamente en la sección de inicio:

1. Coloca tu imagen LEGO en la carpeta `assets/img/`
2. Asegúrate de que el archivo se llame `lego-figure.png`
3. O cambia el nombre en `index.html` línea 67 para que coincida con tu archivo

```html
<img src="assets/img/lego-figure.png" alt="Catalina Angarita - Desarrolladora Front-End" class="lego-image" />
```

### Formatos de imagen recomendados:
- PNG con fondo transparente (recomendado)
- JPG/JPEG
- WebP
- SVG

### Tamaño recomendado:
- Ancho: 800-1200px
- Alto: 800-1200px
- Resolución: 72-150 DPI

## 🎨 Paleta de Colores

La aplicación usa una paleta de colores morados y negros:

### Colores Principales:
- **Morado Claro**: `#794d98`
- **Morado Medio**: `#6b4487`
- **Morado Oscuro**: `#5e3b76`, `#503365`, `#432b55`
- **Negro Morado**: `#362244`, `#281a33`, `#1b1122`, `#0d0811`
- **Negro Puro**: `#000000`

### Modo Claro:
- Fondo: `#f8f9fa`
- Texto: `#281a33`
- Acento: `#794d98`

### Modo Oscuro:
- Fondo: `#0d0811`
- Texto: `#e2e8f0`
- Acento: `#8b5cf6`

## 🚀 Cómo Usar

1. **Clona o descarga el proyecto**
2. **Coloca tu imagen LEGO** en `assets/img/lego-figure.png`
3. **Abre `index.html`** en tu navegador
4. **Personaliza el contenido** en `index.html`:
   - Nombre y descripción
   - Proyectos
   - Información de contacto
   - Enlaces de redes sociales

## 🛠️ Personalización

### Cambiar Colores
Los colores están definidos en variables CSS al inicio de `style.css`:

```css
:root {
  --primary-color: #794d98;
  --bg-color: #f8f9fa;
  /* ... más variables */
}
```

### Agregar Proyectos
Edita la sección de proyectos en `index.html`:

```html
<div class="project-card">
  <div class="project-image">
    <!-- Tu contenido -->
  </div>
  <div class="project-content">
    <h3 class="project-title">Título del Proyecto</h3>
    <!-- Más contenido -->
  </div>
</div>
```

### Modificar Animaciones
Las animaciones están en `style.css` en la sección de `@keyframes`:

```css
@keyframes floatImage {
  /* Personaliza la animación */
}
```

## 📱 Responsive Design

El diseño es completamente responsive:
- **Desktop**: Layout de 2 columnas en la sección de inicio
- **Tablet**: Layout adaptativo
- **Móvil**: Menú hamburguesa y layout de una columna

## 🌐 Navegadores Soportados

- Chrome (últimas versiones)
- Firefox (últimas versiones)
- Safari (últimas versiones)
- Edge (últimas versiones)

## 📝 Licencia

Este proyecto es de uso libre para fines educativos y personales.

## 👤 Autor

**Catalina Angarita**
- Desarrolladora Back-End
- Portafolio interactivo

---

¡Disfruta creando tu portafolio! 🚀

