import {Request,Response} from 'express';
import {BancoUser} from '../models/user';

export const home = async (req:Request, res:Response)=>{
   
      res.render("pages/home")

    }
    export const novousuario = async (req:Request, res:Response)=>{
      let nam = req.query.nomes
      let ag = req.query.idades
      let end = req.query.endes
      let pw = req.query.passwd
      const user = await BancoUser.create({
          name: nam,
          age: ag,
          ender: end,
          password: pw
      });
        res.render("pages/home",{
         user
        })
  
      }