import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { call, put, takeLateset } from 'redux-saga/effects';
import {startLoading, finishLoading } from './loading';

//액션 타입 선언, 한 요청당 세개

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USER';
const GET_USERS_SUCCESS = 'sample/GET_USER_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USER_FAILURE';

//thunk 함수 생성

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);



//초기 상태 선언
//요청의 로딩 중 상태는 loading 이라는 객체에서 관리

const initialState = {
	loading: {
		GET_POST:false,
		GET_USERS:false
	},
	post:null,
	users:null
};

const sample = handleActions(
	{
		
		[GET_POST_SUCCESS]:(state,action) => ({
			...state,
			loading:{
			...state.loading,
			GET_POST: false //요청완료
			},
			post:action.payload
		}),
		
		[GET_USERS_SUCCESS]:(state,action) => ({
			...state,
			loading:{
			...state.loading,
			GET_USERS: false //요청완료
			},
			users: action.payload
		})
	},
	initialState
);

export default sample;