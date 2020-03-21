import axiosBuilder from 'axios';

const axios = axiosBuilder.create({
    baseURL: 'https://rf8dhrz5ed.execute-api.eu-central-1.amazonaws.com/dev/'
});

export const SearchShops = async (latitude, longitude, radiusInMeters) => {
    const shops = await axios.post('shops/search', {
        latitude ,
        longitude,
        radiusInMeters
    });
    console.log(shops);
    return shops;
};

export const GetShop = async (hashKey, rangeKey) => {
    const shop = await axios.post('shops/get', {
        hashKey,
        rangeKey
    });
    console.log(shop);
};

export const CreateShop = async (latitude, longitude, name, city, address, items) => {
    const shop = await axios.post('shops/create', {
        latitude,
        longitude,
        name,
        city,
        address,
        items
    });
    console.log(shop);

};
