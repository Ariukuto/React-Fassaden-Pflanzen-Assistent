export const Nabar = () => {

	const title = "Fassadenpflanzen Assistent";
	
	return(
		<nav className="navbar bg-body-tertiary fixed-top">
			<div className="container-fluid">
				<Brand {...title}/>
				<ToggleButton />
				<OffcanvasContent />
			</div>
		</nav>
	)
}

const Brand = (title) => {
	return(
		<a className="navbar-brand" href="./"> 
			{title} 
		</a>
	)
}

const ToggleButton = () => {
	return(
		<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
			<span className="navbar-toggler-icon"></span>
		</button>
		)
}

const OffcanvasContent= () => {
	return(
		<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
		<div className="offcanvas-header">
			<h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
			<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div className="offcanvas-body">
			
		</div>
	</div>
	)
}
