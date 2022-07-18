import {Link} from 'react-router-dom'


const CategoryCard = ({category}) => {

    return (
        
        <div className="categoryCardContainer">
            <Link to = {`/QuizPage/${category}`} style={{ textDecoration: 'none' }}>    
                <div className="category-title">
                    {category}
                </div>
            </Link>
        </div>
        
      );
}
 
export default CategoryCard;