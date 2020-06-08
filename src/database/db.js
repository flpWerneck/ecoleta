const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

// db.serialize(() => {

// db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         adress TEXT,
//         adress2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );
// `, function (err) {
//     if (err) console.log(err)

// })

// db.run(`
//         INSERT INTO places(
//             image,
//             name,
//             adress,
//             adress2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `, [
//     "aasdasda",
//     "aasdasda",
//     "aasda",
//     "aasdasda",
//     "aasdaa",
//     "asdasda",
//     "aasda"
// ], function (err, rows) {
//     console.log(rows)
// })

// db.all(`
//     SELECT * FROM places
// `, function (err, rows) {
//     if (err) console.log(err)

// })

// })

module.exports = db