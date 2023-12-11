import '../assets/css/pet.css';
import pets from "../assets/json/pets.json"
import SearchBar from "../components/SearchBar"
import PetCard from "../components/PetCard"
import Switch from '@mui/material/Switch';

import { useState } from "react"

export default function Pets() {
  
  const [petList, setList] = useState(pets.animals)  // eslint-disable-next-line

  return (
    <div className="content-pet">
        <div className="header-pet">
          <div className="header-pet-btn">
            <button className="btn-pet-add">+ ADICIONAR PET</button>
          </div>
          <div className="header-pet-switch">
              <Switch />
              <span className="header-pet-switch">Exibir inativos</span>
          </div>
          <div className="header-pet-search">
            <SearchBar placeholder="Pesquisar" data={pets}/>
          </div>
        </div>
        <hr className="separator"/>
        <section className="main-pets">
            {petList.map((p, index) => (
                <PetCard key={index} pet={p}/>
            ))}
        </section>

        <footer></footer>
    </div>
  )
}