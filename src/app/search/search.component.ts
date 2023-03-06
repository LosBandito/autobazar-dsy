import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  cars=[
    [
      "ŠKODA SUPERB COMBI 2.0TDI DSG FACELIFT NEW MODEL",
      "  20 490 €",
      "https://www.bazos.sk/img/1t/745/147774745.jpg?t=1676444105"
    ],
    [
      "MERCEDES-BENZ AXOR 1824 SKLÁPAČ TROJSTRANNÝ VYKLÁPAČ S3",
      "  29 990 €",
      "https://www.bazos.sk/img/1t/550/147773550.jpg?t=1676441631"
    ],
    [
      "IVECO DAILY 2.8 vyklápač S3 do 3,5t",
      "  13 590 €",
      "https://www.bazos.sk/img/1t/529/147773529.jpg?t=1676441474"
    ],
    [
      "Volkswagen Scirocco 2.0 TSI 147 KW Xenon+DSG+F1",
      "  8 500 €",
      "https://www.bazos.sk/img/1t/436/147768436.jpg?t=1676415508"
    ],
    [
      "VW Multivan Classic 2.5 Tdi",
      "  5 999 €",
      "https://www.bazos.sk/img/1t/285/147765285.jpg?t=1676442687"
    ],
    [
      "AUDI A4 AVANT B9 2.0TDi, M6, VIRTUAL COCPIT, 2017,LEASING",
      "  16 490 €",
      "https://www.bazos.sk/img/1t/439/147764439.jpg?t=1676439974"
    ],
    [
      "Ford Focus Kombi 1.5 TDCi 120ps EcoBlue Titanium 2018 TOP",
      "  13 490 €",
      "https://www.bazos.sk/img/1t/936/147764936.jpg?t=1676403329"
    ],
    [
      "Škoda Superb 2 Combi Xenóny Koža Bluetooth",
      "  7 999 €",
      "https://www.bazos.sk/img/1t/907/147763907.jpg?t=1676447692"
    ],
    [
      "Škoda Octavia Combi II RS DSG - 2.0CR TDi 125Kw 170Ps...",
      "  7 190 €",
      "https://www.bazos.sk/img/1t/226/147763226.jpg?t=1676446294"
    ],
    [
      "AUDI Q5 2.0 TDI SPORT Quattro 4x4 Sline ODPOČET DPH",
      "  33 990 €",
      "https://www.bazos.sk/img/1t/813/147762813.jpg?t=1676398710"
    ],
    [
      "SEAT LEON ST 1.6 TDI STYLE--Leasing--odpocet DPH",
      "  11 700 €",
      "https://www.bazos.sk/img/1t/863/147759863.jpg?t=1676393457"
    ],
    [
      "VW TIGUAN 3x R-line FULL LED MATRIX VIRTUAL HEAD-UP",
      "  26 600 €",
      "https://www.bazos.sk/img/1t/979/147759979.jpg?t=1676394067"
    ],
    [
      "Fiat Grande Punto 1,9 JTD Abarth 96Kw 145 100km",
      "  2 400 €",
      "https://www.bazos.sk/img/1t/145/147757145.jpg?t=1676387855"
    ],
    [
      "Opel Zafira Tourer 1.6 CDTI--EXCLUSIVE--7.Miestne",
      "  10 900 €",
      "https://www.bazos.sk/img/1t/869/147748869.jpg?t=1676374558"
    ],
    [
      "Škoda Octavia combi 2 FL 2.0TDi DSG F1",
      "  8 900 €",
      "https://www.bazos.sk/img/1t/070/147745070.jpg?t=1676374138"
    ],
    [
      "Ford Fiesta 1.4 16V, benzín, 4/2009, ST-line",
      "  4 250 €",
      "https://www.bazos.sk/img/1t/737/147636737.jpg?t=1676410684"
    ],
    [
      "Škoda Superb Combi 2.0 TDI 190k 4x4 Sportline DSG",
      "  23 490 €",
      "https://www.bazos.sk/img/1t/712/147753712.jpg?t=1676446853"
    ],
    [
      "Volkswagen Tiguan 2.0 TSI 4-Motion Sport-Style  132kW-180PS",
      "  12 500 €",
      "https://www.bazos.sk/img/1t/788/147737788.jpg?t=1676360594"
    ],
    [
      "VOLKSWAGEN GOLF 7 VARIANT 110kw 140tis 2019, DSG, virtual",
      "  16 399 €",
      "https://www.bazos.sk/img/1t/852/147728852.jpg?t=1676319361"
    ],
    [
      "Seat Leon 1.6 TDI Style M5 NAVI R17 Panorama",
      "  8 399 €",
      "https://www.bazos.sk/img/1t/645/147723645.jpg?t=1676310964"
    ],
    [
      "Škoda Octavia 1.9 TDi M5 Ambiente klíma Originál KM bez DPF",
      "  5 099 €",
      "https://www.bazos.sk/img/1t/145/147722145.jpg?t=1676310677"
    ],
    [
      "Škoda Fabia RS -1.9TDi 96Kw 131Ps. +Xenon. Top Stav.",
      "  4 500 €",
      "https://www.bazos.sk/img/1t/417/147719417.jpg?t=1676304074"
    ],
    [
      "4x4 92'000km po servise, webasto, canton...",
      "  24 900 €",
      "https://www.bazos.sk/img/1t/122/147719122.jpg?t=1676303051"
    ],
    [
      "2018 Golf Variant 2.0TDI 110kW Highline LED Virtual panoráma",
      "  14 990 €",
      "https://www.bazos.sk/img/1t/877/147717877.jpg?t=1676305779"
    ],
    [
      "Mercedes Benz  S400 d 4MATIC",
      "  119 800 €",
      "https://www.bazos.sk/img/1t/456/147714456.jpg?t=1676299934"
    ],
    [
      "VOLKSWAGEN TOURAN 1,6 TDI, 1/2017, 157 317 KM",
      "  14 890 €",
      "https://www.bazos.sk/img/1t/553/147712553.jpg?t=1676293083"
    ],
    [
      "✅️ RENAULT MEGANE 1.5 DCI eco 2 , Ročník 2015 - Prvý majiteľ",
      "  7 000 €",
      "https://www.bazos.sk/img/1t/809/147710809.jpg?t=1676294267"
    ],
    [
      "Škoda Superb 3 Combi Sportline 2.0 TDI140kW°4x4°DSG°VEGA R19",
      "  23 590 €",
      "https://www.bazos.sk/img/1t/959/147698959.jpg?t=1676283992"
    ],
    [
      "AUDI A4 ALLROAD 3.0 Tdi, 4X4, AUTOMAT",
      "  10 500 €",
      "https://www.bazos.sk/img/1t/949/147682949.jpg?t=1676278375"
    ],
    [
      "Toyota Landcruiser 100 4,7 benzín V8",
      "  17 990 €",
      "https://www.bazos.sk/img/1t/308/147409308.jpg?t=1676274435"
    ],
    [
      "SEAT ALHAMBRA 1,9 TDI 4x4,MODEL 2004,7 MIESTNE,XENON",
      "  3 990 €",
      "https://www.bazos.sk/img/1t/489/147686489.jpg?t=1676271019"
    ],
    [
      "VOLKSWAGEN POLO 1,2 BENZIN,ALU,MODEL 2012,TOP STAV",
      "  4 650 €",
      "https://www.bazos.sk/img/1t/613/147684613.jpg?t=1676271040"
    ],
    [
      "Volkswagen Tiguan 2.0 TDI DSG Allspace 7-miestny",
      "  24 900 €",
      "https://www.bazos.sk/img/1t/339/147672339.jpg?t=1676230397"
    ],
    [
      "Škoda Roomster 1.9 TDI Scout",
      "  4 590 €",
      "https://www.bazos.sk/img/1t/061/147682061.jpg?t=1676232636"
    ],
    [
      "Mercedes E 220d, 4 Matic,143kW, 133000km",
      "  33 700 €",
      "https://www.bazos.sk/img/1t/056/147651056.jpg?t=1676386582"
    ],
    [
      "Škoda Octavia 4x4, DSG, 2.0 TDi, Laurin & Klement, Canton",
      "  17 000 €",
      "https://www.bazos.sk/img/1t/607/147669607.jpg?t=1676208404"
    ],
    [
      "BMW rad 5 GranTurismo 535d GT",
      "  15 200 €",
      "https://www.bazos.sk/img/1t/077/147641077.jpg?t=1676322425"
    ],
    [
      "Škoda Yeti 2.0 TDI Ambition 4x4 SK ŠPZ, TOP STAV",
      "  10 990 €",
      "https://www.bazos.sk/img/1t/505/147661505.jpg?t=1676197370"
    ],
    [
      "ŠKODA OCTAVIA RS 2.0 TSI SEDAN BLACK EDITION",
      "  8 890 €",
      "https://www.bazos.sk/img/1t/709/147686709.jpg?t=1676243221"
    ],
    [
      "AUDI A6 LIMOUSINE 2.0TDI QUATTRO 140kw FACELIFT",
      "  18 790 €",
      "https://www.bazos.sk/img/1t/008/147646008.jpg?t=1676149198"
    ],
    [
      "Audi A4 Allroad 2.0 TFSI Prestige quattro F1 S tronic 211PS",
      "  13 500 €",
      "https://www.bazos.sk/img/1t/102/147777102.jpg?t=1676450651"
    ],
    [
      "Škoda Superb Combi 2.0 TDI 110KW/150k DSG STYLE KOŽA•KAMERA",
      "  17 990 €",
      "https://www.bazos.sk/img/1t/164/147641164.jpg?t=1676401323"
    ],
    [
      "Volkswagen Passat Variant 2.0 TDI 140kw HIGHLINE  DYNAUDIO",
      "  16 490 €",
      "https://www.bazos.sk/img/1t/066/147514066.jpg?t=1676401338"
    ],
    [
      "Fiat 500 Sport 100HP 1.4 16V",
      "  5 500 €",
      "https://www.bazos.sk/img/1t/062/147638062.jpg?t=1676133232"
    ],
    [
      "Peugeot 4007 2.2 HDi Allure 4x4 7-Miestne",
      "  8 690 €",
      "https://www.bazos.sk/img/1t/045/147628045.jpg?t=1676132396"
    ],
    [
      "Volkswagen golf 7 2.0 TDi automat, Virtual Cockpit, 1. Majit",
      "  15 990 €",
      "https://www.bazos.sk/img/1t/129/147637129.jpg?t=1676130278"
    ],
    [
      "Audi a4 avant 2.0 TDi Manual. 1. Majiteľ. Prihlásené",
      "  14 990 €",
      "https://www.bazos.sk/img/1t/948/147635948.jpg?t=1676129434"
    ],
    [
      "ŠKODA OCTAVIA RS III, 4x4, DSG, 2.0 TDi,VIRTUAL",
      "  22 490 €",
      "https://www.bazos.sk/img/1t/941/147630941.jpg?t=1676121424"
    ],
    [
      "ŠKODA KAROQ STYLE,1,6 TDI, AUTOMAT DSG,FULL LED,KOŽA,5/2018",
      "  19 490 €",
      "https://www.bazos.sk/img/1t/976/147627976.jpg?t=1676363630"
    ],
    [
      "TOYOTA HILUX 3-STRANNÝ VYKLÁPAČ",
      "  10 800 €",
      "https://www.bazos.sk/img/1t/268/147614268.jpg?t=1676097621"
    ],
    [
      "VOLKSWAGEN JETTA 2.0TDI  HIGHLINE 110KW/150K 2015",
      "  13 790 €",
      "https://www.bazos.sk/img/1t/204/147607204.jpg?t=1676357409"
    ],
    [
      "V0LKSWAGEN Polo 1.2 benzin",
      "  3 000 €",
      "https://www.bazos.sk/img/1t/102/147605102.jpg?t=1676229032"
    ],
    [
      "Kia Sportage 2.0 CRDi Spirit 4WD",
      "  14 490 €",
      "https://www.bazos.sk/img/1t/890/147604890.jpg?t=1676364714"
    ],
    [
      "Honda CR-V 2.2 i-CTDi Executive",
      "  7 990 €",
      "https://www.bazos.sk/img/1t/317/147604317.jpg?t=1676386076"
    ],
    [
      "Mazda 3 1.6 16v Benzin",
      "  3 200 €",
      "https://www.bazos.sk/img/1t/800/147602800.jpg?t=1676048392"
    ],
    [
      "RENAULT CLIO GRANDTOUR LIMITED",
      "  7 100 €",
      "https://www.bazos.sk/img/1t/199/147602199.jpg?t=1676046111"
    ],
    [
      "Škoda Superb III Combi 2.0 TDI DSG Executive•ODPOČET DPH•",
      "  14 590 €",
      "https://www.bazos.sk/img/1t/242/147601242.jpg?t=1676352062"
    ],
    [
      "Ford Kuga 1.5 EcoBoost 150k Business 2017/ 88tis km",
      "  14 499 €",
      "https://www.bazos.sk/img/1t/575/147592575.jpg?t=1676029470"
    ],
    [
      "BMW 320xDrive Touring SPORT 147kW ODPOČET DPH",
      "  12 900 €",
      "https://www.bazos.sk/img/1t/360/147571360.jpg?t=1676189175"
    ],
    [
      "ŠKODA OCTAVIA  4x4 - 2.0 TDI  - 110 kW",
      "  12 990 €",
      "https://www.bazos.sk/img/1t/653/147644653.jpg?t=1676197169"
    ],
    [
      "Škoda Octavia Scout Combi 2.0 TDI DSG 4x4",
      "  19 999 €",
      "https://www.bazos.sk/img/1t/090/147607090.jpg?t=1676056149"
    ],
    [
      "Renault Grand Scenic 1.5dci 74kw-7M-Nová TK a EK-kúpené v SR",
      "  2 500 €",
      "https://www.bazos.sk/img/1t/270/147565270.jpg?t=1675962473"
    ],
    [
      "PEUGEOT BOXER VALNIK, 2,2 HDI, KLIMATIZÁCIA, 11/2013",
      "  9 990 €",
      "https://www.bazos.sk/img/1t/866/147562866.jpg?t=1675958896"
    ],
    [
      "Ford S-Max 2.0 TDCI M6 Trend 7 miest NAVI Ťažné R17",
      "  9 199 €",
      "https://www.bazos.sk/img/1t/444/147551444.jpg?t=1676045928"
    ],
    [
      "VW SHARAN 2.0 TDI 185PS  6 DSG HIGHLINE  PANORÁMA 2017 TOP",
      "  21 000 €",
      "https://www.bazos.sk/img/1t/683/147546683.jpg?t=1676444785"
    ],
    [
      "Škoda Superb COMBI 2.0TDI 125KW 4x4+NAVI+PANORÁMA+Model 2011",
      "  10 499 €",
      "https://www.bazos.sk/img/1t/538/147536538.jpg?t=1676035864"
    ],
    [
      "Land Rover Range Rover Sport 3.0 TDV6  BLACK Edition",
      "  64 999 €",
      "https://www.bazos.sk/img/1t/045/147536045.jpg?t=1675928943"
    ],
    [
      "Volkswagen Golf R 2.0 TFSI 270PS R 4-Motion",
      "  13 800 €",
      "https://www.bazos.sk/img/1t/134/147535134.jpg?t=1675892695"
    ],
    [
      "Audi A6 Avant 3.0BiTDI DPF 320k quattro tiptronic 3x S-line",
      "  28 990 €",
      "https://www.bazos.sk/img/1t/962/147533962.jpg?t=1676362769"
    ],
    [
      "Volkswagen Passat Variant 1.6TDI DSG Highline PANORAMA LED",
      "  17 490 €",
      "https://www.bazos.sk/img/1t/456/147533456.jpg?t=1675890948"
    ],
    [
      "Mazda 6 Combi (Wagon) 6 2.2 Skyactiv-D Attraction A/T SK ŠPZ",
      "  11 490 €",
      "https://www.bazos.sk/img/1t/088/147533088.jpg?t=1675890622"
    ],
    [
      "Kia Optima SW 1.7 CRDi 136ps Gold NAVI KAMERA LED TOP STAV",
      "  13 990 €",
      "https://www.bazos.sk/img/1t/590/147532590.jpg?t=1675890277"
    ],
    [
      "Hyundai Kona 1.6 CRDi 136 ps Family A/T 62000 KM  LED NAVI",
      "  17 990 €",
      "https://www.bazos.sk/img/1t/111/147532111.jpg?t=1675889883"
    ],
    [
      "Kia Carens 1.7 CRDi Platinum 7MIESTNE 115000KM NAVI TOP STAV",
      "  13 990 €",
      "https://www.bazos.sk/img/1t/919/147530919.jpg?t=1675889487"
    ],
    [
      "Škoda Kodiaq 2.0 TDI SCR Style DSG FULL LED KAMERA NAVI TOP",
      "  22 990 €",
      "https://www.bazos.sk/img/1t/480/147530480.jpg?t=1675889109"
    ],
    [
      "Škoda Kodiaq 2.0 TDI SCR 190k Style DSG 4x4 2017 TOP STAV",
      "  23 690 €",
      "https://www.bazos.sk/img/1t/910/147529910.jpg?t=1675888790"
    ],
    [
      "Škoda Octavia Combi 1.6 TDI 115k Ambition Sportline TOP STAV",
      "  12 990 €",
      "https://www.bazos.sk/img/1t/188/147529188.jpg?t=1675888414"
    ],
    [
      "Volkswagen Golf Variant 1.6 TDI DSG 115k EU6 R-Line Comfort",
      "  13 490 €",
      "https://www.bazos.sk/img/1t/646/147528646.jpg?t=1675888091"
    ],
    [
      "MERCEDES-BENZ ATEGO 1322 VYKLÁPAČ HYDRAULICKÁ RUKA PALFINGER",
      "  32 590 €",
      "https://www.bazos.sk/img/1t/972/147532972.jpg?t=1676009252"
    ],
    [
      "Predám BMW X6 4.4 i Active Hybrid",
      "  15 000 €",
      "https://www.bazos.sk/img/1t/789/147527789.jpg?t=1676213448"
    ],
    [
      "ŠKODA OCTAVIA VRS MODEL 2019 19\"KOLESÁ/ŤAŽNÉ/FULL LED/CANTON",
      "  21 290 €",
      "https://www.bazos.sk/img/1t/766/147526766.jpg?t=1676098415"
    ],
    [
      "Seat-Alhambra-1,9Tdi-85Kw-116Ps,Rv:2009,7 Miestne",
      "  5 290 €",
      "https://www.bazos.sk/img/1t/522/147588522.jpg?t=1676413909"
    ],
    [
      "Škoda Superb Combi 2.0 TDI SCR Style DSG",
      "  18 999 €",
      "https://www.bazos.sk/img/1t/094/147525094.jpg?t=1675872237"
    ],
    [
      "Audi SQ7 4.0TDI quattro-At 8-st. Matrix 7- Miest-LEASING",
      "  49 900 €",
      "https://www.bazos.sk/img/1t/994/147522994.jpg?t=1676376764"
    ],
    [
      "SEAT EXEO 2.0TDI CR ST 170PS LIFT 2013 BIXENON/LED NAVI R18",
      "  7 750 €",
      "https://www.bazos.sk/img/1t/939/147519939.jpg?t=1676047665"
    ],
    [
      "ŠKODA SUPERB COMBI STYLE, 1,6 TDI, MANUÁL, 8/2019, 117 647KM",
      "  15 990 €",
      "https://www.bazos.sk/img/1t/978/147515978.jpg?t=1676044491"
    ],
    [
      "MERCEDES Benz C 250 T CDi REZERVOVANE ⛔",
      "  12 999 €",
      "https://www.bazos.sk/img/1t/545/147513545.jpg?t=1676036988"
    ],
    [
      "VOLKSWAGEN PASSAT VARIANT,HIGHLINE, 1,4 TSI, DSG, VIRTUAL",
      "  17 490 €",
      "https://www.bazos.sk/img/1t/898/147509898.jpg?t=1675866480"
    ],
    [
      ".19” ®️Originál NOVÝ komplet LETO VOLVO XC40 & V90",
      "  2 200 €",
      "https://www.bazos.sk/img/1t/032/146592032.jpg?t=1675801624"
    ],
    [
      "Audi A4 Avant B9 2.0TDI Sport 110kw 150k  DSG 130.tis. km",
      "  19 990 €",
      "https://www.bazos.sk/img/1t/620/147493620.jpg?t=1675800818"
    ],
    [
      "VOLKSWAGEN TOURAN 1.6TDI SCR PREMIUM COMFORTLINE, 7 MIESTNY",
      "  14 850 €",
      "https://www.bazos.sk/img/1t/601/147488601.jpg?t=1676445940"
    ],
    [
      "2019 Audi A4 Avant 2.0TDI 140kW S-tronic Webasto ťažné",
      "  18 990 €",
      "https://www.bazos.sk/img/1t/323/147488323.jpg?t=1675860610"
    ],
    [
      "VW Passat B8 2.0TDI-DSG-2019,151tis km--odpocet DPH-LEASING-",
      "  18 600 €",
      "https://www.bazos.sk/img/1t/604/147487604.jpg?t=1676370398"
    ],
    [
      "Seat Arona 1.6Tdi Style 2018",
      "  13 499 €",
      "https://www.bazos.sk/img/1t/952/147486952.jpg?t=1676013218"
    ],
    [
      "Land Rover Discovery Sport 2.2L TD4 S A/T Odpočet DPH",
      "  17 990 €",
      "https://www.bazos.sk/img/1t/888/147484888.jpg?t=1675846406"
    ],
    [
      "Land Rover Range Rover Evoque 2.2 eD4 DYNAMIC",
      "  16 990 €",
      "https://www.bazos.sk/img/1t/054/147560054.jpg?t=1675953074"
    ],
    [
      "vw golf  2020 1.6 TDI 85kw-99.800km--odpocet dph-leasing",
      "  16 800 €",
      "https://www.bazos.sk/img/1t/364/147481364.jpg?t=1676370488"
    ],
    [
      "Land Rover Range Rover 3.0 Td6 Vogue",
      "  8 490 €",
      "https://www.bazos.sk/img/1t/554/147481554.jpg?t=1676110710"
    ],
    [
      "2018 VW Golf 2.0TDI 110kW Highline navi MirrorLink",
      "  13 490 €",
      "https://www.bazos.sk/img/1t/174/147481174.jpg?t=1676232108"
    ],
    [
      "Mercedes-Benz GLE Kupé 350d 4matic",
      "  42 990 €",
      "https://www.bazos.sk/img/1t/225/147481225.jpg?t=1676318036"
    ],
    [
      "VW Passat kombi 2.0 diesel DSG 110kW, 150 koní",
      "  11 990 €",
      "https://www.bazos.sk/img/1t/553/147719553.jpg?t=1676362849"
    ],
    [
      "Audi A4 Avant 35 2020 FULL LED/ŤAŽNÉ/75000KM /ACC/MILDHYBRID",
      "  25 000 €",
      "https://www.bazos.sk/img/1t/849/147456849.jpg?t=1676307491"
    ],
    [
      "Volkswagen Passat Alltrack 2.0 TDi DSG 4Motion",
      "  23 900 €",
      "https://www.bazos.sk/img/1t/260/147536260.jpg?t=1675895009"
    ],
    [
      "Volkswagen Passat B7 Variant 2.0 TDi DSG r.v. 2012",
      "  8 190 €",
      "https://www.bazos.sk/img/1t/641/147724641.jpg?t=1676310717"
    ],
    [
      "- REZERVOVANÉ - Škoda Octavia Combi 1.8T RS (132kW)",
      "  4 650 €",
      "https://www.bazos.sk/img/1t/907/147447907.jpg?t=1675873155"
    ],
    [
      "Dacia Sandero 1.0sce 54kw-kúpená v SR-1.majiteľ-ročník 2019",
      "  7 000 €",
      "https://www.bazos.sk/img/1t/465/147446465.jpg?t=1675842769"
    ],
    [
      "MERCEDES AXOR 1824 -TROJSTRANNÝ SKLÁPAČ // VYKLÁPAČ // EU4",
      "  33 900 €",
      "https://www.bazos.sk/img/1t/883/147444883.jpg?t=1675879867"
    ],
    [
      "MERCEDES AXOR 1829 - TROJSTRANNÝ SKLÁPAČ + HYDR. RUKA // EU5",
      "  53 900 €",
      "https://www.bazos.sk/img/1t/016/147445016.jpg?t=1675879916"
    ],
    [
      "MERCEDES AXOR 1829 - TROJSTRANNÝ SKLÁPAČ // VYKLÁPAČ // EU4",
      "  32 900 €",
      "https://www.bazos.sk/img/1t/102/147445102.jpg?t=1675879885"
    ],
    [
      "MERCEDES AXOR 1829 - TROJSTRANNÝ SKLÁPAČ // VYKLÁPAČ //EURO5",
      "  33 900 €",
      "https://www.bazos.sk/img/1t/205/147445205.jpg?t=1675879896"
    ],
    [
      "MERCEDES ATEGO 1323-TROJSTRANNÝ SKLÁPAČ S HYDRAULICKOU RUKOU",
      "  31 500 €",
      "https://www.bazos.sk/img/1t/366/147445366.jpg?t=1675879926"
    ],
    [
      "MAN TGA 18.350 - 4X4 TROJSTRANNÝ SKLÁPAČ - VYKLÁPAČ TOP STAV",
      "  43 000 €",
      "https://www.bazos.sk/img/1t/457/147445457.jpg?t=1675879944"
    ],
    [
      "Škoda Octavia Tour 1.4 MPI",
      "  3 990 €",
      "https://www.bazos.sk/img/1t/226/147438226.jpg?t=1676211033"
    ],
    [
      "SKODA FABIA COMBI 1.2 SPORT RV:2005 160 000KM BEZ HRDZI",
      "  2 999 €",
      "https://www.bazos.sk/img/1t/543/147430543.jpg?t=1675860713"
    ],
    [
      "Škoda Superb II 3.6FSI 4x4, 191kw (260ps)",
      "  8 999 €",
      "https://www.bazos.sk/img/1t/235/147424235.jpg?t=1675675448"
    ],
    [
      "Suzuki Swift Limited Edition Sergio Cellano 4x4 - 1.2i 69Kw",
      "  7 290 €",
      "https://www.bazos.sk/img/1t/685/147403685.jpg?t=1676400048"
    ],
    [
      "Škoda Octavia Combi 2.0 TDI Elegance WEBASTO",
      "  5 750 €",
      "https://www.bazos.sk/img/1t/644/147402644.jpg?t=1676194539"
    ],
    [
      "BMW 330D E91 TOURING 170KW/231PS 2007 KLÍMA XENÓN R19 TOP",
      "  6 250 €",
      "https://www.bazos.sk/img/1t/757/147396757.jpg?t=1675630148"
    ],
    [
      "✅️VW TIGUAN ALLSPACE > R-LINE,7-MIEST,140KW/4×4/2019✅️",
      "  34 990 €",
      "https://www.bazos.sk/img/1t/444/147629444.jpg?t=1676140501"
    ],
    [
      "KUGA 1.5EcoBoost 110kW,8/2018,GPS,Výhr.Sed+Volant- DPH",
      "  15 500 €",
      "https://www.bazos.sk/img/1t/355/147728355.jpg?t=1676372045"
    ],
    [
      "Peugeot 508sw 2.0hdi 110kw-150ps-ročník 2016-top stav",
      "  9 900 €",
      "https://www.bazos.sk/img/1t/393/147387393.jpg?t=1675679100"
    ],
    [
      "Škoda Octavia Combi II 1.6TDi 77kw(105ps)",
      "  2 799 €",
      "https://www.bazos.sk/img/1t/581/147428581.jpg?t=1675677260"
    ],
    [
      "ŠKODA SUPERB COMBI SPORTLINE, 1,8TSI, AUTOMAT DSG, 95 151KM",
      "  22 990 €",
      "https://www.bazos.sk/img/1t/603/147385603.jpg?t=1676363665"
    ],
    [
      "Volkswagen Passat Variant 2.0 TSI Highline Black White 211PS",
      "  10 500 €",
      "https://www.bazos.sk/img/1t/153/147379153.jpg?t=1676063472"
    ],
    [
      "Škoda superb combi L&K 2.0tdi Dsg.2020.140kw.Mega Full",
      "  26 450 €",
      "https://www.bazos.sk/img/1t/198/147369198.jpg?t=1676287590"
    ],
    [
      "MITSUBISHI OUTLANDER 4x4",
      "  10 990 €",
      "https://www.bazos.sk/img/1t/276/147640276.jpg?t=1676142067"
    ],
    [
      "---FIAT 5OO 1,2 benzin -Automat-Navi-Panorama-Model 2017-",
      "  9 990 €",
      "https://www.bazos.sk/img/1t/700/147361700.jpg?t=1676112184"
    ],
    [
      "Volkswagen Passat Variant R-LINE 2.0 TDi DSG 4MOTION",
      "  19 999 €",
      "https://www.bazos.sk/img/1t/920/147401920.jpg?t=1675892846"
    ],
    [
      "Mercedes-Benz C 43 AMG 4MATIC 420 PS",
      "  32 999 €",
      "https://www.bazos.sk/img/1t/137/147401137.jpg?t=1675610801"
    ],
    [
      "Volkswagen Passat Alltrack 2.0 TDi DSG 4Motion",
      "  24 900 €",
      "https://www.bazos.sk/img/1t/214/147400214.jpg?t=1675609670"
    ],
    [
      "VOLVO XC90 D5 235K DRIVE-E INSCRIPTION AWD",
      "  37 000 €",
      "https://www.bazos.sk/img/1t/309/147399309.jpg?t=1675608845"
    ],
    [
      "Škoda Superb 2.0 TDI SCR Style",
      "  20 500 €",
      "https://www.bazos.sk/img/1t/419/147552419.jpg?t=1676039966"
    ],
    [
      "Škoda Fabia EDITION 100 - 1.9TDI + Xenóny - Koža",
      "  3 390 €",
      "https://www.bazos.sk/img/1t/817/147431817.jpg?t=1676368684"
    ],
    [
      "MERCEDES-BENZ ATEGO 1223 SKLÁPAČ S3 HYDRAULICKÁ RUKA",
      "  31 500 €",
      "https://www.bazos.sk/img/1t/818/147358818.jpg?t=1675520223"
    ],
    [
      "Mercedes-Benz B 200d AMG Line SK ŠPZ",
      "  9 999 €",
      "https://www.bazos.sk/img/1t/491/147392491.jpg?t=1676128198"
    ],
    [
      "Škoda Superb Combi 2.0 TDI SCR L&K DSG",
      "  25 200 €",
      "https://www.bazos.sk/img/1t/267/147435267.jpg?t=1675684261"
    ],
    [
      "AUDI A4 AVANT 2,0TDI, 110KW(150PS), MANUÁL 11/2016, 84 266KM",
      "  16 490 €",
      "https://www.bazos.sk/img/1t/535/147353535.jpg?t=1676363717"
    ],
    [
      "MAZDA 6 WAGON,FACELIFT,2,2 SKYACTIV-D150K REVOLUTION 11/2018",
      "  17 490 €",
      "https://www.bazos.sk/img/1t/319/147353319.jpg?t=1676045929"
    ],
    [
      "PEUGEOT 208, 1,0VTI, ORIGINÁL 120 250KM",
      "  6 290 €",
      "https://www.bazos.sk/img/1t/210/147353210.jpg?t=1675512210"
    ],
    [
      "MERCEDES-BENZ ATEGO 1224 HÁKOVÝ NOSIČ KONTAJNEROV 2011 EURO5",
      "  35 590 €",
      "https://www.bazos.sk/img/1t/706/147350706.jpg?t=1675520204"
    ],
    [
      "IVECO DAILY 35C12 sklápač trojstranný 2.3",
      "  16 590 €",
      "https://www.bazos.sk/img/1t/320/147350320.jpg?t=1675507083"
    ],
    [
      "Opel Astra ST, 148tis. km, r.v. 2017, plná výbava",
      "  9 990 €",
      "https://www.bazos.sk/img/1t/159/147350159.jpg?t=1675506410"
    ],
    [
      "Octavia Combi Greenline 1,6TDi 110k",
      "  10 690 €",
      "https://www.bazos.sk/img/1t/629/147349629.jpg?t=1675505756"
    ],
    [
      "Volkswagen Passat Variant 2.0 TDI BMT Highline",
      "  8 990 €",
      "https://www.bazos.sk/img/1t/080/147345080.jpg?t=1676115837"
    ],
    [
      "Tesla Model S85 367PS + 136tis km",
      "  34 999 €",
      "https://www.bazos.sk/img/1t/494/147336494.jpg?t=1675894758"
    ],
    [
      "BMW E30 320i- R6 CABRIO CHROM, 5-st.Manuál- originál R6",
      "  17 000 €",
      "https://www.bazos.sk/img/1t/562/147633562.jpg?t=1676372938"
    ],
    [
      "✅ Range Rover SPORT 5.0 V8 Autobiography 123tis. km, nové SR",
      "  34 950 €",
      "https://www.bazos.sk/img/1t/656/147605656.jpg?t=1676052953"
    ],
    [
      "✅ Toyota Verso 2.0 D-4D 6° Executive M2014 SR",
      "  7 999 €",
      "https://www.bazos.sk/img/1t/453/147605453.jpg?t=1676052492"
    ],
    [
      "ŠKODA KODIAQ 2.0 TDI SCR STYLE DSG 4X4",
      "  21 950 €",
      "https://www.bazos.sk/img/1t/206/147756206.jpg?t=1676385909"
    ],
    [
      "Škoda Octavia Combi 1.9 TDI PD TOUR",
      "  2 690 €",
      "https://www.bazos.sk/img/1t/560/147392560.jpg?t=1676230042"
    ],
    [
      "Vw Passat b6 2009 2.0 Tdi",
      "  5 690 €",
      "https://www.bazos.sk/img/1t/950/147590950.jpg?t=1676386069"
    ],
    [
      "ŠKODA KODIAQ 2.0 TDI SCR 190K STYLE DSG 4X4",
      "  25 650 €",
      "https://www.bazos.sk/img/1t/057/147748057.jpg?t=1676371882"
    ],
    [
      "Škoda Octavia II 1.9Tdi 77kw",
      "  3 990 €",
      "https://www.bazos.sk/img/1t/268/147590268.jpg?t=1676189452"
    ],
    [
      "Škoda Superb Combi 2.0 TDI 190k 4x4 L&K DSG",
      "  23 800 €",
      "https://www.bazos.sk/img/1t/891/147348891.jpg?t=1675504692"
    ],
    [
      "--REZERVOVANE--ŠKODA OCTAVIA COMBI VRS  2.0 TDI CR  /",
      "  8 800 €",
      "https://www.bazos.sk/img/1t/876/147522876.jpg?t=1676317774"
    ],
    [
      "BMW X4 Xdrive 2.0d Xline - 2018",
      "  27 999 €",
      "https://www.bazos.sk/img/1t/027/147306027.jpg?t=1675410402"
    ],
    [
      "FORD C-Max 1.6 TDCi Trend 2013",
      "  5 999 €",
      "https://www.bazos.sk/img/1t/983/147336983.jpg?t=1675977402"
    ],
    [
      "Volkswagen Passat Alltrack 2.0 TDi DSG 4Motion",
      "  24 500 €",
      "https://www.bazos.sk/img/1t/933/147336933.jpg?t=1675467009"
    ],
    [
      "AUDI Q5 2.0 TDI SPORT Quattro 4x4 Stronic",
      "  29 999 €",
      "https://www.bazos.sk/img/1t/774/147336774.jpg?t=1676397622"
    ],
    [
      "Volkswagen Passat Variant 2.0 TDI DSG EVO 2020 SK ŠPZ",
      "  21 999 €",
      "https://www.bazos.sk/img/1t/595/147336595.jpg?t=1675464762"
    ],
    [
      "ŠKODA KODIAQ  2.0TDI 2019 DSG  4x4  7.MIEST",
      "  26 999 €",
      "https://www.bazos.sk/img/1t/311/147336311.jpg?t=1675462925"
    ],
    [
      "TESLA Model 3 Performance AWD DUAL-MOTOR 530PS 640 NM",
      "  49 999 €",
      "https://www.bazos.sk/img/1t/096/147336096.jpg?t=1675461174"
    ],
    [
      "Volkswagen Passat Alltrack 2.0 TDi DSG 4Motion 2020",
      "  32 999 €",
      "https://www.bazos.sk/img/1t/803/147335803.jpg?t=1675460198"
    ],
    [
      "Volkswagen Passat Alltrack 2.0 TDi DSG 4Motion 2020 SK SPZ",
      "  33 500 €",
      "https://www.bazos.sk/img/1t/088/147334088.jpg?t=1676054792"
    ],
    [
      "Seat Leon 1.9 TDI--105k Style----TOP----FACELIFT----",
      "  4 999 €",
      "https://www.bazos.sk/img/1t/316/147295316.jpg?t=1676230027"
    ],
    [
      "Volkswagen Polo",
      "  3 499 €",
      "https://www.bazos.sk/img/1t/672/147294672.jpg?t=1675864910"
    ],
    [
      "BMW rad 3",
      "  9 000 €",
      "https://www.bazos.sk/img/1t/898/147725898.jpg?t=1676314233"
    ],
    [
      "Predám Volkswagen EOS. 2.0 TURBO",
      "  4 799 €",
      "https://www.bazos.sk/img/1t/793/147722793.jpg?t=1676359326"
    ],
    [
      "ŠKODA OCTAVIA III 2,0 TDI COMBI DSG SPORT line odp DPH ☑️",
      "  17 990 €",
      "https://www.bazos.sk/img/1t/932/147285932.jpg?t=1675355400"
    ],
    [
      "VW TIGUAN 2.0 TDI HIGHLINE R-LINE DSG",
      "  27 450 €",
      "https://www.bazos.sk/img/1t/990/147716990.jpg?t=1676299668"
    ],
    [
      "ŠKODA KODIAQ 2.0 TDI SCR STYLE DSG",
      "  21 950 €",
      "https://www.bazos.sk/img/1t/138/147716138.jpg?t=1676298499"
    ],
    [
      "Honda Civic Tourer 1.6 i-DTEC Elegance",
      "  11 250 €",
      "https://www.bazos.sk/img/1t/070/147283070.jpg?t=1676113500"
    ],
    [
      "Renault Grand Scenic 3 1,9Dci 96Kw 2010",
      "  3 400 €",
      "https://www.bazos.sk/img/1t/443/147278443.jpg?t=1675338952"
    ],
    [
      "Volskwagen Polo 1.4 TDI 59kw CLIMATRONIC",
      "  2 650 €",
      "https://www.bazos.sk/img/1t/367/147663367.jpg?t=1676202109"
    ],
    [
      "Audi A4 Avant 2.0 TDI Quattro 190k_Stronic_4X4_SR_HISTÓRIA",
      "  24 990 €",
      "https://www.bazos.sk/img/1t/633/147694633.jpg?t=1676283926"
    ],
    [
      "VW TIGUAN ALLSPACE 2.0 TDI BMT 4MOTION R-LINE",
      "  25 950 €",
      "https://www.bazos.sk/img/1t/601/147705601.jpg?t=1676283178"
    ],
    [
      "ŠKODA OCTAVIA COMBI STYLE 1.6 TDI DSG 2019 + FULL LED SVETLA",
      "  13 300 €",
      "https://www.bazos.sk/img/1t/747/147268747.jpg?t=1675327351"
    ],
    [
      "Škoda Octavia 2.0 TDi 103kw CR  Elegance",
      "  6 390 €",
      "https://www.bazos.sk/img/1t/776/147568776.jpg?t=1675977610"
    ],
    [
      "FORD S-MAX 2,0TDCI, 1/2016, 7-MIEST",
      "  13 990 €",
      "https://www.bazos.sk/img/1t/085/147258085.jpg?t=1675285180"
    ],
    [
      "AUDI A4 AVANT 2,0TDI, 110KW(150PS), AUTOMAT 5/2018, FULL LED",
      "  16 990 €",
      "https://www.bazos.sk/img/1t/708/147257708.jpg?t=1675284469"
    ],
    [
      "Rozpredam skoda octavia 2,0 tdi 103 kw sedan",
      "   15 €",
      "https://www.bazos.sk/img/1t/338/147686338.jpg?t=1676234421"
    ],
    [
      "Volkswagen Scirocco 2.0 TSI 211k R-Line",
      "  9 500 €",
      "https://www.bazos.sk/img/1t/053/146963053.jpg?t=1675282902"
    ],
    [
      "Škoda Fabia 1.9 tdi Sport line r2008",
      "  4 800 €",
      "https://www.bazos.sk/img/1t/278/147255278.jpg?t=1676228680"
    ],
    [
      "Škoda Citigo 1.0 MPI-kúpené v SR-1.majiteľka-nová TK a EK",
      "  5 000 €",
      "https://www.bazos.sk/img/1t/455/147254455.jpg?t=1675278792"
    ],
    [
      "Volkswagen GOLF, 2.0 TDI 110KW, COMFORTLINE",
      "  13 450 €",
      "https://www.bazos.sk/img/1t/900/147250900.jpg?t=1675273388"
    ],
    [
      "PREDÁM Volkswagen Touareg II 3.0 V6 TDI BMT 4MOTION",
      "  27 990 €",
      "https://www.bazos.sk/img/1t/721/147236721.jpg?t=1675945904"
    ],
    [
      "Volkswagen Touareg II 3.0 V6 TDI 240k BlueMotion Technology",
      "  15 999 €",
      "https://www.bazos.sk/img/1t/018/147054018.jpg?t=1675269708"
    ],
    [
      "Land Rover Range Rover Vogue L322 3.0td6",
      "  6 999 €",
      "https://www.bazos.sk/img/1t/616/147166616.jpg?t=1675270687"
    ],
    [
      "Citroen C-elyseé 1.5bluehdi-75kw-1.majiteľ-kúpené v SR-2019",
      "  7 000 €",
      "https://www.bazos.sk/img/1t/415/147248415.jpg?t=1676304052"
    ],
    [
      "ŠKODA FABIA 1,4 TDI SPORTLINE,ŠÍBER,ALU,",
      "  3 590 €",
      "https://www.bazos.sk/img/1t/017/147239017.jpg?t=1676035840"
    ],
    [
      "Škoda Kodiaq 2.0 TDi DSG SCR Business°4x4°R18°ODPOČET DPH°",
      "  23 890 €",
      "https://www.bazos.sk/img/1t/202/147667202.jpg?t=1676214291"
    ],
    [
      "Škoda Kodiaq 2.0TDI 140kW Style°DSG°4x4°7.MIEST°ODPOČET DPH°",
      "  27 590 €",
      "https://www.bazos.sk/img/1t/600/147234600.jpg?t=1675262648"
    ],
    [
      "Volkswagen Passat B8Variant/2.0TDi/DSG/ACC/LINE/VIRTUAL/2020",
      "  23 499 €",
      "https://www.bazos.sk/img/1t/341/147656341.jpg?t=1676193237"
    ],
    [
      "Nissan Note 1.5 dCi 66kW",
      "  6 599 €",
      "https://www.bazos.sk/img/1t/967/146302967.jpg?t=1675280582"
    ],
    [
      "ŠKODA SUPERB 2.0 TDI 4x4 DSG 140kW/190PS - 118.738km WEBASTO",
      "  23 190 €",
      "https://www.bazos.sk/img/1t/817/147773817.jpg?t=1676442591"
    ],
    [
      "Volkswagen Tiguan R-Line 4Motion 2014",
      "  16 499 €",
      "https://www.bazos.sk/img/1t/818/147773818.jpg?t=1676450153"
    ],
    [
      ".19” ®Originál LETNÁ sada TIGUAN R-line -255/45r19 Pirelli",
      "  2 000 €",
      "https://www.bazos.sk/img/1t/206/146655206.jpg?t=1676407513"
    ],
    [
      "PRODÁM/VYMĚNÍM BMW 640D GRAN COUPE XDRIVE,M-PACKET,FACELIFT",
      "  28 999 €",
      "https://www.bazos.sk/img/1t/829/147215829.jpg?t=1675350558"
    ],
    [
      "Sedadlá pre BMW F11 M-packet ALCANTRA",
      "   850 €",
      "https://www.bazos.sk/img/1t/500/147756500.jpg?t=1676398182"
    ],
    [
      "ROZPREDÁM BMW F11 530xd 190kw 2015",
      "   11 €",
      "https://www.bazos.sk/img/1t/842/147760842.jpg?t=1676447245"
    ],
    [
      "Audi Q5 S-line 2.0 tdi 140kw quattro S tronic Sport",
      "  26 490 €",
      "https://www.bazos.sk/img/1t/684/147761684.jpg?t=1676396312"
    ],
    [
      "Opel Astra Sport Tourer+ ST 1.6 CDTI 110k--odpočet DPH",
      "  9 960 €",
      "https://www.bazos.sk/img/1t/899/147207899.jpg?t=1676370538"
    ],
    [
      "SKODA SUPERB LIMO 2,0TDiCR 190PS DSG PANORAMA XENON KOZA ACC",
      "  23 790 €",
      "https://www.bazos.sk/img/1t/157/147748157.jpg?t=1676372029"
    ],
    [
      "KIA SPORTAGE 1.7 CRDI - 85 kW",
      "  14 990 €",
      "https://www.bazos.sk/img/1t/578/147534578.jpg?t=1676107708"
    ],
    [
      "Ford C-Max 2.0 TDCi Titanium 150_KONÍ_SR_VÝHREVY_PARK_ASSIST",
      "  12 990 €",
      "https://www.bazos.sk/img/1t/338/147743338.jpg?t=1676364929"
    ],
    [
      "Renault Megane III RS 2.0 Turbo",
      "  12 499 €",
      "https://www.bazos.sk/img/1t/873/147179873.jpg?t=1676316874"
    ],
    [
      "Predám BMW X5 F15 XDrive40d 230kw / 2015 / Sport - TOP stav",
      "  29 500 €",
      "https://www.bazos.sk/img/1t/381/147688381.jpg?t=1676398885"
    ],
    [
      "VW Golf 2.0 TDI 110 kw",
      "  13 990 €",
      "https://www.bazos.sk/img/1t/028/147607028.jpg?t=1676132763"
    ],
    [
      "Volkswagen Passat B8 2.0 TDi 2015 DSG6",
      "  12 990 €",
      "https://www.bazos.sk/img/1t/067/147726067.jpg?t=1676313461"
    ],
    [
      "MERCEDES ATEGO 818 - TROJSTRANNÝ SKLÁPAČ / VYKÁPAČ EU4",
      "  25 000 €",
      "https://www.bazos.sk/img/1t/215/147601215.jpg?t=1676043837"
    ],
    [
      "Seat Leon 1.4TSI-CNG-166tis km-odpočet DPH",
      "  9 000 €",
      "https://www.bazos.sk/img/1t/866/147166866.jpg?t=1676370585"
    ],
    [
      "VW T5,T6 plechové disky 16\"pneu 16\"Michelin",
      "   300 €",
      "https://www.bazos.sk/img/1t/381/147754381.jpg?t=1676382590"
    ],
    [
      "Volkswagen Golf Combi DSG - Virtual Cockpit",
      "  12 999 €",
      "https://www.bazos.sk/img/1t/930/147357930.jpg?t=1675519204"
    ],
    [
      "Škoda Rapid TSI 81 kw",
      "  10 990 €",
      "https://www.bazos.sk/img/1t/228/147596228.jpg?t=1676441038"
    ],
    [
      "AUDI A5 SPORTBACK 40 2.0 TDI QUATTRO S TRONIC",
      "  32 550 €",
      "https://www.bazos.sk/img/1t/959/147593959.jpg?t=1676032196"
    ],
    [
      "Volkswagen Polo 1.4i 16V",
      "  3 499 €",
      "https://www.bazos.sk/img/1t/128/147355128.jpg?t=1675874549"
    ],
    [
      "Volkswagen Passat B8 , R-line,DSG/ACC/kamera/",
      "  18 999 €",
      "https://www.bazos.sk/img/1t/778/147592778.jpg?t=1676029746"
    ],
    [
      "ŠKODA OCTAVIA COMBI II 2.0 TDI RS",
      "  8 900 €",
      "https://www.bazos.sk/img/1t/243/147156243.jpg?t=1675078093"
    ],
    [
      "VW Passat B5 2,5 TDi 4x4 na náhradne diely,Nd",
      "Dohodou",
      "https://www.bazos.sk/img/1t/330/147518330.jpg?t=1676366461"
    ],
    [
      "Skoda Octavia Combi Rs",
      "  3 690 €",
      "https://www.bazos.sk/img/1t/685/147692685.jpg?t=1676267920"
    ],
    [
      "Škoda Octavia Combi 2.0Tdi 135kw 4x4+69tis KMModel 2018",
      "  17 999 €",
      "https://www.bazos.sk/img/1t/001/147136001.jpg?t=1676387024"
    ],
    [
      "Škoda Octavia 1,9 TDi 81kw XENON STYLE MODEL 2004",
      "  2 990 €",
      "https://www.bazos.sk/img/1t/831/147569831.jpg?t=1675975714"
    ],
    [
      "Mercedes benz Sprinter 413cdi  2.2cdi",
      "  8 200 €",
      "https://www.bazos.sk/img/1t/436/147450436.jpg?t=1676019616"
    ],
    [
      "Volkswagen Golf 7 1.6Tdi 81kw Nová STK ,EK",
      "  8 499 €",
      "https://www.bazos.sk/img/1t/279/147129279.jpg?t=1676391826"
    ],
    [
      "SEAT LEON FR 2.0TDI 135kW 184hp DSG, ACC, DCC, Čierny Strop",
      "  17 499 €",
      "https://www.bazos.sk/img/1t/949/147639949.jpg?t=1676411119"
    ],
    [
      "MERCEDES-BENZ GLE SUV 250D 4MATIC A/T 9 FULL LED NAVI",
      "  28 000 €",
      "https://www.bazos.sk/img/1t/320/147721320.jpg?t=1676306397"
    ],
    [
      "škoda fabia combi",
      "  2 650 €",
      "https://www.bazos.sk/img/1t/731/147720731.jpg?t=1676369992"
    ],
    [
      "ŠKODA KODIAQ 2.0 TDI SCR 190K STYLE DSG 4X4",
      "  24 350 €",
      "https://www.bazos.sk/img/1t/956/147562956.jpg?t=1675971398"
    ],
    [
      "SEAT LEON TOP SPORT 1,9 TDI 110 KW,ARL",
      "  3 990 €",
      "https://www.bazos.sk/img/1t/221/147122221.jpg?t=1676035868"
    ],
    [
      "Zimná sada SHARAN",
      "   150 €",
      "https://www.bazos.sk/img/1t/452/147672452.jpg?t=1676212019"
    ],
    [
      "ŠKODA SUPERB COMBI 2.0 TDI L&K DSG EU6 / MOŽNÝ ODPOČET DPH",
      "  21 950 €",
      "https://www.bazos.sk/img/1t/026/147559026.jpg?t=1676032604"
    ],
    [
      "Zimná sada Octavia 16” atd.",
      "   150 €",
      "https://www.bazos.sk/img/1t/542/147668542.jpg?t=1676206302"
    ],
    [
      "ŠKODA OCTAVIA COMBI 1.9TDI 96KW 131PS COLLECTION ŤAŽNÉ R16",
      "  3 999 €",
      "https://www.bazos.sk/img/1t/389/147712389.jpg?t=1676305224"
    ],
    [
      "Škoda Octavia 1.9 TDI",
      "  5 200 €",
      "https://www.bazos.sk/img/1t/636/147575636.jpg?t=1676002322"
    ],
    [
      "motor 2,0 tdi kod motora BMR",
      "   400 €",
      "https://www.bazos.sk/img/1t/642/147534642.jpg?t=1675889955"
    ],
    [
      "Škoda Octavia Combi 2.0 TDI 110kW°63.414KM°LED°ODPOČET DPH°",
      "  17 590 €",
      "https://www.bazos.sk/img/1t/078/147532078.jpg?t=1676290497"
    ],
    [
      "VW GOLF VII VARIANT 2.0 TDI HIGHLINE, NAVI+R18+ŤAŽNÉ+BIXENÓN",
      "  12 299 €",
      "https://www.bazos.sk/img/1t/487/147452487.jpg?t=1675711571"
    ],
    [
      "Disky 5x112 17\" aj pneu",
      "   150 €",
      "https://www.bazos.sk/img/1t/651/147640651.jpg?t=1676142112"
    ],
    [
      "FORD GALAXY 7M TITANIUM",
      "  8 990 €",
      "https://www.bazos.sk/img/1t/469/147640469.jpg?t=1676142088"
    ],
    [
      "Ford S-Max 2.0 TDCI 103kW bez DPF",
      "  3 600 €",
      "https://www.bazos.sk/img/1t/153/147759153.jpg?t=1676392086"
    ],
    [
      "AUDI A8 LONG 3.0 TDI V6 QUATTRO TIPTRONIC",
      "  17 950 €",
      "https://www.bazos.sk/img/1t/438/147523438.jpg?t=1675869128"
    ],
    [
      "IVECO DAILY - 35C15 - 3.0L trojstranný vyklápač sklápač 3,5t",
      "  17 390 €",
      "https://www.bazos.sk/img/1t/147/147079147.jpg?t=1675507098"
    ],
    [
      "Škoda Roomster Scout 1.6 TDI 2013 156tis panorama",
      "  6 099 €",
      "https://www.bazos.sk/img/1t/632/147077632.jpg?t=1674911524"
    ],
    [
      "Škoda octavia 2.0 tdi 4x4 Scout  alcantara",
      "  5 450 €",
      "https://www.bazos.sk/img/1t/147/147556147.jpg?t=1676262325"
    ],
    [
      "VOLKSWAGEN TOUAREG 3.0 V6 TDI TIPTRONIC MODEL 2006 TOP",
      "  6 350 €",
      "https://www.bazos.sk/img/1t/646/147069646.jpg?t=1674904801"
    ],
    [
      "VOLKSWAGEN CADDY LIFE 1.9TDI DSG 7-MIESTNE INVALIDNÁ RAMPA",
      "  7 250 €",
      "https://www.bazos.sk/img/1t/249/147070249.jpg?t=1674904631"
    ],
    [
      "VOLKSWAGEN TOURAN 2.0TDI DSG 103KW HIGHLINE 7-MIESTNY TOP",
      "  3 850 €",
      "https://www.bazos.sk/img/1t/381/147068381.jpg?t=1674903959"
    ],
    [
      "MERCEDES-BENZ E320CDI AUTOMAT W211 AVANTGARDE TOP",
      "  5 450 €",
      "https://www.bazos.sk/img/1t/247/147068247.jpg?t=1674903766"
    ],
    [
      "RENAULT KOLEOS 2.0DCI 16V 4X4 DYNAMIQUE MODEL 2009",
      "  4 990 €",
      "https://www.bazos.sk/img/1t/698/147070698.jpg?t=1674903594"
    ],
    [
      "Mercedes Sprinter 515cdi chladiak",
      "  13 000 €",
      "https://www.bazos.sk/img/1t/265/147546265.jpg?t=1675933919"
    ],
    [
      "Opel Insignia 2014 2.0 cdti 120kw M6",
      "  7 900 €",
      "https://www.bazos.sk/img/1t/143/147728143.jpg?t=1676364048"
    ],
    [
      "Škoda Octavia Combi SCOUT 2.0TDI CR DSG 4x4 ŠÍBER 2013 TOP",
      "  8 750 €",
      "https://www.bazos.sk/img/1t/409/146571409.jpg?t=1674895156"
    ],
    [
      "Audi A3 Sportback 2.0TDi - xenon",
      "  4 699 €",
      "https://www.bazos.sk/img/1t/626/147506626.jpg?t=1676180189"
    ],
    [
      "SEAT Leon Cupra R 154KW+BREMBO+ model 2004",
      "  6 350 €",
      "https://www.bazos.sk/img/1t/035/147018035.jpg?t=1674995887"
    ],
    [
      "Predne svetla volkswagen passat b7 ziarovkove",
      "   70 €",
      "https://www.bazos.sk/img/1t/627/147494627.jpg?t=1675803128"
    ],
    [
      "⏩ Volkswagen Tiguan 2.0 TDI SCR BMT 190k 4MOTION Highline",
      "  24 500 €",
      "https://www.bazos.sk/img/1t/137/147570137.jpg?t=1675974705"
    ],
    [
      "SUZUKI IGNIS",
      "  1 999 €",
      "https://www.bazos.sk/img/1t/353/147725353.jpg?t=1676313152"
    ],
    [
      "Opel Meriva 1,4i 2017 38 000km 1.majitel",
      "  7 999 €",
      "https://www.bazos.sk/img/1t/035/147725035.jpg?t=1676311540"
    ],
    [
      "ŠKODA OCTAVIA KOMBI STYLE+ III FACELIFT, 2,0TDI DSG 2/2018",
      "  15 490 €",
      "https://www.bazos.sk/img/1t/828/147049828.jpg?t=1674841760"
    ],
    [
      "Toyota Aygo 1.0 51kw VVT-I-kúpená v SR-ročník 2017-65tis.km",
      "  7 000 €",
      "https://www.bazos.sk/img/1t/069/147048069.jpg?t=1675794625"
    ],
    [
      "VW SHARAN 2.0 TDI 150PS 7MIESTNY BUSINESS  PANORÁMA  TOP",
      "  19 999 €",
      "https://www.bazos.sk/img/1t/130/147048130.jpg?t=1676444906"
    ],
    [
      "Toyota Avensis Combi 2.0 D-4D RV:2010 250 000KM ZACHOVALE",
      "  5 799 €",
      "https://www.bazos.sk/img/1t/303/147046303.jpg?t=1676040457"
    ],
    [
      "KIA SPORTAGE CRDI - 100kW  4x4",
      "  16 990 €",
      "https://www.bazos.sk/img/1t/672/147273672.jpg?t=1675894092"
    ],
    [
      "VW ARTEON 2.0 TDI SCR BMT 190K R-LINE DSG",
      "  28 950 €",
      "https://www.bazos.sk/img/1t/399/147485399.jpg?t=1675784956"
    ],
    [
      "Škoda Octavia Combi II 1.6 FSI Elegance",
      "  3 680 €",
      "https://www.bazos.sk/img/1t/031/147484031.jpg?t=1676219460"
    ],
    [
      "Audi A4 Limousine B8,5 FL 2012 TFSI 125kw SVK Auto LEASING",
      "  9 900 €",
      "https://www.bazos.sk/img/1t/457/147479457.jpg?t=1676131072"
    ],
    [
      "Fiat Ducato Maxi 2.3Jtd/KLIMA,NEZ.TOPENÍ,NAVI,KAMERA/173TKM",
      "  18 300 €",
      "https://www.bazos.sk/img/1t/469/147591469.jpg?t=1676027351"
    ],
    [
      "MERCEDES ATEGO - NOVÝ HÁKOVÝ NOSIČ KONTAJNEROV + HYDR. RUKA",
      "  38 900 €",
      "https://www.bazos.sk/img/1t/102/147027102.jpg?t=1675879965"
    ],
    [
      "MAN TGM 15.340 TROJSTRANNÝ SKLÁPAČ + HYDRAULICKÁ RUKA EURO5",
      "  48 500 €",
      "https://www.bazos.sk/img/1t/469/147027469.jpg?t=1675879984"
    ],
    [
      "Suzuki SX4 Fiat Sediči 4WD 1.6 VVT.88KW 4x4.2014",
      "  9 999 €",
      "https://www.bazos.sk/img/1t/418/147553418.jpg?t=1676119438"
    ],
    [
      "Suzuki SX4 S-cross 4x4 Allgrip 1.6VVT.88KW Benzín Elegance",
      "  14 999 €",
      "https://www.bazos.sk/img/1t/056/147576056.jpg?t=1676349120"
    ],
    [
      "⏩ BMW X3 xDrive20d Luxury Line A/T",
      "  30 000 €",
      "https://www.bazos.sk/img/1t/985/147570985.jpg?t=1675974417"
    ],
    [
      "Dvere skoda super 2 sedan",
      "   200 €",
      "https://www.bazos.sk/img/1t/676/147453676.jpg?t=1675799649"
    ],
    [
      "Mercedes ML 350 CDI 4Matic",
      "  12 700 €",
      "https://www.bazos.sk/img/1t/841/147607841.jpg?t=1676294381"
    ],
    [
      "Audi A4 3.0 TDI V6 Quattro B8 sedan",
      "  6 890 €",
      "https://www.bazos.sk/img/1t/272/147452272.jpg?t=1676219446"
    ],
    [
      "PREDAM FIAT BRAVO 1.6 JTD MULTIJET 88KW RV 2009 KM193600",
      "  2 750 €",
      "https://www.bazos.sk/img/1t/423/147660423.jpg?t=1676229264"
    ],
    [
      "VOLKSWAGEN TRANSPORTER T5 1.9 TDI 9-MIESTNY NAVIGACI WEBASTO",
      "  8 499 €",
      "https://www.bazos.sk/img/1t/382/147661382.jpg?t=1676229013"
    ],
    [
      "OPEL CORZA C 1.0 BENZIN 44KW NAJ-87300KM ORG",
      "  1 450 €",
      "https://www.bazos.sk/img/1t/606/147661606.jpg?t=1676228896"
    ],
    [
      "BMW 316 TI INDIVIDUAL M-PACKET ANGEL EYES",
      "  3 499 €",
      "https://www.bazos.sk/img/1t/019/147663019.jpg?t=1676228753"
    ],
    [
      "Volkswagen Tiguan 2.0 TDI SCR BMT 4MOTION",
      "  18 000 €",
      "https://www.bazos.sk/img/1t/265/147009265.jpg?t=1675870863"
    ],
    [
      "Rezerve Škoda Superb 3 Facelift Combi 2.0 TDI SCR Style DSG",
      "  19 000 €",
      "https://www.bazos.sk/img/1t/353/147009353.jpg?t=1675891900"
    ],
    [
      "Rezerve Škoda Octavia Combi 1.6 TDI 115k Style DSG Canton",
      "  14 700 €",
      "https://www.bazos.sk/img/1t/110/147011110.jpg?t=1675960947"
    ],
    [
      "Škoda Octavia Combi DSG - 2019",
      "  14 990 €",
      "https://www.bazos.sk/img/1t/473/147530473.jpg?t=1676130954"
    ],
    [
      "Fiat 500L 1.3 16V MultiJet MTA F1 Living 7miest Automat ťažn",
      "  8 399 €",
      "https://www.bazos.sk/img/1t/735/146998735.jpg?t=1674896597"
    ],
    [
      "Toyota RAV4 II 2.0D4D 85KW 4x4 DOVOZ TALIANSKO BEZ KOROZIE",
      "  4 000 €",
      "https://www.bazos.sk/img/1t/198/147603198.jpg?t=1676221495"
    ],
    [
      "Seat Altea XL 1.6Tdi CR I-Tech TV Monitor",
      "  6 900 €",
      "https://www.bazos.sk/img/1t/057/147526057.jpg?t=1675916225"
    ],
    [
      "ŠKODA SUPERB COMBI 2.0 TDI 190K 4X4 STYLE DSG",
      "  20 650 €",
      "https://www.bazos.sk/img/1t/488/147445488.jpg?t=1675699089"
    ],
    [
      "MERCEDES-BENZ ATEGO 1618 SKLÁPAČ S3 HYDRAULICKÁ RUKA ATLAS",
      "  34 990 €",
      "https://www.bazos.sk/img/1t/988/147005988.jpg?t=1674913345"
    ],
    [
      "Volkswagen Passat 3.6 Highline 2014 DSG 4Motion",
      "  13 990 €",
      "https://www.bazos.sk/img/1t/690/147598690.jpg?t=1676226754"
    ],
    [
      "BMW RAD 7 740LD XDRIVE A/T / MOŽNÝ ODPOČET DPH",
      "  42 950 €",
      "https://www.bazos.sk/img/1t/373/147442373.jpg?t=1675871949"
    ],
    [
      "...REZERVOVANÉ...ŠKODA OCTAVIA COMBI 2.0 TDI STYLE DSG",
      "  15 950 €",
      "https://www.bazos.sk/img/1t/004/147004004.jpg?t=1676113363"
    ],
    [
      "❇️ SEAT LEON ST COMBI FR 2.0 TDI DSG 2019 VIRTUAL,PANO,ŤAŽNÉ",
      "  15 850 €",
      "https://www.bazos.sk/img/1t/615/147003615.jpg?t=1675621576"
    ],
    [
      "Škoda Octavia Combi 2.0 TDI Style DSG EU6 PANORAMA",
      "  15 990 €",
      "https://www.bazos.sk/img/1t/102/147037102.jpg?t=1675240174"
    ],
    [
      "BMW RAD 3 318D A/T",
      "  9 350 €",
      "https://www.bazos.sk/img/1t/604/147437604.jpg?t=1675687291"
    ],
    [
      "Volkswagen Passat Variant 2.0 TDI BMT Highline VIRTUAL",
      "  16 590 €",
      "https://www.bazos.sk/img/1t/240/147038240.jpg?t=1675240249"
    ],
    [
      "Volkswagen Golf 7 1.4 TSI  125k Comfortline EU6",
      "  13 299 €",
      "https://www.bazos.sk/img/1t/697/147114697.jpg?t=1676383969"
    ],
    [
      "Volkswagen Tiguan 2.0 TDI SCR BMT 4MOTION Comfortline",
      "  18 800 €",
      "https://www.bazos.sk/img/1t/248/147353248.jpg?t=1675684446"
    ],
    [
      "VOLKSWAGEN ARTEON 2.0 TSI BMT R-LINE DSG",
      "  30 850 €",
      "https://www.bazos.sk/img/1t/523/147433523.jpg?t=1675681477"
    ],
    [
      "ŠKODA OCTAVIA COMBI II 2.0 TDI, XENÓNY, PEGASUS R17, ŤAŽNÉ",
      "  4 999 €",
      "https://www.bazos.sk/img/1t/223/147236223.jpg?t=1675249709"
    ],
    [
      "Škoda Octavia 2,0Tdi RS Facelift",
      "  17 800 €",
      "https://www.bazos.sk/img/1t/641/147656641.jpg?t=1676193939"
    ],
    [
      "Octavia RS combi 2.0 TDi",
      "  16 999 €",
      "https://www.bazos.sk/img/1t/288/147654288.jpg?t=1676187855"
    ],
    [
      "1978 Mercedes-Benz SL450 | 71k mil | Hard Top",
      "  16 990 €",
      "https://www.bazos.sk/img/1t/978/147537978.jpg?t=1675912388"
    ],
    [
      "Volkswagen Crafter 2.0 TDi TIPTRONIC 130 kW L5H4 2019",
      "  33 900 €",
      "https://www.bazos.sk/img/1t/194/147415194.jpg?t=1675637421"
    ],
    [
      "Volkswagen Crafter 2.0 TDi TIPTRONIC 130 kW L5H4 XXL 2019",
      "  33 999 €",
      "https://www.bazos.sk/img/1t/156/147415156.jpg?t=1675637216"
    ],
    [
      "Škoda rapid 1.6TDI",
      "  7 300 €",
      "https://www.bazos.sk/img/1t/028/147768028.jpg?t=1676410443"
    ],
    [
      "AUDI A4 SPORT 2.0TDI 140KW/190PS, 2018, WEBASTO",
      "  25 290 €",
      "https://www.bazos.sk/img/1t/858/146977858.jpg?t=1675288618"
    ],
    [
      "Ford Fiesta 1.25i 2013 benzín",
      "  4 699 €",
      "https://www.bazos.sk/img/1t/047/147372047.jpg?t=1675544606"
    ],
    [
      "⏩ Volvo V60 D3 Inscription",
      "  21 600 €",
      "https://www.bazos.sk/img/1t/218/147570218.jpg?t=1675975340"
    ],
    [
      "⏩ Ford Kuga 2.0 TDCi Duratorq Anniversary A/T",
      "  16 500 €",
      "https://www.bazos.sk/img/1t/354/147570354.jpg?t=1675974620"
    ],
    [
      "⏩ BMW X1 sDrive 18d Sport Line A/T",
      "  18 300 €",
      "https://www.bazos.sk/img/1t/636/147570636.jpg?t=1675974549"
    ],
    [
      "⏩ Audi Q5 2.0 TDI 190k quattro S tronic Sport",
      "  30 600 €",
      "https://www.bazos.sk/img/1t/802/147570802.jpg?t=1675974497"
    ],
    [
      "⏩ Škoda Octavia Combi 1.0 TSI 115k Style DSG",
      "  11 900 €",
      "https://www.bazos.sk/img/1t/900/147570900.jpg?t=1675974460"
    ],
    [
      "⏩ Škoda Superb Combi 2.0 TDI 4x4 Style",
      "  18 300 €",
      "https://www.bazos.sk/img/1t/145/147571145.jpg?t=1675974366"
    ],
    [
      "⏩ Volvo V90 CC D4 2.0L Cross Country AWD A/T",
      "  28 500 €",
      "https://www.bazos.sk/img/1t/219/147571219.jpg?t=1675974280"
    ],
    [
      "⏩ Škoda Superb Combi 2.0 TSI 4x4 LK DSG",
      "  23 500 €",
      "https://www.bazos.sk/img/1t/307/147571307.jpg?t=1675974236"
    ],
    [
      "⏩Volvo XC90 XC 90 D4 Drive-E Momentum 7m A/T",
      "  33 600 €",
      "https://www.bazos.sk/img/1t/365/147571365.jpg?t=1675974204"
    ],
    [
      "⏩ Škoda Superb 2.0 TDI Style DSG EU6",
      "  21 000 €",
      "https://www.bazos.sk/img/1t/470/147571470.jpg?t=1675974162"
    ],
    [
      "BMW X5 E70 FACELIFT 3,0d 180kw",
      "  15 900 €",
      "https://www.bazos.sk/img/1t/768/147256768.jpg?t=1675943586"
    ],
    [
      "Rozpredam skoda octavia 2,0 tdi 103 kw combi",
      "   15 €",
      "https://www.bazos.sk/img/1t/550/147410550.jpg?t=1675626716"
    ],
    [
      "BMW E60 525i M PACKET - LPG",
      "  5 199 €",
      "https://www.bazos.sk/img/1t/994/147569994.jpg?t=1676378457"
    ],
    [
      "Golf iv 4 1.8t 110kw agu po úprave 150kw nd",
      "  3 000 €",
      "https://www.bazos.sk/img/1t/373/147763373.jpg?t=1676405299"
    ],
    [
      "Suzuki Vitara 1.4 Booster Jet Allgrip 2019",
      "  16 999 €",
      "https://www.bazos.sk/img/1t/312/146972312.jpg?t=1674669984"
    ],
    [
      "Seat Tarraco 2.0 TDI 150 Xcellence 4Drive DSG -Odpočet DPH-",
      "  25 250 €",
      "https://www.bazos.sk/img/1t/427/147762427.jpg?t=1676397667"
    ],
    [
      "Škoda Superb Combi III Exclusive DSG+F1-2.0 TDi 140Kw 190Ps.",
      "  17 300 €",
      "https://www.bazos.sk/img/1t/388/146968388.jpg?t=1676400032"
    ],
    [
      "VW PASSAT B8 highline 2.0tdi ACC/MATRIX/VIRTUAL/",
      "  16 199 €",
      "https://www.bazos.sk/img/1t/676/147758676.jpg?t=1676390344"
    ],
    [
      "BMW F34-GRAN TURISMO| M-SPORT| BLACK",
      "  19 300 €",
      "https://www.bazos.sk/img/1t/728/147416728.jpg?t=1676202175"
    ],
    [
      "Škoda Octavia 1.0tsi",
      "  14 499 €",
      "https://www.bazos.sk/img/1t/337/147527337.jpg?t=1676128934"
    ],
    [
      "Škoda Superb 2.0 TDI Style EU6",
      "  15 999 €",
      "https://www.bazos.sk/img/1t/466/147229466.jpg?t=1675262515"
    ],
    [
      "⭐⭐Škoda Superb combi ⭐⭐ Sportline 4x4 DSG canton",
      "  23 600 €",
      "https://www.bazos.sk/img/1t/448/146958448.jpg?t=1674987865"
    ],
    [
      "Škoda Octavia, 1,6 TDI, 77kW, r.v. 2011, sedan",
      "  4 800 €",
      "https://www.bazos.sk/img/1t/578/147744578.jpg?t=1676371304"
    ],
    [
      "LEXUS GS 300, 3.0 benzín,183kw/249PS, r.v.2007.,sedan",
      "  7 500 €",
      "https://www.bazos.sk/img/1t/819/147743819.jpg?t=1676371220"
    ],
    [
      "Volkswagen vw Touareg 3.0 V6 TDI",
      "  8 499 €",
      "https://www.bazos.sk/img/1t/877/147624877.jpg?t=1676111926"
    ],
    [
      "Audi A5 2.0 tdi sportback",
      "  12 999 €",
      "https://www.bazos.sk/img/1t/059/147625059.jpg?t=1676111798"
    ],
    [
      "Škoda Superb 2.0 TDI SCR Sportline",
      "  23 999 €",
      "https://www.bazos.sk/img/1t/082/147152082.jpg?t=1675161075"
    ],
    [
      "AUDI A3, ŠKODA OCTAVIA III ,5x112 R18 Kompletná sada ☑️",
      "   899 €",
      "https://www.bazos.sk/img/1t/308/147511308.jpg?t=1675849580"
    ],
    [
      "Škoda SUPERB SPORTLINE 4x4 2.0TDi DSG 140kW ACC/LANE/MŔTVY",
      "  19 899 €",
      "https://www.bazos.sk/img/1t/429/147743429.jpg?t=1676366828"
    ],
    [
      "ŠKODA OCTAVIA COMBI III STYLE 2.0TDI 4x4 110KW",
      "  11 990 €",
      "https://www.bazos.sk/img/1t/082/147620082.jpg?t=1676105752"
    ],
    [
      "jeep grand cherokee zj 2.5td",
      "  6 600 €",
      "https://www.bazos.sk/img/1t/469/146046469.jpg?t=1676229659"
    ],
    [
      "Škoda Superb 2.0l 110kw 07/ 2018 DSG, 110tis km",
      "  18 800 €",
      "https://www.bazos.sk/img/1t/389/147535389.jpg?t=1675892657"
    ],
    [
      "BMW Rad 5 520d xDrive 8A/T 190PS BOWERS & WILKINS",
      "  24 500 €",
      "https://www.bazos.sk/img/1t/904/147730904.jpg?t=1676324253"
    ],
    [
      "VOLKSWAGEN JETTA 2.0TDI  HIGHLINE 110KW/150PS 2015",
      "  13 790 €",
      "https://www.bazos.sk/img/1t/049/146938049.jpg?t=1676358938"
    ],
    [
      "OCTAVIA COMBI 1,9tdi ELEGANCE 81 KW",
      "  3 700 €",
      "https://www.bazos.sk/img/1t/187/147581187.jpg?t=1676319593"
    ],
    [
      "Mercedes - Benz GLE coupe 350d AMG 94000km r.v 2018",
      "  45 000 €",
      "https://www.bazos.sk/img/1t/164/147526164.jpg?t=1675886406"
    ],
    [
      "Jeep Patriot 2.2 CRD 120kw",
      "  7 999 €",
      "https://www.bazos.sk/img/1t/684/147723684.jpg?t=1676314391"
    ],
    [
      "Jeep Cherokee 2.8 CRD 130KW",
      "  8 999 €",
      "https://www.bazos.sk/img/1t/924/147724924.jpg?t=1676314264"
    ],
    [
      "Land Rover Discovery 3   2.7 TDV6 SE",
      "  7 899 €",
      "https://www.bazos.sk/img/1t/111/147725111.jpg?t=1676314680"
    ],
    [
      "Porsche Panamera pdk GTS",
      "  26 000 €",
      "https://www.bazos.sk/img/1t/976/147008976.jpg?t=1675880583"
    ],
    [
      "Audi Q7 S-line",
      "  22 500 €",
      "https://www.bazos.sk/img/1t/135/145897135.jpg?t=1675975522"
    ],
    [
      "Skoda Octavia combi 1.9tdi 4x4",
      "  2 300 €",
      "https://www.bazos.sk/img/1t/014/147604014.jpg?t=1676392699"
    ],
    [
      "VW CARAVELLE 4MOTION",
      "   1 €",
      "https://www.bazos.sk/img/1t/600/146926600.jpg?t=1675520735"
    ],
    [
      "Mercedes E 9G tronic",
      "  20 200 €",
      "https://www.bazos.sk/img/1t/430/147718430.jpg?t=1676301365"
    ],
    [
      "Mercedes-Benz GLA 200d 2018",
      "  23 490 €",
      "https://www.bazos.sk/img/1t/782/147439782.jpg?t=1675690835"
    ],
    [
      "Volkswagen Tiguan Allspace 2.0 BiTDI 4X4_DSG_VIRTUAL_239k_SR",
      "  29 990 €",
      "https://www.bazos.sk/img/1t/838/147223838.jpg?t=1675857682"
    ],
    [
      "BMW 420d xDrive Gran Coupé Luxury_Line 2016_AUTOMAT_4X4_190K",
      "  19 990 €",
      "https://www.bazos.sk/img/1t/018/147593018.jpg?t=1676030110"
    ],
    [
      "BMW X3 3.0d A/T M-Packet 160KW-218PS  PANORAMA",
      "  6 800 €",
      "https://www.bazos.sk/img/1t/013/147616013.jpg?t=1676402492"
    ],
    [
      "Volvo V90 D3 2.0L Momentum A/T 110kW diesel",
      "  21 990 €",
      "https://www.bazos.sk/img/1t/371/147324371.jpg?t=1676388386"
    ],
    [
      "Škoda Octavia 1.9TDI 4x4",
      "  2 900 €",
      "https://www.bazos.sk/img/1t/394/147695394.jpg?t=1676271303"
    ],
    [
      "Ford Transit  Bez investície",
      "  8 599 €",
      "https://www.bazos.sk/img/1t/067/146616067.jpg?t=1675662405"
    ],
    [
      "⏩ Ford Focus 1.0 EcoBoost Trend Plus",
      "  7 900 €",
      "https://www.bazos.sk/img/1t/527/147570527.jpg?t=1675974581"
    ],
    [
      "VOLKSWAGEN GOLF 7 1,6 TDI DSG Variant ☑️",
      "  13 990 €",
      "https://www.bazos.sk/img/1t/402/147454402.jpg?t=1675714846"
    ],
    [
      "Škoda Octavia RS 2.0 TFSi Combi- 147kW, 2008, TOP",
      "  5 900 €",
      "https://www.bazos.sk/img/1t/451/147411451.jpg?t=1676035906"
    ],
    [
      "Škoda Superb Combi TDi 4x4 DSG MAX.VYBAVA,PANORAMA",
      "  28 900 €",
      "https://www.bazos.sk/img/1t/077/146896077.jpg?t=1675798303"
    ],
    [
      "JEEP GRAND CHEROKEE SUMMIT",
      "  19 990 €",
      "https://www.bazos.sk/img/1t/854/147172854.jpg?t=1676191256"
    ],
    [
      "Bmw 428i Mperformance",
      "  20 999 €",
      "https://www.bazos.sk/img/1t/792/147426792.jpg?t=1675969912"
    ],
    [
      "NISSAN X-TRAIL 4 x 4  Diesel odpočet dph",
      "  9 100 €",
      "https://www.bazos.sk/img/1t/790/147490790.jpg?t=1675795767"
    ],
    [
      "VW GOLF 7 COMBI 2.0 TDI HIGHLINE, 2014+NAVI+R17+CHRÓM+XENÓNY",
      "  10 299 €",
      "https://www.bazos.sk/img/1t/827/147128827.jpg?t=1675076012"
    ],
    [
      "Hyundai i40 1.7crdi 2013",
      "  3 999 €",
      "https://www.bazos.sk/img/1t/524/147368524.jpg?t=1675800776"
    ],
    [
      "Ford C-Max 2.0TDCI Duratorq 150PS AUTOMAT/NAVI/KLIMA/ALU/",
      "  7 700 €",
      "https://www.bazos.sk/img/1t/283/147490283.jpg?t=1675799782"
    ],
    [
      "Audi A3 2.0 TDi CR - 3x S-line, Panoráma",
      "  8 650 €",
      "https://www.bazos.sk/img/1t/557/146846557.jpg?t=1675801919"
    ],
    [
      "VW SHARAN 1.9TDI 96KW 2007",
      "  3 800 €",
      "https://www.bazos.sk/img/1t/895/147563895.jpg?t=1675970015"
    ],
    [
      "Skoda OCTAVIA 2.0 TDI L&K",
      "  4 099 €",
      "https://www.bazos.sk/img/1t/666/147563666.jpg?t=1676405895"
    ],
    [
      "Suzuki sx4   ,,4x4,, BENZÍN,,84212km.",
      "  8 390 €",
      "https://www.bazos.sk/img/1t/420/147485420.jpg?t=1676100174"
    ],
    [
      "Škoda SUPERB 2.0 TDi AUTOMAT SPORTLINE 1.MAJITEĽ 160.000km",
      "  19 750 €",
      "https://www.bazos.sk/img/1t/581/146886581.jpg?t=1675260975"
    ],
    [
      "Volkswagen Golf 1.0 TSI BMT 110k Comfortline EU6",
      "  12 850 €",
      "https://www.bazos.sk/img/1t/184/146554184.jpg?t=1676214665"
    ],
    [
      "VW TOUAREG 3.0 V6 TDI SCR 286K 4MOTION / MOŽNÝ ODPOČET DPH",
      "  50 950 €",
      "https://www.bazos.sk/img/1t/786/147323786.jpg?t=1675434846"
    ],
    [
      "PREDÁM alebo VYMENÍM, ponúknite +/- doplatky",
      "  5 599 €",
      "https://www.bazos.sk/img/1t/463/146869463.jpg?t=1675349418"
    ],
    [
      "Škoda Superb Combi 2.0 TDi Style DSG 6",
      "  16 800 €",
      "https://www.bazos.sk/img/1t/182/147670182.jpg?t=1676208886"
    ],
    [
      "Volkswagen Arteon 2.0 TSI BMT R-Line 4MOTION DSG",
      "  25 900 €",
      "https://www.bazos.sk/img/1t/921/147557921.jpg?t=1675972296"
    ],
    [
      "VW PASSAT VARIANT ELEGANCE 2,0 TDI R-line",
      "  35 000 €",
      "https://www.bazos.sk/img/1t/417/147358417.jpg?t=1675915462"
    ],
    [
      "VOLKSWAGEN SHARAN 2.0 TDI BMT Highline , xenon,webasto",
      "  11 890 €",
      "https://www.bazos.sk/img/1t/201/147489201.jpg?t=1676203942"
    ],
    [
      "Renault Kangoo II Break Energy dCi 5_MIESTNE_10/2017_SR",
      "  8 990 €",
      "https://www.bazos.sk/img/1t/669/147552669.jpg?t=1675940197"
    ],
    [
      "Škoda Octavia Combi RS 1.8T 132KW na SK ŠPZ Ťažné zariadenie",
      "  4 999 €",
      "https://www.bazos.sk/img/1t/368/147661368.jpg?t=1676275066"
    ],
    [
      "Predam audi A6 avant 4g 3.0 TDI quattro",
      "  12 500 €",
      "https://www.bazos.sk/img/1t/013/147552013.jpg?t=1676297791"
    ],
    [
      "Porsche Cayenne 3.0 TDI 180KW  PANORAMA NOVÉ ROZVODY",
      "  21 900 €",
      "https://www.bazos.sk/img/1t/618/147469618.jpg?t=1675763770"
    ],
    [
      "ŠKODA OCTAVIA 1.6TDI 77kw (2012)",
      "  6 000 €",
      "https://www.bazos.sk/img/1t/516/145721516.jpg?t=1676365973"
    ],
    [
      "ŠKODA SUPERB COMBI 2.0TDI DSG FACELIFT NOVÝ MODEL",
      "  20 490 €",
      "https://www.bazos.sk/img/1t/045/146864045.jpg?t=1676443459"
    ],
    [
      "Superb",
      "  2 500 €",
      "https://www.bazos.sk/img/1t/256/147539256.jpg?t=1675919503"
    ],
    [
      "VOLKSWAGEN PASSAT B8 Rline 2.0 TDI , 110kw 2018 DSG",
      "  18 999 €",
      "https://www.bazos.sk/img/1t/963/147535963.jpg?t=1675892594"
    ],
    [
      "Seat Leon ST 2.0 TDI DSG Xcellence \"2018\"",
      "  13 500 €",
      "https://www.bazos.sk/img/1t/550/146849550.jpg?t=1675801402"
    ],
    [
      "Škoda Citigo 1.0mpi 5st.manual",
      "  7 500 €",
      "https://www.bazos.sk/img/1t/439/147291439.jpg?t=1676389605"
    ],
    [
      "MERCEDES A / AMG PACKET",
      "  22 780 €",
      "https://www.bazos.sk/img/1t/783/147528783.jpg?t=1675878383"
    ],
    [
      "Renault Trafic 12/2013 2.0 DCI 89t.KM  L1H2",
      "  9 990 €",
      "https://www.bazos.sk/img/1t/105/146791105.jpg?t=1675160771"
    ],
    [
      "Škoda Yeti Greenline 1.Majiteľ Navigácia Bluetooth",
      "V texte",
      "https://www.bazos.sk/img/1t/624/147638624.jpg?t=1676208310"
    ],
    [
      "Seat Leon Cupra 2.0 World Champion Edition 208kw 285ps",
      "  8 450 €",
      "https://www.bazos.sk/img/1t/871/147246871.jpg?t=1676201889"
    ],
    [
      "Škoda Octavia kombi",
      "  18 700 €",
      "https://www.bazos.sk/img/1t/904/147401904.jpg?t=1675930200"
    ],
    [
      "Škoda Octavia 2.0TDI 103kw - ELEGANCE",
      "  3 750 €",
      "https://www.bazos.sk/img/1t/539/147246539.jpg?t=1676395487"
    ],
    [
      "AUDI A4 AVANT 35 2.0 TDI S LINE/ MOŽNÝ ODPOČET DPH",
      "  27 450 €",
      "https://www.bazos.sk/img/1t/985/147245985.jpg?t=1675275699"
    ],
    [
      "Škoda Superb Combi 2.0 TDI STYLE VIRTUAL_DSG_10/2021_SR",
      "  34 990 €",
      "https://www.bazos.sk/img/1t/023/147520023.jpg?t=1675863907"
    ],
    [
      "BMW Rad 4 Gran Coupé 420d M SPORT VIRTUAL_11/2018_SR_DPH",
      "  27 990 €",
      "https://www.bazos.sk/img/1t/859/147519859.jpg?t=1675863845"
    ],
    [
      "Audi a6 c7",
      "   599 €",
      "https://www.bazos.sk/img/1t/076/147632076.jpg?t=1676121844"
    ]
  ];

  searchTerm = '';

  filterCars() {
    return this.cars.filter(car => car[0].toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

}
