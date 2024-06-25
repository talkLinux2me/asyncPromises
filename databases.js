const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Accepts a user id value and returns a string containing
 * the database that user's information can be found in.
 * @param {Number} id The user id.
 * @return {String} The name of the database to look up the user.
 */
export async function central(id) {
  if (typeof id !== "number") throw new Error("Invalid Input -- Not a Number");
  if (id < 1 || id > 10) throw new Error("Invalid Input -- Out of Range");

  await wait(100); // Faking an "external" call here by adding a delay.
  let db = "db1";
  if (id > 4) db = "db2";
  if (id > 7) db = "db3";

  return db;
}
