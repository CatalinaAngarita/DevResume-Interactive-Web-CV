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
├── style.css           # Estilos y temas claro/oscuro
├── script.js           # Interactividad (toggle de tema, menú móvil, scroll, etc.)
├── README.md           # Este archivo
│
└── assets/
    ├── img/
    │   └── Perfil_lego.PNG  # Imagen LEGO (puedes reemplazarla por la tuya)
    ├── icons/
    └── projects/
```

## 🖼️ Configuración de la Imagen LEGO

**IMPORTANTE**: Para que la imagen LEGO se muestre correctamente en la sección de inicio:

1. Coloca tu imagen LEGO en la carpeta `assets/img/`.
2. Usa el nombre `Perfil_lego.PNG` para reemplazar la imagen existente **o** actualiza el atributo `src` en `index.html` para que apunte a tu archivo.

```html
<img src="assets/img/Perfil_lego.PNG" alt="Catalina Angarita - Desarrolladora Back-End" class="lego-image" />
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
2. **Coloca tu imagen LEGO** en `assets/img/Perfil_lego.PNG` (o ajusta la ruta en `index.html`)
3. **Abre `index.html`** en tu navegador
4. **Personaliza el contenido** en `index.html`:
   - Nombre y descripción
   - Proyectos
   - Información de contacto
   - Enlaces de redes sociales

## ▶️ Cómo levantar el proyecto

El portafolio es 100 % estático, por lo que no necesitas dependencias ni compilación. Puedes verlo de tres formas:

1. **Abrir el archivo directamente**  
   - Haz doble clic sobre `index.html` o arrástralo a tu navegador.
2. **Usar Live Server en VS Code (recomendado)**  
   - Instala la extensión *Live Server*.  
   - Haz clic derecho en `index.html` y selecciona **Open with Live Server** para recargar automáticamente cada cambio.
3. **Servirlo con Node.js (opcional)**  
   ```bash
   npx serve .
   # o
   npx http-server .
   ```
   Luego abre la URL que aparezca en la consola (generalmente `http://localhost:3000` o `http://127.0.0.1:8080`).

> Cualquier servidor web estático funciona; lo importante es que `index.html` esté accesible desde el navegador.

## 🐳 Levantar con Docker

El proyecto incluye configuración de Docker para facilitar el despliegue y desarrollo.

### Requisitos previos
- Docker instalado ([Descargar Docker](https://www.docker.com/get-started))
- Docker Compose (incluido con Docker Desktop)

### Opción 1: Usar Docker Compose (Recomendado)

```bash
# Construir y levantar el contenedor
docker-compose up -d

# Ver los logs
docker-compose logs -f

# Detener el contenedor
docker-compose down
```

El sitio estará disponible en `http://localhost:8080`

### Opción 2: Usar Docker directamente

```bash
# Construir la imagen
docker build -t devresume-web .

# Ejecutar el contenedor
docker run -d -p 8080:80 --name devresume-web devresume-web

# Ver los logs
docker logs -f devresume-web

# Detener y eliminar el contenedor
docker stop devresume-web
docker rm devresume-web
```

### Comandos útiles de Docker

```bash
# Ver contenedores en ejecución
docker ps

# Acceder al contenedor (bash)
docker exec -it devresume-web sh

# Reconstruir la imagen después de cambios
docker-compose build --no-cache
docker-compose up -d
```

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
Duplica uno de los bloques `<details class="project-card">` y edítalo con tu información:

```html
<details class="project-card">
  <summary>
    <div class="project-summary">
      <div>
        <h3 class="project-role">Rol o título</h3>
        <p class="project-company">Nombre del proyecto • Fecha</p>
      </div>
      <span class="project-toggle-icon">
        <i class="fas fa-chevron-down"></i>
      </span>
    </div>
  </summary>
  <div class="project-content">
    <ul class="project-list">
      <li>Responsabilidad o logro principal.</li>
      <li>Tecnología destacada.</li>
      <li>Resultado o métrica relevante.</li>
    </ul>
  </div>
</details>
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
- **Desktop**: Layout de 2 columnas y barra flotante centrada.
- **Tablet**: Ajustes progresivos mediante media queries (contenidos apilados, navbar compacta).
- **Móvil**: Menú hamburguesa, tarjetas en una columna y tipografías optimizadas.

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

