(() => {
    function calculator() {
        return {
            display: document.querySelector('.display'),

            startCalculator() {
                this.buttonClicked();
                this.clearDisplay();
                this.delDisplay();
                this.doMath();
                this.pressEnter();
            },
            buttonClicked() {
                document.addEventListener('click', (e) => {
                    const elm = e.target;

                    if (elm.classList.contains('btn-num')) {
                        this.addToDisplay(elm.innerText);
                    }

                    if (elm.classList.contains('btn-clear')) {
                        this.clearDisplay();
                    }

                    if (elm.classList.contains('btn-del')) {
                        this.delDisplay();
                    }

                    if (elm.classList.contains('btn-eq')) {
                        this.doMath();
                    }
                    this.display.focus();
                });
            },
            addToDisplay(value) {
                this.display.value += value;
            },
            clearDisplay() {
                this.display.value = null;
            },
            delDisplay() {
                this.display.value = this.display.value.slice(0, -1);
            },
            doMath() {
                let math = this.display.value.replace(/[^-+/*\d]/g, '');

                try {
                    result = eval(math);

                    if (!result) return;

                    this.display.value = result;
                }
                catch (e) {
                    alert('Invalid Math');
                    this.clearDisplay();
                }
            },
            pressEnter() {
                this.display.addEventListener('keydown', (e) => {
                    const key = e.key;
                    
                    if (key === 'Enter') {
                        this.doMath();
                    }
                })
            }
        }
    };

    const calc = calculator();
    calc.startCalculator();
})();