import { useEffect, useState } from "react";

function useDebounce(value, delay) {
    var [DebounceValue, setDebounceValue] = useState(value);

    useEffect(()=>{
        
        var clear = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(clear);
    },[value])

    return (DebounceValue);
}

export default useDebounce;
