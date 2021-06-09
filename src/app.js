import React from "react";
import "./app.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import {BrowserRouter, Route} from "react-router-dom"

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<NavBar />
				<div className="app-wrapper-content">
					<Route path="/dialogs" component={Dialogs}/>
					<Route path="/profile" component={Profile}/>
					<Route path="/news" component={News}/>
					<Route path="/music" component={Music}/>
					<Route path="/settingsPage" component={SettingsPage}/>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App