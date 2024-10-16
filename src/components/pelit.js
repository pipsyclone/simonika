const Pelit = () => {
	return (
		<form>
			<h3 className="text-center">Pengaduan Lingkungan Tercemar</h3>
			<hr />
			<div className="container w-50">
				<div className="d-flex gap-3 mx-auto">
					<div className="d-flex flex-column gap-1 flex-grow-1">
						<label>Nama Lengkap</label>
						<input
							type="text"
							name="sender_name"
							className="form-control"
							placeholder="Nama Lengkap"
						/>
					</div>
					<div className="d-flex flex-column gap-1 flex-grow-1">
						<label>Alamat Email / Nomor Telepon</label>
						<input
							type="text"
							name="contact"
							className="form-control"
							placeholder="Alamat Email / Nomor Telepon"
						/>
					</div>
				</div>
				<div className="d-flex flex-column gap-1">
					<label>Keterangan</label>
					<textarea
						rows={7}
						className="form-control"
						placeholder="Tulis disini..."
					></textarea>
				</div>
			</div>

			<div className="text-center mt-3">
				<button
					type="submit"
					className="btn btn-primary w-25 mx-auto justify-content-center"
				>
					Kirim
				</button>
			</div>
		</form>
	);
};

export default Pelit;
