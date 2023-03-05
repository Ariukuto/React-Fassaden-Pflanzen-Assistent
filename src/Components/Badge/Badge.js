import "./Badge.scss";

export const Badge = ({children, style}) => {

	return (
		<span className="badge" style={style}>
			{children}
		</span>
	)
}
