# Carousel de Testimonios

Aplicación de testimonios con React y Vite. Práctica inicial de React de la Unidad 3 de Ingeniería de Software (TecNM Celaya, periodo AGO-DIC 2026).

La interfaz muestra un testimonio a la vez con fotografía, nombre, cargo y comentario. Permite navegar con **Anterior**, **Siguiente** y **Aleatorio**, conectando los extremos del arreglo. Incluye contador de posición, mensaje cuando no hay registros y diseño adaptable a móvil y escritorio.

## Integrantes

| Nombre | Matrícula | Rol en el equipo |
|---|---|---|
| _Completar_ | _Completar_ | _Completar_ |
| _Completar_ | _Completar_ | _Completar_ |

## Etapa entregada

**Etapa básica (secciones 6 a 10 de la guía).** No se incluye la ampliación de reproducción automática (sección 11). Las pruebas manuales P01 a P10 se registran en [PRUEBAS.md](./PRUEBAS.md).

## Tecnologías y versiones

| Herramienta | Versión |
|---|---|
| Node.js | v24.18.0 |
| npm | 12.1.0 |
| React | ^19.3.1 |
| React DOM | ^19.3.1 |
| Vite | ^8.3.5 |
| ESLint | ^10.13.0 |

## Requisitos

- Node.js LTS (se probó con v24.18.0).
- npm.
- Navegador moderno con herramientas de desarrollo para revisar los tres anchos de pantalla.

## Instalación

```bash
git clone https://github.com/Nitram047/carousel-testimonial.git
cd carousel-testimonial
npm install
```

## Ejecución

```bash
npm run dev
```

Abrir la dirección local que muestra la terminal (normalmente `http://localhost:5173`). Detener con `Ctrl+C`.

Comandos disponibles:

| Comando | Resultado |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente. |
| `npm run build` | Genera la versión de producción en `dist`. |
| `npm run preview` | Sirve localmente la compilación de `dist`. |
| `npm run lint` | Revisa el código con ESLint. |

Para revisar la versión compilada:

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```text
carousel-testimonial/
├── docs/
│   └── capturas/          Capturas de pantalla para la entrega
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   └── vite.svg
│   ├── components/
│   │   ├── control.jsx    Componente Controls (botones y callbacks)
│   │   └── testimonial.jsx Componente Testimonial (tarjeta)
│   ├── App.jsx            Estado del índice y coordinación
│   ├── data.js            Arreglo de los 8 testimonios
│   ├── main.jsx           Montaje de React en #root
│   └── style.css          Estilos y diseño adaptable
├── index.html
├── package.json
├── package-lock.json
├── PRUEBAS.md             Registro de pruebas P01 a P10
├── vite.config.js
└── eslint.config.js
```

## Decisiones principales

- **Datos separados:** los testimonios viven en `src/data.js`; agregar o modificar registros no requiere tocar la tarjeta ni los controles.
- **Estado centralizado en `App`:** `App` conserva el índice actual con `useState` y calcula el testimonio visible.
- **Presentación reutilizable:** `Testimonial` recibe un `item` por props y solo presenta sus campos; no conoce el arreglo ni cambia el estado.
- **Controles desacoplados:** `Controls` recibe las funciones `onPrev`, `onNext` y `onRandom` por props y comunica la intención al padre.
- **Navegación circular:** se usa el operador `%` para que los extremos se conecten sin acceder a índices fuera del arreglo.
- **Aleatorio válido:** con dos o más testimonios se elige un índice distinto del actual.
- **Casos límite:** con cero registros se muestra un mensaje y no se renderizan tarjeta ni controles; con un registro la interfaz sigue funcionando.
- **Accesibilidad básica:** botones con texto visible, `type="button"`, contador con `aria-live="polite"`, foco visible con `:focus-visible`, imagen con texto alternativo y `lang="es"` en el documento.
- **Diseño adaptable:** anchos revisados en 320, 768 y 1280 px, sin desplazamiento horizontal.
- **Sin autoplay:** se entregó únicamente la etapa básica, por lo que no se usa `useEffect` ni hay botón Pausar/Reanudar.

## Pruebas

El registro completo está en [PRUEBAS.md](./PRUEBAS.md).

- Pruebas manuales: P01 a P10.
- Compilación: `npm run build` sin errores.
- Linter: `npm run lint` sin errores.
- Revisión visual y por teclado en 320, 768 y 1280 px.

## Capturas

Reemplazar cada archivo pendiente en `docs/capturas/` y conservar los nombres para que las referencias funcionen.

| Tamaño | Captura |
|---|---|
| Móvil (320 px) | _Pendiente: `docs/capturas/movil-320.png`_ |
| Tablet (768 px) | _Pendiente: `docs/capturas/tablet-768.png`_ |
| Escritorio (1280 px) | _Pendiente: `docs/capturas/escritorio-1280.png`_ |

## Registro de tareas

| Tarea | Responsable | Estado | Fecha | Puntos de historia |
|---|---|---|---|---|
| Preparar entorno con Vite | _Completar_ | Terminado | _Completar_ | _Completar_ |
| Crear datos de testimonios | _Completar_ | Terminado | _Completar_ | _Completar_ |
| Implementar tarjeta Testimonial | _Completar_ | Terminado | _Completar_ | _Completar_ |
| Implementar controles de navegación | _Completar_ | Terminado | _Completar_ | _Completar_ |
| Implementar estado y lógica en App | _Completar_ | Terminado | _Completar_ | _Completar_ |
| Aplicar estilos y accesibilidad | _Completar_ | Terminado | _Completar_ | _Completar_ |
| Verificar con pruebas P01 a P10 | _Completar_ | En proceso | _Completar_ | _Completar_ |

## Roles de pareja (conductor y observador)

| Sesión | Conductor | Observador | Fecha |
|---|---|---|---|
| _Completar_ | _Completar_ | _Completar_ | _Completar_ |
| _Completar_ | _Completar_ | _Completar_ | _Completar_ |

## Revisión por otra pareja

| Campo | Registro |
|---|---|
| Integrantes revisores | _Completar_ |
| Fecha de revisión | _Completar_ |
| Componentes y casos revisados | _Completar_ |
| Observaciones | _Completar_ |
| Correcciones acordadas | _Completar_ |

## Notas de entrega

- Repositorio con `package.json`, `package-lock.json` y `.gitignore`; `node_modules` y `dist` no se versionan.
- La rama `main` contiene la versión entregable.
- El historial de trabajo se desarrolló en la rama `develop`.
