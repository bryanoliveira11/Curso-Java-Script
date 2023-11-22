// constructor functions
(() => {
    function Person(name, last_name) {
        this.name = name
        this.last_name = last_name
    }


    const p1 = new Person('first', 'last');
    console.log(p1);
})();