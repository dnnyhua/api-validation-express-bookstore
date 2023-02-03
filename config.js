/** Common config for bookstore. */


// let DB_URI = `postgresql://`;

// if (process.env.NODE_ENV === "test") {
//   DB_URI = `${DB_URI}/books-test`;
// } else {
//   DB_URI = process.env.DATABASE_URL || `${DB_URI}/books`;
// }

let DB_URI = {
  host: "localhost",
  user: "dnnyhua",
  password: "1123",
  database: ""
}

DB_URI.database = (process.env.NODE_ENV === "test") ? "books_test": "books";



module.exports = { DB_URI };