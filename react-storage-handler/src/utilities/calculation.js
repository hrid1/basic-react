const add = (first, second) => {
    return first + second;
}
// -----------------------Reduce Topic-----------------------
// 1.use reduce on array
const numbers = [12, 34, 56, 38, 59];

const numberSum = (prev, current) => prev + current;
const totalNum = numbers.reduce(numberSum, 0);
// console.log(total);

// 2.use reduce on array-obj
const items = [
    {id: 1, name: 'Anik', price: 100},
    {id: 2, name: 'Santo', price: 200},
    {id: 3, name: 'Sagor', price: 150},
    {id: 4, name: 'Milon', price: 350},
    {id: 5, name: 'Akash', price: 250},
]
// ---------------Create A function use Reduce-----------------
const reducer = (previous, current) => previous + current.price;
const totalPrice = items.reduce(reducer, 0);

// console.log(totalPrice);

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export {
    getTotalPrice as getTotal
}