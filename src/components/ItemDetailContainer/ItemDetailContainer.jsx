import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productdetail from "./mock-data-detail"


const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productdetail);
            }, 2000);
        });

        getData.then(res => setData(res));
    }, []);

    return (
        <>
            <ItemDetail data={data} />
        </>
    )
}

export default ItemDetailContainer