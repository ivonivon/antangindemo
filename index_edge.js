/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['annie-use-your-telescope, sans-serif']='<script src=\"http://use.edgefonts.net/annie-use-your-telescope:n4:all.js\"></script>';
    fonts['butterfly-kids, cursive']='<script src=\"http://use.edgefonts.net/butterfly-kids:n4:all.js\"></script>';
    fonts['share-regular, sans-serif']='<script src=\"http://use.edgefonts.net/share-regular:n4,i4,n7,i7:all.js\"></script>';
    fonts['abel, sans-serif']='<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>';
    fonts['la-belle-aurore, cursive']='<script src=\"http://use.edgefonts.net/la-belle-aurore:n4:all.js\"></script>';
    fonts['chewy, sans-serif']='<script src=\"http://use.edgefonts.net/chewy:n4:all.js\"></script>';
    fonts['viga, sans-serif']='<script src=\"http://use.edgefonts.net/viga:n4:all.js\"></script>';
    fonts['aladin, sans-serif']='<script src=\"http://use.edgefonts.net/aladin:n4:all.js\"></script>';
    fonts['allan, sans-serif']='<script src=\"http://use.edgefonts.net/allan:n7:all.js\"></script>';
    fonts['sniglet, sans-serif']='<script src=\"http://use.edgefonts.net/sniglet:n4:all.js\"></script>';
    fonts['righteous, sans-serif']='<script src=\"http://use.edgefonts.net/righteous:n4:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','100%','997px','auto', 'auto'],
                fill: ["rgba(70,171,211,1.00)",[270,[['rgba(48,118,207,1.00)',0],['rgba(155,197,235,1.00)',100]]]],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'sym-cloud-far',
                type: 'rect',
                rect: ['10px', '111px','auto','auto','auto', 'auto'],
                opacity: 0.8780487804878,
                userClass: "cloud-white-far"
            },
            {
                id: 'sym-sun',
                type: 'rect',
                rect: ['auto', '189','auto','auto','7.5%', 'auto']
            },
            {
                id: 'sym-cloud-white',
                type: 'rect',
                rect: ['-17px', '132px','auto','auto','auto', 'auto'],
                opacity: 0.80487803811949,
                userClass: "cloud-white-near"
            },
            {
                id: 'Group6',
                type: 'group',
                rect: ['10%', '403px','1097','252','auto', 'auto'],
                userClass: "houses",
                c: [
                {
                    id: 'sym-tower',
                    type: 'rect',
                    rect: ['20.3%', '54px','auto','auto','auto', 'auto']
                },
                {
                    id: 'sym-houses2',
                    type: 'rect',
                    rect: ['0', '0','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'sym-grass-12',
                type: 'rect',
                rect: ['-1015px', '598','auto','auto','auto', 'auto'],
                userClass: "grasses"
            },
            {
                id: 'menu-BG',
                type: 'rect',
                rect: ['0px', '0px','100%','102px','auto', 'auto'],
                fill: ["rgba(255,211,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'blue-BG',
                type: 'rect',
                rect: ['0px', '922px','100%','869px','auto', 'auto'],
                fill: ["rgba(39,170,226,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Page2',
                type: 'group',
                rect: ['125', '993px','684','337','auto', 'auto'],
                userClass: "page2",
                c: [
                {
                    id: 'Article_1',
                    type: 'group',
                    rect: ['0', '92','345','129','auto', 'auto'],
                    c: [
                    {
                        id: 'what-is-masuk-angin',
                        type: 'text',
                        tag: 'p',
                        rect: ['0px', '31px','345px','89px','auto', 'auto'],
                        text: "Masuk angin is often called the symptoms of stomach, fever, headache, and cold sweat. <br>",
                        font: ['viga, sans-serif', 19, "rgba(255,255,255,1.00)", "normal", "none", ""]
                    },
                    {
                        id: 'Title-what-is-masuk',
                        type: 'text',
                        tag: 'h1',
                        rect: ['0px', '0px','260px','29px','auto', 'auto'],
                        text: "What is masuk angin?",
                        align: "left",
                        font: ['viga, sans-serif', 24, "rgba(232,204,204,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Paragraph-symptomp',
                        type: 'text',
                        tag: 'p',
                        rect: ['0px', '168px','345px','89px','auto', 'auto'],
                        text: "The fever and cold body condition is often followed by indigestion problem, which is acondition when you have an gastric indigestion.",
                        font: ['viga, sans-serif', 19, "rgba(255,255,255,1.00)", "normal", "none", ""]
                    },
                    {
                        id: 'Title-symptomp',
                        type: 'text',
                        tag: 'h1',
                        rect: ['0px', '138px','305px','29px','auto', 'auto'],
                        text: "What are the symptoms?",
                        align: "left",
                        font: ['viga, sans-serif', 24, "rgba(232,204,204,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'sym-know',
                    type: 'rect',
                    rect: ['173', '0','auto','auto','auto', 'auto']
                },
                {
                    id: 'SickKids',
                    type: 'group',
                    rect: ['56.1%', '67px','300','270','auto', 'auto'],
                    c: [
                    {
                        id: 'sym-boy-sic',
                        type: 'rect',
                        rect: ['0px', '5px','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'sickGirl',
                        type: 'image',
                        rect: ['168px', '0px','132px','270px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"sickGirl.png",'0px','0px']
                    }]
                }]
            },
            {
                id: 'yellow-cloud2',
                type: 'image',
                rect: ['-755px', '1403px','3530px','582px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"yellow-cloud2.png",'0px','0px'],
                userClass: "cloud-yellow"
            },
            {
                id: 'Rectangle4',
                type: 'rect',
                rect: ['0px', '1952px','100%','1171px','auto', 'auto'],
                fill: ["rgba(253,235,98,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle6',
                type: 'rect',
                rect: ['0px', '4531px','100%','1563px','auto', 'auto'],
                fill: ["rgba(204,224,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'fence',
                type: 'image',
                rect: ['-2043px', '6047px','3612px','148px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fence2.png",'0px','0px'],
                userClass: "fences"
            },
            {
                id: 'Rectangle7',
                type: 'rect',
                rect: ['8px', '6115px','100%','1085px','auto', 'auto'],
                fill: ["rgba(241,237,234,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'surat-menyurat',
                type: 'group',
                rect: ['7.3%', '6140px','1085','871','auto', 'auto'],
                userClass: "letters",
                c: [
                {
                    id: 'post2',
                    type: 'image',
                    rect: ['646px', '589px','275px','434px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"post.png",'0px','0px']
                },
                {
                    id: 'sym-baloon',
                    type: 'rect',
                    rect: ['921px', '2866px','auto','auto','auto', 'auto']
                },
                {
                    id: 'p-add1',
                    type: 'text',
                    tag: 'pre',
                    rect: ['629px', '185px','317px','117px','auto', 'auto'],
                    text: "Perkantoran Puri Niaga II<br>Jl. Puri Kencana Blok J1 no.3x<br>Jakarta Barat 11601<br>Phone\t        : +62-21 5830 4131<br>Fax\t\t: +62-21 5830 4132",
                    align: "left",
                    font: ['viga, sans-serif', 15, "rgba(61,61,61,1.00)", "400", "none", "normal"]
                },
                {
                    id: 't-add1',
                    type: 'text',
                    rect: ['629px', '152px','313px','23px','auto', 'auto'],
                    text: "— PT.DELTOMED LABORATORIES —<br>",
                    align: "left",
                    font: ['viga, sans-serif', 18, "rgba(61,61,61,1)", "400", "none", "normal"]
                },
                {
                    id: 'p-add2',
                    type: 'text',
                    tag: 'pre',
                    rect: ['629px', '366px','317px','89px','auto', 'auto'],
                    text: "Nambangan, Selogiri, Wonogiri<br>Kotak Pos 103 Wonogiri 57601<br>Phone          : (+62-273) 322 566<br>Fax                : (+62-273) 321 118",
                    align: "left",
                    font: ['viga, sans-serif', 15, "rgba(61,61,61,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text7',
                    type: 'text',
                    rect: ['629px', '88px','268px','32px','auto', 'auto'],
                    text: "NEED HELP?",
                    align: "left",
                    font: ['sniglet, sans-serif', 23, "rgba(61,61,61,1)", "400", "none", "normal"]
                },
                {
                    id: 't-add2',
                    type: 'text',
                    rect: ['629px', '333px','313px','23px','auto', 'auto'],
                    text: "— PLANT —<br>",
                    align: "left",
                    font: ['viga, sans-serif', 18, "rgba(61,61,61,1)", "400", "none", "normal"]
                },
                {
                    id: 'env-top',
                    type: 'image',
                    rect: ['0px', '129px','540px','427px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"env-top.png",'0px','0px']
                },
                {
                    id: 'sym-env2',
                    type: 'rect',
                    rect: ['35px', '164px','auto','auto','auto', 'auto']
                },
                {
                    id: 'env-bot',
                    type: 'image',
                    rect: ['0px', '343px','540px','323px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"env-bot.png",'0px','0px']
                }]
            },
            {
                id: 'tund1',
                type: 'image',
                rect: ['-828px', '2090px','3414px','1176px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tund1.png",'0px','0px'],
                userClass: "tund1"
            },
            {
                id: 'tund2',
                type: 'image',
                rect: ['-1833px', '1927px','4477px','1176px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tund2.png",'0px','0px'],
                userClass: "tund2"
            },
            {
                id: 'tund3',
                type: 'image',
                rect: ['-2065px', '2136px','5018px','939px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tund3.png",'0px','0px'],
                userClass: "tund3"
            },
            {
                id: 'tund4',
                type: 'image',
                rect: ['-58px', '2614px','1576px','364px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tund4.png",'0px','0px'],
                userClass: "tund4"
            },
            {
                id: 'tund5',
                type: 'image',
                rect: ['-18px', '2672px','1576px','361px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tund5.png",'0px','0px'],
                userClass: "tund5"
            },
            {
                id: 'bukitBelakang',
                type: 'ellipse',
                rect: ['-570px', '2678px','1742px','689px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(107,175,68,1.00)"],
                stroke: [5,"rgba(255,255,255,1.00)","solid"]
            },
            {
                id: 'bukitDepan',
                type: 'ellipse',
                rect: ['-521px', '2747px','2990px','702px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(140,191,63,1)"],
                stroke: [5,"rgba(255,255,255,1.00)","solid"],
                transform: [[],['-7']]
            },
            {
                id: 'pohonSmall',
                type: 'image',
                rect: ['1141px', '2646px','58px','130px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohonSmallCopy10',
                type: 'image',
                rect: ['1049px', '2659px','52px','117px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohonSmallCopy4',
                type: 'image',
                rect: ['1371px', '2626px','52px','118px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohonSmallCopy5',
                type: 'image',
                rect: ['1783px', '2606px','71px','160px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohonSmallCopy12',
                type: 'image',
                rect: ['986px', '2732px','71px','160px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px'],
                userClass: "puhun"
            },
            {
                id: 'pohonSmallCopy11',
                type: 'image',
                rect: ['879px', '2647px','71px','160px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohonSmallCopy6',
                type: 'image',
                rect: ['1593px', '2638px','52px','117px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohonSmallCopy7',
                type: 'image',
                rect: ['253px', '2631px','35px','79px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohonSmallCopy9',
                type: 'image',
                rect: ['382px', '2650px','35px','79px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohonSmallCopy18',
                type: 'image',
                rect: ['1287px', '2664px','35px','79px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohonSmallCopy8',
                type: 'image',
                rect: ['685px', '2686px','22px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohonSmallCopy16',
                type: 'image',
                rect: ['64px', '2678px','22px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohonSmallCopy',
                type: 'image',
                rect: ['1545px', '2593px','66px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohonSmallCopy2',
                type: 'image',
                rect: ['2111px', '2615px','72px','163px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohonSmallCopy3',
                type: 'image',
                rect: ['2093px', '2668px','52px','118px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px']
            },
            {
                id: 'pohon',
                type: 'image',
                rect: ['515px', '2601px','110px','270px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohon.png",'0px','0px'],
                userClass: "puhun"
            },
            {
                id: 'pohonCopy2',
                type: 'image',
                rect: ['1232px', '2733px','84px','205px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohon.png",'0px','0px'],
                userClass: "puhun"
            },
            {
                id: 'pohonCopy3',
                type: 'image',
                rect: ['1880px', '2710px','73px','179px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohon.png",'0px','0px'],
                userClass: "puhun"
            },
            {
                id: 'pohonSmallCopy13',
                type: 'image',
                rect: ['1565px', '2744px','71px','160px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px'],
                userClass: "puhun"
            },
            {
                id: 'pohonSmallCopy14',
                type: 'image',
                rect: ['1534px', '2807px','52px','117px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pohonSmall.png",'0px','0px'],
                userClass: "puhun"
            },
            {
                id: 'GreenRectangle',
                type: 'rect',
                rect: ['0px', '3144px','100%','1446px','auto', 'auto'],
                fill: ["rgba(140,191,63,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Group3',
                type: 'group',
                rect: ['109', '3705px','1000','1280','auto', 'auto'],
                userClass: "houseSM",
                c: [
                {
                    id: 'smoke',
                    type: 'image',
                    rect: ['554px', '0px','241px','227px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"smoke.png",'0px','0px'],
                    userClass: "smoke"
                },
                {
                    id: 'sym-houseW',
                    type: 'rect',
                    rect: ['0', '262','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'grass-footer',
                type: 'image',
                rect: ['-603px', '6449px','3612px','231px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"grass-footer.png",'0px','0px'],
                userClass: "footergrasses"
            },
            {
                id: 'footer',
                type: 'group',
                rect: ['30.6%', '7119px','960','75','auto', 'auto'],
                userClass: "footers",
                c: [
                {
                    id: 'delto2',
                    type: 'image',
                    rect: ['782px', '0px','162px','72px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"delto.png",'0px','0px']
                },
                {
                    id: 'tw',
                    type: 'image',
                    rect: ['632px', '24px','25px','25px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"tw.gif",'0px','0px']
                },
                {
                    id: 'fb',
                    type: 'image',
                    rect: ['602px', '24px','25px','25px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"fb.gif",'0px','0px']
                },
                {
                    id: 'Text-produced',
                    type: 'text',
                    rect: ['693px', '24px','267px','39px','auto', 'auto'],
                    text: "Produced by:",
                    align: "left",
                    font: ['viga, sans-serif', 15, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text-producedCopy',
                    type: 'text',
                    rect: ['524px', '24px','86px','39px','auto', 'auto'],
                    text: "Follow us:",
                    align: "left",
                    font: ['viga, sans-serif', 15, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text21',
                    type: 'text',
                    rect: ['-53px', '24px','516px','51px','auto', 'auto'],
                    text: "Copyright © 2014 Antangin Junior - powered by Invent.   All rights reserved.",
                    align: "left",
                    font: ['viga, sans-serif', 15, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Group4',
                type: 'group',
                rect: ['241', '499','910','330','auto', 'auto'],
                userClass: "kids",
                c: [
                {
                    id: 'sym-boy-play',
                    type: 'rect',
                    rect: ['479px', '146px','auto','auto','auto', 'auto']
                },
                {
                    id: 'sym-girl-play',
                    type: 'rect',
                    rect: ['790px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'roller',
                    type: 'image',
                    rect: ['0px', '57px','154px','226px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"roller.png",'0px','0px']
                },
                {
                    id: 'sym-ropeGirl',
                    type: 'rect',
                    rect: ['244px', '122px','auto','auto','auto', 'auto']
                },
                {
                    id: 'rightEye',
                    type: 'ellipse',
                    rect: ['339px', '152px','5px','10px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'LeftEye',
                    type: 'ellipse',
                    rect: ['320px', '151px','4px','10px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'sym-boy-roller',
                    type: 'rect',
                    rect: ['-12px', '-18px','auto','auto','auto', 'auto'],
                    userClass: "rollerBoy"
                }]
            },
            {
                id: 'sym-ingredients',
                type: 'rect',
                rect: ['24.3%', '3117','auto','auto','auto', 'auto'],
                userClass: "ingredients"
            },
            {
                id: 'Group2',
                type: 'group',
                rect: ['59px', '5098px','1147','913','auto', 'auto'],
                userClass: "board",
                c: [
                {
                    id: 'sym-crayons',
                    type: 'rect',
                    rect: ['714px', '144px','auto','auto','auto', 'auto']
                },
                {
                    id: 'sym-ball',
                    type: 'rect',
                    rect: ['379', '0','auto','auto','auto', 'auto']
                },
                {
                    id: 'board2',
                    type: 'image',
                    rect: ['62px', '93px','1020px','795px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"board.png",'0px','0px']
                },
                {
                    id: 'sym-girl-educated',
                    type: 'rect',
                    rect: ['978px', '567px','auto','auto','auto', 'auto']
                },
                {
                    id: 'waterCan',
                    type: 'image',
                    rect: ['502px', '191px','120px','96px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"waterCan.png",'0px','0px'],
                    userClass: "cans"
                },
                {
                    id: 'sym-kupu',
                    type: 'rect',
                    rect: ['679px', '210px','auto','auto','auto', 'auto'],
                    autoOrient: true
                },
                {
                    id: 'sym-download-girl',
                    type: 'rect',
                    rect: ['593px', '445px','auto','auto','auto', 'auto']
                },
                {
                    id: 'symbol-download-boy',
                    type: 'rect',
                    rect: ['263px', '445px','auto','auto','auto', 'auto']
                },
                {
                    id: 'RoundRectCopy3',
                    type: 'rect',
                    rect: ['593px', '644px','309px','179px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'RoundRectCopy4',
                    type: 'rect',
                    rect: ['261px', '644px','309px','179px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'sym-boyEducated',
                    type: 'rect',
                    rect: ['0px', '568px','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Menu',
                type: 'group',
                rect: ['121', '18','927','66','auto', 'auto'],
                userClass: "menus",
                c: [
                {
                    id: 'sym-logo',
                    type: 'rect',
                    rect: ['0px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'sym-but-product',
                    type: 'rect',
                    rect: ['271px', '20px','auto','auto','auto', 'auto']
                },
                {
                    id: 'sym-but-ing',
                    type: 'rect',
                    rect: ['409px', '20px','auto','auto','auto', 'auto']
                },
                {
                    id: 'sym-but-kids',
                    type: 'rect',
                    rect: ['688px', '20px','auto','auto','auto', 'auto']
                },
                {
                    id: 'sym-but-help',
                    type: 'rect',
                    rect: ['875px', '20px','auto','auto','auto', 'auto']
                },
                {
                    id: 'sym-but-news',
                    type: 'rect',
                    rect: ['591px', '20px','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'sym-cloud-yellow-far',
                type: 'rect',
                rect: ['76', '1600','auto','auto','auto', 'auto'],
                userClass: "cloud-far"
            },
            {
                id: 'sym-cloud-yellow-near',
                type: 'rect',
                rect: ['126px', '1653','auto','auto','auto', 'auto'],
                opacity: 0.69918699913878,
                userClass: "cloud-near"
            },
            {
                id: 'Group5',
                type: 'group',
                rect: ['139px', '1808','973','553','auto', 'auto'],
                userClass: "page3",
                c: [
                {
                    id: 'sym_page3x',
                    type: 'rect',
                    rect: ['0px', '131px','auto','auto','auto', 'auto']
                },
                {
                    id: 'Group',
                    type: 'group',
                    rect: ['208px', '0px','698','99','auto', 'auto'],
                    userClass: "planes",
                    c: [
                    {
                        id: 'flagLogo',
                        type: 'image',
                        rect: ['0px', '0px','518px','99px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"flagLogo.png",'0px','0px'],
                        userClass: "planes"
                    },
                    {
                        id: 'plane',
                        type: 'image',
                        rect: ['510px', '10px','188px','89px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"plane.png",'0px','0px'],
                        userClass: "planes"
                    },
                    {
                        id: 'antanGinflag',
                        type: 'image',
                        rect: ['57px', '27px','406px','56px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"antanGinflag.png",'0px','0px'],
                        userClass: "planes"
                    }]
                }]
            }],
            symbolInstances: [
            {
                id: 'sym-but-ing',
                symbolName: 'sym-but-ing',
                autoPlay: {

                }
            },
            {
                id: 'sym-boy-play',
                symbolName: 'sym-boy-play',
                autoPlay: {

                }
            },
            {
                id: 'sym-logo',
                symbolName: 'sym-logo',
                autoPlay: {

                }
            },
            {
                id: 'sym-cloud-yellow-near',
                symbolName: 'sym-cloud-yellow-near',
                autoPlay: {

                }
            },
            {
                id: 'sym-cloud-yellow-far',
                symbolName: 'sym-cloud-yellow-far',
                autoPlay: {

                }
            },
            {
                id: 'sym-cloud-far',
                symbolName: 'sym-cloud-far',
                autoPlay: {

                }
            },
            {
                id: 'sym-but-news',
                symbolName: 'sym-but-news',
                autoPlay: {

                }
            },
            {
                id: 'sym-boyEducated',
                symbolName: 'sym-boyEducated',
                autoPlay: {

                }
            },
            {
                id: 'sym-grass-12',
                symbolName: 'sym-grass-1',
                autoPlay: {

                }
            },
            {
                id: 'sym-download-girl',
                symbolName: 'sym-download-girl',
                autoPlay: {

                }
            },
            {
                id: 'sym-ingredients',
                symbolName: 'sym-ingredients',
                autoPlay: {

                }
            },
            {
                id: 'sym-baloon',
                symbolName: 'sym-baloon',
                autoPlay: {

                }
            },
            {
                id: 'sym-ball',
                symbolName: 'sym-ball',
                autoPlay: {

                }
            },
            {
                id: 'sym-know',
                symbolName: 'sym-know',
                autoPlay: {

                }
            },
            {
                id: 'sym-houseW',
                symbolName: 'sym-houseW',
                autoPlay: {

                }
            },
            {
                id: 'sym-but-help',
                symbolName: 'sym-but-help',
                autoPlay: {

                }
            },
            {
                id: 'sym-crayons',
                symbolName: 'sym-crayons',
                autoPlay: {

                }
            },
            {
                id: 'sym-but-kids',
                symbolName: 'sym-but-kids',
                autoPlay: {

                }
            },
            {
                id: 'sym-boy-sic',
                symbolName: 'sym-boy-sic',
                autoPlay: {

                }
            },
            {
                id: 'sym_page3x',
                symbolName: 'sym_page3x',
                autoPlay: {

                }
            },
            {
                id: 'sym-env2',
                symbolName: 'sym-env',
                autoPlay: {

                }
            },
            {
                id: 'sym-but-product',
                symbolName: 'sym-but-product',
                autoPlay: {

                }
            },
            {
                id: 'symbol-download-boy',
                symbolName: 'symbol-download-boy',
                autoPlay: {

                }
            },
            {
                id: 'sym-cloud-white',
                symbolName: 'sym-cloud-white',
                autoPlay: {

                }
            },
            {
                id: 'sym-kupu',
                symbolName: 'sym-kupu',
                autoPlay: {

                }
            },
            {
                id: 'sym-girl-play',
                symbolName: 'sym-girl-play',
                autoPlay: {

                }
            },
            {
                id: 'sym-boy-roller',
                symbolName: 'sym-boy-roller',
                autoPlay: {

                }
            },
            {
                id: 'sym-girl-educated',
                symbolName: 'sym-girl-educated',
                autoPlay: {

                }
            },
            {
                id: 'sym-ropeGirl',
                symbolName: 'sym-ropeGirl',
                autoPlay: {

                }
            },
            {
                id: 'sym-houses2',
                symbolName: 'sym-houses',
                autoPlay: {

                }
            },
            {
                id: 'sym-sun',
                symbolName: 'sym-sun',
                autoPlay: {

                }
            },
            {
                id: 'sym-tower',
                symbolName: 'sym-tower',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Group3}": [
                ["style", "top", '3705px']
            ],
            "${_RoundRectCopy3}": [
                ["style", "top", '644px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '593px'],
                ["style", "height", '179px']
            ],
            "${_pohonSmallCopy12}": [
                ["style", "height", '205px'],
                ["style", "top", '2740px'],
                ["style", "left", '986px'],
                ["style", "width", '84px']
            ],
            "${_sym-cloud-yellow-near}": [
                ["style", "top", '1732px'],
                ["style", "opacity", '0.69918699913878'],
                ["style", "left", '56px']
            ],
            "${_pohonSmallCopy18}": [
                ["style", "top", '2664px'],
                ["style", "height", '79px'],
                ["style", "left", '1287px'],
                ["style", "width", '35px']
            ],
            "${_Paragraph-symptomp}": [
                ["style", "top", '168px'],
                ["style", "height", '89px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '19px']
            ],
            "${_flagLogo}": [
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "skewY", '0deg'],
                ["transform", "skewX", '0deg'],
                ["style", "left", '-842px'],
                ["style", "top", '0px']
            ],
            "${_Text-producedCopy}": [
                ["style", "top", '24px'],
                ["style", "font-size", '15px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '524px'],
                ["style", "width", '86px']
            ],
            "${_Rectangle4}": [
                ["style", "height", '1171px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_tund4}": [
                ["style", "left", '-58px'],
                ["style", "top", '2687px']
            ],
            "${_Text21}": [
                ["style", "top", '24px'],
                ["style", "font-size", '15px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '-53px'],
                ["style", "width", '516px']
            ],
            "${_sym-cloud-far}": [
                ["style", "top", '143px'],
                ["style", "opacity", '0.8780487804878'],
                ["style", "left", '10px']
            ],
            "${_sickGirl}": [
                ["style", "left", '168px'],
                ["style", "top", '0px']
            ],
            "${_Text10}": [
                ["style", "top", '3419px'],
                ["style", "width", '187px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '627px'],
                ["style", "font-size", '12px']
            ],
            "${_sym-boy-play}": [
                ["style", "left", '587px'],
                ["style", "top", '111px']
            ],
            "${_sym_page3x}": [
                ["style", "left", '0px'],
                ["style", "top", '131px']
            ],
            "${_t-add1}": [
                ["style", "top", '152px'],
                ["style", "text-align", 'left'],
                ["style", "height", '23px'],
                ["style", "width", '313px'],
                ["style", "left", '629px'],
                ["style", "font-size", '18px']
            ],
            "${_pohonSmallCopy2}": [
                ["style", "top", '2615px'],
                ["style", "height", '163px'],
                ["style", "left", '2111px'],
                ["style", "width", '72px']
            ],
            "${_SickKids}": [
                ["style", "left", '56.07%'],
                ["style", "top", '67px']
            ],
            "${_tund2}": [
                ["style", "left", '-1833px'],
                ["style", "top", '1927px']
            ],
            "${_sym-env2}": [
                ["style", "left", '35px'],
                ["style", "top", '164px']
            ],
            "${_pohonCopy3}": [
                ["style", "top", '2710px'],
                ["style", "height", '179px'],
                ["style", "left", '1880px'],
                ["style", "width", '73px']
            ],
            "${_what-is-masuk-angin}": [
                ["style", "top", '31px'],
                ["style", "height", '89px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '19px']
            ],
            "${_bukitDepan}": [
                ["style", "top", '2747px'],
                ["style", "border-style", 'solid'],
                ["transform", "rotateZ", '-7deg'],
                ["style", "border-width", '5px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '-521px'],
                ["style", "width", '2990px']
            ],
            "${_sym-cloud-yellow-far}": [
                ["style", "top", '1653px']
            ],
            "${_Text13}": [
                ["style", "top", '3679px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '246px'],
                ["style", "height", '33px']
            ],
            "${_fence}": [
                ["style", "left", '-1px'],
                ["style", "top", '6047px']
            ],
            "${_pohonSmallCopy}": [
                ["style", "top", '2593px'],
                ["style", "height", '150px'],
                ["style", "left", '1545px'],
                ["style", "width", '66px']
            ],
            "${_sym-cloud-white}": [
                ["style", "top", '132px'],
                ["style", "opacity", '0.80487803811949'],
                ["style", "left", '-17px']
            ],
            "${_pohonSmallCopy3}": [
                ["style", "top", '2668px'],
                ["style", "height", '118px'],
                ["style", "left", '2093px'],
                ["style", "width", '52px']
            ],
            "${_Rectangle6}": [
                ["color", "background-color", 'rgba(204,224,0,1.00)'],
                ["style", "height", '1563px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_grass-footer}": [
                ["style", "left", '-594px'],
                ["style", "top", '7126px']
            ],
            "${_sym-but-help}": [
                ["style", "left", '875px'],
                ["style", "top", '20px']
            ],
            "${_ing-01-text}": [
                ["style", "top", '3416px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '237px'],
                ["style", "font-size", '12px']
            ],
            "${_fb}": [
                ["style", "left", '602px'],
                ["style", "top", '24px']
            ],
            "${_pohon}": [
                ["style", "top", '2601px'],
                ["style", "height", '270px'],
                ["style", "left", '515px'],
                ["style", "width", '110px']
            ],
            "${_post2}": [
                ["style", "left", '646px'],
                ["style", "top", '589px']
            ],
            "${_GreenRectangle}": [
                ["color", "background-color", 'rgba(140,191,63,1.00)'],
                ["style", "height", '1446px'],
                ["style", "top", '3144px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_sym-kupu}": [
                ["motion", "location", '690.5px 221.5px']
            ],
            "${_pohonSmallCopy9}": [
                ["style", "height", '79px'],
                ["style", "top", '2650px'],
                ["style", "left", '382px'],
                ["style", "width", '35px']
            ],
            "${_pohonSmallCopy16}": [
                ["style", "top", '2678px'],
                ["style", "height", '50px'],
                ["style", "left", '64px'],
                ["style", "width", '22px']
            ],
            "${_Text15}": [
                ["style", "top", '3681px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '441px'],
                ["style", "height", '29px']
            ],
            "${_LeftEye}": [
                ["style", "height", '10px'],
                ["style", "top", '151px'],
                ["style", "left", '327px'],
                ["style", "width", '4px']
            ],
            "${_tund1}": [
                ["style", "left", '-828px'],
                ["style", "top", '2090px']
            ],
            "${_pohonSmallCopy6}": [
                ["style", "height", '117px'],
                ["style", "top", '2638px'],
                ["style", "left", '1593px'],
                ["style", "width", '52px']
            ],
            "${_tund3}": [
                ["style", "left", '-797px'],
                ["style", "top", '2136px']
            ],
            "${_sym-but-product}": [
                ["style", "left", '271px'],
                ["style", "top", '20px']
            ],
            "${_pohonSmallCopy4}": [
                ["style", "height", '118px'],
                ["style", "top", '2626px'],
                ["style", "left", '1371px'],
                ["style", "width", '52px']
            ],
            "${_sym-baloon}": [
                ["style", "top", '23px'],
                ["style", "left", '958px']
            ],
            "${_env-top}": [
                ["style", "top", '129px'],
                ["style", "left", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '1250px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '7200px'],
                ["style", "max-width", '2200px'],
                ["style", "width", '100%']
            ],
            "${_p-add1}": [
                ["style", "top", '185px'],
                ["style", "font-size", '15px'],
                ["style", "height", '117px'],
                ["color", "color", 'rgba(61,61,61,1.00)'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '629px'],
                ["style", "width", '317px']
            ],
            "${_RoundRectCopy4}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '179px'],
                ["style", "left", '261px'],
                ["style", "top", '644px']
            ],
            "${_board2}": [
                ["style", "left", '62px'],
                ["style", "top", '93px']
            ],
            "${_ing-01-header}": [
                ["style", "top", '3377px'],
                ["style", "width", '194px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '234px'],
                ["style", "font-size", '12px']
            ],
            "${_pohonSmallCopy14}": [
                ["style", "top", '2777px'],
                ["style", "height", '117px'],
                ["style", "left", '1508px'],
                ["style", "width", '52px']
            ],
            "${_pohonSmallCopy13}": [
                ["style", "top", '2744px'],
                ["style", "height", '160px'],
                ["style", "left", '1535px'],
                ["style", "width", '71px']
            ],
            "${_sym-but-news}": [
                ["style", "left", '591px'],
                ["style", "top", '20px']
            ],
            "${_sym-ingredients}": [
                ["style", "left", '0%']
            ],
            "${_pohonSmallCopy7}": [
                ["style", "top", '2631px'],
                ["style", "height", '79px'],
                ["style", "left", '253px'],
                ["style", "width", '35px']
            ],
            "${_Text8}": [
                ["style", "top", '3419px'],
                ["style", "width", '174px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '447px'],
                ["style", "font-size", '12px']
            ],
            "${_sym-boy-roller}": [
                ["style", "left", '-12px'],
                ["style", "top", '-18px']
            ],
            "${_blue-BG}": [
                ["style", "height", '869px'],
                ["color", "background-color", 'rgba(39,170,226,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_Group6}": [
                ["style", "top", '403px']
            ],
            "${_env-bot}": [
                ["style", "left", '0px'],
                ["style", "top", '343px']
            ],
            "${_sym-girl-educated}": [
                ["style", "left", '978px'],
                ["style", "top", '567px']
            ],
            "${_Text11}": [
                ["style", "top", '3380px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '830px'],
                ["style", "font-size", '12px']
            ],
            "${_sym-download-girl}": [
                ["style", "left", '593px'],
                ["style", "top", '445px']
            ],
            "${_Text18}": [
                ["style", "top", '3723px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '643px']
            ],
            "${_sym-tower}": [
                ["style", "left", '20.28%'],
                ["style", "top", '54px']
            ],
            "${_pohonCopy2}": [
                ["style", "height", '205px'],
                ["style", "top", '2683px'],
                ["style", "left", '1232px'],
                ["style", "width", '84px']
            ],
            "${_sym-crayons}": [
                ["style", "left", '773px'],
                ["style", "top", '153px']
            ],
            "${_Text-produced}": [
                ["style", "top", '24px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '693px'],
                ["style", "font-size", '15px']
            ],
            "${_Group2}": [
                ["style", "left", '59px'],
                ["style", "top", '5098px']
            ],
            "${_Text7}": [
                ["style", "top", '88px'],
                ["style", "width", '158px'],
                ["style", "font-family", 'sniglet, sans-serif'],
                ["style", "left", '629px'],
                ["style", "font-size", '23px']
            ],
            "${_surat-menyurat}": [
                ["style", "left", '7.28%'],
                ["style", "top", '6140px']
            ],
            "${_rightEye}": [
                ["style", "height", '10px'],
                ["style", "top", '152px'],
                ["style", "left", '350px'],
                ["style", "width", '5px']
            ],
            "${_sym-ropeGirl}": [
                ["style", "left", '274px'],
                ["style", "top", '99px']
            ],
            "${_Group}": [
                ["style", "left", '208px'],
                ["style", "top", '0px']
            ],
            "${_pohonSmallCopy5}": [
                ["style", "top", '2606px'],
                ["style", "height", '160px'],
                ["style", "left", '1783px'],
                ["style", "width", '71px']
            ],
            "${_yellow-cloud2}": [
                ["style", "left", '-375px'],
                ["style", "top", '1403px']
            ],
            "${_antanGinflag}": [
                ["style", "left", '-780px'],
                ["style", "top", '27px']
            ],
            "${_pohonSmallCopy8}": [
                ["style", "height", '50px'],
                ["style", "top", '2686px'],
                ["style", "left", '685px'],
                ["style", "width", '22px']
            ],
            "${_pohonSmallCopy10}": [
                ["style", "height", '117px'],
                ["style", "top", '2659px'],
                ["style", "left", '1049px'],
                ["style", "width", '52px']
            ],
            "${_sym-sun}": [
                ["style", "left", 'auto'],
                ["style", "right", '21.75%']
            ],
            "${_Text19}": [
                ["style", "top", '3681px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '837px']
            ],
            "${_Text9}": [
                ["style", "top", '3377px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '633px'],
                ["style", "font-size", '12px']
            ],
            "${_symbol-download-boy}": [
                ["style", "left", '263px'],
                ["style", "top", '445px']
            ],
            "${_sym-boy-sic}": [
                ["style", "left", '0px'],
                ["style", "top", '5px']
            ],
            "${_Title-symptomp}": [
                ["style", "top", '138px'],
                ["style", "font-size", '24px'],
                ["style", "height", '29px'],
                ["color", "color", 'rgba(232,204,204,1.00)'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '305px']
            ],
            "${_Text20}": [
                ["style", "top", '3723px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '828px'],
                ["style", "width", '194px']
            ],
            "${_tw}": [
                ["style", "left", '632px'],
                ["style", "top", '24px']
            ],
            "${_sym-logo}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_footer}": [
                ["style", "left", '30.64%'],
                ["style", "top", '7119px']
            ],
            "${_Rectangle7}": [
                ["color", "background-color", 'rgba(241,237,234,1.00)'],
                ["style", "height", '1085px'],
                ["style", "top", '6115px'],
                ["style", "left", '8px'],
                ["style", "width", '100%']
            ],
            "${_Text14}": [
                ["style", "top", '3723px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '246px'],
                ["style", "width", '183px']
            ],
            "${_bukitBelakang}": [
                ["style", "top", '2678px'],
                ["color", "background-color", 'rgba(107,175,68,1.00)'],
                ["style", "border-width", '5px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '689px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '-570px'],
                ["style", "width", '1742px']
            ],
            "${_menu-BG}": [
                ["color", "background-color", 'rgba(255,211,0,1.00)'],
                ["style", "height", '102px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_p-add2}": [
                ["style", "top", '366px'],
                ["style", "width", '317px'],
                ["color", "color", 'rgba(61,61,61,1.00)'],
                ["style", "height", '89px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '629px'],
                ["style", "font-size", '15px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(70,171,211,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '997px'],
                ["gradient", "background-image", [270,[['rgba(48,118,207,1.00)',0],['rgba(155,197,235,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_smoke}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '554px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Page2}": [
                ["style", "top", '993px']
            ],
            "${_waterCan}": [
                ["style", "top", '138px'],
                ["style", "-webkit-transform-origin", [4,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [4,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [4,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [4,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [4,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '503px'],
                ["transform", "rotateZ", '-52deg']
            ],
            "${_tund5}": [
                ["style", "left", '-18px'],
                ["style", "top", '2729px']
            ],
            "${_plane}": [
                ["style", "left", '-327px'],
                ["style", "top", '10px']
            ],
            "${_delto2}": [
                ["style", "left", '782px'],
                ["style", "top", '0px']
            ],
            "${_sym-but-kids}": [
                ["style", "left", '688px'],
                ["style", "top", '20px']
            ],
            "${_Text17}": [
                ["style", "top", '3681px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '636px']
            ],
            "${_sym-but-ing}": [
                ["style", "left", '409px'],
                ["style", "top", '20px']
            ],
            "${_Title-what-is-masuk}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(232,204,204,1.00)'],
                ["style", "height", '29px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '24px']
            ],
            "${_pohonSmallCopy11}": [
                ["style", "height", '160px'],
                ["style", "top", '2647px'],
                ["style", "left", '879px'],
                ["style", "width", '71px']
            ],
            "${_pohonSmall}": [
                ["style", "top", '2646px'],
                ["style", "height", '130px'],
                ["style", "left", '1141px'],
                ["style", "width", '58px']
            ],
            "${_roller}": [
                ["style", "left", '0px'],
                ["style", "top", '57px']
            ],
            "${_Text12}": [
                ["style", "top", '3416px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '835px'],
                ["style", "font-size", '12px']
            ],
            "${_t-add2}": [
                ["style", "top", '333px'],
                ["style", "text-align", 'left'],
                ["style", "height", '23px'],
                ["style", "font-size", '18px'],
                ["style", "left", '629px'],
                ["style", "width", '313px']
            ],
            "${_sym-girl-play}": [
                ["style", "left", '790px'],
                ["style", "top", '0px']
            ],
            "${_Text16}": [
                ["style", "top", '3723px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '449px']
            ],
            "${_sym-boyEducated}": [
                ["style", "left", '0px'],
                ["style", "top", '568px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 170000,
            autoPlay: false,
            timeline: [
                { id: "eid155", tween: [ "style", "${_grass-footer}", "top", '6970px', { fromValue: '7126px'}], position: 135328, duration: 34672 },
                { id: "eid36", tween: [ "style", "${_fence}", "left", '-1015px', { fromValue: '-1px'}], position: 130000, duration: 40000 },
                { id: "eid13177", tween: [ "style", "${_pohonSmallCopy14}", "top", '2710px', { fromValue: '2777px'}], position: 52000, duration: 23000 },
                { id: "eid4852", tween: [ "style", "${_sym-boy-roller}", "top", '151px', { fromValue: '-18px'}], position: 0, duration: 27000 },
                { id: "eid4553", tween: [ "style", "${_sym-ropeGirl}", "left", '274px', { fromValue: '274px'}], position: 0, duration: 0 },
                { id: "eid12805", tween: [ "style", "${_tund3}", "left", '-2065px', { fromValue: '-797px'}], position: 39746, duration: 30254 },
                { id: "eid2490", tween: [ "style", "${_sym-cloud-far}", "top", '143px', { fromValue: '143px'}], position: 0, duration: 0 },
                { id: "eid13327", tween: [ "style", "${_antanGinflag}", "left", '57px', { fromValue: '-780px'}], position: 10000, duration: 37290 },
                { id: "eid13162", tween: [ "style", "${_pohonSmallCopy12}", "height", '310px', { fromValue: '205px'}], position: 53000, duration: 21000 },
                { id: "eid14525", tween: [ "style", "${_sym-baloon}", "top", '171px', { fromValue: '23px'}], position: 250, duration: 169750 },
                { id: "eid6148", tween: [ "style", "${_waterCan}", "left", '525px', { fromValue: '503px'}], position: 120752, duration: 35000 },
                { id: "eid4672", tween: [ "style", "${_LeftEye}", "left", '320px', { fromValue: '327px'}], position: 0, duration: 22000 },
                { id: "eid13328", tween: [ "style", "${_plane}", "left", '510px', { fromValue: '-327px'}], position: 10000, duration: 37290 },
                { id: "eid13198", tween: [ "style", "${_pohon}", "top", '2533px', { fromValue: '2601px'}], position: 51000, duration: 24000 },
                { id: "eid12867", tween: [ "style", "${_tund5}", "top", '2658px', { fromValue: '2729px'}], position: 42000, duration: 40659 },
                { id: "eid6355", tween: [ "motion", "${_sym-kupu}", [[690.5, 221.5, 0, 0],[690.5, 221.5, 0, 0]]], position: 0, duration: 0, easing: "swing" },
                { id: "eid13187", tween: [ "style", "${_pohonSmallCopy13}", "top", '2659px', { fromValue: '2744px'}], position: 53000, duration: 22000 },
                { id: "eid12598", tween: [ "style", "${_tund2}", "top", '1923px', { fromValue: '1927px'}], position: 39000, duration: 33000 },
                { id: "eid378", tween: [ "transform", "${_smoke}", "rotateZ", '34deg', { fromValue: '0deg'}], position: 80000, duration: 27500, easing: "easeInQuad" },
                { id: "eid13188", tween: [ "style", "${_pohonSmallCopy13}", "height", '250px', { fromValue: '160px'}], position: 53000, duration: 22000 },
                { id: "eid6146", tween: [ "transform", "${_waterCan}", "rotateZ", '2deg', { fromValue: '-52deg'}], position: 120752, duration: 35000 },
                { id: "eid12599", tween: [ "style", "${_tund2}", "left", '-1347px', { fromValue: '-1833px'}], position: 39000, duration: 33000 },
                { id: "eid4552", tween: [ "style", "${_sym-boy-play}", "top", '111px', { fromValue: '111px'}], position: 0, duration: 0 },
                { id: "eid13208", tween: [ "style", "${_pohonCopy3}", "top", '2664px', { fromValue: '2710px'}], position: 51000, duration: 22000 },
                { id: "eid12605", tween: [ "style", "${_tund4}", "left", '-383px', { fromValue: '-58px'}], position: 42000, duration: 42524 },
                { id: "eid13201", tween: [ "style", "${_pohon}", "width", '139px', { fromValue: '110px'}], position: 51000, duration: 24000 },
                { id: "eid13161", tween: [ "style", "${_pohonSmallCopy12}", "top", '2579px', { fromValue: '2740px'}], position: 53000, duration: 21000 },
                { id: "eid381", tween: [ "style", "${_smoke}", "opacity", '0', { fromValue: '1'}], position: 80000, duration: 27500, easing: "easeInQuad" },
                { id: "eid4564", tween: [ "style", "${_sym-girl-play}", "left", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
                { id: "eid12868", tween: [ "style", "${_tund4}", "top", '2642px', { fromValue: '2687px'}], position: 42000, duration: 43508 },
                { id: "eid13046", tween: [ "style", "${_pohonCopy2}", "height", '310px', { fromValue: '205px'}], position: 52000, duration: 21000 },
                { id: "eid8357", tween: [ "style", "${_sym-crayons}", "top", '153px', { fromValue: '153px'}], position: 38500, duration: 0, easing: "swing" },
                { id: "eid13528", tween: [ "transform", "${_flagLogo}", "skewY", '2deg', { fromValue: '0deg'}], position: 10000, duration: 9000 },
                { id: "eid13532", tween: [ "transform", "${_flagLogo}", "skewY", '0deg', { fromValue: '2deg'}], position: 19000, duration: 9000 },
                { id: "eid13530", tween: [ "transform", "${_flagLogo}", "skewY", '2deg', { fromValue: '0deg'}], position: 28000, duration: 9000 },
                { id: "eid13533", tween: [ "transform", "${_flagLogo}", "skewY", '0deg', { fromValue: '2deg'}], position: 37000, duration: 10290 },
                { id: "eid366", tween: [ "style", "${_smoke}", "top", '-193px', { fromValue: '0px'}], position: 80000, duration: 27500, easing: "easeInQuad" },
                { id: "eid4665", tween: [ "style", "${_rightEye}", "left", '339px', { fromValue: '350px'}], position: 0, duration: 22000 },
                { id: "eid13209", tween: [ "style", "${_pohonCopy3}", "height", '240px', { fromValue: '179px'}], position: 51000, duration: 22000 },
                { id: "eid13199", tween: [ "style", "${_pohon}", "height", '340px', { fromValue: '270px'}], position: 51000, duration: 24000 },
                { id: "eid4853", tween: [ "style", "${_sym-boy-roller}", "left", '38px', { fromValue: '-12px'}], position: 0, duration: 27000 },
                { id: "eid13175", tween: [ "style", "${_pohonSmallCopy14}", "width", '89px', { fromValue: '52px'}], position: 52000, duration: 23000 },
                { id: "eid12608", tween: [ "style", "${_tund5}", "left", '197px', { fromValue: '-18px'}], position: 42000, duration: 40659 },
                { id: "eid13189", tween: [ "style", "${_pohonSmallCopy13}", "width", '111px', { fromValue: '71px'}], position: 53000, duration: 22000 },
                { id: "eid7315", tween: [ "style", "${_sym-ingredients}", "left", '0%', { fromValue: '0%'}], position: 32000, duration: 0 },
                { id: "eid6150", tween: [ "style", "${_waterCan}", "top", '176px', { fromValue: '138px'}], position: 120752, duration: 35000 },
                { id: "eid3934", tween: [ "style", "${_sym-cloud-white}", "top", '-435px', { fromValue: '132px'}], position: 0, duration: 60000 },
                { id: "eid13210", tween: [ "style", "${_pohonCopy3}", "width", '98px', { fromValue: '73px'}], position: 51000, duration: 22000 },
                { id: "eid6917", tween: [ "style", "${_sym-cloud-yellow-far}", "top", '1540px', { fromValue: '1653px'}], position: 19000, duration: 27000 },
                { id: "eid8386", tween: [ "style", "${_sym-crayons}", "left", '773px', { fromValue: '773px'}], position: 38500, duration: 0, easing: "swing" },
                { id: "eid6921", tween: [ "style", "${_sym-cloud-yellow-near}", "top", '1357px', { fromValue: '1732px'}], position: 22000, duration: 27000 },
                { id: "eid13174", tween: [ "style", "${_pohonSmallCopy14}", "height", '200px', { fromValue: '117px'}], position: 52000, duration: 23000 },
                { id: "eid14526", tween: [ "style", "${_sym-baloon}", "left", '962px', { fromValue: '958px'}], position: 250, duration: 169750 },
                { id: "eid13163", tween: [ "style", "${_pohonSmallCopy12}", "width", '126px', { fromValue: '84px'}], position: 53000, duration: 21000 },
                { id: "eid13331", tween: [ "style", "${_flagLogo}", "left", '0px', { fromValue: '-842px'}], position: 10000, duration: 37290 },
                { id: "eid13047", tween: [ "style", "${_pohonCopy2}", "width", '126px', { fromValue: '84px'}], position: 52000, duration: 21000 },
                { id: "eid2260", tween: [ "style", "${_sym-sun}", "right", '21.75%', { fromValue: '21.75%'}], position: 0, duration: 0 },
                { id: "eid13045", tween: [ "style", "${_pohonCopy2}", "top", '2546px', { fromValue: '2683px'}], position: 52000, duration: 21000 },
                { id: "eid9", tween: [ "style", "${_yellow-cloud2}", "left", '-755px', { fromValue: '-375px'}], position: 13500, duration: 55000 },
                { id: "eid4554", tween: [ "style", "${_sym-ropeGirl}", "top", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
                { id: "eid4551", tween: [ "style", "${_sym-boy-play}", "left", '587px', { fromValue: '587px'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym-baloon": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'baloon',
                    type: 'image',
                    rect: ['47px', '0px', '112px', '311px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/baloon.png', '0px', '0px']
                },
                {
                    id: 'green-env',
                    type: 'image',
                    rect: ['0px', '286px', '126px', '103px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/green-env.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_baloon}": [
                ["style", "left", '47px'],
                ["style", "top", '0px']
            ],
            "${_green-env}": [
                ["style", "-webkit-transform-origin", [57,24], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [57,24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [57,24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [57,24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [57,24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '286px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '389px'],
                ["style", "width", '159px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4598,
            autoPlay: true,
            timeline: [
                { id: "eid56", tween: [ "style", "${_green-env}", "top", '269px', { fromValue: '286px'}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid58", tween: [ "style", "${_green-env}", "top", '286px', { fromValue: '269px'}], position: 2389, duration: 2111, easing: "swing" },
                { id: "eid43", tween: [ "transform", "${_green-env}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid47", tween: [ "transform", "${_green-env}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 2389, duration: 2111, easing: "swing" },
                { id: "eid53", tween: [ "style", "${_baloon}", "top", '-15px', { fromValue: '0px'}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid54", tween: [ "style", "${_baloon}", "top", '0px', { fromValue: '-15px'}], position: 2389, duration: 2111, easing: "swing" },
                { id: "eid38", tween: [ "style", "${_green-env}", "-webkit-transform-origin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid14527", tween: [ "style", "${_green-env}", "-moz-transform-origin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid14528", tween: [ "style", "${_green-env}", "-ms-transform-origin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid14529", tween: [ "style", "${_green-env}", "msTransformOrigin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid14530", tween: [ "style", "${_green-env}", "-o-transform-origin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid46", tween: [ "style", "${_green-env}", "-webkit-transform-origin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 2389, duration: 2111, easing: "swing" },
                { id: "eid14531", tween: [ "style", "${_green-env}", "-moz-transform-origin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 2389, duration: 2111, easing: "swing" },
                { id: "eid14532", tween: [ "style", "${_green-env}", "-ms-transform-origin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 2389, duration: 2111, easing: "swing" },
                { id: "eid14533", tween: [ "style", "${_green-env}", "msTransformOrigin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 2389, duration: 2111, easing: "swing" },
                { id: "eid14534", tween: [ "style", "${_green-env}", "-o-transform-origin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 2389, duration: 2111, easing: "swing" }            ]
        }
    }
},
"sym-env": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Parent',
                    type: 'group',
                    rect: ['0', '0', '470', '459', 'auto', 'auto'],
                    c: [
                    {
                        id: 'env-letter',
                        type: 'image',
                        rect: ['0px', '0px', '470px', '459px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/env-letter.png', '0px', '0px']
                    },
                    {
                        id: 'Group',
                        type: 'group',
                        rect: ['52px', '37px', '293', '212', 'auto', 'auto'],
                        c: [
                        {
                            id: 'Group4',
                            type: 'group',
                            rect: ['0px', '0px', '293', '212', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['10px', '0px', '169px', '24px', 'auto', 'auto'],
                                id: 'TextCopy',
                                text: 'Full Name*:',
                                font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                                type: 'text'
                            },
                            {
                                rect: ['10px', '25px', '162px', '24px', 'auto', 'auto'],
                                font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                                id: 'Text4',
                                text: 'Company*:',
                                align: 'left',
                                type: 'text'
                            },
                            {
                                rect: ['9px', '51px', '149px', '29px', 'auto', 'auto'],
                                font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                                id: 'Text6',
                                text: 'Email Address*:',
                                align: 'left',
                                type: 'text'
                            },
                            {
                                rect: ['9px', '76px', '176px', '21px', 'auto', 'auto'],
                                font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                                id: 'Text22',
                                text: 'Message*:',
                                align: 'left',
                                type: 'text'
                            },
                            {
                                rect: ['0px', '131px', '293px', '24px', 'auto', 'auto'],
                                font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                                id: 'Text23',
                                text: '*) Must be Filled',
                                align: 'left',
                                type: 'text'
                            },
                            {
                                rect: ['147px', '185px', '73px', '21px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(192,192,192,1)']
                            },
                            {
                                rect: ['170px', '183px', '73px', '29px', 'auto', 'auto'],
                                font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                                id: 'Text24',
                                text: 'Send',
                                align: 'left',
                                type: 'text'
                            }]
                        }]
                    }]
                },
                {
                    rect: ['0px', '0px', '470px', '459px', 'auto', 'auto'],
                    id: 'Rectangle9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,237,234,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '459px'],
                ["style", "width", '470px']
            ],
            "${_Text24}": [
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "left", '170px'],
                ["style", "top", '183px']
            ],
            "${_env-letter}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Text22}": [
                ["style", "top", '76px'],
                ["style", "height", '21px'],
                ["style", "left", '9px'],
                ["style", "width", '176px']
            ],
            "${_Parent}": [
                ["style", "top", '0px']
            ],
            "${_Text23}": [
                ["style", "height", '24px'],
                ["style", "left", '0px'],
                ["style", "top", '131px']
            ],
            "${_Rectangle9}": [
                ["style", "opacity", '0']
            ],
            "${_Ellipse}": [
                ["style", "left", '147px'],
                ["style", "top", '185px']
            ],
            "${_Group4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Group}": [
                ["style", "left", '52px'],
                ["style", "top", '37px']
            ],
            "${_Text6}": [
                ["style", "top", '51px'],
                ["style", "left", '9px']
            ],
            "${_TextCopy}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '10px'],
                ["style", "font-size", '17px']
            ],
            "${_Text4}": [
                ["style", "top", '25px'],
                ["style", "left", '10px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            labels: {
                "hover": 200
            },
            timeline: [
                { id: "eid5864", tween: [ "style", "${_Parent}", "top", '-32px', { fromValue: '0px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"sym-crayons": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'crayon-6',
                    type: 'image',
                    rect: ['152px', '68px', '28px', '200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/crayon-6.png', '0px', '0px']
                },
                {
                    id: 'crayon-5',
                    type: 'image',
                    rect: ['121px', '40px', '28px', '200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/crayon-5.png', '0px', '0px']
                },
                {
                    id: 'crayon-4',
                    type: 'image',
                    rect: ['91px', '51px', '28px', '200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/crayon-4.png', '0px', '0px']
                },
                {
                    id: 'crayon-3',
                    type: 'image',
                    rect: ['60px', '0px', '28px', '199px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/crayon-3.png', '0px', '0px']
                },
                {
                    id: 'crayon-2',
                    type: 'image',
                    rect: ['30px', '51px', '28px', '200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/crayon-2.png', '0px', '0px']
                },
                {
                    id: 'crayon-1',
                    type: 'image',
                    rect: ['0px', '68px', '28px', '200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/crayon-1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_crayon-3}": [
                ["style", "left", '60px'],
                ["style", "top", '0px']
            ],
            "${_crayon-1}": [
                ["style", "left", '0px'],
                ["style", "top", '68px']
            ],
            "${symbolSelector}": [
                ["style", "height", '268px'],
                ["style", "width", '180px']
            ],
            "${_crayon-6}": [
                ["style", "top", '0px'],
                ["style", "left", '151px']
            ],
            "${_crayon-5}": [
                ["style", "top", '26px'],
                ["style", "left", '121px']
            ],
            "${_crayon-2}": [
                ["style", "left", '30px'],
                ["style", "top", '31px']
            ],
            "${_crayon-4}": [
                ["style", "top", '31px'],
                ["style", "left", '91px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3690,
            autoPlay: true,
            timeline: [
                { id: "eid290", tween: [ "style", "${_crayon-5}", "top", '40px', { fromValue: '26px'}], position: 0, duration: 1500, easing: "easeInSine" },
                { id: "eid292", tween: [ "style", "${_crayon-5}", "top", '26px', { fromValue: '40px'}], position: 1845, duration: 725, easing: "easeOutCubic" },
                { id: "eid262", tween: [ "style", "${_crayon-1}", "top", '40px', { fromValue: '68px'}], position: 395, duration: 2000, easing: "easeInQuad" },
                { id: "eid264", tween: [ "style", "${_crayon-1}", "top", '68px', { fromValue: '40px'}], position: 2590, duration: 710, easing: "easeOutCirc" },
                { id: "eid285", tween: [ "style", "${_crayon-4}", "top", '51px', { fromValue: '31px'}], position: 690, duration: 1000, easing: "easeInQuint" },
                { id: "eid287", tween: [ "style", "${_crayon-4}", "top", '31px', { fromValue: '51px'}], position: 2070, duration: 1620, easing: "easeOutQuint" },
                { id: "eid280", tween: [ "style", "${_crayon-3}", "top", '-10px', { fromValue: '0px'}], position: 250, duration: 1500, easing: "easeInQuart" },
                { id: "eid282", tween: [ "style", "${_crayon-3}", "top", '0px', { fromValue: '-10px'}], position: 2685, duration: 815, easing: "easeOutSine" },
                { id: "eid297", tween: [ "style", "${_crayon-6}", "top", '68px', { fromValue: '0px'}], position: 95, duration: 1516, easing: "swing" },
                { id: "eid299", tween: [ "style", "${_crayon-6}", "top", '0px', { fromValue: '68px'}], position: 2114, duration: 1576, easing: "easeOutQuad" },
                { id: "eid270", tween: [ "style", "${_crayon-2}", "top", '51px', { fromValue: '31px'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid272", tween: [ "style", "${_crayon-2}", "top", '31px', { fromValue: '51px'}], position: 2000, duration: 1590, easing: "easeOutExpo" }            ]
        }
    }
},
"sym-boy-sic": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'body-boy',
                    type: 'image',
                    rect: ['24px', '116px', '93px', '149px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/body-boy.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '131px', '131px', 'auto', 'auto'],
                    id: 'boy-head',
                    transform: [[0, 0], [], [], [], ['50%', '100%']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/boy-head.png', '0px', '0px']
                },
                {
                    id: 'swt',
                    type: 'image',
                    rect: ['46px', '86px', '8px', '14px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/swt.png', '0px', '0px']
                },
                {
                    id: 'goo2',
                    type: 'image',
                    rect: ['131px', '116px', '22px', '10px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/goo2.png', '0px', '0px']
                },
                {
                    id: 'goo1',
                    type: 'image',
                    rect: ['123px', '130px', '15px', '16px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/goo1.png', '0px', '0px']
                },
                {
                    id: 'bz3',
                    type: 'image',
                    rect: ['121px', '187px', '4px', '18px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bz3.png', '0px', '0px']
                },
                {
                    id: 'bz2',
                    type: 'image',
                    rect: ['6px', '214px', '6px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bz2.png', '0px', '0px']
                },
                {
                    id: 'bz1',
                    type: 'image',
                    rect: ['2px', '146px', '10px', '17px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bz1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_boy-head}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_goo2}": [
                ["style", "top", '111px'],
                ["style", "opacity", '0'],
                ["style", "left", '125px']
            ],
            "${_bz1}": [
                ["style", "top", '147px'],
                ["style", "left", '2px']
            ],
            "${_swt}": [
                ["style", "top", '86px'],
                ["style", "opacity", '0'],
                ["style", "left", '46px']
            ],
            "${_goo1}": [
                ["style", "top", '121px'],
                ["style", "opacity", '0'],
                ["style", "left", '110px']
            ],
            "${symbolSelector}": [
                ["style", "height", '265px'],
                ["style", "width", '153px']
            ],
            "${_body-boy}": [
                ["style", "left", '24px'],
                ["style", "top", '116px']
            ],
            "${_bz3}": [
                ["style", "top", '187px'],
                ["style", "left", '121px']
            ],
            "${_bz2}": [
                ["style", "top", '214px'],
                ["style", "left", '6px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid473", tween: [ "style", "${_goo2}", "top", '123px', { fromValue: '111px'}], position: 1675, duration: 1575, easing: "easeInQuart" },
                { id: "eid451", tween: [ "transform", "${_boy-head}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 0, duration: 1210, easing: "swing" },
                { id: "eid453", tween: [ "transform", "${_boy-head}", "rotateZ", '4deg', { fromValue: '-13deg'}], position: 1250, duration: 705, easing: "easeInQuint" },
                { id: "eid461", tween: [ "transform", "${_boy-head}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 3560, duration: 705, easing: "easeOutQuart" },
                { id: "eid468", tween: [ "style", "${_goo1}", "left", '131px', { fromValue: '110px'}], position: 1800, duration: 1575, easing: "easeInQuart" },
                { id: "eid474", tween: [ "style", "${_goo2}", "opacity", '1', { fromValue: '0'}], position: 1675, duration: 1000, easing: "easeInQuart" },
                { id: "eid475", tween: [ "style", "${_goo2}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 500, easing: "easeInQuart" },
                { id: "eid467", tween: [ "style", "${_goo1}", "top", '138px', { fromValue: '121px'}], position: 1800, duration: 1575, easing: "easeInQuart" },
                { id: "eid458", tween: [ "style", "${_swt}", "opacity", '1', { fromValue: '0'}], position: 3325, duration: 810, easing: "easeInQuart" },
                { id: "eid478", tween: [ "style", "${_swt}", "opacity", '0', { fromValue: '1'}], position: 4265, duration: 615, easing: "easeInQuart" },
                { id: "eid470", tween: [ "style", "${_goo1}", "opacity", '1', { fromValue: '0'}], position: 1800, duration: 1000, easing: "easeInQuart" },
                { id: "eid472", tween: [ "style", "${_goo1}", "opacity", '0', { fromValue: '1'}], position: 2875, duration: 500, easing: "easeInQuart" },
                { id: "eid476", tween: [ "style", "${_goo2}", "left", '139px', { fromValue: '125px'}], position: 1675, duration: 1575, easing: "easeInQuart" },
                { id: "eid459", tween: [ "style", "${_swt}", "top", '91px', { fromValue: '86px'}], position: 3325, duration: 1555, easing: "easeInQuart" },
                { id: "eid481", tween: [ "style", "${_bz1}", "top", '146px', { fromValue: '147px'}], position: 0, duration: 318, easing: "easeInQuart" },
                { id: "eid484", tween: [ "style", "${_bz1}", "top", '147px', { fromValue: '146px'}], position: 397, duration: 178, easing: "easeInQuart" }            ]
        }
    }
},
"sym-sun": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Group2',
                    type: 'group',
                    rect: ['0', '0', '159', '160', 'auto', 'auto'],
                    c: [
                    {
                        id: 'sym-sunlight',
                        type: 'rect',
                        rect: ['0', '0px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        rect: ['35px', '34px', '93px', '93px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'sunbody',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(255,210,17,1.00)']
                    }]
                },
                {
                    id: 'sun-face',
                    type: 'image',
                    rect: ['55px', '54px', '53px', '39px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sun-face2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'sym-sunlight',
                symbolName: 'sym-sunlight',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Group2}": [
                ["style", "top", '0px']
            ],
            "${_sunbody}": [
                ["color", "background-color", 'rgba(255,210,17,1.00)'],
                ["style", "height", '93px'],
                ["style", "top", '34px'],
                ["style", "left", '35px'],
                ["style", "width", '93px']
            ],
            "${_sun-face}": [
                ["style", "top", '54px'],
                ["style", "left", '55px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '159px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 45000,
            autoPlay: true,
            timeline: [
                { id: "eid2391", tween: [ "style", "${_Group2}", "top", '-16px', { fromValue: '0px'}], position: 0, duration: 3000 },
                { id: "eid2390", tween: [ "style", "${_Group2}", "top", '0px', { fromValue: '-16px'}], position: 4000, duration: 3000 },
                { id: "eid2394", tween: [ "style", "${_sun-face}", "top", '38px', { fromValue: '54px'}], position: 0, duration: 3000 },
                { id: "eid2401", tween: [ "style", "${_sun-face}", "top", '54px', { fromValue: '38px'}], position: 4000, duration: 3000 },
                { id: "eid2398", tween: [ "transform", "${_sun-face}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 0, duration: 3000 },
                { id: "eid2402", tween: [ "transform", "${_sun-face}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 4000, duration: 3000 }            ]
        }
    }
},
"sym-product": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'ubat2',
                    rect: ['170px', '7px', '343px', '157px', 'auto', 'auto'],
                    userClass: 'ubat2',
                    fill: ['rgba(0,0,0,0)', 'images/ubat2.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'ubat',
                    rect: ['170px', '8px', '343px', '157px', 'auto', 'auto'],
                    userClass: 'ubat',
                    fill: ['rgba(0,0,0,0)', 'images/ubat.jpg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'sym-pro-but2',
                    rect: ['9', '87', 'auto', 'auto', 'auto', 'auto'],
                    cursor: ['pointer'],
                    userClass: 'herb-but-2'
                },
                {
                    type: 'rect',
                    id: 'sym-pro-but1',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    cursor: ['pointer'],
                    userClass: 'herb-but-1'
                }
            ],
            symbolInstances: [
            {
                id: 'sym-pro-but1',
                symbolName: 'sym-pro-but1',
                autoPlay: {

               }
            },
            {
                id: 'sym-pro-but2',
                symbolName: 'sym-pro-but2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym-pro-but2}": [
                ["style", "cursor", 'pointer']
            ],
            "${_sym-pro-but1}": [
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '172px'],
                ["style", "width", '513px']
            ],
            "${_ubat2}": [
                ["style", "top", '7px'],
                ["style", "left", '170px']
            ],
            "${_ubat}": [
                ["style", "top", '8px'],
                ["style", "left", '170px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym-pro-but2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '85px', '85px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'herb-but-2',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/herb-but-2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '85px'],
                ["style", "width", '85px']
            ],
            "${_herb-but-2}": [
                ["subproperty", "filter.invert", '0'],
                ["style", "top", '0px'],
                ["subproperty", "filter.contrast", '1'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym-pro-but1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'herb-but-1',
                    type: 'image',
                    rect: ['0px', '0px', '116px', '103px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/herb-but-1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_herb-but-1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '103px'],
                ["style", "width", '116px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym-cloud-white": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cloud-white3',
                    type: 'image',
                    rect: ['0px', '0', '4884px', '497px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-white3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '537px'],
                ["style", "width", '3326px']
            ],
            "${_cloud-white3}": [
                ["style", "left", '0px'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 105000,
            autoPlay: true,
            timeline: [
                { id: "eid3885", tween: [ "style", "${_cloud-white3}", "opacity", '0.8536589741706848', { fromValue: '0'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid3887", tween: [ "style", "${_cloud-white3}", "opacity", '0', { fromValue: '0.8536589741706848'}], position: 104500, duration: 500, easing: "swing" },
                { id: "eid2463", tween: [ "style", "${_cloud-white3}", "left", '-3236px', { fromValue: '0px'}], position: 0, duration: 105000 }            ]
        }
    }
},
"sym-cloud-far": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'far-cloud4',
                    opacity: 0.56097560103347,
                    rect: ['0', '0', '4569px', '249px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/far-cloud4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_far-cloud4}": [
                ["style", "left", '0px'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '315px'],
                ["style", "width", '3000px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 170000,
            autoPlay: true,
            timeline: [
                { id: "eid2509", tween: [ "style", "${_far-cloud4}", "left", '-3046px', { fromValue: '0px'}], position: 0, duration: 170000 },
                { id: "eid3889", tween: [ "style", "${_far-cloud4}", "opacity", '0.5609756112098694', { fromValue: '0'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid3891", tween: [ "style", "${_far-cloud4}", "opacity", '0', { fromValue: '0.5609756112098694'}], position: 169500, duration: 500, easing: "swing" }            ]
        }
    }
},
"sym-sunlight": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sunlight',
                    type: 'image',
                    rect: ['0px', '0px', '159px', '160px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sunlight.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sunlight}": [
                ["style", "top", '0px'],
                ["subproperty", "filter.blur", '24.657533880782px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '360deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '159px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 45000,
            autoPlay: true,
            timeline: [
                { id: "eid2278", tween: [ "transform", "${_sunlight}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 0, duration: 45000 },
                { id: "eid2288", tween: [ "subproperty", "${_sunlight}", "filter.blur", '0px', { fromValue: '24.657533880782px'}], position: 0, duration: 7500 },
                { id: "eid2293", tween: [ "subproperty", "${_sunlight}", "filter.blur", '24.657533880782px', { fromValue: '0px'}], position: 11175, duration: 7500 },
                { id: "eid2291", tween: [ "subproperty", "${_sunlight}", "filter.blur", '0px', { fromValue: '24.657533880782px'}], position: 22500, duration: 7500 },
                { id: "eid2294", tween: [ "subproperty", "${_sunlight}", "filter.blur", '24.657533880782px', { fromValue: '0px'}], position: 33938, duration: 7500 }            ]
        }
    }
},
"sym-grass-1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'flowers4',
                    type: 'image',
                    rect: ['auto', 'auto', '100%', '100.1%', '0px', '0px'],
                    fill: ['rgba(0,0,0,0)', 'images/flowers.png', '0%', '0%', '3440px', '368px']
                },
                {
                    id: 'road',
                    type: 'image',
                    rect: ['50%', '19px', '470px', '311px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/road.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flowers4}": [
                ["style", "top", 'auto'],
                ["style", "right", '0px'],
                ["style", "left", 'auto'],
                ["style", "bottom", '0px']
            ],
            "${_road}": [
                ["style", "left", '50%'],
                ["style", "top", '19px']
            ],
            "${symbolSelector}": [
                ["style", "height", '368px'],
                ["style", "width", '3440px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym-tower": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'tower2',
                    type: 'image',
                    rect: ['0px', '0px', '72px', '170px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tower.png', '0px', '0px']
                },
                {
                    id: 'flag2',
                    type: 'image',
                    rect: ['27px', '-3px', '28px', '18px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flag.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flag2}": [
                ["style", "top", '-3px'],
                ["transform", "skewY", '9deg'],
                ["transform", "rotateZ", '-5deg'],
                ["transform", "skewX", '10deg'],
                ["style", "left", '27px'],
                ["style", "width", '19px']
            ],
            "${_tower2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '170px'],
                ["style", "width", '72px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 598,
            autoPlay: true,
            timeline: [
                { id: "eid2964", tween: [ "style", "${_flag2}", "width", '28px', { fromValue: '19px'}], position: 0, duration: 299, easing: "swing" },
                { id: "eid2975", tween: [ "style", "${_flag2}", "width", '19px', { fromValue: '28px'}], position: 299, duration: 299, easing: "swing" },
                { id: "eid2966", tween: [ "transform", "${_flag2}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 0, duration: 299, easing: "swing" },
                { id: "eid2978", tween: [ "transform", "${_flag2}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 299, duration: 299, easing: "swing" },
                { id: "eid2968", tween: [ "transform", "${_flag2}", "skewX", '0deg', { fromValue: '10deg'}], position: 0, duration: 299, easing: "swing" },
                { id: "eid2976", tween: [ "transform", "${_flag2}", "skewX", '10deg', { fromValue: '0deg'}], position: 299, duration: 299, easing: "swing" },
                { id: "eid2970", tween: [ "transform", "${_flag2}", "skewY", '0deg', { fromValue: '9deg'}], position: 0, duration: 299, easing: "swing" },
                { id: "eid2977", tween: [ "transform", "${_flag2}", "skewY", '9deg', { fromValue: '0deg'}], position: 299, duration: 299, easing: "swing" }            ]
        }
    }
},
"sym-houses": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'school',
                    opacity: 1,
                    rect: ['284px', '-11px', '516px', '225px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/school.png', '0px', '0px']
                },
                {
                    id: 'left-house',
                    type: 'image',
                    rect: ['0px', '85px', '185px', '152px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/left-house.png', '0px', '0px']
                },
                {
                    id: 'left-root2',
                    type: 'image',
                    rect: ['-8px', '-62px', '208px', '124px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/left-root2.png', '0px', '0px']
                },
                {
                    id: 'right-house',
                    type: 'image',
                    rect: ['811px', '38px', '264px', '176px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/right-house.png', '0px', '0px']
                },
                {
                    id: 'right-root',
                    type: 'image',
                    rect: ['505px', '-70px', '249px', '70px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/right-root.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_school}": [
                ["style", "top", '-11px'],
                ["style", "opacity", '1'],
                ["style", "left", '284px']
            ],
            "${_left-house}": [
                ["style", "left", '0px'],
                ["style", "top", '-111px']
            ],
            "${symbolSelector}": [
                ["style", "height", '252px'],
                ["style", "width", '1097px']
            ],
            "${_right-root}": [
                ["style", "top", '-207px'],
                ["style", "opacity", '0'],
                ["style", "left", '788px']
            ],
            "${_left-root2}": [
                ["style", "top", '-62px'],
                ["style", "opacity", '0'],
                ["style", "left", '-8px']
            ],
            "${_right-house}": [
                ["style", "left", '811px'],
                ["style", "top", '-158px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid3094", tween: [ "style", "${_left-house}", "top", '88px', { fromValue: '-111px'}], position: 0, duration: 1500, easing: "easeOutBounce" },
                { id: "eid3314", tween: [ "style", "${_right-house}", "top", '60px', { fromValue: '-158px'}], position: 250, duration: 1750, easing: "easeOutBounce" },
                { id: "eid3112", tween: [ "style", "${_left-root2}", "top", '78px', { fromValue: '-62px'}], position: 900, duration: 982, easing: "easeOutBounce" },
                { id: "eid3315", tween: [ "style", "${_right-root}", "top", '98px', { fromValue: '-207px'}], position: 1018, duration: 982, easing: "easeOutBounce" },
                { id: "eid3107", tween: [ "style", "${_left-root2}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 246, easing: "easeOutBounce" },
                { id: "eid3316", tween: [ "style", "${_right-root}", "opacity", '1', { fromValue: '0'}], position: 1018, duration: 246, easing: "easeOutBounce" }            ]
        }
    }
},
"sym-boy-play": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'rightfoot',
                    type: 'image',
                    rect: ['76px', '32px', '41px', '69px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/rightfoot.png', '0px', '0px']
                },
                {
                    id: 'hand',
                    type: 'image',
                    rect: ['8px', '17px', '49px', '59px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/hand2.png', '0px', '0px']
                },
                {
                    id: 'faceBoy',
                    type: 'image',
                    rect: ['-10px', '-104px', '110px', '109px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/faceBoy.png', '0px', '0px']
                },
                {
                    id: 'eyesBoy',
                    type: 'image',
                    rect: ['52px', '-49px', '20px', '12px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/eyesBoy.png', '0px', '0px']
                },
                {
                    id: 'sym-ball-rotate2',
                    type: 'rect',
                    rect: ['85', '-104', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'BoyBody3',
                    type: 'image',
                    rect: ['13px', '0', '84px', '131px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BoyBody3.png', '0px', '0px']
                },
                {
                    rect: ['97px', '124px', '41px', '12px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.38211383325298,
                    id: 'shadow',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'sym-ball-rotate2',
                symbolName: 'sym-ball-rotate',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_BoyBody3}": [
                ["style", "-webkit-transform-origin", [53,98], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [53,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [53,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [53,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [53,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '13px']
            ],
            "${_shadow}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0.38211384415626526'],
                ["style", "height", '9px'],
                ["style", "width", '30px']
            ],
            "${_hand}": [
                ["style", "-webkit-transform-origin", [41,10], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [41,10],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [41,10],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [41,10],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [41,10],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '17px'],
                ["style", "left", '8px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '131px'],
                ["style", "width", '110px']
            ],
            "${_rightfoot}": [
                ["style", "-webkit-transform-origin", [37,23], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [37,23],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [37,23],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [37,23],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [37,23],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '32px'],
                ["style", "left", '76px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_eyesBoy}": [
                ["style", "left", '52px'],
                ["style", "top", '-58px']
            ],
            "${_faceBoy}": [
                ["style", "left", '-10px'],
                ["style", "top", '-104px']
            ],
            "${_sym-ball-rotate2}": [
                ["style", "top", '-104px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8750,
            autoPlay: true,
            timeline: [
                { id: "eid3500", tween: [ "transform", "${_rightfoot}", "rotateZ", '-16deg', { fromValue: '0deg'}], position: 901, duration: 208, easing: "swing" },
                { id: "eid3536", tween: [ "transform", "${_rightfoot}", "rotateZ", '0deg', { fromValue: '-16deg'}], position: 1123, duration: 431, easing: "swing" },
                { id: "eid3637", tween: [ "style", "${_shadow}", "height", '12px', { fromValue: '9px'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid3641", tween: [ "style", "${_shadow}", "height", '9px', { fromValue: '12px'}], position: 1044, duration: 1000, easing: "easeOutCubic" },
                { id: "eid8681", tween: [ "style", "${_sym-ball-rotate2}", "top", '-30px', { fromValue: '-104px'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid8680", tween: [ "style", "${_sym-ball-rotate2}", "top", '-104px', { fromValue: '-30px'}], position: 1044, duration: 1000, easing: "easeOutQuad" },
                { id: "eid3557", tween: [ "style", "${_shadow}", "opacity", '0.57723579537578', { fromValue: '0.38211384415626526'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid3559", tween: [ "style", "${_shadow}", "opacity", '0.38211384415626526', { fromValue: '0.57723579537578'}], position: 1044, duration: 1000, easing: "easeOutCubic" },
                { id: "eid3528", tween: [ "style", "${_eyesBoy}", "top", '-48px', { fromValue: '-58px'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid3534", tween: [ "style", "${_eyesBoy}", "top", '-58px', { fromValue: '-48px'}], position: 1044, duration: 1000, easing: "easeOutCubic" },
                { id: "eid3638", tween: [ "style", "${_shadow}", "width", '41px', { fromValue: '30px'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid3642", tween: [ "style", "${_shadow}", "width", '30px', { fromValue: '41px'}], position: 1044, duration: 1000, easing: "easeOutCubic" },
                { id: "eid3546", tween: [ "transform", "${_hand}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 827, duration: 217, easing: "swing" },
                { id: "eid3553", tween: [ "transform", "${_hand}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1097, duration: 457, easing: "swing" }            ]
        }
    }
},
"sym-girl-play": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'girlPlay3',
                    type: 'image',
                    rect: ['0px', '0px', '120px', '205px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/girlPlay.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'hoolaa',
                    rect: ['9px', '135px', '110px', '36px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], [], ['0%']],
                    fill: ['rgba(0,0,0,0)', 'images/hoolaa.png', '0px', '0px']
                },
                {
                    id: 'girlBody',
                    type: 'image',
                    rect: ['40px', '128px', '38px', '17px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/girlBody.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_girlBody}": [
                ["style", "top", '128px'],
                ["style", "left", '40px']
            ],
            "${_hoolaa}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '135px'],
                ["style", "left", '9px'],
                ["transform", "skewX", '0deg']
            ],
            "${_girlPlay3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '205px'],
                ["style", "width", '120px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid3762", tween: [ "transform", "${_hoolaa}", "skewX", '71deg', { fromValue: '0deg'}], position: 0, duration: 236, easing: "swing" },
                { id: "eid3764", tween: [ "transform", "${_hoolaa}", "skewX", '0deg', { fromValue: '71deg'}], position: 264, duration: 236, easing: "swing" }            ]
        }
    }
},
"sym-ropeGirl": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['46px', '209px', '64px', '16px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'Ellipse',
                    opacity: 0.6260162601626,
                    type: 'ellipse',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    id: 'sym-GirlHair',
                    type: 'rect',
                    rect: ['110px', '-9', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'ropeGirl',
                    type: 'image',
                    rect: ['0px', '0px', '178px', '231px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ropeGirl2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'sym-GirlHair',
                symbolName: 'sym-GirlHair',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym-GirlHair}": [
                ["style", "top", '-19px'],
                ["style", "left", '110px']
            ],
            "${_ropeGirl}": [
                ["style", "left", '0px'],
                ["style", "top", '5px']
            ],
            "${_Ellipse}": [
                ["style", "top", '209px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0.45'],
                ["style", "left", '46px'],
                ["style", "width", '64px']
            ],
            "${symbolSelector}": [
                ["style", "height", '231px'],
                ["style", "width", '178px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2185,
            autoPlay: true,
            timeline: [
                { id: "eid4411", tween: [ "style", "${_Ellipse}", "width", '84px', { fromValue: '64px'}], position: 0, duration: 1028 },
                { id: "eid4417", tween: [ "style", "${_Ellipse}", "width", '64px', { fromValue: '84px'}], position: 1157, duration: 1028 },
                { id: "eid4409", tween: [ "style", "${_Ellipse}", "opacity", '0.6', { fromValue: '0.45'}], position: 0, duration: 1028 },
                { id: "eid4415", tween: [ "style", "${_Ellipse}", "opacity", '0.45', { fromValue: '0.6'}], position: 1157, duration: 1028 },
                { id: "eid4410", tween: [ "style", "${_Ellipse}", "left", '31px', { fromValue: '46px'}], position: 0, duration: 1028 },
                { id: "eid4416", tween: [ "style", "${_Ellipse}", "left", '46px', { fromValue: '31px'}], position: 1157, duration: 1028 },
                { id: "eid4252", tween: [ "style", "${_ropeGirl}", "top", '14px', { fromValue: '5px'}], position: 0, duration: 1028 },
                { id: "eid4625", tween: [ "style", "${_ropeGirl}", "top", '5px', { fromValue: '14px'}], position: 1157, duration: 1028 },
                { id: "eid4307", tween: [ "style", "${_sym-GirlHair}", "top", '-7px', { fromValue: '-19px'}], position: 0, duration: 1028 },
                { id: "eid4310", tween: [ "style", "${_sym-GirlHair}", "top", '-19px', { fromValue: '-7px'}], position: 1157, duration: 1028 }            ]
        }
    }
},
"sym-GirlHair": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ropeGirl-hair',
                    type: 'image',
                    rect: ['0px', '14px', '48px', '53px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ropeGirl-hair.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ropeGirl-hair}": [
                ["style", "top", '14px'],
                ["transform", "skewY", '0deg'],
                ["style", "left", '0px'],
                ["transform", "skewX", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '53px'],
                ["style", "width", '48px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1057,
            autoPlay: true,
            timeline: [
                { id: "eid4912", tween: [ "transform", "${_ropeGirl-hair}", "skewX", '10deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid4914", tween: [ "transform", "${_ropeGirl-hair}", "skewX", '0deg', { fromValue: '10deg'}], position: 557, duration: 500 },
                { id: "eid4300", tween: [ "transform", "${_ropeGirl-hair}", "skewY", '15deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid4304", tween: [ "transform", "${_ropeGirl-hair}", "skewY", '0deg', { fromValue: '15deg'}], position: 557, duration: 500 }            ]
        }
    }
},
"sym-boy-roller": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['1px', '0px', '125px', '150px', 'auto', 'auto'],
                    id: 'boy-roller',
                    userClass: '',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/boy-roller2.png', '0px', '0px']
                },
                {
                    id: 'sym-eyes',
                    type: 'rect',
                    rect: ['77', '39', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym-eyes',
                symbolName: 'sym-eyes',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_boy-roller}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "width", '125px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym-eyes": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['12px', '0px', '3px', '9px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(39,39,39,1.00)']
                },
                {
                    rect: ['0px', '0px', '4px', '9px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse3Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(39,39,39,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '9px'],
                ["style", "width", '15px']
            ],
            "${_Ellipse3Copy}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '9px'],
                ["color", "background-color", 'rgba(39,39,39,1)'],
                ["style", "left", '0px'],
                ["style", "width", '4px']
            ],
            "${_Ellipse3}": [
                ["style", "top", '0px'],
                ["style", "height", '9px'],
                ["color", "background-color", 'rgba(39,39,39,1.00)'],
                ["style", "left", '12px'],
                ["style", "width", '3px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid4803", tween: [ "style", "${_Ellipse3}", "top", '4px', { fromValue: '0px'}], position: 0, duration: 234 },
                { id: "eid4814", tween: [ "style", "${_Ellipse3}", "top", '0px', { fromValue: '4px'}], position: 266, duration: 234 },
                { id: "eid4798", tween: [ "style", "${_Ellipse3}", "height", '1px', { fromValue: '9px'}], position: 0, duration: 234 },
                { id: "eid4815", tween: [ "style", "${_Ellipse3}", "height", '9px', { fromValue: '1px'}], position: 266, duration: 234 },
                { id: "eid4795", tween: [ "style", "${_Ellipse3Copy}", "top", '4px', { fromValue: '0px'}], position: 0, duration: 234 },
                { id: "eid4812", tween: [ "style", "${_Ellipse3Copy}", "top", '0px', { fromValue: '4px'}], position: 266, duration: 234 },
                { id: "eid4796", tween: [ "style", "${_Ellipse3Copy}", "height", '1px', { fromValue: '9px'}], position: 0, duration: 234 },
                { id: "eid4813", tween: [ "style", "${_Ellipse3Copy}", "height", '9px', { fromValue: '1px'}], position: 266, duration: 234 }            ]
        }
    }
},
"sym-ingredients": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '-66px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['200px', '-66px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['398px', '-66px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['600px', '-66px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['0px', '212px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy7',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['200px', '212px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy6',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['398px', '212px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['600px', '212px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'sym-ing-8',
                    type: 'rect',
                    rect: ['641', '329', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym-ing-7',
                    type: 'rect',
                    rect: ['442', '324', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym-ing-6',
                    type: 'rect',
                    rect: ['234', '315', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym-ing-5',
                    type: 'rect',
                    rect: ['42px', '311px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym-ing-4',
                    type: 'rect',
                    rect: ['635', '57', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym-ing-3',
                    type: 'rect',
                    rect: ['433', '39', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym-ing-2',
                    type: 'rect',
                    rect: ['256', '34', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'symbol-ing-1',
                    type: 'rect',
                    rect: ['38', '42', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text13Copy',
                    text: '1,000 mg',
                    align: 'center',
                    rect: ['5px', '416px', '176px', '19px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text14Copy',
                    text: 'Raise the stamina, increase the body’s immune, and accelerating the regeneration of a cell.',
                    align: 'center',
                    rect: ['5px', '436px', '183px', '33px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text15Copy',
                    text: '(curcumae rhizoma) - 750 mg',
                    align: 'center',
                    rect: ['200px', '416px', '174px', '17px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text16Copy',
                    text: 'Hepatoprotektor and increase appetite.',
                    align: 'center',
                    rect: ['214px', '436px', '160px', '39px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text17Copy',
                    text: '(myristicae semen) - 500 mg',
                    align: 'center',
                    rect: ['401px', '416px', '174px', '15px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text18Copy',
                    text: 'Give warmth to body and reduce nausea &amp; headache.',
                    align: 'center',
                    rect: ['406px', '436px', '160px', '33px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text19Copy',
                    text: '50 mg',
                    align: 'center',
                    rect: ['601px', '416px', '174px', '15px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text20Copy',
                    text: 'Increase the body endurance, and against infection especially in the case of the common cold and ISPA.',
                    align: 'center',
                    rect: ['596px', '436px', '194px', '33px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'ing-01-headerCopy',
                    text: '(Zingiberis Rhizoma) - 3,700 mg',
                    align: 'center',
                    rect: ['-9px', '136px', '194px', '17px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'ing-01-textCopy',
                    text: 'To heal nausea &amp; gastric<br>indigestion and alleviate blood circulation.',
                    align: 'center',
                    rect: ['-7px', '155px', '187px', '24px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text7Copy',
                    text: '(phyllanthi herba) - 1500 mg',
                    align: 'center',
                    rect: ['208px', '136px', '158px', '17px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text8Copy',
                    text: 'Increase the body\'s stamina.',
                    align: 'center',
                    rect: ['203px', '156px', '174px', '24px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text9Copy',
                    text: '(menthae folia) - 1,200 mg',
                    align: 'center',
                    rect: ['401px', '136px', '174px', '17px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text10Copy',
                    text: 'To help reducing gastric<br>digestion, as in expelling the gas.',
                    align: 'center',
                    rect: ['394px', '156px', '187px', '24px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text11Copy',
                    text: '(bluemeae folia) - 1,100 mg ',
                    align: 'center',
                    rect: ['601px', '138px', '176px', '14px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text12Copy',
                    text: 'Analgesic &amp; antipyretic and to relief gastric digestion.',
                    align: 'center',
                    rect: ['613px', '156px', '160px', '29px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 13, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: 'ROYAL JELLY',
                    align: 'center',
                    rect: ['14px', '398px', '158px', '14px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 13, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy',
                    text: 'TEMULAWAK',
                    align: 'center',
                    rect: ['211px', '398px', '158px', '14px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 13, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy2',
                    text: 'PALA',
                    align: 'center',
                    rect: ['407px', '398px', '158px', '14px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 13, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy3',
                    text: 'ECHINACEA EKSTRAK',
                    align: 'center',
                    rect: ['614px', '398px', '158px', '14px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 13, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy7',
                    text: 'JAHE',
                    align: 'center',
                    rect: ['9px', '120px', '158px', '14px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 13, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy6',
                    text: 'MENIRAN LEAVE',
                    align: 'center',
                    rect: ['209px', '120px', '158px', '14px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 13, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy5',
                    text: 'MINT',
                    align: 'center',
                    rect: ['409px', '120px', '158px', '14px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 13, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy4',
                    text: 'SEMBUNG LEAVE',
                    align: 'center',
                    rect: ['610px', '120px', '158px', '14px', 'auto', 'auto']
                },
                {
                    font: ['viga, sans-serif', 24, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text4',
                    text: 'INGREDIENTS',
                    align: 'center',
                    rect: ['-83px', '-151px', '241px', '29px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'symbol-ing-1',
                symbolName: 'symbol-ing-1',
                autoPlay: {

               }
            },
            {
                id: 'sym-ing-5',
                symbolName: 'sym-ing-5',
                autoPlay: {

               }
            },
            {
                id: 'sym-ing-7',
                symbolName: 'sym-ing-7',
                autoPlay: {

               }
            },
            {
                id: 'sym-ing-3',
                symbolName: 'sym-ing-3',
                autoPlay: {

               }
            },
            {
                id: 'sym-ing-8',
                symbolName: 'sym-ing-8',
                autoPlay: {

               }
            },
            {
                id: 'sym-ing-4',
                symbolName: 'sym-ing-4',
                autoPlay: {

               }
            },
            {
                id: 'sym-ing-2',
                symbolName: 'sym-ing-2',
                autoPlay: {

               }
            },
            {
                id: 'sym-ing-6',
                symbolName: 'sym-ing-6',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Text13Copy}": [
                ["style", "top", '416px'],
                ["style", "height", '19px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '5px'],
                ["style", "font-size", '10px']
            ],
            "${_Text10Copy}": [
                ["style", "top", '156px'],
                ["style", "width", '187px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '394px'],
                ["style", "font-size", '10px']
            ],
            "${_Text14Copy}": [
                ["style", "top", '436px'],
                ["style", "width", '183px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '5px'],
                ["style", "font-size", '10px']
            ],
            "${_Text16Copy}": [
                ["style", "top", '436px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '214px'],
                ["style", "font-size", '10px']
            ],
            "${_Text3Copy7}": [
                ["style", "height", '14px'],
                ["style", "top", '120px'],
                ["style", "left", '9px'],
                ["style", "font-size", '13px']
            ],
            "${_Text9Copy}": [
                ["style", "top", '136px'],
                ["style", "height", '17px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '401px'],
                ["style", "font-size", '10px']
            ],
            "${_Text11Copy}": [
                ["style", "top", '138px'],
                ["style", "height", '14px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '601px'],
                ["style", "font-size", '10px']
            ],
            "${_EllipseCopy5}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '176px'],
                ["style", "top", '212px'],
                ["style", "left", '398px'],
                ["style", "width", '176px']
            ],
            "${_Text7Copy}": [
                ["style", "top", '136px'],
                ["style", "width", '158px'],
                ["style", "height", '17px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '208px'],
                ["style", "font-size", '10px']
            ],
            "${_Text3Copy5}": [
                ["style", "height", '14px'],
                ["style", "top", '120px'],
                ["style", "left", '409px'],
                ["style", "font-size", '13px']
            ],
            "${_Text20Copy}": [
                ["style", "top", '436px'],
                ["style", "width", '194px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '596px'],
                ["style", "font-size", '10px']
            ],
            "${_Text15Copy}": [
                ["style", "top", '416px'],
                ["style", "height", '17px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '200px'],
                ["style", "font-size", '10px']
            ],
            "${_Text3Copy6}": [
                ["style", "top", '120px'],
                ["style", "height", '14px'],
                ["style", "left", '209px'],
                ["style", "font-size", '13px']
            ],
            "${_EllipseCopy6}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '176px'],
                ["style", "top", '212px'],
                ["style", "left", '200px'],
                ["style", "width", '176px']
            ],
            "${_Text18Copy}": [
                ["style", "top", '436px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '406px'],
                ["style", "font-size", '10px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '176px'],
                ["style", "top", '-66px'],
                ["style", "left", '0px'],
                ["style", "width", '176px']
            ],
            "${_EllipseCopy2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '176px'],
                ["style", "top", '-66px'],
                ["style", "left", '398px'],
                ["style", "width", '176px']
            ],
            "${_Text17Copy}": [
                ["style", "top", '416px'],
                ["style", "height", '15px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '401px'],
                ["style", "font-size", '10px']
            ],
            "${_sym-ing-3}": [
                ["style", "top", '-27px']
            ],
            "${_Text3}": [
                ["style", "top", '398px'],
                ["style", "height", '14px'],
                ["style", "left", '14px'],
                ["style", "font-size", '13px']
            ],
            "${_Text19Copy}": [
                ["style", "top", '416px'],
                ["style", "height", '15px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '601px'],
                ["style", "font-size", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '176px'],
                ["style", "width", '176px']
            ],
            "${_Text8Copy}": [
                ["style", "top", '156px'],
                ["style", "width", '174px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '203px'],
                ["style", "font-size", '10px']
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '176px'],
                ["style", "top", '-66px'],
                ["style", "left", '200px'],
                ["style", "width", '176px']
            ],
            "${_ing-01-textCopy}": [
                ["style", "top", '155px'],
                ["style", "height", '24px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '-7px'],
                ["style", "font-size", '10px']
            ],
            "${_sym-ing-5}": [
                ["style", "left", '42px'],
                ["style", "top", '247px']
            ],
            "${_symbol-ing-1}": [
                ["style", "top", '-24px']
            ],
            "${_sym-ing-6}": [
                ["style", "left", '235px'],
                ["style", "top", '251px']
            ],
            "${_Text3Copy3}": [
                ["style", "height", '14px'],
                ["style", "top", '398px'],
                ["style", "left", '614px'],
                ["style", "font-size", '13px']
            ],
            "${_Text3Copy}": [
                ["style", "height", '14px'],
                ["style", "top", '398px'],
                ["style", "left", '211px'],
                ["style", "font-size", '13px']
            ],
            "${_ing-01-headerCopy}": [
                ["style", "top", '136px'],
                ["style", "text-align", 'center'],
                ["style", "width", '194px'],
                ["style", "height", '17px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '-9px'],
                ["style", "font-size", '10px']
            ],
            "${_Text3Copy2}": [
                ["style", "top", '398px'],
                ["style", "height", '14px'],
                ["style", "left", '407px'],
                ["style", "font-size", '13px']
            ],
            "${_EllipseCopy7}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '176px'],
                ["style", "top", '212px'],
                ["style", "left", '0px'],
                ["style", "width", '176px']
            ],
            "${_EllipseCopy3}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '176px'],
                ["style", "top", '-66px'],
                ["style", "left", '600px'],
                ["style", "width", '176px']
            ],
            "${_sym-ing-8}": [
                ["style", "top", '265px']
            ],
            "${_Text12Copy}": [
                ["style", "top", '156px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '613px'],
                ["style", "font-size", '10px']
            ],
            "${_EllipseCopy4}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '176px'],
                ["style", "top", '212px'],
                ["style", "left", '600px'],
                ["style", "width", '176px']
            ],
            "${_Text3Copy4}": [
                ["style", "top", '120px'],
                ["style", "height", '14px'],
                ["style", "left", '610px'],
                ["style", "font-size", '13px']
            ],
            "${_sym-ing-2}": [
                ["style", "top", '-32px']
            ],
            "${_sym-ing-4}": [
                ["style", "top", '-9px']
            ],
            "${_Text4}": [
                ["style", "top", '-151px'],
                ["style", "left", '-83px'],
                ["style", "font-size", '24px']
            ],
            "${_sym-ing-7}": [
                ["style", "top", '260px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
                { id: "eid12306", tween: [ "style", "${_sym-ing-4}", "top", '-9px', { fromValue: '-9px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid12312", tween: [ "style", "${_symbol-ing-1}", "top", '-24px', { fromValue: '-24px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid12307", tween: [ "style", "${_sym-ing-7}", "top", '260px', { fromValue: '260px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid12313", tween: [ "style", "${_sym-ing-2}", "top", '-32px', { fromValue: '-32px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid12308", tween: [ "style", "${_sym-ing-5}", "top", '247px', { fromValue: '247px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid12309", tween: [ "style", "${_sym-ing-3}", "top", '-27px', { fromValue: '-27px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid5810", tween: [ "style", "${_sym-ing-6}", "left", '235px', { fromValue: '235px'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid12311", tween: [ "style", "${_sym-ing-6}", "top", '251px', { fromValue: '251px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid12310", tween: [ "style", "${_sym-ing-8}", "top", '265px', { fromValue: '265px'}], position: 0, duration: 0, easing: "easeInOutBack" }            ]
        }
    }
},
"symbol-ing-1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '100px', '92px', 'auto', 'auto'],
                    id: 'i1',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/i1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_i1}": [
                ["subproperty", "filter.invert", '0'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '92px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "normal": 0,
                "out": 500
            },
            timeline: [
                { id: "eid5282", tween: [ "style", "${_i1}", "top", '-8px', { fromValue: '0px'}], position: 0, duration: 500 }            ]
        }
    }
},
"sym-ing-2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '64px', '113px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'i2',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/i2.png', '0px', '0px']
                },
                {
                    id: 'sym-ing-21',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '64px', '113px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            {
                id: 'sym-ing-21',
                symbolName: 'sym-ing-21',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_i2}": [
                ["style", "top", '0px'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle3}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '113px'],
                ["style", "width", '64px']
            ],
            "${_sym-ing-21}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6196,
            autoPlay: false,
            labels: {
                "hover": 201
            },
            timeline: [
                { id: "eid5550", tween: [ "style", "${_sym-ing-21}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 201, easing: "easeOutBack" },
                { id: "eid5562", tween: [ "style", "${_i2}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 201, easing: "easeOutBack" }            ]
        }
    }
},
"sym-ing-3": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '109px', '98px', 'auto', 'auto'],
                    id: 'i3',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/i3.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '109px', '98px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_i3}": [
                ["style", "top", '0px'],
                ["style", "height", '98px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '109px']
            ],
            "${symbolSelector}": [
                ["style", "height", '98px'],
                ["style", "width", '109px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1801,
            autoPlay: false,
            timeline: [
                { id: "eid6011", tween: [ "style", "${_i3}", "top", '49px', { fromValue: '0px'}], position: 0, duration: 217, easing: "easeOutBack" },
                { id: "eid6007", tween: [ "style", "${_i3}", "top", '0px', { fromValue: '49px'}], position: 244, duration: 1556, easing: "easeOutBack" },
                { id: "eid6014", tween: [ "style", "${_i3}", "width", '0px', { fromValue: '109px'}], position: 0, duration: 217, easing: "easeOutBack" },
                { id: "eid6010", tween: [ "style", "${_i3}", "width", '109px', { fromValue: '0px'}], position: 244, duration: 1556, easing: "easeOutBack" },
                { id: "eid6013", tween: [ "style", "${_i3}", "left", '57px', { fromValue: '0px'}], position: 0, duration: 217, easing: "easeOutBack" },
                { id: "eid6009", tween: [ "style", "${_i3}", "left", '0px', { fromValue: '57px'}], position: 244, duration: 1556, easing: "easeOutBack" },
                { id: "eid6012", tween: [ "style", "${_i3}", "height", '0px', { fromValue: '98px'}], position: 0, duration: 217, easing: "easeOutBack" },
                { id: "eid6008", tween: [ "style", "${_i3}", "height", '98px', { fromValue: '0px'}], position: 244, duration: 1556, easing: "easeOutBack" }            ]
        }
    }
},
"sym-ing-4": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['58px', '2px', '51px', '58px', 'auto', 'auto'],
                    id: 'secondLeaf2',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/secondLeaf2.png', '0px', '0px']
                },
                {
                    id: 'firstLeaf2',
                    type: 'image',
                    rect: ['-2px', '10px', '58px', '51px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/firstLeaf2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '1px', '106px', '60px', 'auto', 'auto'],
                    type: 'rect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'Rectangle10',
                    opacity: 0,
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_secondLeaf2}": [
                ["style", "top", '2px'],
                ["style", "opacity", '1'],
                ["style", "left", '58px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Rectangle10}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '60px']
            ],
            "${_firstLeaf2}": [
                ["style", "top", '10px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '61px'],
                ["style", "width", '106px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1619,
            autoPlay: false,
            timeline: [
                { id: "eid5976", tween: [ "transform", "${_secondLeaf2}", "rotateZ", '42deg', { fromValue: '0deg'}], position: 0, duration: 1619, easing: "easeOutBounce" },
                { id: "eid5973", tween: [ "transform", "${_firstLeaf2}", "rotateZ", '-52deg', { fromValue: '0deg'}], position: 0, duration: 1500, easing: "easeOutBounce" }            ]
        }
    }
},
"sym-ing-8": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'i8',
                    type: 'image',
                    rect: ['0px', '0px', '104px', '70px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/i8.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '104px', '70px', 'auto', 'auto'],
                    id: 'Rectangle8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle8}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "width", '104px']
            ],
            "${_i8}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            timeline: [
                { id: "eid5842", tween: [ "style", "${_i8}", "top", '-15px', { fromValue: '0px'}], position: 0, duration: 1226 },
                { id: "eid5841", tween: [ "style", "${_i8}", "top", '0px', { fromValue: '-15px'}], position: 1274, duration: 1226 }            ]
        }
    }
},
"sym-ing-7": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'orange2',
                    type: 'image',
                    rect: ['18px', '15px', '70px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/orange2.png', '0px', '0px']
                },
                {
                    id: 'orange1',
                    type: 'image',
                    rect: ['0', '0', '77px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/orange1.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '88px', '79px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_orange2}": [
                ["style", "top", '15px'],
                ["style", "left", '18px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '79px'],
                ["style", "width", '88px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid5829", tween: [ "transform", "${_orange2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000 }            ]
        }
    }
},
"sym-ing-6": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'i6',
                    type: 'image',
                    rect: ['0px', '0px', '104px', '97px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/i6.png', '0px', '0px']
                },
                {
                    id: 'inverteditem',
                    type: 'image',
                    rect: ['0', '0', '104px', '97px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/inverteditem.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '104px', '97px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_inverteditem}": [
                ["style", "left", '52px'],
                ["style", "width", '0px']
            ],
            "${_Rectangle2}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_i6}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '104px']
            ],
            "${symbolSelector}": [
                ["style", "height", '97px'],
                ["style", "width", '104px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: false,
            timeline: [
                { id: "eid5775", tween: [ "style", "${_inverteditem}", "width", '104px', { fromValue: '0px'}], position: 1500, duration: 1500, easing: "swing" },
                { id: "eid5797", tween: [ "style", "${_inverteditem}", "width", '0px', { fromValue: '104px'}], position: 3000, duration: 1500, easing: "swing" },
                { id: "eid5776", tween: [ "style", "${_i6}", "left", '52px', { fromValue: '0px'}], position: 0, duration: 1500, easing: "swing" },
                { id: "eid5808", tween: [ "style", "${_i6}", "left", '0px', { fromValue: '52px'}], position: 4500, duration: 1500, easing: "swing" },
                { id: "eid5777", tween: [ "style", "${_i6}", "width", '0px', { fromValue: '104px'}], position: 0, duration: 1500, easing: "swing" },
                { id: "eid5809", tween: [ "style", "${_i6}", "width", '104px', { fromValue: '0px'}], position: 4500, duration: 1500, easing: "swing" },
                { id: "eid5774", tween: [ "style", "${_inverteditem}", "left", '0px', { fromValue: '52px'}], position: 1500, duration: 1500, easing: "swing" },
                { id: "eid5796", tween: [ "style", "${_inverteditem}", "left", '52px', { fromValue: '0px'}], position: 3000, duration: 1500, easing: "swing" }            ]
        }
    }
},
"sym-ing-5": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '90px', '97px', 'auto', 'auto'],
                    id: 'i5',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/i5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_i5}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '97px'],
                ["style", "width", '90px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: false,
            timeline: [
                { id: "eid5747", tween: [ "transform", "${_i5}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 6000, easing: "easeOutQuad" }            ]
        }
    }
},
"sym-ing-21": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'i2-12',
                    type: 'image',
                    rect: ['0px', '0px', '64px', '113px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/i2-1.png', '0px', '0px']
                },
                {
                    id: 'i2-22',
                    type: 'image',
                    rect: ['0', '0', '64px', '113px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/i2-2.png', '0px', '0px']
                },
                {
                    id: 'i22',
                    type: 'image',
                    rect: ['0', '0', '64px', '113px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/i22.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_i2-22}": [
                ["style", "opacity", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '113px'],
                ["style", "width", '64px']
            ],
            "${_i22}": [
                ["style", "opacity", '0']
            ],
            "${_i2-12}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6196,
            autoPlay: true,
            timeline: [
                { id: "eid5547", tween: [ "style", "${_i2-12}", "opacity", '1', { fromValue: '0'}], position: 4274, duration: 1922, easing: "swing" },
                { id: "eid5542", tween: [ "style", "${_i2-22}", "opacity", '0', { fromValue: '1'}], position: 797, duration: 1102, easing: "swing" },
                { id: "eid5543", tween: [ "style", "${_i2-22}", "opacity", '1', { fromValue: '0'}], position: 1957, duration: 1953, easing: "swing" },
                { id: "eid5612", tween: [ "style", "${_i2-22}", "opacity", '0', { fromValue: '1'}], position: 3953, duration: 1047, easing: "swing" },
                { id: "eid5536", tween: [ "style", "${_i22}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2395, easing: "swing" },
                { id: "eid5540", tween: [ "style", "${_i22}", "opacity", '0', { fromValue: '1'}], position: 2453, duration: 1500, easing: "swing" }            ]
        }
    }
},
"sym-ing-41": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'firstLeaf2',
                    type: 'image',
                    rect: ['100px', '141px', '58px', '51px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/firstLeaf.png', '0px', '0px']
                },
                {
                    id: 'secondLeaf2',
                    type: 'image',
                    rect: ['49px', '95px', '51px', '58px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/secondLeaf.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_secondLeaf2}": [
                ["style", "top", '95px'],
                ["style", "opacity", '0'],
                ["style", "left", '49px']
            ],
            "${_firstLeaf2}": [
                ["style", "top", '101px'],
                ["style", "opacity", '0'],
                ["style", "left", '206px']
            ],
            "${symbolSelector}": [
                ["style", "height", '51px'],
                ["style", "width", '58px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3707,
            autoPlay: true,
            timeline: [
                { id: "eid5685", tween: [ "style", "${_secondLeaf2}", "left", '155px', { fromValue: '49px'}], position: 1704, duration: 2000, easing: "easeOutQuad" },
                { id: "eid5673", tween: [ "style", "${_firstLeaf2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2369, easing: "easeOutQuad" },
                { id: "eid5702", tween: [ "style", "${_firstLeaf2}", "opacity", '0', { fromValue: '1'}], position: 2369, duration: 631, easing: "easeOutQuad" },
                { id: "eid5669", tween: [ "style", "${_firstLeaf2}", "left", '100px', { fromValue: '206px'}], position: 0, duration: 3000, easing: "easeOutQuad" },
                { id: "eid5671", tween: [ "style", "${_firstLeaf2}", "top", '141px', { fromValue: '101px'}], position: 0, duration: 3000, easing: "easeOutQuad" },
                { id: "eid5683", tween: [ "style", "${_secondLeaf2}", "top", '131px', { fromValue: '95px'}], position: 1704, duration: 2000, easing: "easeOutQuad" },
                { id: "eid5686", tween: [ "style", "${_secondLeaf2}", "opacity", '1', { fromValue: '0'}], position: 1704, duration: 1546, easing: "easeOutQuad" },
                { id: "eid5704", tween: [ "style", "${_secondLeaf2}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 457, easing: "easeOutQuad" }            ]
        }
    }
},
"sym-boyEducated": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'boyEducated',
                    type: 'image',
                    rect: ['0px', '0px', '185px', '344px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/boyEducated.png', '0px', '0px']
                },
                {
                    id: 'boyThumb',
                    type: 'image',
                    rect: ['122px', '123px', '94px', '93px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/boyThumb.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '344px'],
                ["style", "width", '216px']
            ],
            "${_boyEducated}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_boyThumb}": [
                ["style", "top", '123px'],
                ["style", "-webkit-transform-origin", [5,78], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [5,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [5,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [5,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [5,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '123px'],
                ["transform", "rotateZ", '-12deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: true,
            timeline: [
                { id: "eid6032", tween: [ "transform", "${_boyThumb}", "rotateZ", '5deg', { fromValue: '-12deg'}], position: 0, duration: 2000, easing: "easeOutQuart" },
                { id: "eid6043", tween: [ "transform", "${_boyThumb}", "rotateZ", '-12deg', { fromValue: '5deg'}], position: 4000, duration: 2000, easing: "easeOutCubic" }            ]
        }
    }
},
"sym-girl-educated": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'girlEducated',
                    type: 'image',
                    rect: ['0px', '0px', '169px', '346px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/girlEducated.png', '0px', '0px']
                },
                {
                    rect: ['71px', '68px', '9px', '19px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    transform: [[0, 0], ['-9']],
                    id: 'Ellipse',
                    stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(13,13,13,1.00)']
                },
                {
                    rect: ['37px', '68px', '7px', '17px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    transform: [[0, 0], ['8']],
                    id: 'EllipseCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(13,13,13,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_girlEducated}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_EllipseCopy}": [
                ["style", "top", '66px'],
                ["color", "background-color", 'rgba(13,13,13,1)'],
                ["transform", "rotateZ", '8deg'],
                ["style", "height", '19px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '28px'],
                ["style", "width", '7px']
            ],
            "${_Ellipse}": [
                ["style", "top", '68px'],
                ["color", "background-color", 'rgba(13,13,13,1.00)'],
                ["transform", "rotateZ", '-9deg'],
                ["style", "height", '19px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '62px'],
                ["style", "width", '9px']
            ],
            "${symbolSelector}": [
                ["style", "height", '346px'],
                ["style", "width", '169px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14000,
            autoPlay: true,
            timeline: [
                { id: "eid6064", tween: [ "style", "${_Ellipse}", "top", '79px', { fromValue: '68px'}], position: 0, duration: 202, easing: "easeInQuad" },
                { id: "eid6076", tween: [ "style", "${_Ellipse}", "top", '68px', { fromValue: '79px'}], position: 217, duration: 202, easing: "easeInQuad" },
                { id: "eid6090", tween: [ "style", "${_Ellipse}", "top", '79px', { fromValue: '68px'}], position: 5278, duration: 202, easing: "easeInQuad" },
                { id: "eid6098", tween: [ "style", "${_Ellipse}", "top", '68px', { fromValue: '79px'}], position: 5496, duration: 202, easing: "easeInQuad" },
                { id: "eid6062", tween: [ "style", "${_Ellipse}", "height", '1px', { fromValue: '19px'}], position: 0, duration: 202, easing: "easeInQuad" },
                { id: "eid6077", tween: [ "style", "${_Ellipse}", "height", '19px', { fromValue: '1px'}], position: 217, duration: 202, easing: "easeInQuad" },
                { id: "eid6091", tween: [ "style", "${_Ellipse}", "height", '1px', { fromValue: '19px'}], position: 5278, duration: 202, easing: "easeInQuad" },
                { id: "eid6099", tween: [ "style", "${_Ellipse}", "height", '19px', { fromValue: '1px'}], position: 5496, duration: 202, easing: "easeInQuad" },
                { id: "eid6067", tween: [ "style", "${_EllipseCopy}", "top", '78px', { fromValue: '66px'}], position: 0, duration: 202, easing: "easeInQuad" },
                { id: "eid6073", tween: [ "style", "${_EllipseCopy}", "top", '66px', { fromValue: '78px'}], position: 217, duration: 202, easing: "easeInQuad" },
                { id: "eid6088", tween: [ "style", "${_EllipseCopy}", "top", '78px', { fromValue: '66px'}], position: 5278, duration: 202, easing: "easeInQuad" },
                { id: "eid6096", tween: [ "style", "${_EllipseCopy}", "top", '66px', { fromValue: '78px'}], position: 5496, duration: 202, easing: "easeInQuad" },
                { id: "eid6079", tween: [ "style", "${_Ellipse}", "left", '71px', { fromValue: '62px'}], position: 4000, duration: 500, easing: "easeInQuad" },
                { id: "eid6103", tween: [ "style", "${_Ellipse}", "left", '62px', { fromValue: '71px'}], position: 10000, duration: 565, easing: "easeInQuad" },
                { id: "eid6083", tween: [ "style", "${_EllipseCopy}", "left", '37px', { fromValue: '28px'}], position: 4000, duration: 500, easing: "easeInQuad" },
                { id: "eid6102", tween: [ "style", "${_EllipseCopy}", "left", '28px', { fromValue: '37px'}], position: 10000, duration: 565, easing: "easeInQuad" },
                { id: "eid6068", tween: [ "style", "${_EllipseCopy}", "height", '1px', { fromValue: '19px'}], position: 0, duration: 202, easing: "easeInQuad" },
                { id: "eid6072", tween: [ "style", "${_EllipseCopy}", "height", '19px', { fromValue: '1px'}], position: 217, duration: 202, easing: "easeInQuad" },
                { id: "eid6089", tween: [ "style", "${_EllipseCopy}", "height", '1px', { fromValue: '19px'}], position: 5278, duration: 202, easing: "easeInQuad" },
                { id: "eid6097", tween: [ "style", "${_EllipseCopy}", "height", '19px', { fromValue: '1px'}], position: 5496, duration: 202, easing: "easeInQuad" }            ]
        }
    }
},
"sym-kupu": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sym-kupu-fly3',
                    type: 'rect',
                    autoOrient: false,
                    rect: ['0px', '-6px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym-kupu-fly3',
                symbolName: 'sym-kupu-fly',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '23px']
            ],
            "${_sym-kupu-fly3}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["motion", "location", '0px 8.5px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 31785,
            autoPlay: true,
            timeline: [
                { id: "eid6457", tween: [ "transform", "${_sym-kupu-fly3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid6460", tween: [ "motion", "${_sym-kupu-fly3}", [[0, 8.5, 0, 0],[13.51, 37.18, -40.93, 100.74, -17.95, 44.18],[29.33, 82.5, 0, 0]]], position: 0, duration: 5000, easing: "swing" },
                { id: "eid6522", tween: [ "motion", "${_sym-kupu-fly3}", [[29.33, 82.5, 0, 0],[27.6, 99.43, -11.1, 11.31, -14.84, 15.13],[11.67, 100.5, 0, 0]]], position: 8250, duration: 7000, easing: "swing" },
                { id: "eid6523", tween: [ "motion", "${_sym-kupu-fly3}", [[11.67, 100.5, 0, 0],[-33.63, 110.79, -90.6, -19.41, -52.47, -11.24],[-79.5, 64.5, 0, 0]]], position: 16861, duration: 5000, easing: "swing" },
                { id: "eid6524", tween: [ "motion", "${_sym-kupu-fly3}", [[-79.5, 64.5, 0, 0],[-66.76, 29.4, 85.47, -99.89, 34.57, -40.4],[-0.5, 8.5, 0, 0]]], position: 22750, duration: 4639, easing: "swing" }            ]
        }
    }
},
"sym-kupu-fly": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'kupuBody',
                    type: 'image',
                    rect: ['0px', '11px', '23px', '18px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/kupuBody.png', '0px', '0px']
                },
                {
                    id: 'sayap2',
                    type: 'image',
                    rect: ['15px', '12px', '18px', '13px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sayap2.png', '0px', '0px']
                },
                {
                    id: 'sayap1',
                    type: 'image',
                    rect: ['8px', '0px', '16px', '23px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sayap1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_kupuBody}": [
                ["style", "top", '11px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_sayap2}": [
                ["style", "top", '12px'],
                ["transform", "scaleY", '0.73125'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '14px'],
                ["style", "width", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '32px']
            ],
            "${_sayap1}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '8px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid6202", tween: [ "style", "${_sayap2}", "top", '10px', { fromValue: '12px'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid6225", tween: [ "style", "${_sayap2}", "top", '12px', { fromValue: '10px'}], position: 516, duration: 484, easing: "swing" },
                { id: "eid6188", tween: [ "transform", "${_sayap1}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid6222", tween: [ "transform", "${_sayap1}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 516, duration: 484, easing: "swing" },
                { id: "eid6194", tween: [ "style", "${_sayap2}", "-webkit-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid14535", tween: [ "style", "${_sayap2}", "-moz-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid14536", tween: [ "style", "${_sayap2}", "-ms-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid14537", tween: [ "style", "${_sayap2}", "msTransformOrigin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid14538", tween: [ "style", "${_sayap2}", "-o-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid6224", tween: [ "style", "${_sayap2}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid14539", tween: [ "style", "${_sayap2}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid14540", tween: [ "style", "${_sayap2}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid14541", tween: [ "style", "${_sayap2}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid14542", tween: [ "style", "${_sayap2}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid6185", tween: [ "transform", "${_sayap1}", "scaleY", '0.52173', { fromValue: '1'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid6221", tween: [ "transform", "${_sayap1}", "scaleY", '1', { fromValue: '0.52173'}], position: 516, duration: 484, easing: "swing" },
                { id: "eid6197", tween: [ "transform", "${_sayap2}", "scaleX", '0.65', { fromValue: '1'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid6223", tween: [ "transform", "${_sayap2}", "scaleX", '1', { fromValue: '0.65'}], position: 516, duration: 484, easing: "swing" },
                { id: "eid6358", tween: [ "style", "${_kupuBody}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0, easing: "swing" },
                { id: "eid14543", tween: [ "style", "${_kupuBody}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0, easing: "swing" },
                { id: "eid14544", tween: [ "style", "${_kupuBody}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0, easing: "swing" },
                { id: "eid14545", tween: [ "style", "${_kupuBody}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0, easing: "swing" },
                { id: "eid14546", tween: [ "style", "${_kupuBody}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0, easing: "swing" },
                { id: "eid6184", tween: [ "style", "${_sayap1}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid14547", tween: [ "style", "${_sayap1}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid14548", tween: [ "style", "${_sayap1}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid14549", tween: [ "style", "${_sayap1}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid14550", tween: [ "style", "${_sayap1}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid6220", tween: [ "style", "${_sayap1}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid14551", tween: [ "style", "${_sayap1}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid14552", tween: [ "style", "${_sayap1}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid14553", tween: [ "style", "${_sayap1}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid14554", tween: [ "style", "${_sayap1}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid6192", tween: [ "transform", "${_sayap2}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid6226", tween: [ "transform", "${_sayap2}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 516, duration: 484, easing: "swing" }            ]
        }
    }
},
"symbol-download-boy": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '309px', '179px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'RoundRect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'dl1',
                    type: 'image',
                    rect: ['114px', '26px', '103px', '122px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dl1.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '309px', '179px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'RoundRect3',
                    opacity: 0,
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dl1}": [
                ["style", "top", '26px'],
                ["style", "left", '114px']
            ],
            "${_RoundRect}": [
                ["style", "top", '0px'],
                ["style", "height", '179px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_RoundRect3}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '179px'],
                ["style", "width", '309px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym-download-girl": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '309px', '179px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'RoundRectCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'dl2',
                    type: 'image',
                    rect: ['101px', '31px', '113px', '118px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dl2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '309px', '179px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'RoundRect2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRectCopy}": [
                ["style", "top", '0px'],
                ["style", "height", '179px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '179px'],
                ["style", "width", '309px']
            ],
            "${_RoundRect2}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_dl2}": [
                ["style", "top", '31px'],
                ["style", "left", '101px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym-logo": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'logo-1',
                    type: 'image',
                    rect: ['0px', '0px', '183px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/logo-1.png', '0px', '0px']
                },
                {
                    id: 'logohover',
                    type: 'image',
                    rect: ['0', '0', '183px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/logohover.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '183px', '66px', 'auto', 'auto'],
                    opacity: 0,
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logohover}": [
                ["style", "opacity", '0']
            ],
            "${_Rectangle2}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_logo-1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${symbolSelector}": [
                ["style", "height", '66px'],
                ["style", "width", '183px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid6697", tween: [ "style", "${_logo-1}", "opacity", '0.2', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid6695", tween: [ "style", "${_logohover}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }            ]
        }
    }
},
"sym-but-product": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['0px', '0px', '83px', '25px', 'auto', 'auto'],
                    align: 'center',
                    id: 'text-product',
                    text: 'PRODUCT',
                    cursor: ['pointer'],
                    font: ['viga, sans-serif', 22, 'rgba(255,0,0,1.00)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_text-product}": [
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '22px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '25px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "width", '83px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '83px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 306,
            autoPlay: false,
            timeline: [
                { id: "eid6790", tween: [ "color", "${_text-product}", "color", 'rgba(92,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1)'}], position: 0, duration: 306 }            ]
        }
    }
},
"sym-but-ing": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['0px', '0px', '117px', '25px', 'auto', 'auto'],
                    align: 'center',
                    id: 'text-ingredients',
                    text: 'INGREDIENTS',
                    cursor: ['pointer'],
                    font: ['viga, sans-serif', 22, 'rgba(255,0,0,1.00)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_text-ingredients}": [
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "left", '0px'],
                ["style", "font-size", '22px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '25px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "width", '117px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '117px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid6858", tween: [ "color", "${_text-ingredients}", "color", 'rgba(92,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1)'}], position: 0, duration: 250 }            ]
        }
    }
},
"sym-but-news": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['0px', '0px', '53px', '25px', 'auto', 'auto'],
                    align: 'center',
                    id: 'text-ingredientsCopy',
                    text: 'NEWS',
                    cursor: ['pointer'],
                    font: ['viga, sans-serif', 22, 'rgba(255,0,0,1.00)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_text-ingredientsCopy}": [
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "left", '0px'],
                ["style", "font-size", '22px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '25px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "width", '53px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid6855", tween: [ "color", "${_text-ingredientsCopy}", "color", 'rgba(92,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1)'}], position: 0, duration: 250 }            ]
        }
    }
},
"sym-but-kids": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '165px', '25px', 'auto', 'auto'],
                    font: ['viga, sans-serif', 22, 'rgba(255,0,0,1.00)', 'normal', 'none', ''],
                    align: 'center',
                    id: 'text-ingredientsCopy2',
                    text: 'KID\'S CORNER',
                    cursor: ['pointer'],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_text-ingredientsCopy2}": [
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "left", '0px'],
                ["style", "font-size", '22px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '25px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "width", '165px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '122px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid6852", tween: [ "color", "${_text-ingredientsCopy2}", "color", 'rgba(92,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1)'}], position: 0, duration: 250 }            ]
        }
    }
},
"sym-but-help": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '84px', '25px', 'auto', 'auto'],
                    font: ['viga, sans-serif', 22, 'rgba(255,0,0,1.00)', 'normal', 'none', ''],
                    align: 'center',
                    id: 'text-ingredientsCopy3',
                    text: 'HELP?',
                    cursor: ['pointer'],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_text-ingredientsCopy3}": [
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "left", '0px'],
                ["style", "font-size", '22px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '25px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "width", '84px'],
                ["style", "cursor", 'pointer']
            ],
            "${_text-ingredientsCopy2}": [
                ["style", "font-family", '']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '52px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid6849", tween: [ "color", "${_text-ingredientsCopy3}", "color", 'rgba(92,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1)'}], position: 0, duration: 250 }            ]
        }
    }
},
"sym-arrow-know": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'arrow-white2',
                    type: 'image',
                    rect: ['0px', '0px', '40px', '32px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/arrow-white.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_arrow-white2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym-cloud-yellow-far": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'cloud-4-1',
                    opacity: 0.69999998807907,
                    rect: ['0px', '0px', '100px', '79px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy3',
                    opacity: 0.69999998807907,
                    rect: ['627px', '-33px', '84px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy9',
                    opacity: 0.69999998807907,
                    rect: ['345px', '37px', '62px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy10',
                    opacity: 0.69999998807907,
                    rect: ['345px', '37px', '62px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy11',
                    opacity: 0.69999998807907,
                    rect: ['948px', '-60px', '62px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy4',
                    opacity: 0.69999998807907,
                    rect: ['1062px', '-66px', '84px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy5',
                    opacity: 0.69999998807907,
                    rect: ['855px', '28px', '84px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy',
                    opacity: 0.69999998807907,
                    rect: ['185px', '-36px', '116px', '92px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy6',
                    opacity: 0.69999998807907,
                    rect: ['756px', '-102px', '116px', '92px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy2',
                    opacity: 0.69999998807907,
                    rect: ['345px', '-89px', '100px', '79px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy7',
                    opacity: 0.69999998807907,
                    rect: ['345px', '-89px', '100px', '79px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-3-1',
                    opacity: 0.69999998807907,
                    rect: ['462px', '-10px', '108px', '92px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy22',
                    opacity: 0.69999998807907,
                    rect: ['1177px', '0px', '100px', '79px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy21',
                    opacity: 0.69999998807907,
                    rect: ['1804px', '-33px', '84px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy20',
                    opacity: 0.69999998807907,
                    rect: ['1522px', '37px', '62px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy19',
                    opacity: 0.69999998807907,
                    rect: ['1522px', '37px', '62px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy18',
                    opacity: 0.69999998807907,
                    rect: ['2125px', '-60px', '62px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy17',
                    opacity: 0.69999998807907,
                    rect: ['2239px', '-66px', '84px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy16',
                    opacity: 0.69999998807907,
                    rect: ['2032px', '28px', '84px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy15',
                    opacity: 0.69999998807907,
                    rect: ['1362px', '-36px', '116px', '92px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy14',
                    opacity: 0.69999998807907,
                    rect: ['1933px', '-102px', '116px', '92px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy13',
                    opacity: 0.69999998807907,
                    rect: ['1522px', '-89px', '100px', '79px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy12',
                    opacity: 0.69999998807907,
                    rect: ['1522px', '-89px', '100px', '79px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-3-1Copy',
                    opacity: 0.69999998807907,
                    rect: ['1639px', '-10px', '108px', '92px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy27',
                    opacity: 0.69999998807907,
                    rect: ['2528px', '-33px', '84px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy26',
                    opacity: 0.69999998807907,
                    rect: ['2849px', '-60px', '62px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy25',
                    opacity: 0.69999998807907,
                    rect: ['2963px', '-66px', '84px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy24',
                    opacity: 0.69999998807907,
                    rect: ['2756px', '28px', '84px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-4-1Copy23',
                    opacity: 0.69999998807907,
                    rect: ['2657px', '-102px', '116px', '92px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'cloud-3-1Copy2',
                    opacity: 0.69999998807907,
                    rect: ['2363px', '-10px', '108px', '92px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cloud-4-1Copy21}": [
                ["style", "top", '-33px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1804px'],
                ["style", "width", '84px']
            ],
            "${_cloud-4-1Copy4}": [
                ["style", "top", '-66px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1062px'],
                ["style", "width", '84px']
            ],
            "${_cloud-4-1Copy11}": [
                ["style", "top", '-60px'],
                ["style", "height", '48px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '948px'],
                ["style", "width", '62px']
            ],
            "${_cloud-4-1Copy3}": [
                ["style", "top", '-33px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '627px'],
                ["style", "width", '84px']
            ],
            "${_cloud-4-1Copy6}": [
                ["style", "top", '-102px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '756px'],
                ["style", "width", '116px']
            ],
            "${_cloud-4-1Copy13}": [
                ["style", "top", '-89px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1522px']
            ],
            "${_cloud-4-1Copy2}": [
                ["style", "top", '-89px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '345px']
            ],
            "${_cloud-3-1Copy}": [
                ["style", "top", '-10px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1639px'],
                ["style", "width", '108px']
            ],
            "${_cloud-4-1Copy16}": [
                ["style", "top", '28px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2032px'],
                ["style", "width", '84px']
            ],
            "${_cloud-4-1Copy24}": [
                ["style", "top", '28px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2756px'],
                ["style", "width", '84px']
            ],
            "${symbolSelector}": [
                ["style", "height", '79px'],
                ["style", "width", '100px']
            ],
            "${_cloud-4-1Copy22}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1177px']
            ],
            "${_cloud-4-1Copy23}": [
                ["style", "top", '-102px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2657px'],
                ["style", "width", '116px']
            ],
            "${_cloud-4-1Copy}": [
                ["style", "top", '-36px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '185px'],
                ["style", "width", '116px']
            ],
            "${_cloud-4-1Copy19}": [
                ["style", "top", '37px'],
                ["style", "height", '48px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1522px'],
                ["style", "width", '62px']
            ],
            "${_cloud-4-1Copy15}": [
                ["style", "top", '-36px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1362px'],
                ["style", "width", '116px']
            ],
            "${_cloud-4-1Copy7}": [
                ["style", "top", '-89px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '345px']
            ],
            "${_cloud-4-1Copy25}": [
                ["style", "top", '-66px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2963px'],
                ["style", "width", '84px']
            ],
            "${_cloud-4-1Copy20}": [
                ["style", "top", '37px'],
                ["style", "height", '48px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1522px'],
                ["style", "width", '62px']
            ],
            "${_cloud-4-1Copy18}": [
                ["style", "top", '-60px'],
                ["style", "height", '48px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2125px'],
                ["style", "width", '62px']
            ],
            "${_cloud-3-1}": [
                ["style", "top", '-10px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '462px'],
                ["style", "width", '108px']
            ],
            "${_cloud-4-1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '0px']
            ],
            "${_cloud-4-1Copy12}": [
                ["style", "top", '-89px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1522px']
            ],
            "${_cloud-4-1Copy5}": [
                ["style", "top", '28px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '855px'],
                ["style", "width", '84px']
            ],
            "${_cloud-4-1Copy14}": [
                ["style", "top", '-102px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1933px'],
                ["style", "width", '116px']
            ],
            "${_cloud-4-1Copy26}": [
                ["style", "top", '-60px'],
                ["style", "height", '48px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2849px'],
                ["style", "width", '62px']
            ],
            "${_cloud-4-1Copy27}": [
                ["style", "top", '-33px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2528px'],
                ["style", "width", '84px']
            ],
            "${_cloud-4-1Copy9}": [
                ["style", "top", '37px'],
                ["style", "height", '48px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '345px'],
                ["style", "width", '62px']
            ],
            "${_cloud-4-1Copy10}": [
                ["style", "top", '37px'],
                ["style", "height", '48px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '345px'],
                ["style", "width", '62px']
            ],
            "${_cloud-3-1Copy2}": [
                ["style", "top", '-10px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2363px'],
                ["style", "width", '108px']
            ],
            "${_cloud-4-1Copy17}": [
                ["style", "top", '-66px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2239px'],
                ["style", "width", '84px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym-cloud-yellow-near": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cloud-3-12',
                    type: 'image',
                    rect: ['0px', '0px', '178px', '152px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-12.png', '0px', '0px']
                },
                {
                    id: 'cloud-3-4',
                    type: 'image',
                    rect: ['759px', '-13px', '178px', '123px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-4.png', '0px', '0px']
                },
                {
                    id: 'cloud-3-3',
                    type: 'image',
                    rect: ['251px', '35px', '152px', '104px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-3.png', '0px', '0px']
                },
                {
                    id: 'cloud-3-3Copy',
                    type: 'image',
                    rect: ['972px', '17px', '203px', '139px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-3.png', '0px', '0px']
                },
                {
                    id: 'cloud-3-2',
                    type: 'image',
                    rect: ['475px', '-13px', '217px', '152px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-2.png', '0px', '0px']
                },
                {
                    id: 'cloud-3-12Copy2',
                    type: 'image',
                    rect: ['1231px', '0px', '178px', '152px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-12.png', '0px', '0px']
                },
                {
                    id: 'cloud-3-4Copy',
                    type: 'image',
                    rect: ['1990px', '-13px', '178px', '123px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-4.png', '0px', '0px']
                },
                {
                    id: 'cloud-3-3Copy3',
                    type: 'image',
                    rect: ['1482px', '35px', '152px', '104px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-3.png', '0px', '0px']
                },
                {
                    id: 'cloud-3-3Copy2',
                    type: 'image',
                    rect: ['2203px', '17px', '203px', '139px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-3.png', '0px', '0px']
                },
                {
                    id: 'cloud-3-2Copy',
                    type: 'image',
                    rect: ['1706px', '-13px', '217px', '152px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-2.png', '0px', '0px']
                },
                {
                    id: 'cloud-3-4Copy2',
                    type: 'image',
                    rect: ['2986px', '-13px', '178px', '123px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-4.png', '0px', '0px']
                },
                {
                    id: 'cloud-3-3Copy5',
                    type: 'image',
                    rect: ['2478px', '35px', '152px', '104px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-3.png', '0px', '0px']
                },
                {
                    id: 'cloud-3-3Copy4',
                    type: 'image',
                    rect: ['3199px', '17px', '203px', '139px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-3.png', '0px', '0px']
                },
                {
                    id: 'cloud-3-2Copy2',
                    type: 'image',
                    rect: ['2702px', '-13px', '217px', '152px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cloud-3-2}": [
                ["style", "height", '152px'],
                ["style", "top", '-13px'],
                ["style", "left", '475px'],
                ["style", "width", '217px']
            ],
            "${_cloud-3-3Copy2}": [
                ["style", "top", '17px'],
                ["style", "height", '139px'],
                ["style", "left", '2203px'],
                ["style", "width", '203px']
            ],
            "${_cloud-3-2Copy2}": [
                ["style", "height", '152px'],
                ["style", "top", '-13px'],
                ["style", "left", '2702px'],
                ["style", "width", '217px']
            ],
            "${_cloud-3-3}": [
                ["style", "height", '104px'],
                ["style", "top", '35px'],
                ["style", "left", '251px'],
                ["style", "width", '152px']
            ],
            "${_cloud-3-3Copy5}": [
                ["style", "height", '104px'],
                ["style", "top", '35px'],
                ["style", "left", '2478px'],
                ["style", "width", '152px']
            ],
            "${_cloud-3-12}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_cloud-3-3Copy}": [
                ["style", "height", '139px'],
                ["style", "top", '17px'],
                ["style", "left", '972px'],
                ["style", "width", '203px']
            ],
            "${_cloud-3-3Copy3}": [
                ["style", "top", '35px'],
                ["style", "height", '104px'],
                ["style", "left", '1482px'],
                ["style", "width", '152px']
            ],
            "${_cloud-3-3Copy4}": [
                ["style", "height", '139px'],
                ["style", "top", '17px'],
                ["style", "left", '3199px'],
                ["style", "width", '203px']
            ],
            "${_cloud-3-4}": [
                ["style", "height", '123px'],
                ["style", "top", '-13px'],
                ["style", "left", '759px'],
                ["style", "width", '178px']
            ],
            "${symbolSelector}": [
                ["style", "height", '152px'],
                ["style", "width", '178px']
            ],
            "${_cloud-3-4Copy2}": [
                ["style", "height", '123px'],
                ["style", "top", '-13px'],
                ["style", "left", '2986px'],
                ["style", "width", '178px']
            ],
            "${_cloud-3-2Copy}": [
                ["style", "top", '-13px'],
                ["style", "height", '152px'],
                ["style", "left", '1706px'],
                ["style", "width", '217px']
            ],
            "${_cloud-3-4Copy}": [
                ["style", "top", '-13px'],
                ["style", "height", '123px'],
                ["style", "left", '1990px'],
                ["style", "width", '178px']
            ],
            "${_cloud-3-12Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '1231px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym-ball": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'ball',
                    rect: ['0px', '0px', '116px', '117px', 'auto', 'auto'],
                    userClass: 'ball',
                    fill: ['rgba(0,0,0,0)', 'images/ball.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ball}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '117px'],
                ["style", "width", '116px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11000,
            autoPlay: true,
            timeline: [
                { id: "eid1187", tween: [ "style", "${_ball}", "top", '266px', { fromValue: '0px'}], position: 0, duration: 5000, easing: "easeOutBounce" },
                { id: "eid8045", tween: [ "style", "${_ball}", "top", '0px', { fromValue: '266px'}], position: 6000, duration: 5000, easing: "easeInBounce" }            ]
        }
    }
},
"sym-ball-rotate": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ball-play',
                    type: 'image',
                    rect: ['0px', '0px', '63px', '63px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ball-play.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '63px'],
                ["style", "width", '63px']
            ],
            "${_ball-play}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '360deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 26000,
            autoPlay: true,
            timeline: [
                { id: "eid8676", tween: [ "transform", "${_ball-play}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 0, duration: 26000, easing: "easeInOutBack" }            ]
        }
    }
},
"sym-know": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Group5',
                    type: 'group',
                    rect: ['0', '0', '186', '68', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['52px', '0px', '83px', '25px', 'auto', 'auto'],
                        font: ['la-belle-aurore, cursive', 21, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                        id: 'Text2',
                        text: 'Do You',
                        align: 'left',
                        type: 'text'
                    },
                    {
                        font: ['la-belle-aurore, cursive', 21, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                        transform: [[0, 0], ['13']],
                        align: 'left',
                        id: 'Text5',
                        text: 'Know?',
                        type: 'text',
                        rect: ['98px', '34px', '86px', '25px', 'auto', 'auto']
                    },
                    {
                        id: 'sym-arrow-know',
                        type: 'rect',
                        rect: ['0px', '35px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'sym-arrow-know',
                symbolName: 'sym-arrow-know',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Group5}": [
                ["style", "top", '11px']
            ],
            "${_sym-arrow-know}": [
                ["style", "left", '0px'],
                ["style", "top", '35px']
            ],
            "${_Text5}": [
                ["style", "top", '34px'],
                ["style", "left", '98px'],
                ["transform", "rotateZ", '13deg']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "width", '83px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'la-belle-aurore, cursive'],
                ["style", "left", '52px'],
                ["style", "font-size", '21px']
            ],
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '186px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid9055", tween: [ "style", "${_Group5}", "top", '-13px', { fromValue: '11px'}], position: 0, duration: 5000, easing: "easeOutBack" }            ]
        }
    }
},
"sym_page3x": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Group5',
                    type: 'group',
                    rect: ['112px', '0px', '973', '422', 'auto', 'auto'],
                    c: [
                    {
                        font: ['annie-use-your-telescope, sans-serif', 19, 'rgba(208,36,36,1.00)', '400', 'none', 'normal'],
                        type: 'text',
                        transform: [[0, 0], ['-11']],
                        id: 'text-honeyMint',
                        text: 'Honey<br>Mint',
                        align: 'left',
                        rect: ['9px', '288px', '86px', '29px', 'auto', 'auto']
                    },
                    {
                        rect: ['573px', '58px', '391px', '179px', 'auto', 'auto'],
                        type: 'text',
                        align: 'left',
                        id: 'p-khasiat',
                        text: ' • Membantu meredakan masuk angin, perut kembung, mual dan muntah<br> • Membantu melegakan tenggorokan<br> • Membantu mencegah mabuk perjalanan<br> • Membantu meningkatkan daya tahan tubuh<br> • Membantu memelihara kesehatan dan \t<br>menghangatkan badan<br>',
                        font: ['viga, sans-serif', 17, 'rgba(248,152,28,1.00)', '400', 'none', 'normal'],
                        tag: 'article'
                    },
                    {
                        rect: ['572px', '28px', '278px', '29px', 'auto', 'auto'],
                        type: 'text',
                        align: 'left',
                        id: 't-khasiat',
                        text: 'Khasiat dan kegunaan:',
                        font: ['viga, sans-serif', 21, 'rgba(209,35,42,1.00)', '400', 'none', 'normal'],
                        tag: 'h1'
                    },
                    {
                        rect: ['573px', '297px', '391px', '125px', 'auto', 'auto'],
                        type: 'text',
                        align: 'left',
                        id: 'p-dosis',
                        text: 'Minum 3 kali sehari, sesudah makan sampai membaik<br> • Untuk anak 1 tahun : 1/2 sachet<br> • Untuk anak 2-6 tahun : 1 sachet',
                        font: ['viga, sans-serif', 17, 'rgba(248,152,28,1.00)', '400', 'none', 'normal'],
                        tag: 'article'
                    },
                    {
                        rect: ['572px', '267px', '278px', '29px', 'auto', 'auto'],
                        type: 'text',
                        align: 'left',
                        id: 't-dosis',
                        text: 'Dosis dan cara pemakaian:',
                        font: ['viga, sans-serif', 21, 'rgba(209,35,42,1.00)', '400', 'none', 'normal'],
                        tag: 'h1'
                    },
                    {
                        id: 'sym-product',
                        type: 'rect',
                        rect: ['0px', '93px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'arrow-up',
                        type: 'image',
                        rect: ['45px', '272px', '14px', '29px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-up.png', '0px', '0px']
                    }]
                },
                {
                    userClass: 'itemlist',
                    rect: ['415px', '427px', '15px', '15px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'il1',
                    stroke: [2, 'rgba(248,152,28,1.00)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(248,152,28,1.00)']
                },
                {
                    userClass: 'itemlist',
                    rect: ['442px', '427px', '15px', '15px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'il2',
                    stroke: [2, 'rgba(248,152,28,1.00)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    userClass: 'itemlist',
                    rect: ['468px', '427px', '15px', '15px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'il3',
                    stroke: [2, 'rgba(248,152,28,1.00)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'sym-product',
                symbolName: 'sym-product',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_p-khasiat}": [
                ["style", "top", '58px'],
                ["style", "font-size", '17px'],
                ["color", "color", 'rgba(248,152,28,1.00)'],
                ["style", "opacity", '1'],
                ["style", "height", '179px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '573px'],
                ["style", "width", '391px']
            ],
            "${_Group5}": [
                ["style", "left", '112px'],
                ["style", "top", '0px']
            ],
            "${_t-khasiat}": [
                ["style", "top", '28px'],
                ["style", "width", '278px'],
                ["style", "height", '29px'],
                ["color", "color", 'rgba(209,35,42,1.00)'],
                ["style", "left", '572px'],
                ["style", "font-size", '21px']
            ],
            "${_il3}": [
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '468px'],
                ["style", "width", '15px'],
                ["style", "top", '427px'],
                ["style", "height", '15px'],
                ["color", "border-color", 'rgb(248, 152, 28)'],
                ["style", "border-width", '2px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '422px'],
                ["style", "width", '973px']
            ],
            "${_arrow-up}": [
                ["style", "top", '272px'],
                ["style", "left", '45px']
            ],
            "${_il2}": [
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '442px'],
                ["style", "width", '15px'],
                ["style", "top", '427px'],
                ["style", "height", '15px'],
                ["color", "border-color", 'rgb(248, 152, 28)'],
                ["style", "border-width", '2px'],
                ["style", "cursor", 'pointer']
            ],
            "${_sym-product}": [
                ["style", "left", '0px'],
                ["style", "top", '93px']
            ],
            "${_p-dosis}": [
                ["style", "top", '297px'],
                ["style", "width", '391px'],
                ["style", "height", '125px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["color", "color", 'rgba(248,152,28,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '573px'],
                ["style", "font-size", '17px']
            ],
            "${_il1}": [
                ["color", "background-color", 'rgba(248,152,28,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '415px'],
                ["style", "width", '15px'],
                ["style", "top", '427px'],
                ["style", "height", '15px'],
                ["color", "border-color", 'rgba(248,152,28,1.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "border-width", '2px']
            ],
            "${_text-honeyMint}": [
                ["style", "top", '288px'],
                ["color", "color", 'rgba(208,36,36,1)'],
                ["style", "left", '9px'],
                ["transform", "rotateZ", '-11deg']
            ],
            "${_t-dosis}": [
                ["style", "top", '267px'],
                ["style", "font-size", '21px'],
                ["style", "height", '29px'],
                ["color", "color", 'rgba(209,35,42,1.00)'],
                ["style", "left", '572px'],
                ["style", "width", '278px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            labels: {
                "menu1": 0,
                "menu2": 127,
                "menu3": 250
            },
            timeline: [
            ]
        }
    }
},
"sym-tv": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'tv_inside',
                    type: 'image',
                    rect: ['0px', '0px', '500px', '559px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tv_inside.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tv_inside}": [
                ["style", "top", '0px'],
                ["style", "height", '559px'],
                ["style", "left", '0px'],
                ["style", "width", '500px']
            ],
            "${symbolSelector}": [
                ["style", "height", '559px'],
                ["style", "width", '500px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym-houseW": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'tv2',
                    type: 'image',
                    rect: ['0', '0', '1000px', '1018px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tv2.png', '0px', '0px']
                },
                {
                    id: 'tv_inside2',
                    type: 'image',
                    rect: ['214px', '317px', '381px', '426px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tv_inside2.png', '0px', '0px']
                },
                {
                    id: 'but_prev',
                    type: 'image',
                    rect: ['249px', '569px', '28px', '28px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/but_prev.png', '0px', '0px']
                },
                {
                    id: 'but_next',
                    type: 'image',
                    rect: ['505px', '569px', '28px', '28px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/but_next.png', '0px', '0px']
                },
                {
                    rect: ['645px', '509px', '195px', '124px', 'auto', 'auto'],
                    font: ['viga, sans-serif', 15, 'rgba(71,71,71,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: 'Ask most any kid, birthdays are synonymous with cupcakes. But sweet treats are banned in a school district in a suburb of ...',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'textBaloon',
                    type: 'image',
                    rect: ['626px', '326px', '195px', '139px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/textBaloon.png', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['677px', '354px', '132px', '74px', 'auto', 'auto'],
                    font: ['viga, sans-serif', 15, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'Text4',
                    text: 'Cupcake Ban: Schools Crack Down on Sweets',
                    align: 'left',
                    tag: 'h1'
                },
                {
                    id: 'sym-info-but',
                    type: 'rect',
                    rect: ['748', '651', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym-want-know',
                    type: 'rect',
                    rect: ['675', '680', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym-info-but',
                symbolName: 'sym-info-but',
                autoPlay: {

               }
            },
            {
                id: 'sym-want-know',
                symbolName: 'sym-want-know',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_textBaloon}": [
                ["style", "height", '139px'],
                ["style", "top", '326px'],
                ["style", "left", '626px'],
                ["style", "width", '195px']
            ],
            "${_but_prev}": [
                ["style", "height", '28px'],
                ["style", "top", '569px'],
                ["style", "left", '249px'],
                ["style", "width", '28px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1018px'],
                ["style", "width", '1000px']
            ],
            "${_Text2}": [
                ["style", "top", '509px'],
                ["style", "font-size", '15px'],
                ["color", "color", 'rgba(71,71,71,1.00)'],
                ["style", "height", '124px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '645px'],
                ["style", "width", '195px']
            ],
            "${_tv_inside2}": [
                ["style", "height", '426px'],
                ["style", "top", '317px'],
                ["style", "left", '214px'],
                ["style", "width", '381px']
            ],
            "${_but_next}": [
                ["style", "height", '28px'],
                ["style", "top", '569px'],
                ["style", "left", '505px'],
                ["style", "width", '28px']
            ],
            "${_Text4}": [
                ["style", "top", '354px'],
                ["style", "font-size", '15px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '74px'],
                ["style", "left", '677px'],
                ["style", "width", '132px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym-info-but": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['12px', '3px', '97px', '23px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(51,51,51,1.00)']
                },
                {
                    rect: ['38px', '7px', '76px', '21px', 'auto', 'auto'],
                    font: ['viga, sans-serif', 11, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'Text5',
                    text: 'More info',
                    align: 'left',
                    type: 'text'
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '121px', '28px', 'auto', 'auto'],
                    opacity: 0,
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(100,100,100,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text5}": [
                ["style", "top", '7px'],
                ["style", "width", '76px'],
                ["style", "height", '21px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "left", '38px'],
                ["style", "font-size", '11px']
            ],
            "${_Rectangle2}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Ellipse}": [
                ["style", "top", '3px'],
                ["color", "background-color", 'rgba(51,51,51,1)'],
                ["style", "height", '23px'],
                ["style", "left", '12px'],
                ["style", "cursor", 'auto'],
                ["style", "width", '97px']
            ],
            "${symbolSelector}": [
                ["style", "height", '28px'],
                ["style", "width", '121px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid14071", tween: [ "color", "${_Text5}", "color", 'rgba(216,117,117,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 250 },
                { id: "eid14074", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(100,100,100,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(51,51,51,1)'}], position: 0, duration: 250 }            ]
        }
    }
},
"sym-want-know": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Group7',
                    type: 'group',
                    rect: ['0', '0', '132', '58', 'auto', 'auto'],
                    c: [
                    {
                        font: ['la-belle-aurore, cursive', 16, 'rgba(71,71,71,1.00)', '400', 'none', 'normal'],
                        transform: [[0, 0], ['-6']],
                        align: 'left',
                        id: 'Text6',
                        text: 'Want to know?',
                        type: 'text',
                        rect: ['1px', '5px', '105px', '28px', 'auto', 'auto']
                    },
                    {
                        font: ['la-belle-aurore, cursive', 16, 'rgba(71,71,71,1.00)', '400', 'none', 'normal'],
                        transform: [[0, 0], ['-6']],
                        align: 'left',
                        id: 'Text6Copy',
                        text: 'Click...',
                        type: 'text',
                        rect: ['26px', '24px', '105px', '28px', 'auto', 'auto']
                    },
                    {
                        id: 'arrowBlack',
                        type: 'image',
                        rect: ['81px', '18px', '38px', '17px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/arrowBlack.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text6}": [
                ["style", "top", '5px'],
                ["style", "width", '105px'],
                ["transform", "rotateZ", '-6deg'],
                ["color", "color", 'rgba(71,71,71,1.00)'],
                ["style", "font-family", 'la-belle-aurore, cursive'],
                ["style", "left", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_arrowBlack}": [
                ["style", "top", '18px'],
                ["style", "height", '17px'],
                ["style", "left", '81px'],
                ["style", "width", '38px']
            ],
            "${_Text6Copy}": [
                ["style", "top", '24px'],
                ["style", "font-size", '16px'],
                ["transform", "rotateZ", '-6deg'],
                ["color", "color", 'rgba(71,71,71,1.00)'],
                ["style", "font-family", 'la-belle-aurore, cursive'],
                ["style", "left", '26px'],
                ["style", "width", '105px']
            ],
            "${symbolSelector}": [
                ["style", "height", '58px'],
                ["style", "width", '132px']
            ],
            "${_Group7}": [
                ["style", "top", '23px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid14412", tween: [ "style", "${_Group7}", "top", '0px', { fromValue: '23px'}], position: 0, duration: 4000, easing: "easeOutBounce" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-96553822");
