import {BrowserRouter,Routes,Route} from "react-router-dom"
import {CharacterDetailPage} from "../pages/CharacterDetailPage"
import CharacterListPage from "../pages/CharacterListPage"

export default function Router(){
    return (
      
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<CharacterListPage/>} />
                <Route path="/Detalhes" element={<CharacterDetailPage/>} />
            </Routes>
            </BrowserRouter>
       
    )
}