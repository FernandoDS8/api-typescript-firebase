class Livro {
    id: number;
    nome_livro: string;
    autor: string; 
    ano_lancamento: string; 
    paginas: number; 
    preco: number
    
    constructor(id: number, nome_livro: string, autor: string, ano_lancamento: string, paginas: number, preco: number){
        this.id = id;
        this.nome_livro = nome_livro;
        this.autor = autor;
        this.ano_lancamento = ano_lancamento;
        this.paginas = paginas;
        this.preco = preco

    }

}

export default Livro