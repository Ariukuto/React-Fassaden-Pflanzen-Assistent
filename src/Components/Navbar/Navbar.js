import { Sidebar } from "../Sidebar/Sidebar";



export const Navbar = ({appState, onSelected}) => {

	const brand = "Fassadenpflanzen Assistent";

	return(
		<nav className="navbar bg-body-tertiary border">
			<div className="container-fluid">
				<Brand title={brand}/>
				<ToggleButton></ToggleButton>
				<OffcanvasContent title={brand}>
					<Sidebar
						appState={appState} 
						onSelected={(v)  => onSelected(v)}
					/>					
				</OffcanvasContent>
			</div>
		</nav>
	)
}

const Brand = ({title}) => {
	return(
		<span className="navbar-brand"> 
			{title} 
		</span>
	)
}

const ToggleButton = ({children}) => {
	return(
		<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
			{children ??<span className="navbar-toggler-icon"></span>}
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
