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
  SEGUNDA RONDA DE MEJORAS — julio 2026
================================================================================

NUEVAS LIBRERÍAS CDN AGREGADAS
────────────────────────────────────────────────────────────────────────────────
  AOS (Animate On Scroll) v2.3.4
    CSS: https://unpkg.com/aos@2.3.4/dist/aos.css
    JS:  https://unpkg.com/aos@2.3.4/dist/aos.js

  Swiper.js v11
    CSS: https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css
    JS:  https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js

  Google Fonts ampliado
    Playfair Display (400, 700, italic) — para títulos premium
    Lato (300, 400, 700) — para cuerpo de texto y botones


NUEVAS MEJORAS EN index.html
────────────────────────────────────────────────────────────────────────────────

1. TIPOGRAFÍA PREMIUM
   • Playfair Display aplicado a: h1, h2, h3, .section-title, .hero-title,
     .promo-name, .product-name, .modal-name, .footer-koi.
   • Lato aplicado a: body, botones, inputs, nav, filtros.
   • Ambas fuentes con fallback a Cormorant Garamond / Raleway respectivamente.

2. HOVERS REFINADOS
   • Tarjetas de producto: translateY(-6px) + scale(1.015) + sombra 20px.
   • Botón .btn-primary: fondo #222 + sombra + translateY(-2px) en hover.
   • Botón .product-quick-add: fondo #111 + translateY(-1px) en hover.
   • Todas las transiciones en 0.2–0.3s ease.

3. CARRUSEL DE TESTIMONIOS (SWIPER)
   • Nueva sección #testimonios con fondo #f9f9f9 insertada después de TikTok.
   • Slider automático (5 s), loop infinito, paginación clickeable.
   • 3 reseñas con avatar circular (ui-avatars.com), nombre, ciudad y texto.
   • data-aos="fade-up" en la sección.

4. ANIMACIONES AOS
   • AOS.init({ once: true, duration: 800, offset: 60 }).
   • data-aos="fade-up" en secciones #testimonios y #contacto.
   • Respeta prefers-reduced-motion (ya existía en el CSS del proyecto).

5. FORMULARIO DE CONTACTO FORMSPREE
   • Nueva sección #contacto con formulario independiente (no toca el carrito).
   • Validación en tiempo real: nombre obligatorio, email con regex, mensaje ≥10 chars.
   • Mensajes de error por campo + mensaje de éxito global.
   • Spinner de carga mientras envía.
   • Envío asíncrono (fetch) a Formspree sin recargar la página.
   • Evento 'contact_form_sent' al dataLayer de GTM.

6. RECAPTCHA V3 INVISIBLE
   • Script cargado en <head> con defer (no bloquea render).
   • Token obtenido con grecaptcha.execute() al enviar el formulario.
   • Si RECAPTCHA_KEY no está configurado, envía sin token (seguro para testing).

7. COPYRIGHT DINÁMICO
   • El año en el footer se actualiza automáticamente con new Date().getFullYear().


PLACEHOLDERS PENDIENTES DE SUSTITUIR
────────────────────────────────────────────────────────────────────────────────
  GTM-XXXXXX      → ID de contenedor Google Tag Manager (2 ocurrencias)
  G-XXXXXXXXX     → ID de medición Google Analytics 4 (2 ocurrencias)
  000000000000    → ID de Meta Pixel (1 ocurrencia)
  TU_ID_CLARITY   → ID de Microsoft Clarity (1 ocurrencia)
  TU_FORMSPREE_ID → ID de formulario en formspree.io (1 ocurrencia en el JS)
  TU_SITE_KEY     → Site Key de reCAPTCHA v3 (2 ocurrencias: script src y JS)

  Cómo obtener el Formspree ID:
    1. Crea cuenta gratuita en https://formspree.io/
    2. Nuevo formulario → copia el ID del endpoint (ej: xpwzabcd)
    3. Reemplaza TU_FORMSPREE_ID en el <script> al final de index.html

  Cómo obtener el Site Key de reCAPTCHA v3:
    1. Ve a https://www.google.com/recaptcha/admin/create
    2. Selecciona "reCAPTCHA v3"
    3. Añade tu dominio (avilaparfums.com)
    4. Copia la "Clave del sitio" y reemplaza TU_SITE_KEY (2 veces)


VERIFICACIÓN RÁPIDA EN CONSOLA
────────────────────────────────────────────────────────────────────────────────
  // Confirmar AOS activo:
  console.log(typeof AOS)  // → "object"

  // Confirmar Swiper activo:
  console.log(typeof Swiper)  // → "function"

  // Ver año del footer:
  document.getElementById('footerYear').textContent  // → "2026"

  // Probar formulario sin backend (modo sin Formspree ID):
  // Completa el formulario → el fetch fallará con error de conexión (esperado).
  // Cuando tengas el ID real, funcionará correctamente.


================================================================================
  TERCERA RONDA DE MEJORAS — julio 2026
================================================================================

RESUMEN
────────────────────────────────────────────────────────────────────────────────
  Todas las imágenes del proyecto ya estaban en formato WebP (no había ningún
  JPG/PNG en img/perfumes, img/promos ni en la raíz), así que convert-images.js
  se ejecutó pero no encontró nada que convertir — esto es correcto, no un error.
  Se instaló `sharp` (npm install sharp) para dejar el script listo por si se
  agregan imágenes JPG/PNG en el futuro.

  Como no existen JPG/PNG de origen, la técnica <picture>+srcset con fallback
  JPG no aplica (no hay a qué hacer fallback). En su lugar, se resolvió el
  problema real de fondo — el CLS (Cumulative Layout Shift) — añadiendo
  atributos width/height explícitos a las 6 etiquetas <img> estáticas que no
  los tenían (categorías de promociones, método de pago, popup VIP, botón
  flotante). Las imágenes generadas dinámicamente por JS (tarjetas de producto,
  modales) ya estaban dentro de contenedores con aspect-ratio fijo por CSS,
  por lo que no sufren CLS aunque no lleven el atributo HTML.

NUEVAS LIBRERÍAS CDN
────────────────────────────────────────────────────────────────────────────────
  Font Awesome 6.5.1
    CSS: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css

NUEVAS MEJORAS EN index.html
────────────────────────────────────────────────────────────────────────────────

1. IMÁGENES Y CLS
   • convert-images.js ejecutado — 0 imágenes convertidas (todo ya era WebP).
   • sharp instalado en node_modules/ (agrega package-lock.json si no existía).
   • width/height añadidos a: A_TU_ELECCIÓN_NICHO/DISEÑADOR/ÁRABE.webp (600x600),
     metodo-pago.webp (1098x199), grupo.webp en popup (320x235) y botón
     flotante (58x58).

2. GOOGLE ADS CONVERSION TRACKING
   • Script gtag.js para AW-XXXXXXXXX cargado dentro de initAnalytics()
     (solo tras aceptar cookies, igual que GA4/Meta/Clarity).
   • Se interceptó dataLayer.push para disparar automáticamente el evento
     'conversion' de Google Ads cada vez que se emite 'product_buy_click',
     enviando 'send_to': 'AW-XXXXXXXXX/XXXXXXX' con value y currency PEN.

3. PEDIDO RÁPIDO POR WHATSAPP (nuevo modal genérico)
   • Cada tarjeta de producto ahora tiene un botón "Comprar por WhatsApp"
     adicional (no reemplaza el botón "+ Añadir al Carrito" existente, que
     sigue funcionando igual que antes para no romper el flujo de carrito).
   • El botón lleva atributos data-name, data-price, data-img.
   • Al hacer clic abre #quickOrderModal: imagen, nombre, precio, selector
     de cantidad (1-10) y botón "Enviar pedido por WhatsApp".
   • El mensaje se construye como:
     "Hola Ávila Parfums, quiero pedir: [nombre] x[cantidad]. ¿Me pueden
     confirmar disponibilidad y total?" — codificado con encodeURIComponent.
   • Dispara 'product_buy_click' al dataLayer con name, price, quantity, value.

4. NEWSLETTER CON 10% DE DESCUENTO
   • Nueva sección #newsletterSection antes del footer, fondo dorado suave.
   • Campo de email + botón "Obtener descuento", validación de formato.
   • Envío asíncrono (fetch, mode: 'no-cors') a MAILCHIMP_URL.
   • Si el placeholder no fue reemplazado, simula éxito (para poder probar
     la UI sin backend configurado) — no bloquea el testing.
   • Dispara 'newsletter_signup' al dataLayer con el dominio del correo.

5. OFERTA FLASH CON CUENTA ATRÁS (24H)
   • Contador en el hero (slide 1), debajo del título: "Oferta especial
     termina en: 24h 00m 00s", con números en dorado y Playfair Display.
   • La fecha de inicio se guarda en la cookie 'flash_offer_start' (1 día)
     para que el contador persista aunque el usuario recargue la página.
   • Al llegar a cero, el bloque se oculta automáticamente.

6. SCHEMA.ORG PRODUCT (dinámico)
   • Se generan bloques Product para TODOS los perfumes del catálogo
     mediante injectProductSchema(), ejecutada al final de renderAll().
   • Se inserta como <script type="application/ld+json" id="schemaProducts">
     inmediatamente después del script Organization (mismo id de referencia
     #schemaOrganization), cumpliendo "justo después del Schema existente".
   • NOTA IMPORTANTE: se usó "priceCurrency": "PEN" (Soles peruanos) en vez
     de EUR — el sitio vende y muestra precios en soles (S/), así que usar
     EUR habría generado un Schema.org incorrecto y penalizable en Google
     Rich Results. Si en el futuro el negocio factura en euros, cambiar
     'PEN' por 'EUR' dentro de injectProductSchema().
   • Como PRODUCTS es un array de JavaScript (no existe en el HTML estático),
     el schema se inyecta en tiempo de ejecución — técnica estándar y
     totalmente válida para Google, que renderiza JS al indexar.

7. POPUP VIP MEJORADO
   • Se añadió un temporizador "⏳ Esta oferta expira en 15:00" con cuenta
     regresiva real, persistida en la cookie 'vip_popup_start' (1 día) para
     que no se reinicie si el usuario recarga durante la sesión.
   • Se añadió un campo de nombre opcional (id="vipPopupNameInput").
   • NOTA TÉCNICA: los enlaces de invitación a grupos de WhatsApp
     (chat.whatsapp.com/...) NO admiten mensajes prellenados vía ?text=
     (a diferencia de wa.me/<numero>). Por eso el nombre introducido no se
     puede inyectar en un mensaje de WhatsApp real; en su lugar se envía
     como parámetro 'visitor_name' al evento 'whatsapp_group_click' del
     dataLayer, para personalizar el seguimiento/segmentación en GA4/Meta.
   • Se mantiene la cookie 'popup_visto' de 7 días y la animación existente.

8. FONT AWESOME 6 — ICONOGRAFÍA
   • CDN cargado en <head>.
   • Iconos de Instagram, TikTok y WhatsApp del footer reemplazados por
     <i class="fa-brands fa-..."> (antes eran SVGs inline embebidos).
   • Iconos añadidos en el formulario de contacto: fa-user, fa-envelope,
     fa-message junto a cada label.
   • Icono fa-quote-left añadido a cada tarjeta de testimonio.

9. VERIFICACIÓN DE DUPLICIDADES (autoverificación realizada)
   • og:title, og:description, Schema Organization, AOS.init, new Swiper(),
     initAnalytics(), Font Awesome CDN: exactamente 1 ocurrencia cada uno.
   • Los 4 bloques <script> inline (sin src ni ld+json) fueron parseados con
     Node.js vm.Script — 0 errores de sintaxis.
   • El único bloque application/ld+json estático (Organization) fue
     validado con JSON.parse — válido.
   • divs y sections: misma cantidad de aperturas y cierres (278/278 y 7/7).


PLACEHOLDERS PENDIENTES DE SUSTITUIR (ACTUALIZADO)
────────────────────────────────────────────────────────────────────────────────
  GTM-XXXXXX        → ID de contenedor Google Tag Manager
  G-XXXXXXXXX       → ID de medición Google Analytics 4
  000000000000      → ID de Meta Pixel
  TU_ID_CLARITY     → ID de Microsoft Clarity
  TU_FORMSPREE_ID   → ID de formulario en formspree.io
  TU_SITE_KEY       → Site Key de reCAPTCHA v3 (2 ocurrencias)
  AW-XXXXXXXXX      → ID de conversión de Google Ads (3 ocurrencias)
  XXXXXXX           → Etiqueta de conversión de Google Ads (1 ocurrencia,
                      dentro de 'send_to': 'AW-XXXXXXXXX/XXXXXXX')
  TU_MAILCHIMP_URL  → Endpoint de suscripción de Mailchimp o Brevo
                      (formato: https://XXXX.usXX.list-manage.com/subscribe/post?u=XXXX&id=XXXX)

  Cómo obtener el ID de conversión de Google Ads:
    1. Ve a Google Ads → Herramientas → Conversiones → Nueva acción de conversión.
    2. Copia el ID (AW-XXXXXXXXX) y la etiqueta (XXXXXXX) del fragmento de evento.
    3. Reemplaza ambos placeholders en index.html (busca "AW-XXXXXXXXX").

  Cómo obtener el endpoint de Mailchimp:
    1. Mailchimp → Audience → Signup forms → Embedded forms.
    2. Copia la URL de acción del formulario (atributo action del <form>).
    3. Reemplázala completa en la variable MAILCHIMP_URL del script.
    Nota: Mailchimp requiere normalmente un formulario HTML nativo o JSONP
    por restricciones CORS; si el fetch con mode:'no-cors' no confirma
    la suscripción, se recomienda usar un formulario embebido oficial de
    Mailchimp o un servicio intermedio (Brevo API sí soporta fetch directo
    con API key en el backend).


VERIFICACIÓN RÁPIDA — TERCERA RONDA
────────────────────────────────────────────────────────────────────────────────
  // Probar el modal de pedido rápido:
  // Clic en cualquier botón "Comprar por WhatsApp" de una tarjeta de producto.

  // Probar el contador flash (resetear):
  document.cookie = "flash_offer_start=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  location.reload();

  // Probar el temporizador del popup VIP (resetear):
  document.cookie = "vip_popup_start=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "popup_visto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  location.reload();

  // Ver el Schema.org Product generado:
  document.getElementById('schemaProducts').textContent


================================================================================
  CUARTA RONDA — AUDITORÍA FINAL Y PUESTA A PUNTO — julio 2026
================================================================================

RESUMEN
────────────────────────────────────────────────────────────────────────────────
  Esta ronda no agrega funcionalidades nuevas. Es una auditoría de calidad
  centrada en tres objetivos: (1) que la página no genere NINGÚN error de
  consola ni petición de red rota mientras los placeholders siguen sin
  reemplazar, (2) blindar los componentes existentes contra datos faltantes
  o mal formados, y (3) pulir accesibilidad y rendimiento de carga.

1. CONFIGURACIÓN CENTRAL DE PLACEHOLDERS (cambio estructural clave)
   • Se creó `window.AVILA_CONFIG` al inicio del <head>: un único objeto con
     los 9 IDs/URLs de integración (GTM, GA4, Meta Pixel, Clarity, Google Ads
     x2, Formspree, reCAPTCHA, Mailchimp). Antes estaban repartidos como
     strings sueltos en 3 puntos distintos del archivo — ahora hay una sola
     fuente de verdad. Para configurar el sitio en producción solo hay que
     editar los valores dentro de este objeto (ver checklist más abajo).
   • Se añadió `window.isPlaceholder(valor)`: función helper que detecta si
     un valor sigue siendo un placeholder (contiene 'XXXX' o empieza con
     'TU_'). Todo el código de integraciones usa esta función para decidir
     si carga el script real o hace un fallback silencioso.

2. FALLBACK SILENCIOSO POR INTEGRACIÓN (antes vs. ahora)
   • GTM (script en <head>): ANTES se ejecutaba siempre, generando una
     petición real a gtm.js?id=GTM-XXXXXX. AHORA se omite por completo si
     el ID es placeholder, con un console.warn explicativo.
   • reCAPTCHA v3 (script en <head>): ANTES era un <script src> estático que
     cargaba api.js?render=TU_SITE_KEY incondicionalmente. AHORA se inyecta
     dinámicamente solo si la Site Key es real; si no, console.warn y el
     formulario sigue funcionando sin protección (modo testing).
   • GA4 / Meta Pixel / Clarity / Google Ads (dentro de initAnalytics()):
     ANTES los 4 scripts de terceros se cargaban siempre tras aceptar
     cookies, sin importar si el ID era un placeholder — esto habría
     generado errores reales en producción antes de configurar las cuentas.
     AHORA cada uno se evalúa por separado con isPlaceholder() y se omite
     individualmente (con su propio console.warn) si no está configurado.
   • Conversión de Google Ads (interceptor de dataLayer.push): ANTES
     disparaba 'gtag event conversion' con 'AW-XXXXXXXXX/XXXXXXX' en cada
     clic de compra, sin verificar si esos valores eran reales. AHORA se
     valida GOOGLE_ADS_ID y GOOGLE_ADS_LABEL antes de disparar, y avisa una
     sola vez (no en cada clic) si faltan.
   • Formulario de contacto (Formspree): ANTES, con el ID placeholder,
     intentaba hacer fetch a 'formspree.io/f/TU_FORMSPREE_ID' — esto genera
     un 404 REAL y termina mostrando el alert de "Error de conexión" al
     probar el formulario sin configurar, lo cual es un bug de UX/testing.
     AHORA se detecta el placeholder ANTES del fetch, se simula el éxito
     igual que ya hacía la newsletter, y se registra un console.warn.
   • reCAPTCHA en el envío del formulario: se añadió manejo de error si
     grecaptcha.execute() falla (antes no tenía .catch), con fallback a
     envío sin token.
   • Newsletter (Mailchimp/Brevo): ya tenía fallback de éxito simulado;
     se añadió el console.warn que faltaba y se unificó con AVILA_CONFIG.

3. MODAL "PEDIDO RÁPIDO" — BLINDAJE DE DATOS
   • openQuickOrderModal() ahora valida que data-name/data-price/data-img
     no vengan vacíos. Si faltan, intenta extraerlos automáticamente del
     DOM cercano (busca .product-name, .product-price e <img> dentro de la
     tarjeta .product-card más próxima al botón).
   • Si aun así no se puede determinar nombre o precio (NaN), se cancela la
     apertura del modal con un console.warn + un toast visible al usuario
     ("No se pudo cargar este producto") en vez de mostrar un modal roto
     con "S/ NaN".
   • En la práctica esto es una salvaguarda defensiva: la única plantilla
     que genera estos botones (buildProductCard) siempre completa los 3
     atributos, así que este código solo se activa si en el futuro se
     agregan botones "Comprar por WhatsApp" manualmente sin todos los datos.

4. SWIPER — RESILIENCIA A CAMBIOS EN EL NÚMERO DE SLIDES
   • Antes, `new Swiper()` se llamaba siempre con `loop: true`, lo que
     genera warnings de Swiper en consola si hay muy pocos slides.
   • Ahora se cuenta cuántos `.swiper-slide` existen antes de inicializar:
     con 0 slides no se inicializa Swiper (console.warn); con exactamente
     1 slide se inicializa sin loop/autoplay/paginación (no tendría sentido
     un carrusel de una sola diapositiva); con 2 o más, funciona como antes.

5. AOS — prefers-reduced-motion REFORZADO
   • Ya existía una regla CSS global que fuerza duration:0.001ms bajo
     prefers-reduced-motion. Se añadió además la opción nativa `disable`
     de AOS.init() con la misma condición, para que la librería ni siquiera
     calcule ni aplique las animaciones a nivel de JS (doble capa de
     protección: CSS + configuración de la librería).

6. ACCESIBILIDAD
   • Revisado: los enlaces de Instagram/TikTok/WhatsApp del footer y el
     botón flotante YA tenían aria-label de una ronda anterior (sin
     cambios). Los iconos Font Awesome YA tenían aria-hidden="true".
     Los botones de cerrar (✕) de todos los modales YA tenían
     aria-label="Cerrar". Los labels del formulario YA usaban for/id
     correctamente. Se confirma que nada de esto necesitó corrección.
   • Corregido: la imagen dentro del botón flotante de WhatsApp tenía
     alt="WhatsApp VIP", duplicando la información del aria-label del
     enlace padre (un lector de pantalla la anunciaría dos veces). Se
     cambió a alt="" porque es puramente decorativa en ese contexto.

7. RENDIMIENTO — CSS DE TERCEROS NO BLOQUEANTE
   • Las hojas de estilo de AOS, Swiper y Font Awesome (no críticas para el
     primer render, solo afectan testimonios/iconos/animaciones) se cargan
     ahora con el patrón media="print" + onload="this.media='all'", que
     evita que bloqueen el renderizado inicial. Se añadió un <noscript>
     con la carga normal como fallback si JavaScript está deshabilitado.
   • Los scripts aos.js y swiper-bundle.min.js (al final del <body>) se
     dejaron TAL CUAL, sin defer/async: están justo antes del bloque
     inline que llama a AOS.init()/new Swiper(), y ya se comportan como
     "diferidos" al estar al final del documento. Añadir defer realmente
     ROMPERÍA el orden de ejecución (un script defer se ejecuta después de
     cualquier script inline no-defer que le siga), así que se dejó como
     una decisión deliberada, no un descuido.

8. VERIFICACIÓN GLOBAL REALIZADA
   • Los 6 bloques <script> inline (sin src ni ld+json) se validaron con
     Node.js vm.Script — 0 errores de sintaxis.
   • El bloque application/ld+json estático (Organization) se validó con
     JSON.parse — válido.
   • Balance de etiquetas confirmado: div 278/278, section 7/7, script 9/9,
     form 2/2, button 67/67.
   • Balance de llaves CSS confirmado en ambos bloques <style>: 572/572 y
     34/34 (sin reglas huérfanas ni bloques sin cerrar).
   • Se confirmó que AVILA_CONFIG, isPlaceholder, initAnalytics y
     openQuickOrderModal aparecen exactamente una vez cada uno (sin
     duplicidades de una ronda anterior a otra).
   • Se confirmó que no queda ningún console.log/console.error/console.info
     residual — solo los console.warn intencionales de esta auditoría.


CHECKLIST DE LANZAMIENTO
────────────────────────────────────────────────────────────────────────────────
  Todos los IDs viven en un solo lugar: window.AVILA_CONFIG, al principio
  del <head> de index.html. Edita solo ahí — el resto del código ya
  referencia ese objeto.

  [ ] Reemplazar GTM-XXXXXX       con tu ID real de Google Tag Manager
                                  (también en el <noscript> justo después
                                  de <body>, que no puede leer AVILA_CONFIG)
  [ ] Reemplazar G-XXXXXXXXX      con tu ID real de Google Analytics 4
  [ ] Reemplazar 000000000000    con tu ID real de Meta Pixel
  [ ] Reemplazar TU_ID_CLARITY   con tu ID real de Microsoft Clarity
  [ ] Reemplazar AW-XXXXXXXXX    con tu ID de conversión de Google Ads
  [ ] Reemplazar XXXXXXX         con tu etiqueta de conversión de Google Ads
  [ ] Reemplazar TU_FORMSPREE_ID con tu endpoint de Formspree
  [ ] Reemplazar TU_SITE_KEY     con tu Site Key de reCAPTCHA v3
  [ ] Reemplazar TU_MAILCHIMP_URL con tu URL de suscripción de Mailchimp/Brevo
  [ ] Activar Cloudflare como CDN (opcional pero recomendado)

  Una vez reemplazados todos los valores, el sitio queda 100% operativo:
  todas las integraciones se activan automáticamente (los console.warn
  desaparecen solos porque isPlaceholder() ya no los detecta como
  placeholders) y no es necesario tocar ninguna otra parte del código.

  RECOMENDACIÓN FINAL: antes de anunciar el lanzamiento, hacer una prueba
  de extremo a extremo en una ventana de incógnito (sin cookies ni caché
  previos) cubriendo: aparición del popup VIP → cerrar/aceptar → aceptar
  banner de cookies → verificar en la pestaña Network que ahora sí cargan
  gtm.js/gtag/fbevents/clarity → probar el formulario de contacto real →
  probar la newsletter real → hacer un pedido de prueba por WhatsApp
  (carrito y "Pedido Rápido") → revisar la consola: no debe quedar ningún
  console.warn con el prefijo "[Ávila Parfums]".

================================================================================
