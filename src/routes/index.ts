import {Router} from "express";
import * as controles from '../controls/controus';
const router = Router();

router.get('/',controles.home);
router.get('/novousuario',controles.novousuario)
export default router