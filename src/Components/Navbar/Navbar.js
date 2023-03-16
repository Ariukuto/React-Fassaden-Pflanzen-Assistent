import config from "../../config/app.config.json";
import "./Navbar.scss";


export const Navbar = ({children, appState}) => {

	const brand = "Fassadenpflanzen Assistent";

	const navBarStyle = {
	backgroundColor: config.navbar.backgroundColor,
		borderBottom: config.navbar.border, 
	}

	const navBarTitleStyle = {
		color:config.navbar.titleColor,
		fontSize: "155%"
	}

	return(
		<nav className="navbar" style={navBarStyle}>
			<div className="container-fluid">
				<span style={navBarTitleStyle}> 
					{config.navbar.title} 
				</span>
				{appState.appWidth < 1001 ? <ToggleButton></ToggleButton> : null}
				<OffcanvasContent title={brand}>
					{children}				
				</OffcanvasContent>
			</div>
		</nav>
	)
}


const ToggleButton = ({children}) => {
	return(
		<button 
			className="navbar-toggler" 
			type="button" 
			data-bs-toggle="offcanvas" 
			data-bs-target="#offcanvasNavbar" 
			aria-controls="offcanvasNavbar"
		>
			{children ?? <span className="navbar-toggler-icon"></span>}
		</button>
		)
}

const OffcanvasContent= ({children, title}) => {
	return(
		<div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
		<div className="offcanvas-header">
			<h5 className="offcanvas-title" id="offcanvasNavbarLabel"> {title} </h5>
			<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div className="offcanvas-body">
			{children}
		</div>
	</div>
	)
}
