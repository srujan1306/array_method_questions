//Task 1 : Given an array of transactions, identify transactions that are above $5000, occurred in 2023, and belong to the 'Business' category. Transform this filtered
//array into an array of strings formatted as "Transaction [id]: $[amount] on [date]"

const transactions = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
  // more transactions...
];

const m = transactions
  .filter((t) => {
    return (
      t.amount >= 5000 && t.date.startsWith("2023") && t.category == "Business"
    );
  })
  .map((Rea) => {
    return `Transaction ${Rea.id}: ${Rea.amount} on ${Rea.date}`;
  });

console.log(m);

//Task 2 : Calculate the total salary expenditure for each department from an array of departments, each with an array of employees.

const departments = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
  // more departments...
];

const d = departments.map((t) => {
  const l = t.employees.reduce((a, b) => a + b.salary, 0);
  return { [t.name]: l };
});
console.log(d);

//Task 3 :Sort an array of weather data objects in descending order of temperature and restructure the data into an object with dates as keys and temperatures as
//values.

const weatherData = [
  { date: "2023-03-01", temperature: 16 },
  { date: "2023-03-02", temperature: 20 },
  { date: "2023-03-03", temperature: 18 },
  // more data...
];

console.log(weatherData.sort((a, b) => b.temperature - a.temperature));
const r = weatherData.reduce((acc, curr) => {
  acc[curr.date] = curr.temperature;
  return acc;
}, {});
console.log(r);

//Task 4 From an array of products, find products in the 'Electronics' category with more than 50 reviews and a rating of at least 4.0. Calculate the average price of
//these products.

const products4 = [
  { category: "Electronics", price: 199.99, reviews: 120, rating: 4.5 },
  { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
  { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
  { category: "Electronics", price: 89.99, reviews: 80, rating: 4.9 },
  // more products...
];

const v = products4.filter((t) => {
  return t.category == "Electronics" && t.reviews > 50 && t.rating >= 4.0;
});

const a = v.reduce((a, b) => a + b.price, 0) / v.length;

console.log(a);

//Task 5 : Merge two arrays of objects based on a common key ( userId ) to create a new array of objects that includes each user's name and their corresponding
//order details

const ususers = [
  { userId: "U1", name: "Alice" },
  { userId: "U2", name: "Bob" },
  // more users...
];
const orders = [
  { userId: "U1", orderDetails: "Order 1 Details" },
  { userId: "U2", orderDetails: "Order 2 Details" },
  // more orders...
];

let o = ususers.map((t) => {
  const y = orders.find((i) => t.userId == i.userId);
  return {
    name: t.name,
    orderDetails: y ? y.orderDetails : "No Order Details",
  };
});
console.log(o);
