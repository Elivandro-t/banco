import express,{Request, Response} from 'express';
import mustache from "mustache-express";
import mainrouter from './routes/index';
import path from "path";
import dotenv from "dotenv"

dotenv.config();
const server = express();
/* adicionando  templete html com mustache */
server.set('view engine','mustache')
server.set('views', path.join(__dirname,'views'));
server.engine('mustache', mustache());
/*voltar um diretorio */
server.use(express.static(path.join(__dirname, '../public')))
/*permitindo que o servidor pegue dados internos da url */
server.use(express.urlencoded({extended:true}))

server.use(mainrouter)
server.use((req:Request,res:Response)=>{
    res.send('PAGINA NÃO ENCONTRADA')
});
server.listen(process.env.PORT,()=>{
    console.log("servidor on");
    
})