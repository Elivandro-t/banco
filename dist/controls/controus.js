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
Object.defineProperty(exports, "__esModule", { value: true });
exports.novousuario = exports.home = void 0;
const user_1 = require("../models/user");
const home = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render("pages/home");
});
exports.home = home;
const novousuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let nam = req.query.nomes;
    let ag = req.query.idades;
    let end = req.query.endes;
    let pw = req.query.passwd;
    const user = yield user_1.BancoUser.create({
        name: nam,
        age: ag,
        ender: end,
        password: pw
    });
    res.render("pages/home", {
        user
    });
});
exports.novousuario = novousuario;
