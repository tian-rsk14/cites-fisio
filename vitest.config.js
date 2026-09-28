// Es configura la zona horària Europe/Madrid per garantir que totes les proves s'executen amb la mateixa referència temporal.
// Això és crític per a un sistema de gestió d'apuntaments on les dates i hores són essencials.
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.js'],
  },
})
