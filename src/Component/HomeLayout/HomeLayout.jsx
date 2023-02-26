import "./HomeLayout.scss";
import VideoDemoTank from "./asset/T-90MS _ Main battle tank.mp4";
import AudioHome from "./asset/ssstik.io_1676784443832.mp3";
import ImgAudio from "./asset/—Pngtree—volume icon_4490396.png";
import data from "../../API/Data.json"
export default function HomeLayout() {
  data.forEach((item, index) => {
    item.id = index;
  });
  console.log(data);


  return (
    <>
      <audio className="audio_home" src={AudioHome} loop></audio>
      <img
        src={ImgAudio}
        alt=""
        className="img_sound"
        onClick={() => document.querySelector(".audio_home").play()}
      />
      <p className="text-auto-conplete"></p>
      <video src={VideoDemoTank} autoPlay muted loop></video>
      
    </>
  );
}
