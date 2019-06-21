import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/bugs';

export function getAll(){
	

}

export function save(bugData){
	if (bugData.id === 0){
		return axios
			.post(serviceEndPoint, bugData)
			.then(response => response.data);
	} else {
		return axios
			.put(`${serviceEndPoint}/${bugData.id}`, bugData)
			.then(response => response.data);
	}
}

export function remove(bugData){
	return axios
		.delete(`${serviceEndPoint}/${bugData.id}`)
		.then(response => response.data);
}
