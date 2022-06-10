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
3. Propiedades estaticas primero, propiedades privadas ultimo.
4. Constructores estaticos
5. Constructor
6. Metodos estaticos
7. Metodos privados
8. Resto de metodos ordenados de mayor a menor por importancia
9. Getters y setters al final

### Funciones
1. Debe hacer exactamente lo que su nombre indica
2. Limitar hasta 3 parametros
3. Ordenar parametros en forma ascendente
4. Tamaño reducido
5. Simplicidad, hacer solo una cosa
6. Menos de 20 lineas de codigo
7. Evitar el uso del "else"
8. Priorizar el uso de la condicional ternaria
9. Evitar tener muchas identaciones

> **Tip 1:** Para evitar el uso de if/else, utilizar: arrays, includes



### Generalidades
* Hasta 80 caracteres por linea
* Evitar la triple condicional, utilizar arrays
* Evitar swicth, utilizar objetos literales
* Evitar usar comenrarios, el codigo debe hablar por si mismos (autoexplicativo) utilizando buenos nombres de variables, funciones,etc.

## Principio DRY (Don't Repeat Self)

 > Si quieres ser un programador productivo esfuérzate en escribir código legible

 * Evita tener duplicidad de código
 * Simplifica las pruebas
 * Ayuda a centralizar los procesos
 * Aplicar DRY, usualmente lleva a refactorizar

## Principio de responsabilidad única
Priorizar la composición en lugar de herencia

## SOLID
* S – Single Responsibility Principle (SRP) : Responsabilidad unica
* O – Open/Closed Principle (OCP): Abierto/Cerrado
* L – Liskov Substitution Principle (LSP)
* I – Interface Segregation Principle (ISP)
* D – Dependency Inversion Principle (DIP)

## STUPID (Code smells)

### Codigo que debemos evitar
* Patron singleton
* Alto acomplamiento
* Codigo no probable
* Optimizaciones prematuras
* Nombres pocos descriptivos: Ser muy especifico o demasiado generico
* Duplicidad de codigo: No aplicar el principo DRY

>**Acoplamiento:** Dependencia entre clases o modulos entre si

>Lo ideal es tener bajo acoplamiento y alta cohesion