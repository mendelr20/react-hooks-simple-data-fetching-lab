import React, {useEffect, useState} from "react";

function App(){
    const [image, setImage] = useState()
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect( () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then((data) => {
            setImage(data)
            setIsLoaded(true);
          });
    })
    if (!isLoaded) return <h3>Loading...</h3>;
    

    return (
       <img src={image.message} alt="A Random Dog"/>
    )

}

export default App