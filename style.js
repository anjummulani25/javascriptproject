let url="https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
const fetchDataPromise = () => {
    try {
        fetch(url)
        .then((response) => {
             
            return response.json();
        })
        .then((result)=>{
            //console.log(result);
            const allnames=result.map((element)  =>{
                return element.name;
            } )
            console.log(allnames);
          
        })
    .catch((error) => { 
        console.log(error);
        
    })

 } catch(error){
    console.log(error);
   }
}

