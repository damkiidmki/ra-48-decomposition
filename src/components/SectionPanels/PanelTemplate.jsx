export default function PanelTemplate(props) {
	const { title } = props;

	return (
		<div>
			<h6>{title}</h6>
			<div>
				{props.children}
			</div>
		</div>
	)
}
