import { useEffect,useState } from "react";
import axios from "axios"; // npm i axios
function Categories(){
    const [data,setData] = useState([]) // const data=[]
    const [cnt,setCnt] = useState(0) // const cnt=0
    const api = 'https://fakestoreapi.com/products/categories';
    useEffect(()=>{
        getCategorieslist()
    },[cnt])
    //way1 .without [] means multiple times
    //way2. [] means one time
    //way3. [cnt] means inside the function call based on "cnt" value 
    function getCategorieslist(){
        axios.get(api).then((response) => {
            // console.log(response)
            setData(response.data);            
        });
    }
    return (
        <>
            <div>
            {
                data.map((ele,i)=>{
                    return(
                        <div>
                            <p>{ele}</p>
                        </div>                        
                    )
                })
            }
            </div>
        </>
    )
}
export default Categories;