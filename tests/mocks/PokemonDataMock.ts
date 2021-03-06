import { Bulbasaur, getPokemonMock, Ivysaur } from './PokeMock';
import { Pokemon, PokemonInputDTO } from "../../src/model/Pokemon";


export class PokemonDataMock{   
           
    public async getPokemonById(id: number): Promise<Pokemon>{
        switch (id) {
            case Bulbasaur.getId():
                return Bulbasaur
            case Ivysaur.getId():
                return Ivysaur
            default:
                return undefined
        }
     }
}