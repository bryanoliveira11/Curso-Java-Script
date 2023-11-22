(() => {
    function Calculator() {
        this.display = document.querySelector('.display');
        this.startCalc = () => {
            this.buttonClicked();
            this.getEnterPress();
        }
        this.buttonClicked = () => {
            document.addEventListener('click', (e) => {
                const elm = e.target;

                if (elm.classList.contains('btn-num')) this.updateDisplay(elm);
                if (elm.classList.contains('btn-clear')) this.clearDisplay();
                if (elm.classList.contains('btn-del')) this.deleteDigit();
                if (elm.classList.contains('btn-eq')) this.doMath();
                this.display.focus();
            });
        }
        this.updateDisplay = elm => this.display.value += elm.innerText;
        this.clearDisplay = () => this.display.value = null;
        this.deleteDigit = () => this.display.value = this.display.value.slice(0, -1);

        this.doMath = () => {
            let math = this.display.value.replace(/[^-+/*\d]/g, '');

            try {
                result = eval(math);

                if (isNaN(result) || typeof (result) !== 'number') return;

                this.display.value = result;
            }
            catch (e) {
                alert('Invalid Math');
                this.clearDisplay();
            }
        }
        this.getEnterPress = () => {
            document.addEventListener('keydown', (e) => {
                const key = e.key;

                if (key === 'Enter') {
                    this.doMath();
                }
            })
        }
    };

    const calc = new Calculator()
    calc.startCalc();
})();