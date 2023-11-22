// factory functions

(() => {
    function createPerson(name, last_name, height, weight) {
        return {
            name,
            last_name,
            // get faz uma função "fingir" ser um atributo
            // é um getter 
            get fullName() {
                return `${this.name} ${this.last_name}`;
            },
            // setter
            set fullName(value) {
                value = value.split(' ');
                this.name = value.shift();
                this.last_name = value.join(' ');
            },
            speak(text = 'about js') {
                return `${this.name} is speaking ${text}.`;
            },
            height: height,
            weight: weight,
            get imc() {
                return (this.weight / (this.height ** 2)).toFixed(1);
            },
        };
    };

    // "this" assume o valor do objeto em si, no caso, o p1
    const p1 = createPerson('john', 'doe', 1.65, 69);
    console.log(p1.speak());
    console.log(`IMC : ${p1.imc}`)
    console.log(`Full Name : ${p1.fullName}`)
    p1.fullName = 'altered new name'
    console.log(p1.fullName)
})();