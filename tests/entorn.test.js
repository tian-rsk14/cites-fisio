import { test, expect } from 'vitest'

test('E-01: Una data ISO sense Z s\'interpreta com a hora local', () => {
  // Arrange
  const dateString = '2026-10-06T10:00';

  // Act
  const data = new Date(dateString);

  // Assert
  expect(data.getHours()).toBe(10);
  expect(data.getMinutes()).toBe(0);
  expect(data.getDay()).toBe(2); // Dimarts és 2
});

test('E-02: Les proves s\'executen a la zona horària Europe/Madrid', () => {
  // Arrange
  const dateString = '2026-10-06T10:00';

  // Act
  const data = new Date(dateString);

  // Assert
  // -120 minuts significa CET (UTC+1) o CEST (UTC+2) a Europa/Madrid
  expect(data.getTimezoneOffset()).toBe(-120);
});

// E-03: The numeric constructor counts months from 0
test('E-03: El constructor numèric compta els mesos des de 0', () => {
  // Arrange
  const dataNumeric = new Date(2026, 9, 6); // Octubre és el mes 9 (0=gener)
  const dataString = new Date('2026-10-06T00:00');

  // Act i Assert
  // Ambdós han de representar la mateixa data
  expect(dataNumeric.getTime()).toBe(dataString.getTime());
});

// E-04: Integer cents add up exactly; floating point does not
test('E-04: Els cèntims s\'afiguren exactament; els decimals amb flotant no', () => {
  // Arrange
  const cent1 = 10;      // 0.10 € com a enter
  const cent2 = 20;      // 0.20 € com a enter

  // Act
  const sumaDecimal = 0.1 + 0.2;
  const sumaEnter = cent1 + cent2;

  // Assert
  // Amb flotants, 0.1 + 0.2 != 0.3 per error d\'aritmètica binària
  expect(sumaDecimal).not.toBe(0.3);
  // Amb enters, s\'afiguen exactament
  expect(sumaEnter).toBe(30);
});
