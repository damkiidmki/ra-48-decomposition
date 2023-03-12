import {nanoid} from 'nanoid';

export default function ListNews(props) {
	const { news } = props;

	return (
		<ul>
			{
				news.map((item) => 
					<li key={nanoid(10)}>
						<img src={item.img} alt="icon"/>
						<p>
                            <a href={item.link}>
                                {item.title}
                            </a>
                        </p>
					</li>)
			}
		</ul>
	)
}
