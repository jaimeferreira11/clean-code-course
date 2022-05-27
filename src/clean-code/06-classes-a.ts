(()=> {

    type Gender = 'M'|'F';

    class Persom {
        constructor(
            public name: string,
            public gender: Gender,
            public birthday: Date
        ){}
    }

})();