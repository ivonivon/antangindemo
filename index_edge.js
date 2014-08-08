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
                        rect: ['0px', '40px','345px','89px','auto', 'auto'],
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
                        rect: ['0px', '174px','345px','89px','auto', 'auto'],
                        text: "The fever and cold body condition is often followed by indigestion problem, which is acondition when you have an gastric indigestion.",
                        font: ['viga, sans-serif', 19, "rgba(255,255,255,1.00)", "normal", "none", ""]
                    },
                    {
                        id: 'Title-symptomp',
                        type: 'text',
                        tag: 'h1',
                        rect: ['0px', '134px','260px','29px','auto', 'auto'],
                        text: "What is masuk angin?",
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
                id: 'tund',
                type: 'image',
                rect: ['-820px', '2212px','2900px','1044px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tund.png",'0px','0px']
            },
            {
                id: 'Rectangle5',
                type: 'rect',
                rect: ['0px', '3256px','100%','1334px','auto', 'auto'],
                fill: ["rgba(140,191,63,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['202px', '2934px','280px','66px','auto', 'auto'],
                text: "INGREDIENTS",
                align: "left",
                font: ['annie-use-your-telescope, sans-serif', 24, "rgba(255,255,255,1)", "700", "none", "normal"]
            },
            {
                id: 'Rectangle6',
                type: 'rect',
                rect: ['0px', '4531px','100%','1223px','auto', 'auto'],
                fill: ["rgba(204,224,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Group3',
                type: 'group',
                rect: ['0%', '3652','800','1086','auto', 'auto'],
                userClass: "house",
                c: [
                {
                    id: 'tv',
                    type: 'image',
                    rect: ['0px', '271px','800px','815px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"tv.gif",'0px','0px']
                },
                {
                    id: 'smoke',
                    type: 'image',
                    rect: ['438px', '0px','241px','227px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"smoke.png",'0px','0px'],
                    userClass: "smoke"
                }]
            },
            {
                id: 'fence',
                type: 'image',
                rect: ['-2043px', '5687px','3612px','148px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fence2.png",'0px','0px']
            },
            {
                id: 'Rectangle7',
                type: 'rect',
                rect: ['0px', '5835px','100%','845px','auto', 'auto'],
                fill: ["rgba(241,237,234,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'surat-menyurat',
                type: 'group',
                rect: ['0%', '5791','1085','871','auto', 'auto'],
                userClass: "letters",
                c: [
                {
                    id: 'post2',
                    type: 'image',
                    rect: ['645px', '437px','275px','434px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"post.png",'0px','0px']
                },
                {
                    id: 'sym-baloon',
                    type: 'rect',
                    rect: ['921px', '2866px','auto','auto','auto', 'auto']
                },
                {
                    id: 'address',
                    type: 'text',
                    rect: ['629px', '4px','317px','422px','auto', 'auto'],
                    text: "NEED HELP?<br><br>— PT.DELTOMED LABORATORIES —<br>Perkantoran Puri Niaga II<br>Jl. Puri Kencana Blok J1 no.3x<br>Jakarta Barat 11601<br>Phone\t: +62-21 5830 4131<br>Fax\t\t: +62-21 5830 4132<br><br>— PLANT —<br>Nambangan, Selogiri, Wonogiri<br>Kotak Pos 103 Wonogiri 57601<br>Phone: (+62-273) 322 566<br>Fax: (+62-273) 321 118",
                    align: "left",
                    font: ['viga, sans-serif', 19, "rgba(61,61,61,1.00)", "400", "none", "normal"]
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
                id: 'grass-footer',
                type: 'image',
                rect: ['-611px', '6449px','3612px','231px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"grass-footer.png",'0px','0px'],
                userClass: "footergrasses"
            },
            {
                id: 'footer',
                type: 'group',
                rect: ['30%', '6599','960','75','auto', 'auto'],
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
                rect: ['0px', '4749','1147','913','auto', 'auto'],
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
                id: 'page3',
                type: 'group',
                rect: ['-139', '1840px','1260','622','auto', 'auto'],
                userClass: "page3",
                c: [
                {
                    id: 'text-honeyMint',
                    type: 'text',
                    rect: ['265px', '387px','86px','29px','auto', 'auto'],
                    text: "Honey<br>Mint",
                    align: "left",
                    font: ['annie-use-your-telescope, sans-serif', 19, "rgba(208,36,36,1.00)", "400", "none", "normal"],
                    transform: [[],['-11']]
                },
                {
                    id: 'text-khasiat',
                    type: 'text',
                    rect: ['838px', '99px','391px','422px','auto', 'auto'],
                    text: "Khasiat dan kegunaan :<br> • Membantu meredakan masuk angin, perut kembung, mual dan muntah<br> • Membantu melegakan tenggorokan<br> • Membantu mencegah mabuk perjalanan<br> • Membantu meningkatkan daya tahan tubuh<br> • Membantu memelihara kesehatan dan \t<br>menghangatkan badan<br><br>Dosis dan cara pemakaian :<br>Minum 3 kali sehari, sesudah makan sampai membaik.<br> • Untuk anak 1 tahun : 1/2 sachet<br> • Untuk anak 2-6 tahun : 1 sachet.",
                    align: "left",
                    font: ['viga, sans-serif', 18, "rgba(110,24,24,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'sym-product',
                    type: 'rect',
                    rect: ['256px', '192px','auto','auto','auto', 'auto']
                },
                {
                    id: 'arrow-up',
                    type: 'image',
                    rect: ['301px', '371px','14px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"arrow-up.png",'0px','0px']
                },
                {
                    id: 'flagLogo',
                    type: 'image',
                    rect: ['0px', '0px','518px','99px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"flagLogo.png",'0px','0px']
                },
                {
                    id: 'plane',
                    type: 'image',
                    rect: ['515px', '10px','188px','89px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"plane.png",'0px','0px']
                },
                {
                    id: 'antanGinflag',
                    type: 'image',
                    rect: ['62px', '27px','406px','56px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"antanGinflag.png",'0px','0px']
                }]
            }],
            symbolInstances: [
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
                id: 'sym-cloud-yellow-far',
                symbolName: 'sym-cloud-yellow-far',
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
                id: 'sym-cloud-far',
                symbolName: 'sym-cloud-far',
                autoPlay: {

                }
            },
            {
                id: 'sym-product',
                symbolName: 'sym-product',
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
                id: 'sym-but-news',
                symbolName: 'sym-but-news',
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
                id: 'sym-but-ing',
                symbolName: 'sym-but-ing',
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
                ["style", "left", '0%']
            ],
            "${_RoundRectCopy3}": [
                ["style", "height", '179px'],
                ["style", "top", '644px'],
                ["style", "left", '593px'],
                ["color", "background-color", 'rgba(255,255,255,1)']
            ],
            "${_sym-cloud-yellow-near}": [
                ["style", "top", '1732px'],
                ["style", "opacity", '0.69918699913878'],
                ["style", "left", '56px']
            ],
            "${_tund}": [
                ["style", "top", '2212px'],
                ["style", "left", '-820px']
            ],
            "${_Paragraph-symptomp}": [
                ["style", "top", '174px'],
                ["style", "height", '89px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '19px']
            ],
            "${_flagLogo}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text-producedCopy}": [
                ["style", "top", '24px'],
                ["style", "width", '86px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '524px'],
                ["style", "font-size", '15px']
            ],
            "${_Rectangle4}": [
                ["style", "height", '1171px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_Text21}": [
                ["style", "top", '24px'],
                ["style", "width", '516px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '-53px'],
                ["style", "font-size", '15px']
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
            "${_sym-boy-play}": [
                ["style", "left", '587px'],
                ["style", "top", '111px']
            ],
            "${_fence}": [
                ["style", "left", '-17px'],
                ["style", "top", '5687px']
            ],
            "${_text-honeyMint}": [
                ["style", "top", '387px'],
                ["color", "color", 'rgba(208,36,36,1)'],
                ["style", "left", '265px'],
                ["transform", "rotateZ", '-11deg']
            ],
            "${_fb}": [
                ["style", "left", '602px'],
                ["style", "top", '24px']
            ],
            "${_post2}": [
                ["style", "left", '645px'],
                ["style", "top", '437px']
            ],
            "${_sym-kupu}": [
                ["motion", "location", '690.5px 221.5px']
            ],
            "${_SickKids}": [
                ["style", "left", '56.07%'],
                ["style", "top", '67px']
            ],
            "${_sym-but-product}": [
                ["style", "left", '271px'],
                ["style", "top", '20px']
            ],
            "${_sym-cloud-white}": [
                ["style", "top", '132px'],
                ["style", "opacity", '0.80487803811949'],
                ["style", "left", '-17px']
            ],
            "${_Text}": [
                ["style", "top", '2934px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '202px'],
                ["style", "font-size", '24px']
            ],
            "${_Rectangle5}": [
                ["style", "height", '1334px'],
                ["color", "background-color", 'rgba(140,191,63,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_RoundRectCopy4}": [
                ["style", "top", '644px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '261px'],
                ["style", "height", '179px']
            ],
            "${_board2}": [
                ["style", "left", '62px'],
                ["style", "top", '93px']
            ],
            "${_Page2}": [
                ["style", "top", '993px']
            ],
            "${_Title-symptomp}": [
                ["style", "top", '134px'],
                ["color", "color", 'rgba(232,204,204,1.00)'],
                ["style", "height", '29px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '24px']
            ],
            "${_blue-BG}": [
                ["color", "background-color", 'rgba(39,170,226,1.00)'],
                ["style", "height", '869px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '1250px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '6670px'],
                ["style", "max-width", '2200px'],
                ["style", "width", '100%']
            ],
            "${_sym-boy-roller}": [
                ["style", "left", '-12px'],
                ["style", "top", '-18px']
            ],
            "${_sym-girl-educated}": [
                ["style", "left", '978px'],
                ["style", "top", '567px']
            ],
            "${_Title-what-is-masuk}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(232,204,204,1.00)'],
                ["style", "height", '29px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '24px']
            ],
            "${_page3}": [
                ["style", "top", '1840px']
            ],
            "${_sym-tower}": [
                ["style", "left", '20.28%'],
                ["style", "top", '54px']
            ],
            "${_Rectangle7}": [
                ["style", "height", '845px'],
                ["color", "background-color", 'rgba(241,237,234,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_sym-girl-play}": [
                ["style", "left", '790px'],
                ["style", "top", '0px']
            ],
            "${_sym-baloon}": [
                ["style", "top", '23px'],
                ["style", "left", '958px']
            ],
            "${_Group2}": [
                ["style", "left", '0px']
            ],
            "${_sym-download-girl}": [
                ["style", "left", '593px'],
                ["style", "top", '445px']
            ],
            "${_tw}": [
                ["style", "left", '632px'],
                ["style", "top", '24px']
            ],
            "${_menu-BG}": [
                ["color", "background-color", 'rgba(255,211,0,1.00)'],
                ["style", "height", '102px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_footer}": [
                ["style", "left", '30%']
            ],
            "${_surat-menyurat}": [
                ["style", "left", '0%']
            ],
            "${_antanGinflag}": [
                ["style", "left", '62px'],
                ["style", "top", '27px']
            ],
            "${_rightEye}": [
                ["style", "top", '152px'],
                ["style", "height", '10px'],
                ["style", "left", '350px'],
                ["style", "width", '5px']
            ],
            "${_sym-sun}": [
                ["style", "left", 'auto'],
                ["style", "right", '21.75%']
            ],
            "${_sym-crayons}": [
                ["style", "left", '773px'],
                ["style", "top", '153px']
            ],
            "${_address}": [
                ["style", "top", '4px'],
                ["style", "width", '317px'],
                ["color", "color", 'rgba(61,61,61,1.00)'],
                ["style", "height", '422px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '629px'],
                ["style", "font-size", '19px']
            ],
            "${_tv}": [
                ["style", "left", '0px'],
                ["style", "top", '271px']
            ],
            "${_symbol-download-boy}": [
                ["style", "left", '263px'],
                ["style", "top", '445px']
            ],
            "${_sym-boy-sic}": [
                ["style", "left", '0px'],
                ["style", "top", '5px']
            ],
            "${_Text-produced}": [
                ["style", "top", '24px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '693px'],
                ["style", "font-size", '15px']
            ],
            "${_sym-ropeGirl}": [
                ["style", "left", '274px'],
                ["style", "top", '99px']
            ],
            "${_env-bot}": [
                ["style", "left", '0px'],
                ["style", "top", '343px']
            ],
            "${_sym-logo}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_grass-footer}": [
                ["style", "left", '-611px'],
                ["style", "top", '6623px']
            ],
            "${_waterCan}": [
                ["style", "-webkit-transform-origin", [4,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [4,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [4,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [4,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [4,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '138px'],
                ["style", "left", '503px'],
                ["transform", "rotateZ", '-52deg']
            ],
            "${_sym-env2}": [
                ["style", "left", '35px'],
                ["style", "top", '164px']
            ],
            "${_sym-ingredients}": [
                ["style", "left", '0%']
            ],
            "${_sym-product}": [
                ["style", "left", '256px'],
                ["style", "top", '192px']
            ],
            "${_yellow-cloud2}": [
                ["style", "left", '-375px'],
                ["style", "top", '1403px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(70,171,211,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '997px'],
                ["gradient", "background-image", [270,[['rgba(48,118,207,1.00)',0],['rgba(155,197,235,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_env-top}": [
                ["style", "top", '129px'],
                ["style", "left", '0px']
            ],
            "${_sym-but-news}": [
                ["style", "left", '591px'],
                ["style", "top", '20px']
            ],
            "${_smoke}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '438px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_LeftEye}": [
                ["style", "top", '151px'],
                ["style", "height", '10px'],
                ["style", "left", '327px'],
                ["style", "width", '4px']
            ],
            "${_plane}": [
                ["style", "left", '515px'],
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
            "${_sym-but-help}": [
                ["style", "left", '875px'],
                ["style", "top", '20px']
            ],
            "${_sym-boyEducated}": [
                ["style", "left", '0px'],
                ["style", "top", '568px']
            ],
            "${_Rectangle6}": [
                ["style", "height", '1223px'],
                ["color", "background-color", 'rgba(204,224,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_Group6}": [
                ["style", "top", '403px']
            ],
            "${_text-khasiat}": [
                ["style", "top", '99px'],
                ["style", "font-size", '18px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(110,24,24,1)'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '838px'],
                ["style", "width", '391px']
            ],
            "${_roller}": [
                ["style", "left", '0px'],
                ["style", "top", '57px']
            ],
            "${_sym-cloud-yellow-far}": [
                ["style", "top", '1653px']
            ],
            "${_what-is-masuk-angin}": [
                ["style", "top", '40px'],
                ["style", "height", '89px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '19px']
            ],
            "${_sym-but-ing}": [
                ["style", "left", '409px'],
                ["style", "top", '20px']
            ],
            "${_arrow-up}": [
                ["style", "top", '371px'],
                ["style", "left", '301px']
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
                { id: "eid155", tween: [ "style", "${_grass-footer}", "top", '6449px', { fromValue: '6623px'}], position: 135328, duration: 34672 },
                { id: "eid36", tween: [ "style", "${_fence}", "left", '-1015px', { fromValue: '-17px'}], position: 130000, duration: 40000 },
                { id: "eid70", tween: [ "style", "${_sym-baloon}", "left", '958px', { fromValue: '958px'}], position: 250, duration: 0, easing: "swing" },
                { id: "eid4852", tween: [ "style", "${_sym-boy-roller}", "top", '151px', { fromValue: '-18px'}], position: 0, duration: 27000 },
                { id: "eid8357", tween: [ "style", "${_sym-crayons}", "top", '153px', { fromValue: '153px'}], position: 38500, duration: 0, easing: "swing" },
                { id: "eid4553", tween: [ "style", "${_sym-ropeGirl}", "left", '274px', { fromValue: '274px'}], position: 0, duration: 0 },
                { id: "eid366", tween: [ "style", "${_smoke}", "top", '-193px', { fromValue: '0px'}], position: 80000, duration: 27500, easing: "easeInQuad" },
                { id: "eid4665", tween: [ "style", "${_rightEye}", "left", '339px', { fromValue: '350px'}], position: 0, duration: 22000 },
                { id: "eid2490", tween: [ "style", "${_sym-cloud-far}", "top", '143px', { fromValue: '143px'}], position: 0, duration: 0 },
                { id: "eid4853", tween: [ "style", "${_sym-boy-roller}", "left", '38px', { fromValue: '-12px'}], position: 0, duration: 27000 },
                { id: "eid69", tween: [ "style", "${_sym-baloon}", "top", '23px', { fromValue: '23px'}], position: 250, duration: 0, easing: "swing" },
                { id: "eid7315", tween: [ "style", "${_sym-ingredients}", "left", '0%', { fromValue: '0%'}], position: 32000, duration: 0 },
                { id: "eid6917", tween: [ "style", "${_sym-cloud-yellow-far}", "top", '1540px', { fromValue: '1653px'}], position: 22000, duration: 27000 },
                { id: "eid6148", tween: [ "style", "${_waterCan}", "left", '525px', { fromValue: '503px'}], position: 120752, duration: 35000 },
                { id: "eid6150", tween: [ "style", "${_waterCan}", "top", '176px', { fromValue: '138px'}], position: 120752, duration: 35000 },
                { id: "eid4672", tween: [ "style", "${_LeftEye}", "left", '320px', { fromValue: '327px'}], position: 0, duration: 22000 },
                { id: "eid3934", tween: [ "style", "${_sym-cloud-white}", "top", '-435px', { fromValue: '132px'}], position: 0, duration: 60000 },
                { id: "eid4564", tween: [ "style", "${_sym-girl-play}", "left", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
                { id: "eid8386", tween: [ "style", "${_sym-crayons}", "left", '773px', { fromValue: '773px'}], position: 38500, duration: 0, easing: "swing" },
                { id: "eid378", tween: [ "transform", "${_smoke}", "rotateZ", '34deg', { fromValue: '0deg'}], position: 80000, duration: 27500, easing: "easeInQuad" },
                { id: "eid4551", tween: [ "style", "${_sym-boy-play}", "left", '587px', { fromValue: '587px'}], position: 0, duration: 0 },
                { id: "eid6355", tween: [ "motion", "${_sym-kupu}", [[690.5, 221.5, 0, 0],[690.5, 221.5, 0, 0]]], position: 0, duration: 0, easing: "swing" },
                { id: "eid2260", tween: [ "style", "${_sym-sun}", "right", '21.75%', { fromValue: '21.75%'}], position: 0, duration: 0 },
                { id: "eid6921", tween: [ "style", "${_sym-cloud-yellow-near}", "top", '1357px', { fromValue: '1732px'}], position: 25000, duration: 27000 },
                { id: "eid6146", tween: [ "transform", "${_waterCan}", "rotateZ", '2deg', { fromValue: '-52deg'}], position: 120752, duration: 35000 },
                { id: "eid4552", tween: [ "style", "${_sym-boy-play}", "top", '111px', { fromValue: '111px'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_yellow-cloud2}", "left", '-755px', { fromValue: '-375px'}], position: 13500, duration: 55000 },
                { id: "eid4554", tween: [ "style", "${_sym-ropeGirl}", "top", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
                { id: "eid381", tween: [ "style", "${_smoke}", "opacity", '0', { fromValue: '1'}], position: 80000, duration: 27500, easing: "easeInQuad" }            ]
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
                ["style", "top", '286px'],
                ["style", "-webkit-transform-origin", [57,24], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [57,24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [57,24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [57,24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [57,24],{valueTemplate:'@@0@@% @@1@@%'}],
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
                { id: "eid53", tween: [ "style", "${_baloon}", "top", '-15px', { fromValue: '0px'}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid54", tween: [ "style", "${_baloon}", "top", '0px', { fromValue: '-15px'}], position: 2389, duration: 2111, easing: "swing" },
                { id: "eid43", tween: [ "transform", "${_green-env}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid47", tween: [ "transform", "${_green-env}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 2389, duration: 2111, easing: "swing" },
                { id: "eid38", tween: [ "style", "${_green-env}", "-webkit-transform-origin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid9450", tween: [ "style", "${_green-env}", "-moz-transform-origin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid9451", tween: [ "style", "${_green-env}", "-ms-transform-origin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid9452", tween: [ "style", "${_green-env}", "msTransformOrigin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid9453", tween: [ "style", "${_green-env}", "-o-transform-origin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 74, duration: 2111, easing: "swing" },
                { id: "eid46", tween: [ "style", "${_green-env}", "-webkit-transform-origin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 2389, duration: 2111, easing: "swing" },
                { id: "eid9454", tween: [ "style", "${_green-env}", "-moz-transform-origin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 2389, duration: 2111, easing: "swing" },
                { id: "eid9455", tween: [ "style", "${_green-env}", "-ms-transform-origin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 2389, duration: 2111, easing: "swing" },
                { id: "eid9456", tween: [ "style", "${_green-env}", "msTransformOrigin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 2389, duration: 2111, easing: "swing" },
                { id: "eid9457", tween: [ "style", "${_green-env}", "-o-transform-origin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 2389, duration: 2111, easing: "swing" }            ]
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
                                type: 'text',
                                id: 'TextCopy',
                                text: 'Full Name*:',
                                rect: ['10px', '0px', '169px', '24px', 'auto', 'auto'],
                                font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', 'normal', 'none', '']
                            },
                            {
                                type: 'text',
                                rect: ['10px', '25px', '162px', '24px', 'auto', 'auto'],
                                id: 'Text4',
                                text: 'Company*:',
                                align: 'left',
                                font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                            },
                            {
                                type: 'text',
                                rect: ['9px', '51px', '149px', '29px', 'auto', 'auto'],
                                id: 'Text6',
                                text: 'Email Address*:',
                                align: 'left',
                                font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                            },
                            {
                                type: 'text',
                                rect: ['9px', '76px', '176px', '21px', 'auto', 'auto'],
                                id: 'Text22',
                                text: 'Message*:',
                                align: 'left',
                                font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                            },
                            {
                                type: 'text',
                                rect: ['0px', '131px', '293px', '24px', 'auto', 'auto'],
                                id: 'Text23',
                                text: '*) Must be Filled',
                                align: 'left',
                                font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', '400', 'none', 'normal']
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
                                type: 'text',
                                rect: ['170px', '183px', '73px', '29px', 'auto', 'auto'],
                                id: 'Text24',
                                text: 'Send',
                                align: 'left',
                                font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                            }]
                        }]
                    }]
                },
                {
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '470px', '459px', 'auto', 'auto'],
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
                ["style", "height", '21px'],
                ["style", "top", '76px'],
                ["style", "left", '9px'],
                ["style", "width", '176px']
            ],
            "${_Group4}": [
                ["style", "left", '0px'],
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
            "${_Parent}": [
                ["style", "top", '0px']
            ],
            "${_Text6}": [
                ["style", "top", '51px'],
                ["style", "left", '9px']
            ],
            "${_Group}": [
                ["style", "left", '52px'],
                ["style", "top", '37px']
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
            "${_crayon-2}": [
                ["style", "left", '30px'],
                ["style", "top", '31px']
            ],
            "${_crayon-5}": [
                ["style", "top", '26px'],
                ["style", "left", '121px']
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
                { id: "eid270", tween: [ "style", "${_crayon-2}", "top", '51px', { fromValue: '31px'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid272", tween: [ "style", "${_crayon-2}", "top", '31px', { fromValue: '51px'}], position: 2000, duration: 1590, easing: "easeOutExpo" },
                { id: "eid297", tween: [ "style", "${_crayon-6}", "top", '68px', { fromValue: '0px'}], position: 95, duration: 1516, easing: "swing" },
                { id: "eid299", tween: [ "style", "${_crayon-6}", "top", '0px', { fromValue: '68px'}], position: 2114, duration: 1576, easing: "easeOutQuad" },
                { id: "eid280", tween: [ "style", "${_crayon-3}", "top", '-10px', { fromValue: '0px'}], position: 250, duration: 1500, easing: "easeInQuart" },
                { id: "eid282", tween: [ "style", "${_crayon-3}", "top", '0px', { fromValue: '-10px'}], position: 2685, duration: 815, easing: "easeOutSine" }            ]
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
                    type: 'image',
                    id: 'boy-head',
                    rect: ['0px', '0px', '131px', '131px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], [], ['50%', '100%']],
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
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
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
                { id: "eid459", tween: [ "style", "${_swt}", "top", '91px', { fromValue: '86px'}], position: 3325, duration: 1555, easing: "easeInQuart" },
                { id: "eid451", tween: [ "transform", "${_boy-head}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 0, duration: 1210, easing: "swing" },
                { id: "eid453", tween: [ "transform", "${_boy-head}", "rotateZ", '4deg', { fromValue: '-13deg'}], position: 1250, duration: 705, easing: "easeInQuint" },
                { id: "eid461", tween: [ "transform", "${_boy-head}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 3560, duration: 705, easing: "easeOutQuart" },
                { id: "eid468", tween: [ "style", "${_goo1}", "left", '131px', { fromValue: '110px'}], position: 1800, duration: 1575, easing: "easeInQuart" },
                { id: "eid474", tween: [ "style", "${_goo2}", "opacity", '1', { fromValue: '0'}], position: 1675, duration: 1000, easing: "easeInQuart" },
                { id: "eid475", tween: [ "style", "${_goo2}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 500, easing: "easeInQuart" },
                { id: "eid467", tween: [ "style", "${_goo1}", "top", '138px', { fromValue: '121px'}], position: 1800, duration: 1575, easing: "easeInQuart" },
                { id: "eid458", tween: [ "style", "${_swt}", "opacity", '1', { fromValue: '0'}], position: 3325, duration: 810, easing: "easeInQuart" },
                { id: "eid478", tween: [ "style", "${_swt}", "opacity", '0', { fromValue: '1'}], position: 4265, duration: 615, easing: "easeInQuart" },
                { id: "eid481", tween: [ "style", "${_bz1}", "top", '146px', { fromValue: '147px'}], position: 0, duration: 318, easing: "easeInQuart" },
                { id: "eid484", tween: [ "style", "${_bz1}", "top", '147px', { fromValue: '146px'}], position: 397, duration: 178, easing: "easeInQuart" },
                { id: "eid473", tween: [ "style", "${_goo2}", "top", '123px', { fromValue: '111px'}], position: 1675, duration: 1575, easing: "easeInQuart" },
                { id: "eid476", tween: [ "style", "${_goo2}", "left", '139px', { fromValue: '125px'}], position: 1675, duration: 1575, easing: "easeInQuart" },
                { id: "eid470", tween: [ "style", "${_goo1}", "opacity", '1', { fromValue: '0'}], position: 1800, duration: 1000, easing: "easeInQuart" },
                { id: "eid472", tween: [ "style", "${_goo1}", "opacity", '0', { fromValue: '1'}], position: 2875, duration: 500, easing: "easeInQuart" }            ]
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
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '159px']
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
            "${_Group2}": [
                ["style", "top", '0px']
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
                    rect: ['170px', '7px', '343px', '157px', 'auto', 'auto'],
                    id: 'ubat2',
                    userClass: 'ubat2',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/ubat2.jpg', '0px', '0px']
                },
                {
                    rect: ['170px', '8px', '343px', '157px', 'auto', 'auto'],
                    id: 'ubat',
                    userClass: 'ubat',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/ubat.jpg', '0px', '0px']
                },
                {
                    rect: ['9', '87', 'auto', 'auto', 'auto', 'auto'],
                    id: 'sym-pro-but2',
                    userClass: 'herb-but-2',
                    cursor: ['pointer'],
                    type: 'rect'
                },
                {
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'sym-pro-but1',
                    userClass: 'herb-but-1',
                    cursor: ['pointer'],
                    type: 'rect'
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
                    type: 'image',
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'herb-but-2',
                    rect: ['0px', '0px', '85px', '85px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/herb-but-2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_herb-but-2}": [
                ["subproperty", "filter.invert", '0'],
                ["subproperty", "filter.contrast", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '85px'],
                ["style", "width", '85px']
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
            "${_cloud-white3}": [
                ["style", "left", '0px'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '537px'],
                ["style", "width", '3326px']
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
                { id: "eid2463", tween: [ "style", "${_cloud-white3}", "left", '-3236px', { fromValue: '0px'}], position: 0, duration: 105000 },
                { id: "eid3885", tween: [ "style", "${_cloud-white3}", "opacity", '0.8536589741706848', { fromValue: '0'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid3887", tween: [ "style", "${_cloud-white3}", "opacity", '0', { fromValue: '0.8536589741706848'}], position: 104500, duration: 500, easing: "swing" }            ]
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
                    rect: ['0', '0', '4569px', '249px', 'auto', 'auto'],
                    id: 'far-cloud4',
                    opacity: 0.56097560103347,
                    type: 'image',
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
                { id: "eid2970", tween: [ "transform", "${_flag2}", "skewY", '0deg', { fromValue: '9deg'}], position: 0, duration: 299, easing: "swing" },
                { id: "eid2977", tween: [ "transform", "${_flag2}", "skewY", '9deg', { fromValue: '0deg'}], position: 299, duration: 299, easing: "swing" },
                { id: "eid2968", tween: [ "transform", "${_flag2}", "skewX", '0deg', { fromValue: '10deg'}], position: 0, duration: 299, easing: "swing" },
                { id: "eid2976", tween: [ "transform", "${_flag2}", "skewX", '10deg', { fromValue: '0deg'}], position: 299, duration: 299, easing: "swing" },
                { id: "eid2966", tween: [ "transform", "${_flag2}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 0, duration: 299, easing: "swing" },
                { id: "eid2978", tween: [ "transform", "${_flag2}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 299, duration: 299, easing: "swing" }            ]
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
                    rect: ['284px', '-11px', '516px', '225px', 'auto', 'auto'],
                    id: 'school',
                    opacity: 1,
                    type: 'image',
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
            "${_right-house}": [
                ["style", "left", '811px'],
                ["style", "top", '-158px']
            ],
            "${_left-root2}": [
                ["style", "top", '-62px'],
                ["style", "opacity", '0'],
                ["style", "left", '-8px']
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
                { id: "eid3316", tween: [ "style", "${_right-root}", "opacity", '1', { fromValue: '0'}], position: 1018, duration: 246, easing: "easeOutBounce" },
                { id: "eid3107", tween: [ "style", "${_left-root2}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 246, easing: "easeOutBounce" },
                { id: "eid3315", tween: [ "style", "${_right-root}", "top", '98px', { fromValue: '-207px'}], position: 1018, duration: 982, easing: "easeOutBounce" }            ]
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
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'shadow',
                    opacity: 0.38211383325298,
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
            "${_sym-ball-rotate2}": [
                ["style", "top", '-104px']
            ],
            "${_hand}": [
                ["style", "top", '17px'],
                ["style", "-webkit-transform-origin", [41,10], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [41,10],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [41,10],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [41,10],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [41,10],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '8px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_rightfoot}": [
                ["style", "top", '32px'],
                ["style", "-webkit-transform-origin", [37,23], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [37,23],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [37,23],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [37,23],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [37,23],{valueTemplate:'@@0@@% @@1@@%'}],
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
            "${symbolSelector}": [
                ["style", "height", '131px'],
                ["style", "width", '110px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2044,
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
                { id: "eid3546", tween: [ "transform", "${_hand}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 827, duration: 217, easing: "swing" },
                { id: "eid3553", tween: [ "transform", "${_hand}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1097, duration: 457, easing: "swing" },
                { id: "eid3638", tween: [ "style", "${_shadow}", "width", '41px', { fromValue: '30px'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid3642", tween: [ "style", "${_shadow}", "width", '30px', { fromValue: '41px'}], position: 1044, duration: 1000, easing: "easeOutCubic" },
                { id: "eid3528", tween: [ "style", "${_eyesBoy}", "top", '-48px', { fromValue: '-58px'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid3534", tween: [ "style", "${_eyesBoy}", "top", '-58px', { fromValue: '-48px'}], position: 1044, duration: 1000, easing: "easeOutCubic" }            ]
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
                    transform: [[0, 0], [], [], [], ['0%']],
                    id: 'hoolaa',
                    type: 'image',
                    rect: ['9px', '135px', '110px', '36px', 'auto', 'auto'],
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
                ["style", "top", '135px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
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
                    opacity: 0.6260162601626,
                    id: 'Ellipse',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
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
            "${symbolSelector}": [
                ["style", "height", '231px'],
                ["style", "width", '178px']
            ],
            "${_Ellipse}": [
                ["style", "top", '209px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0.45'],
                ["style", "left", '46px'],
                ["style", "width", '64px']
            ],
            "${_ropeGirl}": [
                ["style", "left", '0px'],
                ["style", "top", '5px']
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
            "${symbolSelector}": [
                ["style", "height", '53px'],
                ["style", "width", '48px']
            ],
            "${_ropeGirl-hair}": [
                ["style", "top", '14px'],
                ["style", "left", '0px'],
                ["transform", "skewY", '0deg'],
                ["transform", "skewX", '0deg']
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
                    type: 'image',
                    id: 'boy-roller',
                    rect: ['1px', '0px', '125px', '150px', 'auto', 'auto'],
                    userClass: '',
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
            "${_Ellipse3}": [
                ["style", "top", '0px'],
                ["style", "height", '9px'],
                ["color", "background-color", 'rgba(39,39,39,1.00)'],
                ["style", "left", '12px'],
                ["style", "width", '3px']
            ],
            "${_Ellipse3Copy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(39,39,39,1)'],
                ["style", "height", '9px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["style", "width", '4px']
            ],
            "${symbolSelector}": [
                ["style", "height", '9px'],
                ["style", "width", '15px']
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
                { id: "eid4798", tween: [ "style", "${_Ellipse3}", "height", '1px', { fromValue: '9px'}], position: 0, duration: 234 },
                { id: "eid4815", tween: [ "style", "${_Ellipse3}", "height", '9px', { fromValue: '1px'}], position: 266, duration: 234 },
                { id: "eid4803", tween: [ "style", "${_Ellipse3}", "top", '4px', { fromValue: '0px'}], position: 0, duration: 234 },
                { id: "eid4814", tween: [ "style", "${_Ellipse3}", "top", '0px', { fromValue: '4px'}], position: 266, duration: 234 },
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
                    rect: ['0px', '0px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['200px', '0px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['398px', '0px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['600px', '0px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['0px', '276px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy7',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['200px', '276px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy6',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['398px', '276px', '176px', '176px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['600px', '276px', '176px', '176px', 'auto', 'auto'],
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
            "${_sym-ing-6}": [
                ["style", "left", '235px']
            ],
            "${_EllipseCopy7}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '176px'],
                ["style", "top", '276px'],
                ["style", "left", '0px'],
                ["style", "width", '176px']
            ],
            "${_EllipseCopy3}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '176px'],
                ["style", "top", '0px'],
                ["style", "left", '600px'],
                ["style", "width", '176px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '176px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '176px']
            ],
            "${_EllipseCopy6}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '176px'],
                ["style", "top", '276px'],
                ["style", "left", '200px'],
                ["style", "width", '176px']
            ],
            "${_EllipseCopy4}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '176px'],
                ["style", "top", '276px'],
                ["style", "left", '600px'],
                ["style", "width", '176px']
            ],
            "${symbolSelector}": [
                ["style", "height", '176px'],
                ["style", "width", '176px']
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '176px'],
                ["style", "top", '0px'],
                ["style", "left", '200px'],
                ["style", "width", '176px']
            ],
            "${_EllipseCopy5}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '176px'],
                ["style", "top", '276px'],
                ["style", "left", '398px'],
                ["style", "width", '176px']
            ],
            "${_EllipseCopy2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '176px'],
                ["style", "top", '0px'],
                ["style", "left", '398px'],
                ["style", "width", '176px']
            ],
            "${_sym-ing-5}": [
                ["style", "left", '42px'],
                ["style", "top", '311px']
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
                { id: "eid5810", tween: [ "style", "${_sym-ing-6}", "left", '235px', { fromValue: '235px'}], position: 0, duration: 0, easing: "swing" }            ]
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
                    type: 'image',
                    id: 'i1',
                    rect: ['0px', '0px', '100px', '92px', 'auto', 'auto'],
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
                ["style", "top", '0px'],
                ["subproperty", "filter.invert", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px']
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
                    type: 'image',
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'i2',
                    rect: ['0px', '0px', '64px', '113px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/i2.png', '0px', '0px']
                },
                {
                    id: 'sym-ing-21',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '64px', '113px', 'auto', 'auto'],
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
            "${_sym-ing-21}": [
                ["style", "opacity", '0']
            ],
            "${_Rectangle3}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '113px'],
                ["style", "width", '64px']
            ],
            "${_i2}": [
                ["style", "top", '0px'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
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
                { id: "eid5562", tween: [ "style", "${_i2}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 201, easing: "easeOutBack" },
                { id: "eid5550", tween: [ "style", "${_sym-ing-21}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 201, easing: "easeOutBack" }            ]
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
                    type: 'image',
                    id: 'i3',
                    rect: ['0px', '0px', '109px', '98px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/i3.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '109px', '98px', 'auto', 'auto'],
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
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '98px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
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
                { id: "eid6012", tween: [ "style", "${_i3}", "height", '0px', { fromValue: '98px'}], position: 0, duration: 217, easing: "easeOutBack" },
                { id: "eid6008", tween: [ "style", "${_i3}", "height", '98px', { fromValue: '0px'}], position: 244, duration: 1556, easing: "easeOutBack" },
                { id: "eid6013", tween: [ "style", "${_i3}", "left", '57px', { fromValue: '0px'}], position: 0, duration: 217, easing: "easeOutBack" },
                { id: "eid6009", tween: [ "style", "${_i3}", "left", '0px', { fromValue: '57px'}], position: 244, duration: 1556, easing: "easeOutBack" }            ]
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
                    type: 'image',
                    id: 'secondLeaf2',
                    opacity: 1,
                    rect: ['58px', '2px', '51px', '58px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/secondLeaf2.png', '0px', '0px']
                },
                {
                    id: 'firstLeaf2',
                    type: 'image',
                    rect: ['-2px', '10px', '58px', '51px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/firstLeaf2.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['0px', '1px', '106px', '60px', 'auto', 'auto'],
                    opacity: 0,
                    id: 'Rectangle10',
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
                { id: "eid5973", tween: [ "transform", "${_firstLeaf2}", "rotateZ", '-52deg', { fromValue: '0deg'}], position: 0, duration: 1500, easing: "easeOutBounce" },
                { id: "eid5976", tween: [ "transform", "${_secondLeaf2}", "rotateZ", '42deg', { fromValue: '0deg'}], position: 0, duration: 1619, easing: "easeOutBounce" }            ]
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
                    rect: ['0px', '0px', '104px', '70px', 'auto', 'auto'],
                    type: 'rect',
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
            "${_i8}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "width", '104px']
            ],
            "${_Rectangle8}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
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
                    type: 'rect',
                    rect: ['0px', '0px', '88px', '79px', 'auto', 'auto'],
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
                    type: 'rect',
                    rect: ['0px', '0px', '104px', '97px', 'auto', 'auto'],
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
                { id: "eid5774", tween: [ "style", "${_inverteditem}", "left", '0px', { fromValue: '52px'}], position: 1500, duration: 1500, easing: "swing" },
                { id: "eid5796", tween: [ "style", "${_inverteditem}", "left", '52px', { fromValue: '0px'}], position: 3000, duration: 1500, easing: "swing" },
                { id: "eid5776", tween: [ "style", "${_i6}", "left", '52px', { fromValue: '0px'}], position: 0, duration: 1500, easing: "swing" },
                { id: "eid5808", tween: [ "style", "${_i6}", "left", '0px', { fromValue: '52px'}], position: 4500, duration: 1500, easing: "swing" },
                { id: "eid5777", tween: [ "style", "${_i6}", "width", '0px', { fromValue: '104px'}], position: 0, duration: 1500, easing: "swing" },
                { id: "eid5809", tween: [ "style", "${_i6}", "width", '104px', { fromValue: '0px'}], position: 4500, duration: 1500, easing: "swing" },
                { id: "eid5775", tween: [ "style", "${_inverteditem}", "width", '104px', { fromValue: '0px'}], position: 1500, duration: 1500, easing: "swing" },
                { id: "eid5797", tween: [ "style", "${_inverteditem}", "width", '0px', { fromValue: '104px'}], position: 3000, duration: 1500, easing: "swing" }            ]
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
                    type: 'image',
                    id: 'i5',
                    rect: ['0px', '0px', '90px', '97px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/i5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '97px'],
                ["style", "width", '90px']
            ],
            "${_i5}": [
                ["style", "top", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
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
            "${_i2-12}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_i22}": [
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '113px'],
                ["style", "width", '64px']
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
                { id: "eid5671", tween: [ "style", "${_firstLeaf2}", "top", '141px', { fromValue: '101px'}], position: 0, duration: 3000, easing: "easeOutQuad" },
                { id: "eid5669", tween: [ "style", "${_firstLeaf2}", "left", '100px', { fromValue: '206px'}], position: 0, duration: 3000, easing: "easeOutQuad" },
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
            "${_boyThumb}": [
                ["style", "-webkit-transform-origin", [5,78], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [5,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [5,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [5,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [5,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '123px'],
                ["style", "left", '123px'],
                ["transform", "rotateZ", '-12deg']
            ],
            "${_boyEducated}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '344px'],
                ["style", "width", '216px']
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
                    transform: [[0, 0], ['-9']],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['71px', '68px', '9px', '19px', 'auto', 'auto'],
                    id: 'Ellipse',
                    stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(13,13,13,1.00)']
                },
                {
                    transform: [[0, 0], ['8']],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['37px', '68px', '7px', '17px', 'auto', 'auto'],
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
            "${_Ellipse}": [
                ["style", "top", '68px'],
                ["color", "background-color", 'rgba(13,13,13,1.00)'],
                ["transform", "rotateZ", '-9deg'],
                ["style", "height", '19px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '62px'],
                ["style", "width", '9px']
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
            "${_girlEducated}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
            "${_sym-kupu-fly3}": [
                ["motion", "location", '0px 8.5px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '23px']
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
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '32px']
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
                { id: "eid6194", tween: [ "style", "${_sayap2}", "-webkit-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid9458", tween: [ "style", "${_sayap2}", "-moz-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid9459", tween: [ "style", "${_sayap2}", "-ms-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid9460", tween: [ "style", "${_sayap2}", "msTransformOrigin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid9461", tween: [ "style", "${_sayap2}", "-o-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid6224", tween: [ "style", "${_sayap2}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid9462", tween: [ "style", "${_sayap2}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid9463", tween: [ "style", "${_sayap2}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid9464", tween: [ "style", "${_sayap2}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid9465", tween: [ "style", "${_sayap2}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid6188", tween: [ "transform", "${_sayap1}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid6222", tween: [ "transform", "${_sayap1}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 516, duration: 484, easing: "swing" },
                { id: "eid6185", tween: [ "transform", "${_sayap1}", "scaleY", '0.52173', { fromValue: '1'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid6221", tween: [ "transform", "${_sayap1}", "scaleY", '1', { fromValue: '0.52173'}], position: 516, duration: 484, easing: "swing" },
                { id: "eid6197", tween: [ "transform", "${_sayap2}", "scaleX", '0.65', { fromValue: '1'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid6223", tween: [ "transform", "${_sayap2}", "scaleX", '1', { fromValue: '0.65'}], position: 516, duration: 484, easing: "swing" },
                { id: "eid6358", tween: [ "style", "${_kupuBody}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0, easing: "swing" },
                { id: "eid9466", tween: [ "style", "${_kupuBody}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0, easing: "swing" },
                { id: "eid9467", tween: [ "style", "${_kupuBody}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0, easing: "swing" },
                { id: "eid9468", tween: [ "style", "${_kupuBody}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0, easing: "swing" },
                { id: "eid9469", tween: [ "style", "${_kupuBody}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0, easing: "swing" },
                { id: "eid6184", tween: [ "style", "${_sayap1}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid9470", tween: [ "style", "${_sayap1}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid9471", tween: [ "style", "${_sayap1}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid9472", tween: [ "style", "${_sayap1}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid9473", tween: [ "style", "${_sayap1}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 500, easing: "swing" },
                { id: "eid6220", tween: [ "style", "${_sayap1}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid9474", tween: [ "style", "${_sayap1}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid9475", tween: [ "style", "${_sayap1}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid9476", tween: [ "style", "${_sayap1}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 516, duration: 484, easing: "swing" },
                { id: "eid9477", tween: [ "style", "${_sayap1}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 516, duration: 484, easing: "swing" },
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
                    type: 'rect',
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    rect: ['0px', '0px', '309px', '179px', 'auto', 'auto'],
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
                    opacity: 0,
                    id: 'RoundRect3',
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
            "${symbolSelector}": [
                ["style", "height", '179px'],
                ["style", "width", '309px']
            ],
            "${_RoundRect}": [
                ["style", "top", '0px'],
                ["style", "height", '179px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_RoundRect3}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_dl1}": [
                ["style", "top", '26px'],
                ["style", "left", '114px']
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
                    type: 'rect',
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    rect: ['0px', '0px', '309px', '179px', 'auto', 'auto'],
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
                    type: 'rect',
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    rect: ['0px', '0px', '309px', '179px', 'auto', 'auto'],
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
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_dl2}": [
                ["style", "top", '31px'],
                ["style", "left", '101px']
            ],
            "${_RoundRect2}": [
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
                    rect: ['0px', '0px', '183px', '66px', 'auto', 'auto'],
                    type: 'rect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    id: 'Rectangle2',
                    opacity: 0,
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '66px'],
                ["style", "width", '183px']
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
            "${_logohover}": [
                ["style", "opacity", '0']
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
                { id: "eid6695", tween: [ "style", "${_logohover}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid6697", tween: [ "style", "${_logo-1}", "opacity", '0.2', { fromValue: '1'}], position: 0, duration: 500 }            ]
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
                    font: ['viga, sans-serif', 22, 'rgba(255,0,0,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    align: 'center',
                    id: 'text-product',
                    text: 'PRODUCT',
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '83px', '25px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '83px']
            ],
            "${_text-product}": [
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '22px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '25px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "cursor", 'pointer'],
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
                    font: ['viga, sans-serif', 22, 'rgba(255,0,0,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    align: 'center',
                    id: 'text-ingredients',
                    text: 'INGREDIENTS',
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '117px', '25px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '117px']
            ],
            "${_text-ingredients}": [
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "left", '0px'],
                ["style", "font-size", '22px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '25px'],
                ["style", "font-family", 'viga, sans-serif'],
                ["style", "cursor", 'pointer'],
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
                    font: ['viga, sans-serif', 22, 'rgba(255,0,0,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    align: 'center',
                    id: 'text-ingredientsCopy',
                    text: 'NEWS',
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '53px', '25px', 'auto', 'auto']
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
                ["style", "cursor", 'pointer'],
                ["style", "width", '53px']
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
                    font: ['viga, sans-serif', 22, 'rgba(255,0,0,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    align: 'center',
                    id: 'text-ingredientsCopy2',
                    text: 'KID\'S CORNER',
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '165px', '25px', 'auto', 'auto']
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
                ["style", "cursor", 'pointer'],
                ["style", "width", '165px']
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
                    font: ['viga, sans-serif', 22, 'rgba(255,0,0,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    align: 'center',
                    id: 'text-ingredientsCopy3',
                    text: 'HELP?',
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '84px', '25px', 'auto', 'auto']
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
                ["style", "cursor", 'pointer'],
                ["style", "width", '84px']
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
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '40px']
            ],
            "${_arrow-white2}": [
                ["style", "top", '0px'],
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
                    rect: ['0px', '0px', '100px', '79px', 'auto', 'auto'],
                    id: 'cloud-4-1',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['627px', '-33px', '84px', '66px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy3',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['345px', '37px', '62px', '48px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy9',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['345px', '37px', '62px', '48px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy10',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['948px', '-60px', '62px', '48px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy11',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['1062px', '-66px', '84px', '66px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy4',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['855px', '28px', '84px', '66px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy5',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['185px', '-36px', '116px', '92px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['756px', '-102px', '116px', '92px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy6',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['345px', '-89px', '100px', '79px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy2',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['345px', '-89px', '100px', '79px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy7',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['462px', '-10px', '108px', '92px', 'auto', 'auto'],
                    id: 'cloud-3-1',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-1.png', '0px', '0px']
                },
                {
                    rect: ['1177px', '0px', '100px', '79px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy22',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['1804px', '-33px', '84px', '66px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy21',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['1522px', '37px', '62px', '48px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy20',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['1522px', '37px', '62px', '48px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy19',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['2125px', '-60px', '62px', '48px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy18',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['2239px', '-66px', '84px', '66px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy17',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['2032px', '28px', '84px', '66px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy16',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['1362px', '-36px', '116px', '92px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy15',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['1933px', '-102px', '116px', '92px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy14',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['1522px', '-89px', '100px', '79px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy13',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['1522px', '-89px', '100px', '79px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy12',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['1639px', '-10px', '108px', '92px', 'auto', 'auto'],
                    id: 'cloud-3-1Copy',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-1.png', '0px', '0px']
                },
                {
                    rect: ['2528px', '-33px', '84px', '66px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy27',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['2849px', '-60px', '62px', '48px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy26',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['2963px', '-66px', '84px', '66px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy25',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['2756px', '28px', '84px', '66px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy24',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['2657px', '-102px', '116px', '92px', 'auto', 'auto'],
                    id: 'cloud-4-1Copy23',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-4-1.png', '0px', '0px']
                },
                {
                    rect: ['2363px', '-10px', '108px', '92px', 'auto', 'auto'],
                    id: 'cloud-3-1Copy2',
                    opacity: 0.69999998807907,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloud-3-1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cloud-4-1Copy13}": [
                ["style", "top", '-89px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1522px']
            ],
            "${_cloud-4-1Copy4}": [
                ["style", "top", '-66px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1062px'],
                ["style", "width", '84px']
            ],
            "${_cloud-4-1Copy17}": [
                ["style", "top", '-66px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2239px'],
                ["style", "width", '84px']
            ],
            "${_cloud-3-1Copy2}": [
                ["style", "top", '-10px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2363px'],
                ["style", "width", '108px']
            ],
            "${_cloud-4-1Copy24}": [
                ["style", "top", '28px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2756px'],
                ["style", "width", '84px']
            ],
            "${_cloud-4-1Copy16}": [
                ["style", "top", '28px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2032px'],
                ["style", "width", '84px']
            ],
            "${_cloud-4-1Copy23}": [
                ["style", "top", '-102px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2657px'],
                ["style", "width", '116px']
            ],
            "${_cloud-3-1Copy}": [
                ["style", "top", '-10px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1639px'],
                ["style", "width", '108px']
            ],
            "${_cloud-4-1Copy21}": [
                ["style", "top", '-33px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1804px'],
                ["style", "width", '84px']
            ],
            "${_cloud-4-1Copy6}": [
                ["style", "top", '-102px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '756px'],
                ["style", "width", '116px']
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
            "${_cloud-4-1Copy27}": [
                ["style", "top", '-33px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2528px'],
                ["style", "width", '84px']
            ],
            "${_cloud-4-1Copy25}": [
                ["style", "top", '-66px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2963px'],
                ["style", "width", '84px']
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
            "${_cloud-3-1}": [
                ["style", "top", '-10px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '462px'],
                ["style", "width", '108px']
            ],
            "${_cloud-4-1Copy}": [
                ["style", "top", '-36px'],
                ["style", "height", '92px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '185px'],
                ["style", "width", '116px']
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
            "${_cloud-4-1Copy7}": [
                ["style", "top", '-89px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '345px']
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
            "${_cloud-4-1Copy2}": [
                ["style", "top", '-89px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '345px']
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
            "${_cloud-4-1Copy3}": [
                ["style", "top", '-33px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '627px'],
                ["style", "width", '84px']
            ],
            "${_cloud-4-1Copy11}": [
                ["style", "top", '-60px'],
                ["style", "height", '48px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '948px'],
                ["style", "width", '62px']
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
                ["style", "top", '-13px'],
                ["style", "height", '152px'],
                ["style", "left", '475px'],
                ["style", "width", '217px']
            ],
            "${_cloud-3-3Copy2}": [
                ["style", "height", '139px'],
                ["style", "top", '17px'],
                ["style", "left", '2203px'],
                ["style", "width", '203px']
            ],
            "${_cloud-3-2Copy2}": [
                ["style", "top", '-13px'],
                ["style", "height", '152px'],
                ["style", "left", '2702px'],
                ["style", "width", '217px']
            ],
            "${_cloud-3-3}": [
                ["style", "top", '35px'],
                ["style", "height", '104px'],
                ["style", "left", '251px'],
                ["style", "width", '152px']
            ],
            "${_cloud-3-3Copy5}": [
                ["style", "top", '35px'],
                ["style", "height", '104px'],
                ["style", "left", '2478px'],
                ["style", "width", '152px']
            ],
            "${_cloud-3-12}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_cloud-3-3Copy}": [
                ["style", "top", '17px'],
                ["style", "height", '139px'],
                ["style", "left", '972px'],
                ["style", "width", '203px']
            ],
            "${_cloud-3-3Copy3}": [
                ["style", "height", '104px'],
                ["style", "top", '35px'],
                ["style", "left", '1482px'],
                ["style", "width", '152px']
            ],
            "${_cloud-3-3Copy4}": [
                ["style", "top", '17px'],
                ["style", "height", '139px'],
                ["style", "left", '3199px'],
                ["style", "width", '203px']
            ],
            "${_cloud-3-12Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '1231px']
            ],
            "${symbolSelector}": [
                ["style", "height", '152px'],
                ["style", "width", '178px']
            ],
            "${_cloud-3-4Copy2}": [
                ["style", "top", '-13px'],
                ["style", "height", '123px'],
                ["style", "left", '2986px'],
                ["style", "width", '178px']
            ],
            "${_cloud-3-4Copy}": [
                ["style", "height", '123px'],
                ["style", "top", '-13px'],
                ["style", "left", '1990px'],
                ["style", "width", '178px']
            ],
            "${_cloud-3-2Copy}": [
                ["style", "height", '152px'],
                ["style", "top", '-13px'],
                ["style", "left", '1706px'],
                ["style", "width", '217px']
            ],
            "${_cloud-3-4}": [
                ["style", "top", '-13px'],
                ["style", "height", '123px'],
                ["style", "left", '759px'],
                ["style", "width", '178px']
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
                    userClass: 'ball',
                    id: 'ball',
                    type: 'image',
                    rect: ['0px', '0px', '116px', '117px', 'auto', 'auto'],
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
            "${_ball-play}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '360deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '63px'],
                ["style", "width", '63px']
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
                { id: "eid8676", tween: [ "transform", "${_ball-play}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 0, duration: 8750, easing: "easeInOutBack" }            ]
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
                        type: 'text',
                        rect: ['52px', '0px', '83px', '25px', 'auto', 'auto'],
                        id: 'Text2',
                        text: 'Do You',
                        align: 'left',
                        font: ['la-belle-aurore, cursive', 21, 'rgba(255,255,255,1)', '400', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        font: ['la-belle-aurore, cursive', 21, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                        rect: ['98px', '34px', '86px', '25px', 'auto', 'auto'],
                        id: 'Text5',
                        text: 'Know?',
                        align: 'left',
                        transform: [[0, 0], ['13']]
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
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '186px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "font-size", '21px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'la-belle-aurore, cursive'],
                ["style", "left", '52px'],
                ["style", "width", '83px']
            ],
            "${_Text5}": [
                ["style", "top", '34px'],
                ["style", "left", '98px'],
                ["transform", "rotateZ", '13deg']
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
