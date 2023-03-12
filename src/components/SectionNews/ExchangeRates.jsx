import { nanoid } from "nanoid";

export default function ExchangeRates(props) {
    const { exchangeRates } = props;
    return  (
        exchangeRates.map((item) => 
            <p key={nanoid(20)}>
                {item.name} {item.rate} {item.difference}
            </p>       
        )
    ) 
}
