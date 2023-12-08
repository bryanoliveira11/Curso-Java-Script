// Async e Await
function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    // promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Error');
                return;
            };

            resolve(msg.toUpperCase() + ' - promise');
            return;
        }, time);
    });
}

// wait('fase 1', rand())
//     .then(fase => {
//         console.log(fase);
//         return wait('fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return wait('fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .catch(err => console.log(err));

/* async await */

async function run() {
    try {
        const fase1 = await wait('fase 1', rand());
        console.log(fase1);

        const fase2 = await wait('fase 2', rand());
        console.log(fase2);

        const fase3 = await wait('fase 3', rand());
        console.log(fase3);

        console.log('ended in:', fase3);
    }
    catch(err) {
        console.log(err);
    }
}

run();