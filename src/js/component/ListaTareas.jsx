import React, { useState, useEffect } from "react";

//create your first component
const ListaTareas = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState(null);
	const [esOculto, setEsOculto] = useState("hidden");

	const funcionEliminar = (indiceElemento) => {
		const newArr = [...lista];
		newArr.splice(indiceElemento, 1);
		setLista(newArr);
	};

	const funcionAñadir = (evento) => {
		if (evento.keyCode === 13) {
			setLista([...lista, tarea]);
			setTarea("");
		}
	};

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/siemeris", {
			method: "GET",
			//body: JSON.stringify(),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				if (resp.ok) {
					console.log("El request se hizo bien");
					return resp.json();
				} else {
					console.log("Hubo un Error " + resp.status + " en el request");
				}
			})
			.then((body) => {
				//here is were your code should start after the fetch finishes
				console.log("Este es el body del request", body); //this will print on the console the exact object received from the server
				console.log(body.map((t) => t.label));
				setLista(body.map((t) => t.label));
			})
			.catch((error) => {
				//error handling
				console.error("ERROR:", error);
			});
	}, []);

	useEffect(() => {
		if (lista != null) {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/siemeris", {
				method: "PUT",
				body: JSON.stringify(
					lista.map((item) => ({ label: item, done: false }))
				),
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => {
					if (res.ok) {
						console.log("El request del PUT se hizo bien");
						return res.json();
					} else {
						console.log(
							"Hubo un Error " + res.status + " en el request del PUT"
						);
					}
				})
				.then(async (response) => {
					console.log("Success", await response);
				})
				.catch((error) => console.error(error));
		}
	}, [lista]);

	if (lista == null) {
		return null;
	}

	return (
		<div className="container border w-50 shadow mt-4 p-0">
			<input
				className="form-control border-bottom w-100 mt-1"
				style={{ border: "none" }}
				placeholder="Add tasks"
				onChange={(e) => setTarea(e.target.value)}
				value={tarea}
				onKeyUp={(event) => funcionAñadir(event)}
			/>
			<div className="w-100">
				<ul className="list-group">
					{lista.length == 0
						? ""
						: lista.map((tarea, index) => (
							<li
								key={index}
								className="list-group-item d-flex justify-content-between border-bottom"
								style={{ backgroundColor: "#f8f9fa", border: "none" }}
								onMouseEnter={() => setEsOculto(index)}
								onMouseLeave={() => setEsOculto("hidden")}
							>
								{" "}
								{tarea}
								<span
									className="hidden"
									onClick={() => funcionEliminar(index)}
								>
									<i
										className="fa fa-trash"
										style={{
											color: "#ad4872",
											visibility: esOculto == index ? "" : "hidden",
										}}
									></i>
								</span>
							</li>
						))}
				</ul>
			</div>
			<div className="text-muted fw-lighter ms-2">
				{lista.length} Item(s) left
			</div>
		</div>
	);
};

export default ListaTareas;
