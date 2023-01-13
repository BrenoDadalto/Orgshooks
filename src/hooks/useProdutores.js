import { useEffect, useState } from 'react';
import { carregaProdutores } from '../servicos/carregaDados';

export default function useProdutores() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        // Organiza por distancia
        retorno.lista.sort(
            (a, b) => (a.distancia < b.distancia ? -1 : b.distancia < a.distancia ? 1 : 0)
            );
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

    return [titulo, lista]
}