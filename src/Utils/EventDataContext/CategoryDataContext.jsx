import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const categoryData = createContext(null)

const CategoryDataContext = ({children}) => {


    const [categorys, setCategorys] = useState();
    const [names, setEachName] = useState('')
    const [imgg, setEachImg] = useState('')

    useEffect(()=>{
        fetch('/EventCategory.json')
        .then(res => res.json())
        .then(data => setCategorys(data))
    },[])

    const handleEach = (name, img) => {
        setEachName(name)
        setEachImg(img)
    }

   

    const catData = {
        categorys,
        handleEach,
        names,
        imgg
       
    }
    
    return (
        <categoryData.Provider value={catData}>
            {children}
        </categoryData.Provider>
    );
};

CategoryDataContext.propTypes = {
    children: PropTypes.object.isRequired
}

export default CategoryDataContext;