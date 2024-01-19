import {getTours} from "@rest/tours";
import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITours} from "./models/tours";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";
import {initToursDivElements} from "@services/tours";

export let  toursDataArray: ITours[] = [];
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist

 function initApp() {
   initHeaderTitle('Туры', 'h1');
   initFooterTitle('Туры по всему миру', 'h2');

   const tourData: Promise<ITours[]> = getTours();

   tourData.then((data): void => {
     console.log('call ')
     toursDataArray = data;
     initToursDivElements(data);
   });

 }

initApp();


