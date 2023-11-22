(() => {
    function* generating1() {
        // code here
        yield 'value 1';
        // code here
        yield 'value 2';
        // code here
        yield 'value 3';
    }

    const g1 = generating1();

    console.log(g1);

    for (let value of g1) {
        console.log(value);
    }


    // infinite generating function
    function* generating2() {
        let i = 0;

        while (true) {
            yield i;
            i++;
        }
    }

    const g2 = generating2();
    // console.log(g2.next().value);
    // console.log(g2.next().value);
    // console.log(g2.next().value);
    // console.log(g2.next().value);

    function* generating3() {
        yield 0;
        yield 1;
        yield 2;
    }

    function* generating4() {
        yield* generating3();
        yield 3;
        yield 4;
        yield 5;
    }

    const g4 = generating4()

    for(const value of g4){
        console.log(value)
    }

    function* generating5() {
        yield function() {
            console.log('yield one 1');
        }

        yield function() {
            console.log('yield two 2');
        }
    }

    const g5 = generating5();
    const func1 = g5.next().value;
    const func2 = g5.next().value;
    func1();
    func2();

})();