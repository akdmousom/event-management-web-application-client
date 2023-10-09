import Category from "./category";
import PropTypes from 'prop-types'
const Categorys = ({categorys}) => {

    

    return (
        <div className="grid my-5 grid-cols-1 px-3 lg:px-0 gap-10 md:grid-cols-2 max-w-[1200px] mx-auto">
            
           {
            categorys?.map(category => <Category category={category} key={category.id}></Category>)
           }
        </div>
    );
};

Categorys.propTypes = {
    categorys: PropTypes.array
}

export default Categorys;