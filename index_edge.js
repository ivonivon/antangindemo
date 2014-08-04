/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['annie-use-your-telescope, sans-serif']='<script src=\"http://use.edgefonts.net/annie-use-your-telescope:n4:all.js\"></script>';
    fonts['butterfly-kids, cursive']='<script src=\"http://use.edgefonts.net/butterfly-kids:n4:all.js\"></script>';

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
                opacity: 0.8780487804878
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
                opacity: 0.80487803811949
            },
            {
                id: 'Group6',
                type: 'group',
                rect: ['10%', '404','1097','252','auto', 'auto'],
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
                rect: ['-1015px', '598','auto','auto','auto', 'auto']
            },
            {
                id: 'menu-BG',
                type: 'rect',
                rect: ['0px', '0px','100%','102px','auto', 'auto'],
                fill: ["rgba(255,211,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'logo-1',
                type: 'image',
                rect: ['121px', '18px','183px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo-1.png",'0px','0px']
            },
            {
                id: 'blue-BG',
                type: 'rect',
                rect: ['0px', '922px','100%','869px','auto', 'auto'],
                fill: ["rgba(39,170,226,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'what-is-masuk-angin',
                type: 'text',
                rect: ['131px', '1120px','345px','226px','auto', 'auto'],
                text: "What is masuk angin?<br>Masuk angin is often called the symptoms of stomach, fever, headache, and cold sweat. <br><br>What are the symptoms?<br>The fever and cold body condition is often followed by indigestion problem, which is acondition when you have an gastric indigestion.",
                font: ['annie-use-your-telescope, sans-serif', 19, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['350px', '1016px','105px','51px','auto', 'auto'],
                text: "Do You<br>     Know?",
                align: "left",
                font: ['butterfly-kids, cursive', 21, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'arrow-white2',
                type: 'image',
                rect: ['298px', '1051px','40px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-white.png",'0px','0px']
            },
            {
                id: 'SickKids',
                type: 'group',
                rect: ['40%', '1041','300','270','auto', 'auto'],
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
            },
            {
                id: 'yellow-cloud2',
                type: 'image',
                rect: ['-755px', '1403px','3530px','582px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"yellow-cloud2.png",'0px','0px']
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
                id: 'text-honeyMint',
                type: 'text',
                rect: ['126px', '2289px','86px','29px','auto', 'auto'],
                text: "Honey<br>Mint",
                align: "left",
                font: ['annie-use-your-telescope, sans-serif', 19, "rgba(208,36,36,1.00)", "400", "none", "normal"],
                transform: [[],['-11']]
            },
            {
                id: 'cloud-yellow-2',
                type: 'image',
                rect: ['35%', '1647px','898px','174px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cloud-yellow-2.png",'0px','0px']
            },
            {
                id: 'cloud-yellow-2-2',
                type: 'image',
                rect: ['30%', '1760px','1128px','187px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cloud-yellow-2-2.png",'0px','0px']
            },
            {
                id: 'logo-2',
                type: 'image',
                rect: ['279px', '1913px','702px','99px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"logo-2.png",'0px','0px']
            },
            {
                id: 'text-khasiat',
                type: 'text',
                rect: ['725px', '2102px','396px','422px','auto', 'auto'],
                text: "Khasiat dan kegunaan :<br> • Membantu meredakan masuk angin, perut kembung, mual dan muntah<br> • Membantu melegakan tenggorokan<br> • Membantu mencegah mabuk perjalanan<br> • Membantu meningkatkan daya tahan tubuh<br> • Membantu memelihara kesehatan dan \t<br>menghangatkan badan<br><br>Dosis dan cara pemakaian :<br>Minum 3 kali sehari, sesudah makan sampai membaik.<br> • Untuk anak 1 tahun : 1/2 sachet<br> • Untuk anak 2-6 tahun : 1 sachet.",
                align: "left",
                font: ['annie-use-your-telescope, sans-serif', 19, "rgba(110,24,24,1.00)", "400", "none", "normal"]
            },
            {
                id: 'sym-product',
                type: 'rect',
                rect: ['117', '2094','auto','auto','auto', 'auto']
            },
            {
                id: 'arrow-up',
                type: 'image',
                rect: ['162px', '2273px','14px','29px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-up.png",'0px','0px']
            },
            {
                id: 'Rectangle5',
                type: 'rect',
                rect: ['0px', '3256px','100%','1334px','auto', 'auto'],
                fill: ["rgba(140,191,63,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'items-ing',
                type: 'image',
                rect: ['30%', '3007px','782px','569px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"items-ing.png",'0px','0px']
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
                rect: ['35%', '3652','800','1086','auto', 'auto'],
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
                    fill: ["rgba(0,0,0,0)",im+"smoke.png",'0px','0px']
                }]
            },
            {
                id: 'Group2',
                type: 'group',
                rect: ['30%', '4749','1020','888','auto', 'auto'],
                c: [
                {
                    id: 'sym-crayons',
                    type: 'rect',
                    rect: ['652px', '144px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ball',
                    type: 'image',
                    rect: ['317px', '0px','116px','117px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"ball.png",'0px','0px']
                },
                {
                    id: 'board2',
                    type: 'image',
                    rect: ['0px', '93px','1020px','795px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"board2.png",'0px','0px']
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
                id: 'Group4',
                type: 'group',
                rect: ['30%', '5791','1085','871','auto', 'auto'],
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
                    id: 'Text3',
                    type: 'text',
                    rect: ['629px', '0px','292px','422px','auto', 'auto'],
                    text: "NEED HELP?<br><br>— PT.DELTOMED LABORATORIES —<br>Perkantoran Puri Niaga II<br>Jl. Puri Kencana Blok J1 no.3x<br>Jakarta Barat 11601<br>Phone\t: +62-21 5830 4131<br>Fax\t\t: +62-21 5830 4132<br><br>— PLANT —<br>Nambangan, Selogiri, Wonogiri<br>Kotak Pos 103 Wonogiri 57601<br>Phone: (+62-273) 322 566<br>Fax: (+62-273) 321 118",
                    align: "left",
                    font: ['annie-use-your-telescope, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
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
                fill: ["rgba(0,0,0,0)",im+"grass-footer.png",'0px','0px']
            },
            {
                id: 'Group5',
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
                    font: ['annie-use-your-telescope, sans-serif', 19, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text-producedCopy',
                    type: 'text',
                    rect: ['524px', '24px','86px','39px','auto', 'auto'],
                    text: "Follow us:",
                    align: "left",
                    font: ['annie-use-your-telescope, sans-serif', 19, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text21',
                    type: 'text',
                    rect: ['0px', '24px','516px','51px','auto', 'auto'],
                    text: "Copyright © 2014 Antangin Junior - powered by Invent.   All rights reserved.",
                    align: "left",
                    font: ['annie-use-your-telescope, sans-serif', 17, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'sym-boy-play',
                type: 'rect',
                rect: ['720px', '645px','auto','auto','auto', 'auto']
            },
            {
                id: 'sym-girl-play',
                type: 'rect',
                rect: ['946px', '499px','auto','auto','auto', 'auto']
            },
            {
                id: 'roller',
                type: 'image',
                rect: ['241px', '556px','154px','226px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"roller.png",'0px','0px']
            },
            {
                id: 'sym-ropeGirl',
                type: 'rect',
                rect: ['485px', '621px','auto','auto','auto', 'auto']
            },
            {
                id: 'rightEye',
                type: 'ellipse',
                rect: ['582px', '649px','5px','10px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'LeftEye',
                type: 'ellipse',
                rect: ['570px', '642px','4px','10px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'sym-boy-roller',
                type: 'rect',
                rect: ['229', '481','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'sym-crayons',
                symbolName: 'sym-crayons',
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
                id: 'sym-boy-sic',
                symbolName: 'sym-boy-sic',
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
                id: 'sym-cloud-white',
                symbolName: 'sym-cloud-white',
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
                id: 'sym-baloon',
                symbolName: 'sym-baloon',
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
                ["style", "left", '35%']
            ],
            "${_cloud-yellow-2-2}": [
                ["style", "left", '30%'],
                ["style", "top", '1748px']
            ],
            "${_Group5}": [
                ["style", "left", '30%']
            ],
            "${_Group4}": [
                ["style", "left", '30%']
            ],
            "${_tund}": [
                ["style", "top", '2212px'],
                ["style", "left", '-820px']
            ],
            "${_blue-BG}": [
                ["style", "height", '869px'],
                ["color", "background-color", 'rgba(39,170,226,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_sym-env2}": [
                ["style", "left", '35px'],
                ["style", "top", '164px']
            ],
            "${_env-bot}": [
                ["style", "left", '0px'],
                ["style", "top", '343px']
            ],
            "${_Group2}": [
                ["style", "left", '30%']
            ],
            "${_Text-producedCopy}": [
                ["style", "top", '24px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-size", '19px'],
                ["style", "left", '524px'],
                ["style", "width", '86px']
            ],
            "${_sym-crayons}": [
                ["style", "left", '652px'],
                ["style", "top", '144px']
            ],
            "${_Rectangle4}": [
                ["style", "height", '1171px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_sym-tower}": [
                ["style", "left", '20.28%'],
                ["style", "top", '54px']
            ],
            "${_Text21}": [
                ["style", "top", '24px'],
                ["style", "font-size", '17px'],
                ["style", "left", '0px'],
                ["style", "width", '516px']
            ],
            "${_sym-cloud-far}": [
                ["style", "top", '143px'],
                ["style", "opacity", '0.8780487804878'],
                ["style", "left", '10px']
            ],
            "${_ball}": [
                ["style", "left", '317px'],
                ["style", "top", '0px']
            ],
            "${_sickGirl}": [
                ["style", "left", '168px'],
                ["style", "top", '0px']
            ],
            "${_rightEye}": [
                ["style", "height", '10px'],
                ["style", "top", '651px'],
                ["style", "left", '591px'],
                ["style", "width", '5px']
            ],
            "${_LeftEye}": [
                ["style", "height", '10px'],
                ["style", "top", '650px'],
                ["style", "left", '568px'],
                ["style", "width", '4px']
            ],
            "${_sym-boy-play}": [
                ["style", "left", '828px'],
                ["style", "top", '610px']
            ],
            "${_tw}": [
                ["style", "left", '632px'],
                ["style", "top", '24px']
            ],
            "${_yellow-cloud2}": [
                ["style", "left", '-375px'],
                ["style", "top", '1403px']
            ],
            "${_sym-ropeGirl}": [
                ["style", "left", '515px'],
                ["style", "top", '598px']
            ],
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(140,191,63,1.00)'],
                ["style", "height", '1334px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_sym-sun}": [
                ["style", "left", 'auto'],
                ["style", "right", '21.75%']
            ],
            "${_sym-baloon}": [
                ["style", "top", '23px'],
                ["style", "left", '958px']
            ],
            "${_Text}": [
                ["style", "top", '2934px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '202px'],
                ["style", "font-size", '24px']
            ],
            "${_tv}": [
                ["style", "left", '0px'],
                ["style", "top", '271px']
            ],
            "${_arrow-up}": [
                ["style", "top", '2273px'],
                ["style", "left", '162px']
            ],
            "${_sym-boy-sic}": [
                ["style", "left", '0px'],
                ["style", "top", '5px']
            ],
            "${_Text-produced}": [
                ["style", "top", '24px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "left", '693px'],
                ["style", "font-size", '19px']
            ],
            "${_fence}": [
                ["style", "left", '-17px'],
                ["style", "top", '5687px']
            ],
            "${_text-honeyMint}": [
                ["color", "color", 'rgba(208,36,36,1)'],
                ["style", "top", '2289px'],
                ["style", "left", '126px'],
                ["transform", "rotateZ", '-11deg']
            ],
            "${_Text2}": [
                ["style", "top", '1016px'],
                ["style", "font-size", '21px'],
                ["style", "height", '51px'],
                ["style", "font-family", 'butterfly-kids, cursive'],
                ["style", "left", '350px'],
                ["style", "width", '105px']
            ],
            "${_Text3}": [
                ["style", "top", '0px'],
                ["style", "font-size", '20px'],
                ["style", "height", '422px'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '629px'],
                ["style", "width", '292px']
            ],
            "${_cloud-yellow-2}": [
                ["style", "left", '35%'],
                ["style", "top", '1589px']
            ],
            "${_text-khasiat}": [
                ["style", "top", '2102px'],
                ["style", "opacity", '1'],
                ["style", "left", '725px'],
                ["color", "color", 'rgba(110,24,24,1)']
            ],
            "${_menu-BG}": [
                ["color", "background-color", 'rgba(255,211,0,1.00)'],
                ["style", "height", '102px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_post2}": [
                ["style", "left", '645px'],
                ["style", "top", '437px']
            ],
            "${_fb}": [
                ["style", "left", '602px'],
                ["style", "top", '24px']
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
                ["style", "left", '438px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_items-ing}": [
                ["style", "top", '3007px'],
                ["style", "left", '30%']
            ],
            "${_logo-2}": [
                ["style", "top", '1913px'],
                ["style", "opacity", '1'],
                ["style", "left", '279px']
            ],
            "${_SickKids}": [
                ["style", "left", '40%']
            ],
            "${_sym-girl-play}": [
                ["style", "left", '1031px'],
                ["style", "top", '499px']
            ],
            "${_delto2}": [
                ["style", "left", '782px'],
                ["style", "top", '0px']
            ],
            "${_env-top}": [
                ["style", "top", '129px'],
                ["style", "left", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '900px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '6670px'],
                ["style", "max-width", '2200px'],
                ["style", "width", '100%']
            ],
            "${_grass-footer}": [
                ["style", "left", '-611px'],
                ["style", "top", '6623px']
            ],
            "${_Rectangle6}": [
                ["color", "background-color", 'rgba(204,224,0,1.00)'],
                ["style", "height", '1223px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_logo-1}": [
                ["style", "top", '18px'],
                ["style", "left", '121px']
            ],
            "${_sym-cloud-white}": [
                ["style", "top", '132px'],
                ["style", "opacity", '0.80487803811949'],
                ["style", "left", '-17px']
            ],
            "${_roller}": [
                ["style", "left", '241px'],
                ["style", "top", '556px']
            ],
            "${_arrow-white2}": [
                ["style", "top", '1051px'],
                ["style", "left", '298px']
            ],
            "${_what-is-masuk-angin}": [
                ["style", "top", '1120px'],
                ["style", "height", '226px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'annie-use-your-telescope, sans-serif'],
                ["style", "left", '131px'],
                ["style", "font-size", '19px']
            ],
            "${_sym-boy-roller}": [
                ["style", "left", '229px'],
                ["style", "top", '481px']
            ],
            "${_Rectangle7}": [
                ["color", "background-color", 'rgba(241,237,234,1.00)'],
                ["style", "height", '845px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_board2}": [
                ["style", "left", '0px'],
                ["style", "top", '93px']
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
                { id: "eid155", tween: [ "style", "${_grass-footer}", "top", '6449px', { fromValue: '6623px'}], position: 135000, duration: 34672 },
                { id: "eid36", tween: [ "style", "${_fence}", "left", '-1015px', { fromValue: '-17px'}], position: 130000, duration: 40000 },
                { id: "eid70", tween: [ "style", "${_sym-baloon}", "left", '958px', { fromValue: '958px'}], position: 250, duration: 0, easing: "swing" },
                { id: "eid4852", tween: [ "style", "${_sym-boy-roller}", "top", '650px', { fromValue: '481px'}], position: 0, duration: 27000 },
                { id: "eid15", tween: [ "style", "${_cloud-yellow-2-2}", "top", '1123px', { fromValue: '1748px'}], position: 13620, duration: 72380 },
                { id: "eid366", tween: [ "style", "${_smoke}", "top", '-193px', { fromValue: '0px'}], position: 80000, duration: 27500, easing: "easeInQuad" },
                { id: "eid4665", tween: [ "style", "${_rightEye}", "left", '580px', { fromValue: '591px'}], position: 0, duration: 22000 },
                { id: "eid2490", tween: [ "style", "${_sym-cloud-far}", "top", '143px', { fromValue: '143px'}], position: 0, duration: 0 },
                { id: "eid4853", tween: [ "style", "${_sym-boy-roller}", "left", '279px', { fromValue: '229px'}], position: 0, duration: 27000 },
                { id: "eid381", tween: [ "style", "${_smoke}", "opacity", '0', { fromValue: '1'}], position: 80000, duration: 27500, easing: "easeInQuad" },
                { id: "eid4672", tween: [ "style", "${_LeftEye}", "left", '561px', { fromValue: '568px'}], position: 0, duration: 22000 },
                { id: "eid69", tween: [ "style", "${_sym-baloon}", "top", '23px', { fromValue: '23px'}], position: 250, duration: 0, easing: "swing" },
                { id: "eid378", tween: [ "transform", "${_smoke}", "rotateZ", '34deg', { fromValue: '0deg'}], position: 80000, duration: 27500, easing: "easeInQuad" },
                { id: "eid1187", tween: [ "style", "${_ball}", "top", '251px', { fromValue: '0px'}], position: 112500, duration: 32500, easing: "easeOutBounce" },
                { id: "eid4553", tween: [ "style", "${_sym-ropeGirl}", "left", '515px', { fromValue: '515px'}], position: 0, duration: 0 },
                { id: "eid3934", tween: [ "style", "${_sym-cloud-white}", "top", '-435px', { fromValue: '132px'}], position: 0, duration: 60000 },
                { id: "eid4552", tween: [ "style", "${_sym-boy-play}", "top", '610px', { fromValue: '610px'}], position: 0, duration: 0 },
                { id: "eid4551", tween: [ "style", "${_sym-boy-play}", "left", '828px', { fromValue: '828px'}], position: 0, duration: 0 },
                { id: "eid2260", tween: [ "style", "${_sym-sun}", "right", '21.75%', { fromValue: '21.75%'}], position: 0, duration: 0 },
                { id: "eid4564", tween: [ "style", "${_sym-girl-play}", "left", '1031px', { fromValue: '1031px'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_yellow-cloud2}", "left", '-755px', { fromValue: '-375px'}], position: 13500, duration: 55000 },
                { id: "eid4554", tween: [ "style", "${_sym-ropeGirl}", "top", '598px', { fromValue: '598px'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_cloud-yellow-2}", "top", '1377px', { fromValue: '1589px'}], position: 13620, duration: 57380 }            ]
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
                    id: 'green-env',
                    type: 'image',
                    rect: ['0px', '286px', '126px', '103px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/green-env.png', '0px', '0px']
                },
                {
                    id: 'baloon',
                    type: 'image',
                    rect: ['47px', '0px', '112px', '311px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/baloon.png', '0px', '0px']
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
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid56", tween: [ "style", "${_green-env}", "top", '269px', { fromValue: '286px'}], position: 250, duration: 1000, easing: "swing" },
                { id: "eid58", tween: [ "style", "${_green-env}", "top", '286px', { fromValue: '269px'}], position: 1500, duration: 1000, easing: "swing" },
                { id: "eid43", tween: [ "transform", "${_green-env}", "rotateZ", '-56deg', { fromValue: '0deg'}], position: 250, duration: 1000, easing: "swing" },
                { id: "eid47", tween: [ "transform", "${_green-env}", "rotateZ", '0deg', { fromValue: '-56deg'}], position: 1500, duration: 1000, easing: "swing" },
                { id: "eid53", tween: [ "style", "${_baloon}", "top", '-15px', { fromValue: '0px'}], position: 250, duration: 1000, easing: "swing" },
                { id: "eid54", tween: [ "style", "${_baloon}", "top", '0px', { fromValue: '-15px'}], position: 1500, duration: 1000, easing: "swing" },
                { id: "eid38", tween: [ "style", "${_green-env}", "-webkit-transform-origin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 250, duration: 1000, easing: "swing" },
                { id: "eid5179", tween: [ "style", "${_green-env}", "-moz-transform-origin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 250, duration: 1000, easing: "swing" },
                { id: "eid5180", tween: [ "style", "${_green-env}", "-ms-transform-origin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 250, duration: 1000, easing: "swing" },
                { id: "eid5181", tween: [ "style", "${_green-env}", "msTransformOrigin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 250, duration: 1000, easing: "swing" },
                { id: "eid5182", tween: [ "style", "${_green-env}", "-o-transform-origin", [56,25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,24]}], position: 250, duration: 1000, easing: "swing" },
                { id: "eid46", tween: [ "style", "${_green-env}", "-webkit-transform-origin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 1500, duration: 1000, easing: "swing" },
                { id: "eid5183", tween: [ "style", "${_green-env}", "-moz-transform-origin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 1500, duration: 1000, easing: "swing" },
                { id: "eid5184", tween: [ "style", "${_green-env}", "-ms-transform-origin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 1500, duration: 1000, easing: "swing" },
                { id: "eid5185", tween: [ "style", "${_green-env}", "msTransformOrigin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 1500, duration: 1000, easing: "swing" },
                { id: "eid5186", tween: [ "style", "${_green-env}", "-o-transform-origin", [57,24], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56,25]}], position: 1500, duration: 1000, easing: "swing" }            ]
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
                            font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                            id: 'TextCopy',
                            text: 'Full Name*:',
                            type: 'text',
                            rect: ['10px', '0px', '169px', '24px', 'auto', 'auto']
                        },
                        {
                            font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                            type: 'text',
                            id: 'Text4',
                            text: 'Company*:',
                            align: 'left',
                            rect: ['10px', '25px', '162px', '24px', 'auto', 'auto']
                        },
                        {
                            font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                            type: 'text',
                            id: 'Text6',
                            text: 'Email Address*:',
                            align: 'left',
                            rect: ['9px', '51px', '149px', '29px', 'auto', 'auto']
                        },
                        {
                            font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                            type: 'text',
                            id: 'Text22',
                            text: 'Message*:',
                            align: 'left',
                            rect: ['9px', '76px', '176px', '21px', 'auto', 'auto']
                        },
                        {
                            font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                            type: 'text',
                            id: 'Text23',
                            text: '*) Must be Filled',
                            align: 'left',
                            rect: ['0px', '131px', '293px', '24px', 'auto', 'auto']
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
                            font: ['annie-use-your-telescope, sans-serif', 17, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                            type: 'text',
                            id: 'Text24',
                            text: 'Send',
                            align: 'left',
                            rect: ['170px', '183px', '73px', '29px', 'auto', 'auto']
                        }]
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
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
            "${_Group}": [
                ["style", "left", '52px'],
                ["style", "top", '37px']
            ],
            "${symbolSelector}": [
                ["style", "height", '459px'],
                ["style", "width", '470px']
            ],
            "${_Ellipse}": [
                ["style", "left", '147px'],
                ["style", "top", '185px']
            ],
            "${_Group4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text6}": [
                ["style", "top", '51px'],
                ["style", "left", '9px']
            ],
            "${_Text23}": [
                ["style", "height", '24px'],
                ["style", "left", '0px'],
                ["style", "top", '131px']
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
            duration: 250,
            autoPlay: true,
            timeline: [
            ]
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
                    transform: [[0, 0], [], [], [], ['50%', '100%']],
                    id: 'boy-head',
                    type: 'image',
                    rect: ['0px', '0px', '131px', '131px', 'auto', 'auto'],
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
                { id: "eid476", tween: [ "style", "${_goo2}", "left", '139px', { fromValue: '125px'}], position: 1675, duration: 1575, easing: "easeInQuart" },
                { id: "eid451", tween: [ "transform", "${_boy-head}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 0, duration: 1210, easing: "swing" },
                { id: "eid453", tween: [ "transform", "${_boy-head}", "rotateZ", '4deg', { fromValue: '-13deg'}], position: 1250, duration: 705, easing: "easeInQuint" },
                { id: "eid461", tween: [ "transform", "${_boy-head}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 3560, duration: 705, easing: "easeOutQuart" },
                { id: "eid468", tween: [ "style", "${_goo1}", "left", '131px', { fromValue: '110px'}], position: 1800, duration: 1575, easing: "easeInQuart" },
                { id: "eid470", tween: [ "style", "${_goo1}", "opacity", '1', { fromValue: '0'}], position: 1800, duration: 1000, easing: "easeInQuart" },
                { id: "eid472", tween: [ "style", "${_goo1}", "opacity", '0', { fromValue: '1'}], position: 2875, duration: 500, easing: "easeInQuart" },
                { id: "eid467", tween: [ "style", "${_goo1}", "top", '138px', { fromValue: '121px'}], position: 1800, duration: 1575, easing: "easeInQuart" },
                { id: "eid458", tween: [ "style", "${_swt}", "opacity", '1', { fromValue: '0'}], position: 3325, duration: 810, easing: "easeInQuart" },
                { id: "eid478", tween: [ "style", "${_swt}", "opacity", '0', { fromValue: '1'}], position: 4265, duration: 615, easing: "easeInQuart" },
                { id: "eid474", tween: [ "style", "${_goo2}", "opacity", '1', { fromValue: '0'}], position: 1675, duration: 1000, easing: "easeInQuart" },
                { id: "eid475", tween: [ "style", "${_goo2}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 500, easing: "easeInQuart" },
                { id: "eid459", tween: [ "style", "${_swt}", "top", '91px', { fromValue: '86px'}], position: 3325, duration: 1555, easing: "easeInQuart" },
                { id: "eid473", tween: [ "style", "${_goo2}", "top", '123px', { fromValue: '111px'}], position: 1675, duration: 1575, easing: "easeInQuart" },
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
                    id: 'ubat2',
                    type: 'image',
                    rect: ['170px', '7px', '343px', '157px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ubat2.jpg', '0px', '0px']
                },
                {
                    id: 'ubat',
                    type: 'image',
                    rect: ['170px', '8px', '343px', '157px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ubat.jpg', '0px', '0px']
                },
                {
                    id: 'sym-pro-but2',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['9', '87', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym-pro-but1',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
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
                ["style", "top", '0px'],
                ["subproperty", "filter.invert", '0'],
                ["style", "left", '0px'],
                ["subproperty", "filter.contrast", '1']
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
                { id: "eid3094", tween: [ "style", "${_left-house}", "top", '85px', { fromValue: '-111px'}], position: 0, duration: 1500, easing: "easeOutBounce" },
                { id: "eid3314", tween: [ "style", "${_right-house}", "top", '60px', { fromValue: '-158px'}], position: 250, duration: 1750, easing: "easeOutBounce" },
                { id: "eid3112", tween: [ "style", "${_left-root2}", "top", '75px', { fromValue: '-62px'}], position: 900, duration: 982, easing: "easeOutBounce" },
                { id: "eid3107", tween: [ "style", "${_left-root2}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 246, easing: "easeOutBounce" },
                { id: "eid3315", tween: [ "style", "${_right-root}", "top", '98px', { fromValue: '-207px'}], position: 1018, duration: 982, easing: "easeOutBounce" },
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
                    rect: ['76px', '32px', '41px', '69px', 'auto', 'auto'],
                    id: 'rightfoot',
                    transform: [[0, 0], [], [], [], ['37%', '23%']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/rightfoot.png', '0px', '0px']
                },
                {
                    rect: ['8px', '17px', '49px', '59px', 'auto', 'auto'],
                    id: 'hand',
                    transform: [[0, 0], [], [], [], ['41%', '10%']],
                    type: 'image',
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
                    id: 'ball-play',
                    type: 'image',
                    rect: ['85px', '-104px', '63px', '63px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ball-play.png', '0px', '0px']
                },
                {
                    rect: ['13px', '0', '84px', '131px', 'auto', 'auto'],
                    id: 'BoyBody3',
                    transform: [[0, 0], [], [], [], ['53%', '98%']],
                    type: 'image',
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
            ]
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
            "${_ball-play}": [
                ["style", "left", '85px'],
                ["style", "top", '-104px']
            ],
            "${symbolSelector}": [
                ["style", "height", '131px'],
                ["style", "width", '110px']
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
            "${_shadow}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0.38211384415626526'],
                ["style", "height", '9px'],
                ["style", "width", '30px']
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
                { id: "eid3525", tween: [ "style", "${_ball-play}", "top", '-33px', { fromValue: '-104px'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid3532", tween: [ "style", "${_ball-play}", "top", '-104px', { fromValue: '-33px'}], position: 1044, duration: 1000, easing: "easeOutCubic" },
                { id: "eid3546", tween: [ "transform", "${_hand}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 827, duration: 217, easing: "swing" },
                { id: "eid3553", tween: [ "transform", "${_hand}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1097, duration: 457, easing: "swing" },
                { id: "eid3528", tween: [ "style", "${_eyesBoy}", "top", '-48px', { fromValue: '-58px'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid3534", tween: [ "style", "${_eyesBoy}", "top", '-58px', { fromValue: '-48px'}], position: 1044, duration: 1000, easing: "easeOutCubic" },
                { id: "eid3638", tween: [ "style", "${_shadow}", "width", '41px', { fromValue: '30px'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid3642", tween: [ "style", "${_shadow}", "width", '30px', { fromValue: '41px'}], position: 1044, duration: 1000, easing: "easeOutCubic" },
                { id: "eid3557", tween: [ "style", "${_shadow}", "opacity", '0.57723579537578', { fromValue: '0.38211384415626526'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid3559", tween: [ "style", "${_shadow}", "opacity", '0.38211384415626526', { fromValue: '0.57723579537578'}], position: 1044, duration: 1000, easing: "easeOutCubic" },
                { id: "eid3637", tween: [ "style", "${_shadow}", "height", '12px', { fromValue: '9px'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid3641", tween: [ "style", "${_shadow}", "height", '9px', { fromValue: '12px'}], position: 1044, duration: 1000, easing: "easeOutCubic" }            ]
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
                    rect: ['9px', '135px', '110px', '36px', 'auto', 'auto'],
                    id: 'hoolaa',
                    transform: [[0, 0], [], [], [], ['0%']],
                    type: 'image',
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
                    id: 'boy-roller',
                    type: 'image',
                    rect: ['1px', '0px', '125px', '150px', 'auto', 'auto'],
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
            duration: 2000,
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
