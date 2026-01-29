# 🎬 Flujo TV Bolivia

Landing page de Flujo TV para Bolivia (Astro). Enfoque: experiencia estable, soporte y activación.

## 🌐 Dominio

- **Canonical / Producción**: `https://bolivia.flujooficial.com`
- `robots.txt` y `sitemap.xml` apuntan a ese dominio.

## 💰 Planes (USD)

| Duración | Precio |
|---|---:|
| 1 mes | 9 |
| 3 meses | 27 |
| 6 meses | 49 |
| 12 meses | 95 |

## ✅ Dispositivos compatibles (reglas)

- Android (móvil y tablet)
- TV Box
- Fire Stick
- Google TV
- Xiaomi Stick

Requiere internet estable.

## 🔎 SEO (resumen)

- Canonical dinámico por ruta (basado en `site.canonical`).
- OpenGraph/Twitter consistentes con el `title/description`.
- JSON-LD (Organization/WebSite/WebPage/Service) + ofertas con precios.
- Keywords incluyen búsquedas relacionadas como **“Magis TV”** y **“Magis 4K”** sin remover la marca Flujo.
	- Nota: esto no implica afiliación con otras marcas; se usa como término de búsqueda.

## 🧩 Configuración

Variables clave en:

- `src/config/site.ts` (dominio, canonical, soporte, WhatsApp, planes).
- `src/layouts/Layout.astro` (meta tags + schema).

## 🧪 Desarrollo

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 📝 Cambios recientes (2026-01-28)

- Ajuste de precios a 9/27/49/95 USD.
- Migración de dominio `bo.flujooficial.com` → `bolivia.flujooficial.com`.
- SEO reestructurado para formato tipo Ecuador (canonical/OG/Twitter/JSON-LD).
- Footer actualizado: logo + “Premium - Distribuidor oficial en Latinoamérica” + texto de seguridad.
- FAQ reescritas (sin etiquetas HTML) y con una pregunta para búsquedas “Magis TV / Magis 4K”.

## 📞 Contacto

- WhatsApp: +51 921 445 800
- Email: soporte@flujooficial.com

## 📄 Licencia

© 2026 Flujo TV. Todos los derechos reservados.
