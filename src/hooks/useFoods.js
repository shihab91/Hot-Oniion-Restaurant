import { useEffect, useState } from "react"

const useFoods = () => {
    const [foods, setFoods] = useState();
    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(foods => setFoods(foods));
    }, [])
    return { foods };
}
export default useFoods;