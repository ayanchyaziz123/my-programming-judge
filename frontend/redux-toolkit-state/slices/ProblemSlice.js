import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProblemService from "../services/ProblemService";
import Cookies from 'js-cookie';

const initialState = {
    success: null,
    error: null,
    loading: false,
    problems: [],
    problem: null,
    updateSuccess: false,
};


export const createProblem = createAsyncThunk(
    "problem/createProblem",
    async (problem, { rejectWithValue }) => {
        try {
            const res = await ProblemService.create_problem(problem);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
)


export const retrieveAllProblems = createAsyncThunk(
    "problem/getAllProblems",
    async (problem, { rejectWithValue }) => {
        try {
            const res = await ProblemService.get_problems();
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
)

export const getProblemById = createAsyncThunk(
    "problem/getProblem",
    async (id, { rejectWithValue }) => {
        try {
            const res = await ProblemService.get_problemById(id);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
)






const ProblemSlice = createSlice({
    name: "problem",
    initialState,
    reducers:{
        clearStatus: (state, action) => {
            state.error = null,
            state.success = null,
            state.loading = null,
            state.updateSuccess = null
        }
    },
    extraReducers: {

     //start Create Product
        //##########################################################################

        [createProblem.pending]: (state, action) => {
            state.loading = true;
        },
        [createProblem.fulfilled]: (state, action) => {
            state.success = action.payload.message;
            state.problems.push(action.payload.problem)
            state.error = null;
            state.loading = false;
        },
        [createProblem.rejected]: (state, action) => {
            state.error = action.payload && action.payload.detail ? action.payload.detail : 'Network Error';
            state.success = null;
            state.loading = false;
        },

        //end Create Product
        //##########################################################################
        


          //start fetch Products
        //##########################################################################
        [retrieveAllProblems.pending]: (state, action) => {
            state.loading = true;
        },
        [retrieveAllProblems.fulfilled]: (state, action) => {
            state.success = action.payload.message;
            state.problems = action.payload.problems;
            state.error = null;
            state.loading = false;
        },
        [retrieveAllProblems.rejected]: (state, action) => {
            state.error = action.payload && action.payload.detail ? action.payload.detail : 'Network Error';
            state.success = null;
            state.loading = false;
        },

        [getProblemById.pending]: (state, action) => {
            state.loading = true;
        },
        [getProblemById.fulfilled]: (state, action) => {
            state.success = action.payload.message;
            state.problem = action.payload.problem;
            state.error = null;
            state.loading = false;
        },
        [getProblemById.rejected]: (state, action) => {
            state.error = action.payload && action.payload.detail ? action.payload.detail : 'Network Error';
            state.success = null;
            state.loading = false;
        },




    },
});


export const {clearStatus} = ProblemSlice.actions;

const { reducer } = ProblemSlice;
export default reducer;


