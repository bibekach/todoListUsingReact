import React, { useState } from "react";


//create your first component
const Home = () => {
	const [newTask, setNewTask] = useState("");
	const [list, setList] = useState([]);
	const [deleteBottom, setdeleteBottom] = useState(false);

	const remove = (index) => {
		setList(list.filter((item , y) => y != index));
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-8 mt-1 list-group-item">
					<input value={newTask} placeholder="Add new task" onChange={(e) => { setNewTask(e.target.value) }}
						onKeyUp={(e) => {
							if (e.key == "Enter") {
								setList([...list, newTask])
								setNewTask("");

							}
						}} />
					<ul className="list-group">
						{
							list.map((todo, index) => {
								return <li className="list-group-item w-50" key={index}>{todo} <div className="justify-content-end bg-danger" onClick={() => {
									remove(index);
								}}>x</div></li>
							})
						}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
