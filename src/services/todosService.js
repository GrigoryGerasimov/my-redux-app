import { httpService } from "./httpService.js";

const todosEndpoint = "todos/";

export const todosService = {
    getAll: async() => {
        const { data } = await httpService.get(todosEndpoint, { params: { _page: 1, _limit: 10 } });
        return data;
    },
    get: async id => {
        const { data } = await httpService.get(todosEndpoint + id);
        return data;
    },
    post: async payload => {
        const { data } = await httpService.post(todosEndpoint, payload);
        return data;
    },
    put: async(id, payload) => {
        const { data } = await httpService.put(todosEndpoint + id, payload);
        return data;
    },
    patch: async(id, payload) => {
        const { data } = await httpService.patch(todosEndpoint + id, payload);
        return data;
    },
    delete: async id => {
        const { data } = await httpService.delete(todosEndpoint + id);
        return data;
    }
};
