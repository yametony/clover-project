import axios from "axios";

// Set up default config for http requests here
const imgService = axios.create({
    baseURL: 'http://localhost:2000',
    headers: {
        "content-type": "application/json",
    },
});

imgService.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const imageApi = {
    getImgProfile(id, params) {
        let url = `/profile`;
        if (id) {
            url += `/${id}`
        }
        return imgService.get(url, { params });
    },
    addImgProfile(body) {
        const url = '/profile';
        return imgService.post(url, body);
    },
    updateImageProfile(id, body) {
        const url = `/profile/${id}`;
        return imgService.put(url, body);
    },
    deleteImgProfile(id) {
        const url = `/profile/${id}`;
        return imgService.delete(url);
    },
    getImgProduct(id, params) {
        let url = `/product`;
        if (id) {
            url += `/${id}`
        }
        return imgService.get(url, { params });
    },
    addImgProduct(body) {
        const url = '/product';
        return imgService.post(url, body);
    },
    updateImageProduct(id, body) {
        const url = `/product/${id}`;
        return imgService.put(url, body);
    },
    deleteImgProduct(id) {
        const url = `/product/${id}`;
        return imgService.delete(url);
    }
}

export default imageApi;
