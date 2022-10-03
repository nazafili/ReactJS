import React from "react";

const Contacto = () => {

  //    useEffect(()=>{
  //      const getData = async() => {
  //          const query = doc (db, "items", "6bEM0j8nnhsKM0YxbETm") ;
  //          const response = await getDoc(query);
  //         console.log("response", response)
  //       const newProduct = {
  //        ...response.data(),
  //        id: response.id
  //       }
  //       console.log(newProduct)
  //      }
  //      getData();
  //},[]);

  /*useEffect(() => {
    const getData = async () => {
      const query = collection(db, "items");
      const response = await getDocs(query);
      console.log(response)
      const productos = response.docs.map(doc => {
        const newProduct = {
          ...doc.data(),
          id: doc.id
        }
        return newProduct;
      })
      console.log(productos)
      //       const newProduct = {
      //        ...response.data(),
      //        id: response.id
      //       }
      //       console.log(newProduct)
    }
    getData();
  }, []);*/

  return (
    <div>Contacto</div>
  )
}

export default Contacto;