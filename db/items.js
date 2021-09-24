const knex = require("./knex");

function getAllItems(){
    return knex("items").select("*");
}

function getSpecificItem(id){
    return knex("items").where({ id }).first();
}

function deleteItem(id){
    return knex("items").where({ id }).del();
}

function addItem(name, price, year, condition, description){
    return knex('items').insert({name: name, price: price, year: year, condition: condition, description: description})
}

function updateItemName(id, name){
    return knex('items').where({ id }).update({name: name});
}

module.exports = {
    getAllItems,
    getSpecificItem,
    addItem,
    updateItemName,
    deleteItem
}