import { describe, it, expect } from "vitest";
import { zodiacoChino } from "./zodiaco.js";

describe("Kata Zodiaco Chino - Suite de Evaluación", () => {
  describe("Casos Base y Futuros (Posteriores a 1984)", () => {
    it('debería retornar "Madera Rata" para el año base 1984', () => {
      expect(zodiacoChino(1984)).toBe("Madera Rata");
    });

    it("debería calcular correctamente años futuros intermedios", () => {
      expect(zodiacoChino(1985)).toBe("Madera Buey");
      expect(zodiacoChino(1986)).toBe("Fuego Tigre");
      expect(zodiacoChino(2026)).toBe("Fuego Caballo");
    });
  });

  describe("Años Pasados y Límites (Anteriores a 1984 / Restos Negativos)", () => {
    it("debería calcular correctamente años anteriores inmediatos", () => {
      expect(zodiacoChino(1983)).toBe("Agua Cerdo");
      expect(zodiacoChino(1982)).toBe("Agua Perro");
    });

    it("debería dar un ciclo exacto al retroceder 60 años (Límite)", () => {
      expect(zodiacoChino(1924)).toBe("Madera Rata");
    });
  });

  describe("Validación de Errores de Entrada y Atípicos", () => {
    it("debería lanzar un TypeError si el año es un texto", () => {
      expect(() => zodiacoChino("1984")).toThrow(TypeError);
    });

    it("debería lanzar un TypeError si se envía un número decimal", () => {
      expect(() => zodiacoChino(1984.5)).toThrow(TypeError);
    });

    it("debería lanzar un TypeError con valores nulos o indefinidos", () => {
      expect(() => zodiacoChino(null)).toThrow(TypeError);
      expect(() => zodiacoChino(undefined)).toThrow(TypeError);
    });
  });
});
