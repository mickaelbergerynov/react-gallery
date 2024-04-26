import { useEffect, useState } from "react";
import httpService from "../services/httpService";

function useFetchGetData<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);

        const fetchData = async () => {
            try {
                const res = await httpService(url);
                const json = await res.data;
                setLoading(false);
                setData(json);
            } catch (error) {
                setError(`Error at getting the data for url ${url}`);
                setLoading(false);
            }
        }

        fetchData();
    }, [url])

    return { data, error, loading };
}

export default useFetchGetData;