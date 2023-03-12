import { nanoid } from "nanoid"

export default function Map(props) {
    const {data} = props 

    return(
        <ul>
            {
                data.map((item) =>
                    <li key={nanoid(20)}>
                        <div>{item.name}</div>
                    </li>
                )
            }
        </ul>
    )
}
