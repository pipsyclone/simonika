import Image from "next/image";
import LogoMjlk from "@/assets/images/logo_mjlk.png";

const Topbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container">
				<a href="/" className="navbar-brand d-flex gap-3">
					<Image
						src={LogoMjlk}
						alt="Logo Majalengka"
						width={0}
						height={0}
						style={{ width: "50px", height: "auto", alignSelf: "center" }}
					/>
					<div className="d-flex flex-column">
						<small>Dinas Lingkungan Hidup Majalengka</small>
						<small>SIMONIKA</small>
					</div>
				</a>

				<div
					className="collapse navbar-collapse ms-auto d-flex"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a href="/" className="nav-link active">
								Beranda
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Monitoring IKA
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="/monitoring-ika">
										Seluruh Indonesia
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Majalengka
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a href="/artikel" className="nav-link">
								Artikel
							</a>
						</li>
						<li className="nav-item">
							<a href="/#pelit" className="nav-link">
								PELIT
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Topbar;
