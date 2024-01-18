import { useState } from 'react';
import axios from 'axios';
import { v1 as uuid } from "uuid";

const useAxios = () => {
    const [dataArray, setDataArray] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchDataAndUpdateState = async (url, name = null) => {
        try {
            let response;
            if (name) {
                response = await axios.get(url + name + '/');
            } else {
                response = await axios.get(url);
            }
            console.log(response);
            setDataArray((prevDataArray) => [...prevDataArray, { ...response.data, id: uuid() }]);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { dataArray, loading, error, fetchDataAndUpdateState };
};

export default useAxios;
