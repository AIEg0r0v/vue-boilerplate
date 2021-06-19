import axios from '../../axios';
import jwt_decode from "jwt-decode";
import router from '../../router';


const login = {
    state : {
        userId: window.localStorage.getItem('userId'),
        token: window.localStorage.getItem('token'),
        expiresAt: window.localStorage.getItem('expiresAt')
    },
    actions: {},
    getters: {
        isLoggedIn: state => {
            //shaky stuff
            return state.token == null || state.userId == null;
        }
    },
    mutations: {
        login(state, user){
            console.log('login');
            axios.post('/login', user).then( response => {
                console.log(response.data);
                state.token = response.data.token;
                const ttlms = response.data.ttl * 1000;
                state.userId = jwt_decode(state.token).sub;
                state.expiresAt = Date.now() + ttlms; //setting expiration time a bit before hands 
                window.localStorage.setItem('token', state.token);
                window.localStorage.setItem('expirestAt', state.expiresAt);
                window.localStorage.setItem('userId', state.userId);
                axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
              
                router.replace(window.sessionStorage.getItem('redirectPath') || '/');
                window.sessionStorage.removeItem('redirectPath');
            });
        },
        refreshToken(state){
            console.log('refreshToken');
            axios.post('/refreshToken', {}).then( response => {
                console.log(response.data);
                state.token = response.data.token;
                const ttlms = response.data.ttl * 1000;
                state.userId = jwt_decode(state.token).sub;
                state.expiresAt = Date.now() + ttlms; //setting expiration time a bit before hands 
                window.localStorage.setItem('token', state.token);
                window.localStorage.setItem('expirestAt', state.expiresAt);
                window.localStorage.setItem('userId', state.userId);
                axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;

                
            });
        },
        logout(){
            console.log('logout');
            axios.post('/logout', {}).then( response => {
                console.log(response.data);
                state.userId = 0;
                state.token = '';
                state.expiresAt = 0; //setting expiration time a bit before hands 
                window.localStorage.removeItem('token');
                window.localStorage.removeItem('expirestAt');
                window.localStorage.removeItem('userId');
            });
        }
    }
}

export default login;