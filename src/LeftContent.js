import 'react-calendar/dist/Calendar.css';
import { NavLink } from 'react-router-dom';
import React,{useEffect,useState} from 'react'
import Calendar from 'react-calendar'

const LeftContent=()=>{
	
	const [city,setCity]=useState("chennai")
const [weather, setWeather] = useState({
	"main":{
		"temp": 29,
		"feels_like":28.5,
		"temp_min":27,
		"temp_max": 31,

	},
	"weather":[
		{
		"description":"Partly Cloudy",
		"icon":"03d"
	}
],
"name":"Chennai",
"sys":{
	"country":"IN"
}

})
var iconUrl=`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`

const date=new Date();
const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
var mon=date.getMonth()
var month=months[mon]
var curDate=date.getDate()
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var day=date.getDay();
var curDay=days[day]


	useEffect(()=>{
// const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d27e022f94a9b3208ee145f1be09446f`
const url=null
const fetchApi= async()=>{
	const response= await fetch(url);
	const resJson=await response.json();
	if(resJson.cod==200){setWeather(resJson)}

}
fetchApi();
// console.log(weather);

	},[city])
	// console.log(weather);

	return(
        <>
        	<aside className="col col-xl-3 order-xl-1 col-lg-3 order-lg-1  order-md-2 order-sm-2 order-2 col-md-6 col-sm-6 col-12">
			<div className="ui-block">
				
				{/* <!-- W-Weather --> */}
				
				<div className="widget w-wethear">
					<a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
				
				{/* {(!weather)?(<p>No Weather Data Found</p>):((weather.cod!=200)?(<p>No Weather Data Found</p>):( */}
					
					<div className="wethear-now inline-items">
						<div className="temperature-sensor">
						 {weather.main.temp}°
						 </div>
						<div className="max-min-temperature">
							<span>
								 {weather.main.temp_min}°
								 </span>
							<span>
								 {weather.main.temp_max}°
								 </span>
						</div>
				
						{/* <svg className="olymp-weather-partly-sunny-icon"><use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-partly-sunny-icon"></use></svg> */}
						<img src={iconUrl} className="olymp-weather-partly-sunny-icon"/>
					</div>
				
					<div className="wethear-now-description">
						<div className="climate">
						 {weather.weather[0].description}
						</div>
						<span>Real Feel: <span>
							{weather.main.feels_like}°
							</span></span>
						<span>Chance of Rain: <span>{Math.floor(Math.random() * 100)}%</span></span>
					</div>
				
					<ul className="weekly-forecast">
				
						<li>
							<div className="day">sun</div>
							<svg className="olymp-weather-sunny-icon"><use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-sunny-icon"></use></svg>
				
							<div className="temperature-sensor-day">28°</div>
						</li>
				
						<li>
							<div className="day">mon</div>
							<svg className="olymp-weather-partly-sunny-icon"><use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-partly-sunny-icon"></use></svg>
							<div className="temperature-sensor-day">30°</div>
						</li>
				
						<li>
							<div className="day">tue</div>
							<svg className="olymp-weather-cloudy-icon"><use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-cloudy-icon"></use></svg>
				
							<div className="temperature-sensor-day">29°</div>
						</li>
				
						<li>
							<div className="day">wed</div>
							<svg className="olymp-weather-rain-icon"><use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-rain-icon"></use></svg>
				
							<div className="temperature-sensor-day">32°</div>
						</li>
				
						<li>
							<div className="day">thu</div>
							<svg className="olymp-weather-storm-icon"><use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-storm-icon"></use></svg>
				
							<div className="temperature-sensor-day">27°</div>
						</li>
				
						<li>
							<div className="day">fri</div>
							<svg className="olymp-weather-snow-icon"><use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-snow-icon"></use></svg>
				
							<div className="temperature-sensor-day">25°</div>
						</li>
				
						<li>
							<div className="day">sat</div>
				
							<svg className="olymp-weather-wind-icon-header"><use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-wind-icon-header"></use></svg>
				
							<div className="temperature-sensor-day">24°</div>
						</li>
				
					</ul>
				
					<div className="date-and-place">
						<h5 className="date">{curDay}, {month} {curDate}</h5>
						<div className="place">{weather.name}, {weather.sys.country}</div>
					</div>
				
				{/* ))} */}
				
				
				</div>
				
				{/* <!-- W-Weather -->		 */}
                	</div>

			<div className="ui-block">
				
				{/* <!-- W-Calendar --> */}
				
				<div className="w-calendar">
				<Calendar/>

					{/*<div className="calendar">
						 <header>
							<h6 className="month">May</h6>
						</header>
						<table>
							<thead>
							<tr><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td><td>San</td></tr>
							</thead>
							<tbody>
							<tr>
								<td data-month="12" data-day="1">1</td>
								<td data-month="12" data-day="2">
									2
								</td>
								<td data-month="12" data-day="3">3</td>
								<td data-month="12" data-day="4">4</td>
								<td data-month="12" data-day="5">5</td>
								<td data-month="12" data-day="6">6</td>
								<td data-month="12" data-day="7">7</td>
							</tr>
							<tr>
								<td data-month="12" data-day="8">8</td>
								<td data-month="12" data-day="9">9</td>
								<td data-month="12" data-day="10">10</td>
								<td data-month="12" data-day="11">11</td>
								<td data-month="12" data-day="12">12</td>
								<td data-month="12" data-day="13">13</td>
								<td data-month="12" data-day="14">14</td>
							</tr>
							<tr>
								<td data-month="12" data-day="15">15</td>
								<td data-month="12" data-day="16">16</td>
								<td data-month="12" data-day="17">17</td>
								<td data-month="12" data-day="18">18</td>
								<td data-month="12" data-day="19">19</td>
								<td data-month="12" data-day="20">20</td>
								<td data-month="12" data-day="21">21</td>
							</tr>
							<tr>
								<td data-month="12" data-day="22">22</td>
								<td data-month="12" data-day="23">23</td>
								<td data-month="12" data-day="24">24</td>
								<td data-month="12" data-day="25">25</td>
								<td data-month="12" data-day="26">26</td>
								<td data-month="12" data-day="27">27</td>
								<td data-month="12" data-day="28">28</td>
							</tr>
							<tr>
								<td data-month="12" data-day="29">29</td>
								<td data-month="12" data-day="30">30</td>
								<td data-month="12" data-day="31">31</td>
							</tr>
							</tbody>
						</table>
					 
					</div>*/}
				</div>
				
				
				{/* <!-- ... end W-Calendar -->	 */}
                		</div>

			<div className="ui-block">
				<div className="ui-block-title">
					<h6 className="title">Pages You May Like</h6>
					<a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
				</div>

				{/* <!-- W-Friend-Pages-Added --> */}
				
				<ul className="widget w-friend-pages-added notification-list friend-requests">
					<li className="inline-items">
						<div className="author-thumb">
							<img src="img/avatar41-sm.jpg" alt="author"/>
						</div>
						<div className="notification-event">
							<a href="#" className="h6 notification-friend">The Marina Bar</a>
							<span className="chat-message-item">Restaurant / Bar</span>
						</div>
						<span className="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg className="olymp-star-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>
				
					</li>
				
					<li className="inline-items">
						<div className="author-thumb">
							<img src="img/avatar42-sm.jpg" alt="author"/>
						</div>
						<div className="notification-event">
							<a href="#" className="h6 notification-friend">Tapronus Rock</a>
							<span className="chat-message-item">Rock Band</span>
						</div>
						<span className="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg className="olymp-star-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>
				
					</li>
				
					<li className="inline-items">
						<div className="author-thumb">
							<img src="img/avatar43-sm.jpg" alt="author"/>
						</div>
						<div className="notification-event">
							<a href="#" className="h6 notification-friend">Pixel Digital Design</a>
							<span className="chat-message-item">Company</span>
						</div>
						<span className="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg className="olymp-star-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>
					</li>
				
					<li className="inline-items">
						<div className="author-thumb">
							<img src="img/avatar44-sm.jpg" alt="author"/>
						</div>
						<div className="notification-event">
							<a href="#" className="h6 notification-friend">Thompson’s Custom Clothing Boutique</a>
							<span className="chat-message-item">Clothing Store</span>
						</div>
						<span className="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg className="olymp-star-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>
				
					</li>
				
					<li className="inline-items">
						<div className="author-thumb">
							<img src="img/avatar45-sm.jpg" alt="author"/>
						</div>
						<div className="notification-event">
							<a href="#" className="h6 notification-friend">Crimson Agency</a>
							<span className="chat-message-item">Company</span>
						</div>
						<span className="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg className="olymp-star-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>
					</li>
				
					<li className="inline-items">
						<div className="author-thumb">
							<img src="img/avatar46-sm.jpg" alt="author"/>
						</div>
						<div className="notification-event">
							<a href="#" className="h6 notification-friend">Mannequin Angel</a>
							<span className="chat-message-item">Clothing Store</span>
						</div>
						<span className="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg className="olymp-star-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>
					</li>
				</ul>
				
				{/* <!-- .. end W-Friend-Pages-Added --> */}
			</div>
		</aside>

        </>
    )
}

export default LeftContent
