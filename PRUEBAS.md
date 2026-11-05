# Pruebas de  P01 - P10

Práctica inicial de React: aplicación de testimonios.
Etapa evaluada: **etapa básica** (secciones 6 a 10).

| Campo | Valor |
|---|---|
| Integrantes | Owen Alberto Hdz Naranjillo & Juan Martin  Arriaga Alejos |
| Fecha de ejecución | 04/11/2026 |
| Navegador | Brave & opera |
| Sistema operativo | Windows 11 |
| Node.js | v24.18.0 |
| npm | 12.1.0 |

## Pruebas manuales

| ID | Prueba | Acción | Resultado esperado | Resultado obtenido | Estado | Evidencia / corrección |
|---|---|---|---|---|---|---|
| P01 | Inicio | Abrir la aplicación con los 3 testimonios iniciales. | Se muestra **Ana Martínez** y el contador indica **1 de 3**. | _Completar_ | [ ] Aprobado [ ] Fallido | _Completar_ |
| P02 | Siguiente | Desde Ana Martínez, presionar **Siguiente**. | Se muestra **Carlos Rodríguez** y el contador indica **2 de 3**. | _Completar_ | [ ] Aprobado [ ] Fallido | _Completar_ |
| P03 | Límite superior | Estando en **Laura Sánchez** (3 de 3), presionar **Siguiente**. | Vuelve a **Ana Martínez** y el contador indica **1 de 3**. | _Completar_ | [ ] Aprobado [ ] Fallido | _Completar_ |
| P04 | Límite inferior | Estando en **Ana Martínez** (1 de 3), presionar **Anterior**. | Muestra **Laura Sánchez** y el contador indica **3 de 3**. | _Completar_ | [ ] Aprobado [ ] Fallido | _Completar_ |
| P05 | Aleatorio | Presionar **Aleatorio** 10 veces desde distintas posiciones. | Siempre cambia a un testimonio distinto del actual y válido. No debe repetir la posición actual. | _Completar_ | [ ] Aprobado [ ] Fallido | _Completar_ |
| P06 | Un registro | Dejar temporalmente un solo objeto en `data.js` y probar los tres controles. | Se mantiene el registro visible, el contador indica **1 de 1** y no hay errores en consola. | _Completar_ | [ ] Aprobado [ ] Fallido | _Completar_ |
| P07 | Sin registros | Dejar temporalmente el arreglo vacío (`[]`). | Aparece **"No hay testimonios disponibles."**, no se muestran tarjeta ni controles y no hay errores en consola. | _Completar_ | [ ] Aprobado [ ] Fallido | _Completar_ |
| P08 | Ampliación de datos | Restaurar los 8 testimonios originales. | La navegación recorre los 8 registros y el contador indica **1 de 8** al inicio. | _Completar_ | [ ] Aprobado [ ] Fallido | _Completar_ |
| P09 | Presentación y accesibilidad | Revisar en 320, 768 y 1280 px con textos largos; recorrer con **Tab**, activar con **Enter** y **Espacio**; comprobar foco visible. | Sin desplazamiento horizontal, textos ajustados, controles accesibles con nombre claro y foco visible. | _Completar_ | [ ] Aprobado [ ] Fallido | _Completar_ |
| P10 | Compilación | Ejecutar `npm run build` y revisar la consola del navegador. | La compilación termina sin errores y no aparecen errores de aplicación en consola. | _Completar_ | [ ] Aprobado [ ] Fallido | _Completar_ |

## Correcciones y revisiones

| Fecha | Prueba o revisión | Problema encontrado | Corrección aplicada | Verificación |
|---|---|---|---|---|
| _Completar_ | _Completar_ | _Completar_ | _Completar_ | _Completar_ |

## Correcciones ya aplicadas durante el desarrollo

| Cambio | Archivo | Motivo |
|---|---|---|
| Se agregaron los testimonios con id 6, 7 y 8. | `src/data.js` | Cumplir la ampliación de datos y el contador de 8. |
| Se cambió la fotografía duplicada del testimonio id 8. | `src/data.js` | Evitar que dos testimonios mostraran la misma imagen. |
| Se agregó `aria-live="polite"` al contador. | `src/App.jsx` | Anunciar la posición al cambiar de testimonio. |
| Se agregó `type="button"` a los botones. | `src/components/control.jsx` | Evitar comportamientos no deseados de botones sin tipo. |
| Se cambió `lang="en"` a `lang="es"` y el título a "Testimonios". | `index.html` | Ajustar el documento al contenido en español. |
| Se actualizó `main` con los cambios de `develop`. | Repositorio | Mantener la rama de entrega con la versión funcional. |

## Checklist de cierre

- [☺] P01 a P10 ejecutadas y registradas.
- [☺] Al menos una corrección o revisión documentada.
- [ ] Capturas en 320, 768 y 1280 px agregadas en `docs/capturas/`.
- [ ] `npm run build` sin errores.
- [ ] `npm run lint` sin errores.
- [ ] Consola del navegador sin errores de aplicación.
- [ ] Revisión por teclado completada.
- [ ] Revisión por otra pareja registrada en el README.
