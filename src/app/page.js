import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { PlusIcon } from '@heroicons/react/24/outline'


export default function Home() {
  return (
    <>
     <NavBar /> 
    <div className="cent py-10 px-10 rounded-lg">
      <table>
        <tr>
            <th className="rgb(204, 219, 220) text-indigo-900  px-4  " >Dom</th>
            <th className="rgb(204, 219, 220) text-indigo-900  px-4 ">Seg</th>
            <th className="rgb(204, 219, 220) text-indigo-900  px-4 " >Ter</th>
            <th className="rgb(204, 219, 220) text-indigo-900  px-4 ">Qua</th>
            <th className="rgb(204, 219, 220) text-indigo-900  px-4 " >Qui</th>
            <th className="rgb(204, 219, 220) text-indigo-900  px-4 " >Sex</th>
            <th className="rgb(204, 219, 220) text-indigo-900  px-4 ">Sab</th>
          </tr>
        <tr>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4 ">-</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">-</td>      
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">1</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">2</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">3</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4" >4</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4" >5</td>
        </tr>
        <tr>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">6</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">7</td>      
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">8</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">9</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">10</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4" >11</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4" >12</td>
        </tr>
        <tr>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">13</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">14</td>      
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">15</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">16</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">17</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4" >18</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4" >19</td>
        </tr>
        <tr>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">20</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">21</td>      
          <td className="rgb(204, 219, 220) text-red-500 px-4">22</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">23</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">24</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4" >25</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4" >26</td>
        </tr>
        <tr>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">27</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">28</td>      
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">29</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">30</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4">31</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4" >-</td>
          <td className="rgb(204, 219, 220) text-indigo-900 px-4" >-</td>
        </tr>
      </table>
      <div>
        <p className="text-indigo-900 py-4 font-bold" >Não há eventos hoje</p>
        <div className="flex">
          <Button className='content-center' href='/proxEventos/new'>
            <PlusIcon className='h6 w-6 text-indigo-900 my-2 p-1'/>
            Adicionar evento</Button>
        </div>
        <br/>
        <input placeholder="Insira o tipo de compromisso " className="bg-sky-500 my-2 p-1 rounded-lg" ></input><br/>   
        <input  placeholder="Insira os detalhes" className="bg-sky-500 text-indigo-900 my-2 p-1 rounded-lg" ></input> 
      </div>
    </div>

    </>
  
  )
}
