
type Size = ''|'S'|'M'|'L';

class Product {

    constructor(
        public name: string,
        public price: number,
        public size: Size = ''
    ){}

    isProductReady(): boolean{
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if((<string><unknown>this[key]).length <= 0) throw new Error(`${key} is empty`);
                    break;
                case 'number':
                    if((<string><unknown>this[key]) <= 0) throw new Error(`${key} is zero`);
                   break;
            
                default:
                    throw new Error(`${typeof this[key]} is not supported`);
                    
            }
        }
        return true;
    }

    toString(){

        if( !this.isProductReady()) return;

        return `${this.name} (${this.price}), ${this.size}`
    }
}

(()=> {

    const bluePants = new Product('Blue large Pants')
})();