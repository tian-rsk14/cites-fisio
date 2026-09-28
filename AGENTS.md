# Instruccions per a Assistents de Codi al Projecte cites-fisio

## Font de la Veritat

La font de la veritat és `docs/requisits.md`. No inventeu regles: si teniu dubtes, feu preguntes al Product Owner.

## TDD Estricta

- Cap codi de producció sense una prova que falli primer
- Una prova a la vegada
- Comproveu que falla per la raó esperada
- Codi mínim per fer-la passar
- Refactoritzeu només quan tot estigui verd
- Mai modifiqueu una prova per fer-la passar
- Commiteu només quan tot sigui verd

## Convencions

- **Català**: Tota la prosa, comentaris i noms de proves han d'estar en català
- **Identificadors**: En català sense el punt mig de «l·l» (`cancellar`, no `cancel·lar`)
- **Moneda**: Sempre en cèntims (enter), mai en euros amb decimals
- **Dates**: ISO locals (`new Date("2026-10-06T10:00")`), sense Z, zona horària Europe/Madrid
- **Injecció de rellotge**: Cap `Date.now()` ni `new Date()` sense arguments al codi ni a les proves
- **Errors**: Llançaments com `ErrorDeCita` amb una propietat `codi` del catàleg d'errors dels requisits

## Estructura del Projecte

```
src/fisio.js              # Codi de producció
tests/escenari.js         # Helpers per a proves (mocks, factories)
tests/*.test.js           # Fitxers de prova
docs/requisits.md         # Requisits del sistema
```

## Comandes

- `npm test` — Executa totes les proves (`tests/**/*.test.js`)
- `npm run test:watch` — Executa les proves en mode observació

## Notes Importants

- No useu `vi.mock`, `vi.fn`, `vi.spyOn` o `vi.useFakeTimers` a les proves
- Les proves s'han d'executar amb la zona horària Europe/Madrid
- Mantingueu els identificadors exactament com als requisits
