import { nanoid } from "nanoid"

export default function ListCategories(props) {
    const { categories } = props
    
    return(
        <ul>
            {
                categories.map((item)=>
                    <li key={nanoid(20)}>
                        <a href="http//"> {item.name} </a>
                    </li>
                )
            }
        </ul>
    )
}
