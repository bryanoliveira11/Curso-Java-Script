// promises in old browsers
function MyPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('im a promise');
            resolve();
        }, 2000)
    });
}

export default async function MyAsyncFunction() {
    await MyPromise();
    console.log('the end');
}