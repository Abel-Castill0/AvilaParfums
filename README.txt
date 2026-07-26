================================================================================
  ÁVILA PARFUMS — README DE MEJORAS
  Última actualización: julio 2026
================================================================================

ARCHIVOS MODIFICADOS / CREADOS
────────────────────────────────────────────────────────────────────────────────
  index.html              → Archivo principal (SPA). Todos los cambios van aquí.
  aviso-legal.html        → Página de aviso legal (nuevo)
  politica-privacidad.html→ Política de privacidad y cookies (nuevo)
  robots.txt              → Permite rastreo completo y apunta al sitemap (nuevo)
  sitemap.xml             → Mapa del sitio para buscadores (nuevo)
  .htaccess               → Caché, compresión Gzip/Brotli, HTTPS redirect (nuevo)
  convert-images.js       → Script Node.js para convertir JPG/PNG → WebP (nuevo)
  README.txt              → Este archivo (nuevo)


MEJORAS IMPLEMENTADAS
────────────────────────────────────────────────────────────────────────────────

1. POPUP VIP WHATSAPP
   • Se muestra antes de que el usuario vea el contenido principal.
   • Contiene imagen grupo.webp, texto del 10% de descuento y botón "Quiero unirme".
   • Enlace del grupo: https://chat.whatsapp.com/CmuCY3iVzLP36tKuXwmc7q
   • Cookie 'popup_visto' con duración 7 días — si ya existe, no se muestra.
   • Animación suave de entrada (fadeIn + popupIn).
   • Botón "No gracias, ir a la tienda" cierra el modal.

2. BOTÓN FLOTANTE WHATSAPP VIP
   • Posición fija esquina inferior derecha, z-index 18000.
   • Muestra grupo.webp redimensionado a 58×58px con borde verde.
   • Efecto de pulso animado continuo.
   • Tooltip "¿Hablamos? Únete al grupo VIP" al hacer hover.
   • Enlace al mismo grupo VIP.

3. SEO Y METADATOS
   • <title> mejorado con keywords relevantes.
   • <meta name="description"> optimizado.
   • Open Graph completo (og:title, og:description, og:image, og:url, og:type).
   • Twitter Card (summary_large_image).
   • <html lang="es"> ya estaba presente.
   • <link rel="canonical"> apuntando a la URL canónica.
   • Schema.org Organization en JSON-LD.
   • robots.txt y sitemap.xml creados.
   • Links a Aviso Legal y Política de Privacidad en el footer.

4. ANALÍTICA Y PÍXELES DE MARKETING
   • Google Tag Manager (GTM) en <head> y noscript tras <body>.
   • Google Analytics 4 (GA4) cargado dinámicamente tras aceptar cookies.
   • Meta Pixel cargado dinámicamente tras aceptar cookies.
   • Microsoft Clarity cargado dinámicamente tras aceptar cookies.
   • Evento 'whatsapp_group_click' al hacer clic en popup o botón flotante.
   • Evento 'popup_dismissed' al cerrar el popup.
   • Evento 'product_buy_click' al hacer clic en cualquier botón de compra.
   • Evento 'cookies_accepted' al aceptar el banner.
   • Todos los eventos van al dataLayer de GTM.

5. BANNER DE COOKIES
   • Aparece en la parte inferior si la cookie 'cookies_aceptadas' no existe.
   • Botón "Aceptar" guarda la cookie y carga los scripts de analítica.
   • Link "Gestionar" lleva a política-privacidad.html.
   • Animación slideUp al aparecer.

6. OPTIMIZACIÓN DE RENDIMIENTO
   • .htaccess con caché de 1 mes para imágenes/CSS/JS, Gzip y Brotli.
   • Redirección automática HTTP → HTTPS.
   • Seguridad de headers (X-Content-Type-Options, X-Frame-Options).
   • convert-images.js para convertir JPG/PNG a WebP (requiere Node.js + sharp).
   • Las imágenes ya tenían loading="lazy" y decoding="async" en ediciones previas.

7. PÁGINAS LEGALES
   • aviso-legal.html con datos del titular, objeto, propiedad intelectual,
     responsabilidad y legislación aplicable.
   • politica-privacidad.html con tabla de cookies, finalidades, derechos
     del usuario y contacto.


CÓMO CAMBIAR LOS IDs DE TRACKING
────────────────────────────────────────────────────────────────────────────────
Busca en index.html los siguientes placeholders y reemplázalos por tus IDs reales:

  GTM-XXXXXX    → ID de contenedor de Google Tag Manager
                  (aparece 2 veces: en <head> y en el noscript tras <body>)

  G-XXXXXXXXX   → ID de medición de Google Analytics 4
                  (aparece 2 veces en la función initAnalytics())

  000000000000  → ID de Meta Pixel (Facebook/Instagram)
                  (aparece 1 vez en la función initAnalytics())

  TU_ID_CLARITY → ID de Microsoft Clarity
                  (aparece 1 vez en la función initAnalytics())

Para buscarlos rápidamente, usa Ctrl+F en tu editor con cada placeholder.


CÓMO PROBAR EL POPUP
────────────────────────────────────────────────────────────────────────────────
Opción A — Borrar la cookie manualmente:
  1. Abre el sitio en Chrome.
  2. F12 → Application → Cookies → selecciona el dominio.
  3. Elimina la cookie 'popup_visto'.
  4. Recarga la página — el popup aparecerá.

Opción B — Desde la consola del navegador:
  document.cookie = "popup_visto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  location.reload();

Opción C — Incógnito:
  Abre una ventana de incógnito — las cookies de sesión no persisten.


CÓMO CONVERTIR IMÁGENES A WebP
────────────────────────────────────────────────────────────────────────────────
  1. Instala Node.js si no lo tienes: https://nodejs.org/
  2. En la carpeta raíz del proyecto, ejecuta:
       npm install sharp
       node convert-images.js
  3. El script convierte JPG/PNG en ./img/perfumes, ./img/promos y la raíz.
  4. Las imágenes originales se mantienen como fallback.


RECOMENDACIONES ADICIONALES
────────────────────────────────────────────────────────────────────────────────
  • Cloudflare (gratuito): actívalo como proxy DNS para CDN automático,
    caché edge, protección DDoS y SSL gratis.
    https://www.cloudflare.com/

  • Sube grupo.webp comprimida: la imagen actual pesa 329 KB.
    Puedes optimizarla en https://squoosh.app/ o con el script convert-images.js.

  • Verifica el sitemap en Google Search Console:
    https://search.google.com/search-console → Sitemaps → pega la URL del sitemap.

  • Prueba la velocidad con PageSpeed Insights:
    https://pagespeed.web.dev/

================================================================================
