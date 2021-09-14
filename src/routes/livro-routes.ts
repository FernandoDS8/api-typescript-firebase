import { Router } from "express"
import { addLivro, getAllLivros, getLivro, updateLivro, deleteLivro } from "../controllers/livroController"

const router: Router = Router();

router.post('/livro', addLivro);
router.get('/livros', getAllLivros);
router.get('/livro/:id', getLivro);
router.put('/livro/:id', updateLivro);
router.delete('/livro/:id', deleteLivro)

export default {routes: router}