# Usar la imagen oficial de nginx como base
FROM nginx:alpine

# Copiar los archivos estáticos al directorio de nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Exponer el puerto 80
EXPOSE 80

# Nginx se inicia automáticamente, no necesitamos CMD adicional
# pero lo especificamos para claridad
CMD ["nginx", "-g", "daemon off;"]

