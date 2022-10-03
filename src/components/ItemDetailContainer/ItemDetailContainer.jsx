import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productdetail from "./mock-data-detail"
import { useParams } from "react-router-dom";
import {db} from "../../../src/utils/firebase"
import {doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {
    const {productId} = useParams();
    const [data, setData] = useState({});

/*    const getData = (id) =>{
        return new Promise ((resolve, reject)=>{
            const data = productdetail.find(data => data.id === parseInt(id));
            resolve(data)
        })
    } 

    useEffect(() => {
            const getProducto = async() => {
                const producto = await getData(productId);
                console.log('producto', producto)
                setData(producto);
        }
        getProducto();
    },[productId])


    */

    useEffect(() => {
        const getProducto = async() => {
            // creamos la referencia 
            const queryRef = doc(db, "items", productId)
            // hacemos la solicitud
           const response = await getDoc(queryRef);
           const newItem = {
            id:response.id,
           ...response.data(),
           }
           console.log(newItem)
           setData(newItem)
    }
    getProducto();
},[productId])


    return (
        <>
            <ItemDetail data={data} />
        </>
    )
}

export default ItemDetailContainer

/*const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productdetail);
            }, 2000);
        });

        getData.then(res => setData(res));
    }, []);*/