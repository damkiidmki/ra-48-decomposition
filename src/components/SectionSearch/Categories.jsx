import { nanoid } from "nanoid"

export default function Categories(props){
    const { categories } = props
    
    return(
        <ul>
            {
                categories.map((item) =>
                    <li key={nanoid(20)}>
                        <p>{ item.name }</p>
                    </li>
                )
            }
        </ul>
    )
}
