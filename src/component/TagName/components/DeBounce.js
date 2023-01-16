import { useEffect, useState } from "react";

function useDebounce(value, delay) {
    var [DebounceValue, setDebounceValue] = useState(value);

    useEffect(()=>{
        
        var clear = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(clear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value])

    return (DebounceValue);
}

export default useDebounce;
