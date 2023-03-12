import Categories from "./Categories"
import FormSearch from "./FormSearch"

export default function Search(props){
    const { categoriesSearch, advertising } = props

    return(
        <>
            <Categories categories = {categoriesSearch}/>
            <FormSearch />
            <p>{advertising}</p>
        </>	
    )
}
