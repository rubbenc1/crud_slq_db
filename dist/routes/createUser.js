"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const data = require('../sql3-data');
module.exports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age } = req.body;
    if (name && age) {
        const user = { name, age: parseInt(age) };
        const createdUser = yield data.addUser(user);
        res.status(201).json(createdUser);
    }
    else {
        res.status(400).json({ message: 'Name and age are required' });
    }
});
