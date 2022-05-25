(() => {


    // No usar triple condicional dentro del if
    function isRedFruit( fruit: string ): boolean {
        
        // Bad
       /*  if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
            return true;
        } else {
            return false;
        } */

        // GOOD
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruit);
    }

    // Simplificar esta función, evitar swicth
    type FruitColor = 'red'|'yellow'|'purple'; // se creo un tipo para validar el string
    function getFruitsByColor( color: FruitColor ): string[] {

        // BAD
        /* if ( color === 'red' ) {
            return ['manzana','fresa'];
        } else if ( color === 'yellow') {
            return ['piña','banana'];
        } else if ( color === 'purple') {
            return ['moras','uvas']
        } else {
            throw Error('the color must be: red, yellow, purple');
        } */
        
        // GOOD
        const fruitsByColor = {
            red:    ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        };

        if(Object.keys(fruitsByColor).includes(color)) 
            throw new Error("the color must be: red, yellow, purple");
        
        return fruitsByColor[color];

    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        // BAD
        /* if( isFirstStepWorking === true ) {
            if( isSecondStepWorking === true ) {
                if( isThirdStepWorking === true ) {
                    if( isFourthStepWorking === true ) {
                        return 'Working properly!';
                    }
                    else {
                        return 'Fourth step broken.';
                    }
                }
                else {
                    return 'Third step broken.';
                }
            }
            else {
                return 'Second step broken.';
            }
        }
        else {
            return 'First step broken.';
        } */

        // GOOD
        if( !isFirstStepWorking ) return 'First step broken.';
        if( !isFirstStepWorking ) return 'Second step broken.';
        if( !isFirstStepWorking ) return 'Third step broken.';
        if( !isFirstStepWorking ) return 'Fourth step broken.';

        return 'Working properly!';

    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
