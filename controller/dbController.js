const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const studentModel = require("../model/studentModel");
const memberModel = require("../model/memberModel");
const bookModel = require("../model/bookModel");
const employeeModel = require("../model/employeeModel");
const storageModel = require("../model/storageModel");

// ⚠️ propietary code, don't change it ⚠️
// this code will create db.json automatically if your folder doesn't have one
// courious? 👀 search for "IIFE function"
let db;
(async () => {
  try {
    const fs = require("fs");
    const util = require("util");
    const readdir = util.promisify(fs.readdir);
    const path = require("path").resolve();
    const dir = await readdir(path);
    if (!dir.includes("db.json")) fs.writeFile(path + "db.json", "", () => 1);

    const adapter = new FileSync("db.json");
    db = low(adapter);
    db.defaults({
      student: [],
      member: [],
      book: [],
      employee: [],
      storage: [],
    }).write();
  } catch (error) {
    console.log(error);
  }
})();

function shapeObject(input, model) {
  const result = {};
  const modelCounter = model.length;
  let counter = 0;
  for (const namaKey in input) {
    if (model.includes(namaKey)) {
      result[namaKey] = input[namaKey];
      counter++;
    }
  }
  if (counter < modelCounter) {
    return false;
  }
  return result;
}

/**
 * Get data
 * @param {String} tableName table name
 * @returns {Object} data
 */
function get(tableName, id) {
  if (id) {
    return db.get(tableName).find({ id }).value();
  } else {
    return db.get(tableName).value();
  }
}

/**
 * Add data
 * @param {String} tableName table name
 * @param {Object} body inserted data
 */
function add(tableName, body) {
  let shapedBody;
  if (tableName == "student") {
    shapedBody = shapeObject(body, studentModel);
  }
  if (tableName == "member") {
    shapedBody = shapeObject(body, memberModel);
  }
  if (tableName == "book") {
    shapedBody = shapeObject(body, bookModel);
  }
  if (tableName == "employee") {
    shapedBody = shapeObject(body, employeeModel);
  }
  if (tableName == "storage") {
    shapedBody = shapeObject(body, storageModel);
  }
  if (!shapedBody) {
    return false;
  }
  return db.get(tableName).push(shapedBody).write();
}

/**
 * Add a data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 * @param {Object} body updated data
 */
function edit(tableName, id, body) {
  const parsedId = parseInt(id);
  db.get(tableName).find({ id: parsedId }).assign(body).write();
}

/**
 * Remove a data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 */
function remove(tableName, id) {
  const parsedId = parseInt(id);
  db.get(tableName).remove({ id: parsedId }).write();
}

/**
 * Remove all data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 */
function removeAll(tableName) {
  db.get(tableName).remove({}).write();
}

module.exports = {
  get,
  add,
  edit,
  remove,
  removeAll,
};
