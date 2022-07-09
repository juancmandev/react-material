import { urlFetch } from '../constants/index';

export const getUsers = async (user) => {
    try {
        const response = await fetch(`${urlFetch}${user}`);
        const payload = await response.json();

        return payload;
    } catch (error) {
        throw error;
    }
};
