import "./Badge.scss";

export const Badge = ({children, style}) => {

	return (
		<span className="badge m-1" style={style}>
			{children}
		</span>
	)
}
