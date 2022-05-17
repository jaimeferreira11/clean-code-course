(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    interface Movie{
        cast: string[]
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
       
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    // Funcion compleja
    /*
    * Se agrega el tipo de dato de retorno
    * Agregar tipo de dato en las variables let
     */
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
      
        // BAD
        /* //let result; // Bad
        let result: number; // Good

        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        return result; */

        // GOOD
        if(isDead) return 1500;
        if(isSeparated) return 2500;
        return (isRetired) ? 3000 : 4000;

    }


})();




