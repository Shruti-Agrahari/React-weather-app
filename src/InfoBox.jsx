import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function InfoBox({ weatherInfo }){
    const INIT_URL = "data:image/jpeg;base64,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";
    const HOT_URL = "https://media.istockphoto.com/id/1097573496/photo/dark-clouds-on-blue-sky.jpg?s=612x612&w=0&k=20&c=kL6wEcA7HUzmYxdy9O9mISsHK40XJ0dExUEqeCi0k4A=";
    const COLD_URL ="https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
    const RAIN_URL = "https://www.shutterstock.com/image-photo/transparent-umbrella-under-heavy-rain-260nw-2176486433.jpg";
    return (
        <div className="infobox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={weatherInfo.humdity > 80 ? RAIN_URL : weatherInfo.temp > 15 ? HOT_URL : COLD_URL }
        title="weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weatherInfo.city} {weatherInfo.humdity > 80 ? <BeachAccessIcon/> : weatherInfo.temp > 15 ? <WbSunnyIcon/> : <SevereColdIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temperature = {weatherInfo.temp}&deg;C</div>
         <div>Humidity = {weatherInfo.humdity}</div>
         <div>Max Temp = {weatherInfo.tempMax}&deg;C</div>
         <div>Min Temp = {weatherInfo.tempMin}&deg;C</div>
         <div>The Current Weather can be described as <b><i>{weatherInfo.weather}</i></b> and feels like {weatherInfo.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
        </div>
            
        </div>
    )
}