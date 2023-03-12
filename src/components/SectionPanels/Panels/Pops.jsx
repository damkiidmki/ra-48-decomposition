import { nanoid } from "nanoid"

export default function Pops(props) {
    const {data} = props 

    return(
        <ul>
            {
                data.map((item) =>
                    <li key={nanoid(20)}>
                        <div>{item.title}</div>
                        <div>{item.text}</div>
                    </li>
                )
            }
        </ul>
    )
}
