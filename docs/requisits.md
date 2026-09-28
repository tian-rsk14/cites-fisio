# Requisits del Sistema de Gestió d'Apuntaments per a Clínica de Fisioteràpia

## Introducció

Aquest sistema permet gestionar els apuntaments d'una clínica de fisioteràpia, facilitant la gestió de pacients, fisioterapeutes i les seves cites.

## Entitats del Domini

### Pacient

Les dades bàsiques que ha de tenir un pacient són:

- `id` - identificador únic numèric
- `nom` - nom del pacient
- `cognoms` - cognoms del pacient
- `teléfon` - número de telèfon de contacte
- `dataNasc` - data de naixement en format ISO

### Fisioterapeuta

Les dades bàsiques que ha de tenir un fisioterapeuta són:

- `id` - identificador únic numèric
- `nom` - nom del fisioterapeuta
- `cognoms` - cognoms del fisioterapeuta
- `especialitat` - especialitat en fisioteràpia
- `teléfon` - número de telèfon de contacte

### Cita (CitaDeFisio)

Les dades bàsiques que ha de tenir una cita són:

- `id` - identificador únic numèric
- `fisioId` - referència al fisioterapeuta assignat
- `pacientId` - referència al pacient
- `dataHora` - data i hora de la cita en format ISO local (sense Z)
- `duradaMinuts` - durada de la cita en minuts
- `notes` - notes addicionals sobre la cita

## Error Catalogue

Els errors del sistema s'han de llançar com a objecte `ErrorDeCita` amb una propietat `codi`:

| Codi | Nom | Descripció |
|------|-----|------------|
| ERROR_CITA_NO_TROBADA | Error de cita no trobada | La cita especificada no existeix |
| ERROR_PACIENT_NO_TROBAT | Error de pacient no trobat | El pacient especificat no existeix |
| ERROR_FISIO_NO_TROBAT | Error de fisioterapeuta no trobat | El fisioterapeuta especificat no existeix |
| ERROR_CITA_DUPLICADA | Error de cita duplicada | Ja existeix una cita per a aquest pacient i fisioterapeuta en aquesta data |
| ERROR_HORA_INCOMPATIBLE | Error d'hora incompatible | La hora sol·licitada està fora dels horaris del fisioterapeuta |
| ERROR_DATA_INVALIDA | Error de dada invàlida | Dades mal formades o fora de rang vàlid |

## Regles de Negoci

### Gestió de Cites

- Cada cita ha d'estar associada a un pacient i un fisioterapeuta
- La data i hora s'ha d'interpretar com a hora local (sense Z al final)
- Les zones horàries són Europe/Madrid
- No es permeten cites duplicades per al mateix pacient-fisioterapeuta en la mateixa data
- Els fisioterapeutes tenen horaris de treball definits

## Moneda

Tota quantitat monetària s'ha d'emmagatzemar en cèntims (enter), no en euros amb decimals.

## Dates

Les dates es representen com a objectes Date natius de JavaScript. S'utilitza el constructor `new Date()` amb cadenes ISO locals (sense Z). Es fa servir una injecció de rellotge per evitar l'ús directe de `Date.now()`.
