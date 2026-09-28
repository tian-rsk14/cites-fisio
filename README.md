# cites-fisio - Gestor d'Apuntaments per a Clínica de Fisioteràpia

## Visió General

Aquest projecte és un sistema de gestió d'apuntaments dissenyat específicament per a clíniques de fisioteràpia. Permet gestionar pacients, fisioterapeutes i les seves cites de manera eficient.

## Prerequisits

- Node.js 24 LTS (o >= 22.12)
- npm >= 10

## Instal·lació

```bash
npm install
```

## Execució de Proves

```bash
npm test          # Executa totes les proves
npm run test:watch # Executa les proves en mode observació
```

## Estructura del Projecte

```
cites-fisio/
├── src/                 # Codi de producció
│   └── .gitkeep        # Manté el directori buit per ara
├── tests/               # Fitxers de prova
│   ├── entorn.test.js  # Proves d'entorn (escenari)
│   └── escenari.js      # Helpers per a proves
├── docs/               # Documentació
│   └── requisits.md     # Requisits del sistema
├── package.json        # Configuració del projecte
├── vitest.config.js    # Configuració de Vitest
├── .gitignore          # Fitxers ignorats per Git
├── AGENTS.md           # Instruccions per a assistents d'IA
└── README.md           # Aquest fitxer
```

## Estat Actual (Sprint 0)

Aquesta fase s'encarrega de configurar l'entorn de desenvolupament. El codi del domini es desenvoluparà en el sprint següent seguint l'aproximació TDD estricta.
