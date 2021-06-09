import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const PersoneInfo = () => {
	return(
	<>
		<div className={s.persone}>
			<div className={s.img}>
				<img 
				src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?size=338&ext=jpg"
				alt="dsa"></img>
			</div>
			<div className={s.info}>
				<PersoneInfoDesc desc="Dmitry K."/>
				<PersoneInfoDesc desc="Date of Birth: 2 january"/>
				<PersoneInfoDesc desc="City: Minsk"/>
				<PersoneInfoDesc desc="Education: BSU'11"/>
				<PersoneInfoDesc desc="Web Site: https://it-kamasutra.com"/>
			</div>
		</div>
	</>
	)
}

const PersoneInfoDesc = (props) => {
	return (
		<div>{props.desc}</div>
	)
}

const Profile = () => {
	return(
	<>
		<div>
			<img class="app-img" src="https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg" alt="323"></img>
		</div>
		<PersoneInfo />
		<MyPosts/>
	</>
	)
}

export default Profile;