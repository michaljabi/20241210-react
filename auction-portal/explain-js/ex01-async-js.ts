// 3 poziomy wywołań (konstrukcji asynchronicznych w JS):

// żaden by nie istniał  gdyby nie (function)

// #1 Callback
setTimeout(() => {
    console.log('Hello after 3sec', 90 + 2)
}, 100);


// #2 Promises (natywne) (resolved / reject)
Promise.resolve(10)
    .then((n) => {
        console.log(n)
        return Promise.resolve("abcd")
    })
    .then((n) => {
        console.log(n)
        return 'jakiekolwiek nawet typu prostego dane...'
        // throw new Error('JES BŁĄD')
    })
    .then((n) => {
        console.log(n)
        return Promise.reject(new Error('OH no....'))
    })
    .then((n) => {
        console.log(n)
    })
    .then((n) => {
        console.log(n)
    })
    .catch((e) => {
        console.log(e)
    })
    .finally(() => {
        console.log('jestem zawsze')
    })


Promise.resolve(2)

function num() {

    // await Promise.resolve()

    return 2
}

console.log(num());

async function num2() {
    return 6
}

num2().then(n => {
    console.log(n)
})

const recieved = await num2();
console.log(recieved)

const n = await Promise.resolve(10);

console.log(n);

try {
    const x = await Promise.reject(new Error('sorry....'))

    console.log(x);
} catch (error) {
    console.log(error.message)
} finally {
    console.log('wykonam się zawsze')
}


// #3 Streams === Obserables -> nie ma natywnie w JS / TS, ale są nad tym prace
// Aktualnie topka lib, jeśli chodzi o strumienie RxJS
// 3 callbacki - next, error, complete.

