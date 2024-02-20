import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function InfoBox({ weatherInfo }){
    const INIT_URL = "src/images/haze.jpg";
    const HOT_URL = "src/images/sunny.jpg";
    const COLD_URL ="src/images/cold.jpg";
    const RAIN_URL = "src/images/rain.jpg";
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