(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    //simple IIFE
    console.log(`DB Connected to ${name}`)
})('Pallavi');