import { useState, useEffect} from 'react'
import CategoryCard from "./CategoryCard";
import axios from 'axios';

const Categories = () => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchCategories = async () => {
        await axios.get('https://the-trivia-api.com/api/categories')
        .then(response => {
            setCategories(response.data)
            setIsLoading(false)
            console.log(response.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        fetchCategories()
    }, [])


    return (
        <div>
            <div className="info">
                <h3>Choose from any of our available categories below! </h3>
            </div>
        { !isLoading 
            ? (<div className = "categories-container">
                {Object.keys(categories).map((category, i) => (
                    <CategoryCard category = {category} key = {i}/>
                ))}
            </div> )
            : (<div style = {{textAlign: "center"}}>
                No categories available :(
            </div>)
            }
        
        </div> 
    );
}
 
export default Categories;