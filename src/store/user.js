import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
export const user = {
    namespaced: true,

    state: {
         user: {
             email:'',
             code: "",
             languageID: "1"
         },
        tokens: {
            token: '',
            refreshToken: ''
        },
        workday: []



    },
    actions: {
        takeUsersEmail:(context,payload)=>{
            context.commit('setUsersEmail',payload);
        },

        takeUserCode:(context,payload)=>{
            context.commit('setUsersCode',payload)
        },

        getTok :async (context,payload)=>{
           await axios.post('Accounts/LoginWithCode',payload)
                .then((response)=> {
                    localStorage.setItem('token',response.data.jwt.token);
                    localStorage.setItem('refreshToken',response.data.jwt.refreshToken);
                    context.commit('setTokens',response.data.jwt);
                })
                .catch(e => {
                    console.log(e)
                })

        },

        getRefreshTok :async  (context)=>{
            await axios.post('Accounts/RefreshToken',
                {
                        token: context.state.tokens.token,
                        refreshToken: context.state.tokens.refreshToken,
                    }
                )

                .then((response)=> {
                    context.commit('setTokens',response.data);
                    localStorage.setItem('token',response.data.token);
                    localStorage.setItem('refreshToken',response.data.refreshToken);
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
                })
                .catch(e => {
                    console.log(e)
                })

        },

        takeUsers:async context=>{
            const response = await axios.get('Accounts/GetCurrentAppUser');
            context.commit('setUsers',response.data);
        },
        takeUserWorkDays:async context => {
            const response = await axios.get('UserCrmProfileWorklogs/GetAll');

            context.commit('setUserWorkDay', response.data);
        },

        changeUsers:(context,payload)=>{
            context.commit('setUserKey',payload);
        },

        usersLogout:context=>{
            context.commit('setUserLogout');
        },


        addWorkDay : (context,payload)=>{
         context.commit('addNewWorkDay',payload);
        },
        deleteWorkDay : (context,payload)=>{
            context.commit('delWorkDay',payload);
        },


    },

    mutations: {
        setUsersEmail (state, payload)  {
            state.user.email = payload;
            localStorage.setItem('email',payload);
        },

        setUsersCode (state, payload) {
            state.user.code = payload;
            state.user.email = localStorage.getItem('email');
        },

        setTokens(state, payload) {
            state.tokens.token = payload.token;
            state.tokens.refreshToken = payload.refreshToken;
        },

        setUsers (state, payload) {
            state.user = payload;
            localStorage.setItem('user',payload);
        },


        setUserWorkDay (state, payload) {
           state.workday = payload.reduce((acc, cur) => {
                const category = cur.dayOfWeek;
                if (!acc[category]) {
                    acc[category] = [];
                }
                acc[category].push(cur);
                return acc;
            }, {});
        },




        setUserKey (state, payload) {
            state.user[payload.key] = payload.value;
        },
        setUserLogout (state) {
            state.user = "";
            state.user = {
                email:'',
                code: "",
                languageID: "1"
            };
            state.tokens = "";
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
        },

        addNewWorkDay(state,payload){
                  state.workday[payload].push({
                      dayOfWeek:payload,
                      fromTime: '00:00',
                      isActive:true,
                      id:uuidv4(),
                      toTime: '00:00',
                      userCrmProfile:null,
                      userCrmProfileID:state.user.appUserID
                  })
        },
        delWorkDay(state,payload){
            const objWithIdIndex = state.workday[payload[1]].findIndex((obj) => obj.id === payload[0]);
            state.workday[payload[1]].splice(objWithIdIndex);
        },

    },

    getters: {
        getTokens(state) {
            return state.tokens;
        },

        getUsersEmail(state){
            return state.user.email;
        },
        getUser(state){
            return state.user;
        },
        getUserWorkDay(state){
            return state.workday;
        },
        getUserId(state) {
            return state.user.appUserID;
        },
    }
};