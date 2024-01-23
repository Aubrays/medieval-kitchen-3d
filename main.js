// import "./components/shaders/fire";
import "./components/triangleFire";
import "./components/floor";
import "./components/pillars";
import "./style.css";


window.addEventListener('navigation-end', function (event) {
    console.log('Navigation ended', event.detail.checkpoint);
  });