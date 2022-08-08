import multi_http from '../http-multipart-data';
import http from '../http-common';

const create_problem = (problem) => {
    return multi_http.post(`/problem/createProblem`, problem);
};

const get_problems = () =>{
    return http.get('/problem');
}

const get_problemById = (id) =>{
    return http.get(`/problem/getProblem/${id}`);
}


const ProblemService = {
    create_problem,
    get_problems,
    get_problemById
};
export default ProblemService;