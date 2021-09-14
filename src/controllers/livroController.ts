
import { Response, Request, NextFunction } from "express";
import firebase from "../db"
import Livro from "../models/livro"
import "firebase/compat/firestore"




const firestore = firebase.firestore();


const addLivro = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data = req.body;
        await firestore.collection('livros').doc().set(data)
        res.send('Record saved sucessfuly');

    } catch (error) {
        throw error
    }
}

const getAllLivros = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const livros = await firestore.collection('livros');
        const data = await livros.get();
        const livrosArray: any = [];
        if (data.empty) {
            res.status(404).send('Nenhum livro foi cadastrado.');
        } else {
            data.forEach(doc => {
                const livro = new Livro (
                    doc.data().id,
                    doc.data().nome_livro,
					doc.data().autor,
					doc.data().ano_lancamento,
					doc.data().paginas,
					doc.data().preco
                );
                livrosArray.push(livro)
            });
            res.send(livrosArray);
        }
    } catch (error) {
        throw error
    }
}

const getLivro = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = req.params.id;
        const livro = await firestore.collection('livros').doc(id);
         const data = await livro.get();
        if(!data.exists) {
            res.status(404).send("Nenhum livro com esse ID foi encontrado.")
        } else {
            res.send(data.data());
        }
    } catch (error) {
        throw error
    }
}

const updateLivro = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = req.params.id;
        const data = req.body;
        const livro = await firestore.collection('livros').doc(id);
        await livro.update(data);
        res.send("Cadastro de livro atualizado com sucesso.");
    } catch (error) {
        throw error
    }
}

const deleteLivro = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = req.params.id;
        const data = req.body;
        const livro = await firestore.collection('livros').doc(id);
        await livro.delete();
        res.send("Cadastro de livro deletado com sucesso.")
    } catch (error) {
        throw error
    }
}



export { addLivro,  getAllLivros, getLivro, updateLivro, deleteLivro} 

