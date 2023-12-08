// Promises
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    // promise
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Bad Value.');

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

// then() -> it's called after the resolve() or reject()

wait('message 1', rand(1, 3))
    .then(response => {
        console.log(response);
        return wait('message 2', rand(1, 3));
    })
    .then(response => {
        console.log(response);
        return wait(33, rand(1, 3));
    })
    .then(response => {
        console.log(response);
    })
    // catch gets the reject() of the promise
    .catch(e => {
        console.log(e);
    });