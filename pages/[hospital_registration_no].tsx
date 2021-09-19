import { prisma } from "@functionalities/DB/prismaInstance"
import { address, hospital, vacant_bed_log } from "@prisma/client"
import Image from "next/image"
import Head from "next/head"

export const getServerSideProps = async ({ params }: any) => {
	const retrievedData: hospital | null = await prisma.hospital.findUnique({
		where: { registration_no: params.hospital_registration_no },
		include: {
			address: true,
			vacant_bed_log: true,
		},
	})

	if (retrievedData == null)
		return {
			redirect: {
				destination: "/404",
				permanent: false,
			},
		}

	return {
		props: { hospitalInfo: JSON.stringify(retrievedData) },
	}
}

interface HospitalInfo {
	registration_no: string
	hospital_name: string
	description: string
	hospital_type: string
	bed_type: string
	image_source: string
	joined_on: string
	address: address
	vacant_bed_log: vacant_bed_log
}

export interface HospitalProps {
	hospitalInfo: string
}

const HospitalInfo: React.FC<HospitalProps> = ({ hospitalInfo }) => {
	const hospital: HospitalInfo = JSON.parse(hospitalInfo)

	return (
		<>
			<Head>
				<title>{hospital.hospital_name + " | Smart Medicare"}</title>
			</Head>
			<main className="container">
				<div className="row">
					<div className="col-12 col-md-5">
						<Image
							src={"/media/hospital-building-2.jpg"}
							width="390"
							height="220"
							layout="responsive"
							priority
						/>
					</div>
					<div className="col-12 col-md-7">
						<ul className="list-group list-group-flush my-auto">
							{hospital.vacant_bed_log.ward == null ? null : (
								<li
									className="
											list-group-item
											d-flex
											justify-content-between
											align-items-center
										"
								>
									Ward
									<span
										className={
											hospital.vacant_bed_log.ward <= 5
												? hospital.vacant_bed_log.ward == 0
													? "badge badge-danger badge-pill"
													: "badge badge-warning badge-pill"
												: "badge badge-primary badge-pill"
										}
									>
										{hospital.vacant_bed_log.ward}
									</span>
								</li>
							)}
							{hospital.vacant_bed_log.special_ward == null ? null : (
								<li
									className="
											list-group-item
											d-flex
											justify-content-between
											align-items-center
										"
								>
									Special Ward
									<span
										className={
											hospital.vacant_bed_log.special_ward <= 5
												? hospital.vacant_bed_log.special_ward == 0
													? "badge badge-danger badge-pill"
													: "badge badge-warning badge-pill"
												: "badge badge-primary badge-pill"
										}
									>
										{hospital.vacant_bed_log.special_ward}
									</span>
								</li>
							)}
							{hospital.vacant_bed_log.cabin == null ? null : (
								<li
									className="
											list-group-item
											d-flex
											justify-content-between
											align-items-center
										"
								>
									Cabin
									<span
										className={
											hospital.vacant_bed_log.cabin <= 5
												? hospital.vacant_bed_log.cabin == 0
													? "badge badge-danger badge-pill"
													: "badge badge-warning badge-pill"
												: "badge badge-primary badge-pill"
										}
									>
										{hospital.vacant_bed_log.cabin}
									</span>
								</li>
							)}
							{hospital.vacant_bed_log.vip_cabin == null ? null : (
								<li
									className="
											list-group-item
											d-flex
											justify-content-between
											align-items-center
										"
								>
									VIP Cabin
									<span
										className={
											hospital.vacant_bed_log.vip_cabin <= 5
												? hospital.vacant_bed_log.vip_cabin == 0
													? "badge badge-danger badge-pill"
													: "badge badge-warning badge-pill"
												: "badge badge-primary badge-pill"
										}
									>
										{hospital.vacant_bed_log.vip_cabin}
									</span>
								</li>
							)}
							{hospital.vacant_bed_log.icu == null ? null : (
								<li
									className="
											list-group-item
											d-flex
											justify-content-between
											align-items-center
										"
								>
									ICU
									<span
										className={
											hospital.vacant_bed_log.icu <= 5
												? hospital.vacant_bed_log.icu == 0
													? "badge badge-danger badge-pill"
													: "badge badge-warning badge-pill"
												: "badge badge-primary badge-pill"
										}
									>
										{hospital.vacant_bed_log.icu}
									</span>
								</li>
							)}
							{hospital.vacant_bed_log.ccu == null ? null : (
								<li
									className="
											list-group-item
											d-flex
											justify-content-between
											align-items-center
										"
								>
									CCU
									<span
										className={
											hospital.vacant_bed_log.ccu <= 5
												? hospital.vacant_bed_log.ccu == 0
													? "badge badge-danger badge-pill"
													: "badge badge-warning badge-pill"
												: "badge badge-primary badge-pill"
										}
									>
										{hospital.vacant_bed_log.ccu}
									</span>
								</li>
							)}
							{hospital.vacant_bed_log.emergency == null ? null : (
								<li
									className="
											list-group-item
											d-flex
											justify-content-between
											align-items-center
										"
								>
									Emergency
									<span
										className={
											hospital.vacant_bed_log.emergency <= 5
												? hospital.vacant_bed_log.emergency == 0
													? "badge badge-danger badge-pill"
													: "badge badge-warning badge-pill"
												: "badge badge-primary badge-pill"
										}
									>
										{hospital.vacant_bed_log.emergency}
									</span>
								</li>
							)}
							{hospital.vacant_bed_log.extra == null ? null : (
								<li
									className="
											list-group-item
											d-flex
											justify-content-between
											align-items-center
										"
								>
									Extra
									<span
										className={
											hospital.vacant_bed_log.extra <= 5
												? hospital.vacant_bed_log.extra == 0
													? "badge badge-danger badge-pill"
													: "badge badge-warning badge-pill"
												: "badge badge-primary badge-pill"
										}
									>
										{hospital.vacant_bed_log.extra}
									</span>
								</li>
							)}
						</ul>
					</div>
				</div>
				<div className="shadow mt-4">
					<nav>
						<div
							className="nav nav-tabs justify-content-center"
							id="nav-tab"
							role="tablist"
						>
							<a
								className="nav-link active"
								data-toggle="tab"
								href="#nav-description"
								role="tab"
								aria-selected="false"
							>
								Description
							</a>
							<a
								className="nav-link"
								data-toggle="tab"
								href="#nav-location"
								role="tab"
								aria-selected="false"
							>
								Location
							</a>
						</div>
					</nav>
					<div className="tab-content py-3" id="nav-tabContent">
						<div
							className="tab-pane fade active show"
							id="nav-description"
							role="tabpanel"
						>
							<div className="container">{hospital.description}</div>
						</div>
						<div className="tab-pane fade" id="nav-location" role="tabpanel">
							...2
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default HospitalInfo
