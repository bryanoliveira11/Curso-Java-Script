function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    // promise
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Error');
            return;
        };

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - promise');
            return;
        }, time);
    });
}

/* Promise.all() -> returns all the resolved promises */

const promises = [
    //'first value',
    wait('promise 1', rand(1, 5)),
    wait('promise 2', rand(1, 5)),
    wait('promise 3', rand(1, 5)),
    // wait(1000, 1000),
    //'other value',
];

Promise.all(promises)
    .then(value => {
        console.log(value);
    })
    .catch(err => {
        console.log(err);
    });


/* Promise.race() -> returns first promise that was resolved */

// will return the promise 2
Promise.race(promises)
    .then(value => {
        console.log(value);
    })
    .catch(err => {
        console.log(err);
    });


/* Promise.resolve -> return a new resolved promise */

function downloadPage() {
    const inCache = true;

    if (inCache) {
        return Promise.resolve('Page in Cache');
    }
    return wait('Downloading page', 3000);
}
downloadPage()
    .then(pageData => {
        console.log(pageData);
    })
    .catch( err => console.log(err));


/* Promise.reject -> return a new rejected promise */