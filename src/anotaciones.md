# Curso Clean Code

## Deuda técnica

Falta de calidad en el codigo
La deuda tecnica se paga con _Refactorización_, es imprescindible contar con pruebas automaticas.

## Nomenclatura

### Variables
1. Nombre de variables pronunciables y expresivos (en ingles, camelCase)
2. Arreglos en plural
   ```
   // malo
   const fruit = ['manzana', 'pera', 'naranja']
   // regular
   const fruitLits = ['manzana', 'pera', 'naranja']
   // mejor
   const fruits = ['manzana', 'pera', 'naranja']
   ```
3. Boleanos, usar: `is, has`, evitar negación. Ej: `isEmpty, hasValues, isActive`
4. Numeros, utilizar `of` Ej: `numberOfFruits, maxFruits, minFruits, totalOfFruits`
5. Funciones deben ser descriptivas

### Clases
1. Usar UpperCamelCase
2. Preguntas para determinar el nombre correcto: 
   - ¿Que excatamente ahce la case?
   - ¿Como exactamente esta clase realiza cierta tarea?
   - ¿Hay algo especifico sobre su ubicacion?

### Funciones
1. Debe hacer exactamente lo que su nombre indica
2. Limitar hasta 3 parametros





