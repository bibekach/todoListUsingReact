import React, { useState } from "react";


//create your first component
const Home = () => {
	const [newTask, setNewTask] = useState("");
	const [list, setList] = useState([]);
	const [deleteBottom, setdeleteBottom] = useState(false);

	const remove = (index) => {
		setList(list.filter((item, y) => y != index));
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 list-group-item">
					<input className="form-control" value={newTask} placeholder="Add new task" onChange={(e) => { setNewTask(e.target.value) }} onKeyUp={(e) => {
						if (e.key == "Enter") {
							setList([...list, newTask])
							setNewTask("");
						}
					}} />
					<div className="row d-flex">
						<ul className="list-group d-flex justify-content-between">
							{
								list.map((todo, index) => {
									return <li className="list-group-item d-flex" key={index}>{todo}

										<button type="button" class="ms-auto btn btn-danger" onClick={() => {
											remove(index);
										}}>DELETE</button>

									</li>
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
