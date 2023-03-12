import ListNews from "./ListNews";
import ExchangeRates from "./ExchangeRates";
import ListCategories from "./ListCategories";

export default function SectionNews(props) {
	const { categories, news, exchangeRates } = props;
	return (
		<section>
			<div>
				<ListCategories categories={categories} />
			</div>
			<div>
				<ListNews news={news} />
				<ExchangeRates exchangeRates={exchangeRates} />
			</div>
		</section>
	)
}
