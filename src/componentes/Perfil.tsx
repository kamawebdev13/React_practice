import './Perfil.css'



const Perfil = () => {
//TODOS LOS DATOS 
const nameUser:string = "Karina Matos"
const profession:string = "Web Developer"
const completedModules:number = 3
const isActive:boolean=true

return (
    <div className='card-profile'>
      <h2 className='name'>{nameUser}</h2>
      <p className='profession'>{profession}</p>

      <p>Modulos restante para graduarse: {10- completedModules}</p>
      {isActive ? <span className='tag-state'>En Linea</span>: null}

    </div>



)

}