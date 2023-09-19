import logo from '.././logo.png';

function Footer(props) {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <img
                                src={logo}
                                width="24" height="24" />
                        </a>
                        <span className="mb-3 mb-md-0 text-body-secondary">©{props.year} Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-body-secondary" href="#"><img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/768px-Logo_of_Twitter.svg.png?20220821125553"
                            className="bi" width="24" height="24" /></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#"><img
                            src="https://about.fb.com/es/wp-content/uploads/sites/13/2019/10/new-ig-icon-1.png?w=1200" className="bi"
                            width="24" height="24" /></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#">
                            <img src="https://www.ariadne-comunicacion.com/blog/wp-content/uploads/2018/06/icono-fb.png" className="bi"
                                width="24" height="24" /></a></li>
                    </ul>
                </footer>

            </div>
        </>
    )
}

export default Footer;