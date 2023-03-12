import Search from "./Search"

export default function SectionSearch(props){
    const { search, advertising, logo} = props

    return(
        <div>
            <div>
                <Search categoriesSearch={search} advertising={advertising} />
            </div>
            <div><img className="main-logo" src={logo} alt="logo" /></div>
        </div>
    )
}
