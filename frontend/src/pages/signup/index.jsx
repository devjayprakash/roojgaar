import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../components/logo";
import axios from 'axios'
import Loader from "../../components/loader";

let RegisterCard = ({ setIsEmployer, isEmployer }) => {

	let his = useHistory()

	let [regData, setReg] = useState({
		name: "",
		email: "",
		phone: "",
		registeredAs: "",
		type: "",
		password: "",
		confirmPass: ""
	})

	let [err, setErr] = useState({
		show: false,
		msg: ""
	})

	let [loading, setLoading] = useState(false)

	let registerUser = async () => {
		if (
			regData.name !== "" &&
			regData.email !== "" &&
			regData.phone !== "" &&
			regData.password !== "" &&
			regData.confirmPass !== "" &&
			regData.registeredAs !== ""
		) {
			if (regData.registeredAs === "employer" && regData.type === "") {

				setErr({
					show : true,
					msg : "Please select the employer type"
				})

			} else {
				try {
					//setLoading(true)
					delete regData.confirmPass
					let res = await axios.post('http://localhost:8080/api/v1/auth/registerUser' , regData)

					if (res.data.res === true) {
						
						document.cookie=`jwt=${res.data.token}`

						his.push('/')

					} else {
						setErr({
							show: true,
							msg: res.data.msg
						})
					}
					//setLoading(false)

				} catch (err) {
					setErr({
						show: true,
						msg: "There was some issue during registeing you. Please try again after sometime"
					})
				}
			}



		} else {
			setErr({
				show: true,
				msg: "Please fill in all the information and try again"
			})
		}
	}


	if (loading === true) {
		return (
			<Loader />
		)
	}

	return (
		<div
			style={{
				background: "rgba( 255, 255, 255, 0.20 )",
				boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
				backdropFilter: "blur( 4px )",
				borderRadius: "10px",
				border: "1px solid rgba( 255, 255, 255, 0.18 )",
				borderRadius: "100px 0 0 100px",
			}}
			className="w-full --bg-gray-50-- px-3 py-20 items-center max-w-4xl"
		>
			<h1 className="text-center mb-10 text-3xl font-bold text-gray-700">
				Register
      </h1>
			<div className="w-full">
				{err.show && (
					<div className="text-xl text-red-500 m-3 p-1 bg-red-100">
						{err.msg}
					</div>
				)}
				<table className="w-full">
					<tr>
						<td className={"px-3 py-2"}>
							<input
								value={regData.name}
								onChange={(e) => {
									setReg({
										...regData,
										name: e.target.value
									})
								}}
								type={"text"}
								placeholder={"Name"}
								className={
									"border-2 border-gray-400 px-3 py-2 rounded-lg w-full"
								}
							/>
						</td>
						<td className={"px-3 py-2"}>
							<input
								value={regData.email}
								onChange={(e) => {
									setReg({
										...regData,
										email: e.target.value
									})
								}}
								type={"email"}
								placeholder={"Email ID"}
								className={
									"border-2 border-gray-400 px-3 py-2 rounded-lg w-full"
								}
							/>
						</td>
					</tr>
					<tr className={"mt-3"}>
						<td className={"px-3 py-2"}>
							<input
								value={regData.phone}
								onChange={(e) => {
									setReg({
										...regData,
										phone: e.target.value
									})
								}}
								type={"phone"}
								placeholder={"Phone Number"}
								className={
									"border-2 border-gray-400 px-3 py-2 rounded-lg w-full"
								}
							/>
						</td>
					</tr>
					<tr className={"mt-3"}>
						<td className={"px-3 py-2"}>
							<select
								onChange={(e) => {
									setIsEmployer(e.target.value == "employer");
									setReg({
										...regData,
										registeredAs: e.target.value
									})
								}}
								className={
									"px-3 py-2 w-full bg-white border-2 border-gray-400 rounded-lg"
								}
								name="as"
							>
								<option value="employer">Employer</option>
								<option value="employee">Worker</option>
							</select>
						</td>
						{isEmployer && (
							<td className={"px-3 py-2"}>
								<input onChange={() => {
									setReg({
										...regData,
										type: "individual"
									})
								}} type={"radio"} name="as-detail" id={"indi"} />
								<label htmlFor="indi"> Individual</label>
								<input
									className={"ml-3"}
									name="as-detail"
									type={"radio"}
									id={"indi"}
									onChange={() => {
										setReg({
											...regData,
											type: "industry"
										})
									}}
								/>
								<label htmlFor="indi"> Industry</label>
							</td>
						)}
					</tr>
					<tr className={"mt-3"}>
						<td className={"px-3 py-2"}>
							<input
								value={regData.password}
								onChange={(e) => {
									setReg({
										...regData,
										password: e.target.value
									})
								}}
								type={"password"}
								placeholder={"Password"}
								className={
									"border-2 border-gray-400 px-3 py-2 rounded-lg w-full"
								}
							/>
						</td>
						<td className={"px-3 py-2"}>
							<input
								value={regData.confirmPass}
								onChange={(e) => {
									setReg({
										...regData,
										confirmPass: e.target.value
									})
								}}
								type={"password"}
								placeholder={"Re-type Password"}
								className={
									"border-2 border-gray-400 px-3 py-2 rounded-lg w-full"
								}
							/>
						</td>
					</tr>
				</table>
				<div className={"w-full flex justify-end"}>
					<div
						onClick={() => registerUser()}
						className={
							"px-7 py-2 text-white upd bg-pink-500 font-bold rounded-full mt-4 mr-10 cursor-pointer select-none"
						}
					>
						Register
          </div>
				</div>
			</div>
		</div>
	);
};

let LeftSection = () => {
	return (
		<div
			style={{
				paddingLeft: "10%",
				paddingRight: "10%",
			}}
			className="flex fade2 flex-col justify-around text-center"
		>
			<h1 className="text-5xl text-white">Welcome</h1>

			<div className={"text-white text-xl opacity-75 twxt-gray-300 my-3"}>
				Get the right work or worker in one place.
      </div>

			<Link
				style={{
					backgroundColor: "cyan",
				}}
				className="bg-gray-400 up opacity-100 text-white py-3 px-10 rounded-full font-bold text-xl select-none"
				to="/login"
			>
				Login
      </Link>
		</div>
	);
};

const SignupPage = ({ className }) => {
	if (!className) className = "";
	let [isEmployer, setIsEmployer] = useState(true);
	return (
		<div
			className={
				"bg-gradient-to-br fade flex flex-col from-purple-800 to-blue-500  h-screen w-full " +
				className
			}
		>
			<nav>
				<Logo className="absolute p-10 fade2" />
			</nav>
			<div className={"flex-grow flex justify-between items-center"}>
				<LeftSection />
				<RegisterCard setIsEmployer={setIsEmployer} isEmployer={isEmployer} />
			</div>
		</div>
	);
};

export default SignupPage;
