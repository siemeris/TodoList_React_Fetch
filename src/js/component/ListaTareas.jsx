import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const ListaTareas = () => {
		// const [inputValue, setInputValue ] = React.useState('');
		
		// const validateInput = () => {
		//   if(inputValue === "") alert("No task, please add a task");
		//   else alert("All perfect!");
		// };

		const [tarea, setTarea] = useState('');
		const [lista, setLista] = useState([]);
        const [esOculto, setEsOculto] = useState('hidden');

		const funcionEliminar = indiceElemento =>{
			const newArr = [...lista]
			newArr.splice(indiceElemento,1)
			setLista(newArr)
		 }
		
	return (<div className="container border w-50 shadow mt-4 p-0">
			<input 
				className="form-control border-bottom w-100 mt-1" 
                style={{border:"none"}}
				placeholder="Add tasks"
				onChange={e => setTarea(e.target.value)} 
				value={tarea} 
				onKeyUp={event => event.keyCode === 13 ? lista.push(tarea) && setTarea("") : setLista}/>
			<div className="w-100">
				<ul className="list-group">
					{lista.length == 0 ? "" : lista.map((t,index) => (<li key={index} className="list-group-item d-flex justify-content-between border-bottom" style={{backgroundColor: '#f8f9fa', border:"none"}} onMouseEnter={() => setEsOculto(index)}
								onMouseLeave={() => setEsOculto("hidden")}> {t}<span className="hidden" onClick={()=> funcionEliminar(index) }><i className="fa fa-trash" style={{color: '#ad4872', visibility: esOculto == index ? "" : "hidden"}}></i></span></li>))}
				</ul>
			</div>
			<div className="text-muted fw-lighter ms-2">{lista.length} Item(s) left</div>
		</div>);
};

export default ListaTareas;