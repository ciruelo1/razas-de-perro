import Axios from 'axios';

const baseApi = Axios.create({
    baseURL: 'https://dog.ceo/api/',
});

export const Api = {
    getRaceList: baseApi({
            method: 'GET',
            url: 'breeds/list/all'
    }),

    getRaceImage: (raza) => {
        return baseApi({
            method: 'GET',
            url: `breed/${raza}/images/random`
        })
    },

    getSubRaceList: (subraza) => { 
        return baseApi({
            method: 'GET',
            url: `breed/${subraza}/list`
        })
    },
}