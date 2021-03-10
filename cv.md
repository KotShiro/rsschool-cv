#   Nikita Kovalevich 
[![N|Solid](https://sun9-69.userapi.com/impf/c841031/v841031112/7ae1a/aIGZUdKwKbI.jpg?size=200x0&quality=90&crop=0,0,975,975&sign=bd74498bdc84850b62da25832e08adcf&ava=1)]() 

### Contacts: [![N|Solid](https://img.icons8.com/ios-filled/40/vk-circled.png)](https://vk.com/id89222391) [![N|Solid](https://img.icons8.com/ios-filled/40/telegram-app.png)](https://t.me/Niktry) [![N|Solid](https://img.icons8.com/ios-filled/40/important-mail.png)](mailto:bynkov24@gmail.com)

## 1. Brief information about yourself
> I love to learn new things. Purposeful. I do not like to sit still. He worked in different directions related to technology - led and configured: fire systems, local networks, video surveillance systems. The initial setup of the workplace (computers, office equipment) has been made. There was also a place for equipment repair. Was engaged in support of programs: office, 1C: Accounting systems, banking programs and others. During my studies at the university, I had the experience of using different languages and frameworks at a basic level. My first experience of participating in courses was RS School JS / FE 2020 Q3. My goal is to become a developer.

## 2. Skills

| Instruments       | Usage time [year]
| ------------- |:------------------:|
 Python | 3
 C++ | 1
 JavaScript | 1
 PHP | 2
 HTML | 2
 CSS | 2
 Bootstrap | 2
 Django | 1
 MySQL | 3
 Visual Studio Code | 1
 MS Visual Studio | 3
 LAMP | 1
 Nginx | 2
 OSPanel | 2


## 3. Sample code and portfolio
```sh
import getJson from '../tools/getJson';
import arrCountryPositionArr from './countryPosition';
import coronavirus from '../../img/coronavirus.svg';
import create from '../table/utils/create.utils';
import { renderCountryOnTablesUtils, clearCountryOnTablesUtils } from '../table/utils/synchronizeWithTable.utils';
import { renderCountryOnChartUtils, clearCountryOnChartUtils } from '../chart/utils/synchronizeWithChart.utils';

export default () => {
    const block3  = document.querySelector('.block-3');
    let legenda; let btnMarkerTotal; let btnMarkerDay; let btnLegenda;
    let checkThemeMap; let checkTextMap;

    create('div', 'btn-block-map-stat', [
        btnMarkerTotal = create('button', 'btn btn-map mapMarkerTotal', 'Total'),
        btnMarkerDay = create('button', 'btn btn-map mapMarkerDay', 'Day'),
    ], block3);
    create('div', 'btn-block-map-control', [
        checkThemeMap = create('input', 'themeMap checkbox-map', null, null, ['type', 'checkbox'], ['id', 'themeMap']),
        create('label', null, 'Theme', null, ['type', 'checkbox'], ['for', 'themeMap']),
        checkTextMap = create('input', 'textMap checkbox-map', null, null, ['type', 'checkbox'], ['id', 'textMap']),
        create('label', null, 'Text', null, ['type', 'checkbox'], ['for', 'textMap']),
    ], block3);
    create('div', 'block-map-legenda', [
        legenda = create('div', 'legenda legenda-none', null),
        btnLegenda = create('button', 'btn btn-map-legenda', 'Legenda'),
    ], block3);

    create('div', 'str-legenda', [
        create('div', 'td-logo-legenda head-legenda', 'TITLE'),
        create('div', 'td-title-legenda head-legenda', 'DESCRIPTION')
    ],legenda);

    create('div', 'error-block', [create('div', 'error-block-header', 'Something went wrong \\__( -_-)__/ Try to reload the page later'), create('div', 'error-block-details', null)], block3);

    const setStrLegenda = (title, description) => {
        create('div', 'str-legenda', [
            create('div', 'td-logo-legenda', title),
            create('div', 'td-title-legenda', description)
        ],legenda);
    }

    for (let i = 0; i < 10; i += 1) {
        switch (i) {
            case 0:
                setStrLegenda(create('img', null, null, null, ['src', coronavirus], ['width','50px'], ['height','50px']),'cases > 1 000 000')
                break;
            case 1:
                setStrLegenda(create('img', null, null, null, ['src', coronavirus], ['width','35px'], ['height','35px']),'cases > 100 000')
                break;
            case 2:
                setStrLegenda(create('img', null, null, null, ['src', coronavirus], ['width','30px'], ['height','30px']),'cases > 10 000')
                break;
            case 3:
                setStrLegenda(create('img', null, null, null, ['src', coronavirus], ['width','20px'], ['height','20px']),'cases > 1 000')
                break;
            case 4:
                setStrLegenda(create('img', null, null, null, ['src', coronavirus], ['width','15px'], ['height','15px']),'cases > 100')
                break;
            case 5:
                setStrLegenda(create('img', null, null, null, ['src', coronavirus], ['width','10px'], ['height','10px']),'cases <= 100')
                break;
            case 6:
                setStrLegenda(create('div', 'ML-land', [
                    create('div', null, null),
                    create('div', null, null),
                ], null), 'land')
                break;
            case 7:
                setStrLegenda(create('div', 'ML-water', [
                    create('div', null, null),
                    create('div', null, null),
                ], null), 'water')
                break;
            default:
                break;
        }
    }

    const arrMarker = [];

    const getTextPosition = () => {
        return  new L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}', {
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
        });
    }

    const mapOptions = {
       center: [53.9000000, 27.5666700],
       zoom: 4,
       doubleClickZoom: false
    }

    const map = new L.map('map', mapOptions);
    window.viewMap = map;


    let layerMap = new L.TileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png');
    let textPosition = getTextPosition();

    const checkedTextMap = () => {
        if (checkTextMap.checked) {
            textPosition = getTextPosition();
            map.addLayer(textPosition);
        } else {
            map.removeLayer(textPosition);
        }
    }
    map.addLayer(textPosition);
    map.addLayer(layerMap);

    const southWest = L.latLng(-200, -200);
    const northEast = L.latLng(200, 200);
    const bounds = L.latLngBounds(southWest, northEast);

    map.setMaxBounds(bounds);
    map.on('drag', () => {
        map.panInsideBounds(bounds, { animate: false });
    });


    const iconOptions = {
        iconUrl: coronavirus,
        iconSize: [50, 50]
    }

    const customIcon = L.icon(iconOptions);

    const markerOptions = {
        title: "MyLocation",
        clickable: true,
        draggable: false,
        icon: customIcon
    }

    function clickCountryFocus(e) {
        map.setView(e.target.getLatLng(),4);
        const coordinate = [e.latlng.lat, e.latlng.lng];
        const clickCountry = arrCountryPositionArr.filter((ee) => ee[2][0] === coordinate[0] && ee[2][1] === coordinate[1]);
        renderCountryOnTablesUtils(clickCountry[0][1]);
        renderCountryOnChartUtils(clickCountry[0][0]);
    }
    map.on('popupclose', () => {
        clearCountryOnTablesUtils();
        clearCountryOnChartUtils();
    });

    const collCovid = (arr, request) => {
        map.addLayer(layerMap);
        if (arrMarker.length > 0){
            arrMarker.map((e) => map.removeLayer(e))
            arrMarker.length = 0;
        }
        const sizePoint = (size) => {
            iconOptions.iconSize[0] = size;
            iconOptions.iconSize[1] = size;
        }
        arr.forEach((e) => {
            let requestData;
            let paramInfo;
            let pointInfo;
            const country = e.Country;
            switch (request) {
                case 'today':
                    requestData = e.NewConfirmed;
                    paramInfo = 'New confirmed'; 
                    pointInfo = `<p style="display: flex;text-align: center;margin: 0;align-items: center;justify-content: center;">${country}&emsp;<img src="https://www.countryflags.io/${e.CountryCode}/flat/32.png"></p>
                    <p>New confirmed: <b style="color:#000010;">${requestData}</b>;</p>
                    <p>New recovered: <b style="color: #38c719;">${e.NewRecovered}</b>;</p>
                    <p>New deaths: <b style="color: #ff0000; text-shadow: 1px 1px 1px black;">${e.NewDeaths}</b>.</p>`;
                    break;
                default:
                    requestData = e.TotalConfirmed;
                    paramInfo = 'Total confirmed';
                    pointInfo = `<p style="display: flex;text-align: center;margin: 0;align-items: center;justify-content: center;">${country}&emsp;<img src="https://www.countryflags.io/${e.CountryCode}/flat/32.png"></p>
                    <p>Total confirmed: <b style="color:#000010;">${requestData}</b>;</p>
                    <p>Total recovered: <b style="color: #38c719;">${e.TotalRecovered}</b>;</p>
                    <p>Total deaths: <b style="color: #ff0000; text-shadow: 1px 1px 1px black;">${e.TotalDeaths}</b>.</p>`;
                    break;
            }
            arrCountryPositionArr.forEach((el) => {
                if(el[1] === country) {
                    if (requestData <= 100) {
                        sizePoint(10);
                    }
                    else if (requestData <= 1000 && requestData > 100) {
                        sizePoint(15);
                    }
                    else if (requestData <= 10000 && requestData > 1000) {
                        sizePoint(20);
                    }
                    else if ( requestData <= 100000 && requestData > 10000) {
                        sizePoint(30);
                    }
                    else if ( requestData <= 1000000 && requestData > 100000) {
                        sizePoint(35);
                    }
                    else if (requestData >= 1000000) {
                        sizePoint(50);
                    }
                    markerOptions.title = `${country}, ${paramInfo}: ${requestData}`;
                    arrMarker.push(L.marker(el[2], markerOptions).addTo(map).bindPopup(country).on('click', clickCountryFocus));
                    const marker = arrMarker[arrMarker.length - 1];
                    marker.bindPopup(pointInfo).openPopup;
                    marker.addTo(map);

                }
            });
        }
        );
    };
    const getPromis = (arr) => {
        return arr;
    }

    const promis =  getJson('https://api.covid19api.com/summary', 'Countries', getPromis);
    promis.then(e => collCovid(e));



    btnMarkerTotal.onclick = () => {
        promis.then(arr => collCovid(arr))
    }
    btnMarkerDay.onclick = () => {
        promis.then(arr => collCovid(arr, 'today'));
    }

    checkThemeMap.onclick = () => {
        if (checkThemeMap.checked) {
            layerMap = new L.TileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png');
            map.addLayer(layerMap);
            checkedTextMap();

        } else {
            layerMap = new L.TileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png');
            map.addLayer(layerMap);
            checkedTextMap();
        }
    }
    checkTextMap.onclick = () => {
        checkedTextMap();
    }

    btnLegenda.onclick = () => {
        if (legenda.classList.contains('legenda-none')) {
            legenda.classList.remove('legenda-none');
        } else {
            legenda.classList.add('legenda-none');
        }
    }
};
```
- https://rolling-scopes-school.github.io/kotshiro-JS2020Q3/momentum/
- https://rolling-scopes-school.github.io/kotshiro-JS2020Q3/calculator/
- https://rolling-scopes-school.github.io/kotshiro-JS2020Q3/shelter/pages/main/
- https://rolling-scopes-school.github.io/kotshiro-JS2020Q3/virtual-keyboard/
- https://rolling-scopes-school.github.io/kotshiro-JS2020Q3/gem-puzzle/
- https://rolling-scopes-school.github.io/kotshiro-JS2020Q3/covid-dashboard/

## 4. Work experience
No experience in real project development, only the implementation of the curriculum. During the training, the tools described in point 2 were used.

## 5. Education
- **College** (secondary specialized) 2013-2016 "Computing machines, systems and networks": *technician*.
- **University** (higher) 2016-2020 "Automated information processing systems": *information technology engineer*.

##  6. English language
At the moment: Starter