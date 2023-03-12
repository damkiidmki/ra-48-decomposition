import { nanoid } from "nanoid"

export default function Ether(props) {
    const {data} = props  
    
    return(
        <ul>
            {
                data.map((item) =>
                    <li key={nanoid(20)}>
                        <div>{item.name}</div>
                        <div>{item.channel}</div>
                    </li>
                )
            }
        </ul>
    )
}
