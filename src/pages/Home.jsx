import React, {Component} from 'react'
import NavBar from '../components/navbar'
import {Fade} from 'react-reveal';
import textIMG from '../media/cmc.jpg'
import Graph from '../components/dataform'
import LazyLoad from 'react-lazyload'
import ReactPlayer from 'react-player'
import {
  ResponsiveContainer, Label, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Home',
            danceability: [{"Year":1990,"All Rap Songs":0.8140428571,"Hot 100 Songs":0.7118333333,"East Coast":0.7853559322,"West Coast":0.8393571429,"Midwest":null,"South":0.8070465116},{"Year":1991,"All Rap Songs":0.7856041667,"Hot 100 Songs":0.867,"East Coast":0.7916111111,"West Coast":0.7678627451,"Midwest":null,"South":0.7878666667},{"Year":1992,"All Rap Songs":0.7734258373,"Hot 100 Songs":0.8415,"East Coast":0.7527792208,"West Coast":0.7721341463,"Midwest":0.771,"South":0.7888055556},{"Year":1993,"All Rap Songs":0.781297561,"Hot 100 Songs":0.7760769231,"East Coast":0.7802531646,"West Coast":0.7685684211,"Midwest":null,"South":0.7784545455},{"Year":1994,"All Rap Songs":0.7536641791,"Hot 100 Songs":0.7732857143,"East Coast":0.709,"West Coast":0.8031621622,"Midwest":0.7745454545,"South":0.720626506},{"Year":1995,"All Rap Songs":0.7512534819,"Hot 100 Songs":0.7900625,"East Coast":0.7400743802,"West Coast":0.7651317365,"Midwest":null,"South":0.7803513514},{"Year":1996,"All Rap Songs":0.7434468599,"Hot 100 Songs":0.76785,"East Coast":0.7373655172,"West Coast":0.7503785714,"Midwest":0.6753333333,"South":0.773317757},{"Year":1997,"All Rap Songs":0.7635399449,"Hot 100 Songs":0.81825,"East Coast":0.7141428571,"West Coast":0.8027142857,"Midwest":0.724,"South":0.7609137931},{"Year":1998,"All Rap Songs":0.7421070932,"Hot 100 Songs":0.7619130435,"East Coast":0.7399202899,"West Coast":0.7853184713,"Midwest":0.586,"South":0.7386990291},{"Year":1999,"All Rap Songs":0.745909416,"Hot 100 Songs":0.7981724138,"East Coast":0.7291853035,"West Coast":0.7617444444,"Midwest":0.7301875,"South":0.751987055},{"Year":2000,"All Rap Songs":0.7569074074,"Hot 100 Songs":0.8486,"East Coast":0.7213670213,"West Coast":0.7628198758,"Midwest":0.8177627119,"South":0.773590106},{"Year":2001,"All Rap Songs":0.7475469432,"Hot 100 Songs":0.781,"East Coast":0.71139,"West Coast":0.7676038647,"Midwest":null,"South":0.7798699422},{"Year":2002,"All Rap Songs":0.7543675115,"Hot 100 Songs":0.7532777778,"East Coast":0.7058547009,"West Coast":0.7961597633,"Midwest":0.7316976744,"South":0.7722570621},{"Year":2003,"All Rap Songs":0.727693,"Hot 100 Songs":0.7311666667,"East Coast":0.6827346939,"West Coast":0.7667674419,"Midwest":0.773244898,"South":0.736271978},{"Year":2004,"All Rap Songs":0.7275008389,"Hot 100 Songs":0.7357959184,"East Coast":0.6786825397,"West Coast":0.7549181818,"Midwest":0.6940147059,"South":0.7441145374},{"Year":2005,"All Rap Songs":0.7007289973,"Hot 100 Songs":0.7331714286,"East Coast":0.66975,"West Coast":0.7547362637,"Midwest":0.6831184211,"South":0.7015359116},{"Year":2006,"All Rap Songs":0.6900647399,"Hot 100 Songs":0.7320169492,"East Coast":0.6346034483,"West Coast":0.7538007117,"Midwest":0.64144,"South":0.6970628931},{"Year":2007,"All Rap Songs":0.6850512821,"Hot 100 Songs":0.7081111111,"East Coast":0.642397878,"West Coast":0.7357309417,"Midwest":0.6557142857,"South":0.6972240763},{"Year":2008,"All Rap Songs":0.6761338167,"Hot 100 Songs":0.6867090909,"East Coast":0.6353929961,"West Coast":0.7047,"Midwest":0.7055128205,"South":0.6756713043},{"Year":2009,"All Rap Songs":0.6729205867,"Hot 100 Songs":0.6740273973,"East Coast":0.6449621381,"West Coast":0.6918470588,"Midwest":0.6947439024,"South":0.6802164009},{"Year":2010,"All Rap Songs":0.6356272312,"Hot 100 Songs":0.6209879518,"East Coast":0.5847230392,"West Coast":0.6729152542,"Midwest":0.6302222222,"South":0.6582825203},{"Year":2011,"All Rap Songs":0.6317529773,"Hot 100 Songs":0.6232875,"East Coast":0.5925922551,"West Coast":0.6464545455,"Midwest":0.5757682927,"South":0.6529070599},{"Year":2012,"All Rap Songs":0.619958511,"Hot 100 Songs":0.6694487179,"East Coast":0.6042323009,"West Coast":0.679979638,"Midwest":0.5946875,"South":0.6399209622},{"Year":2013,"All Rap Songs":0.6451697655,"Hot 100 Songs":0.6809130435,"East Coast":0.5872118227,"West Coast":0.6724031746,"Midwest":0.6300630631,"South":0.6834417391},{"Year":2014,"All Rap Songs":0.6629614138,"Hot 100 Songs":0.7318375,"East Coast":0.6333515625,"West Coast":0.7000544872,"Midwest":0.6548454106,"South":0.6916563177},{"Year":2015,"All Rap Songs":0.6833329075,"Hot 100 Songs":0.7145735294,"East Coast":0.6239287926,"West Coast":0.6828155844,"Midwest":0.6716353591,"South":0.7086049772},{"Year":2016,"All Rap Songs":0.6796679349,"Hot 100 Songs":0.684141844,"East Coast":0.6405315682,"West Coast":0.6960023753,"Midwest":0.6411710526,"South":0.710731982},{"Year":2017,"All Rap Songs":0.6914647779,"Hot 100 Songs":0.7301302083,"East Coast":0.6466977273,"West Coast":0.6853406326,"Midwest":0.6905223881,"South":0.7044707327},{"Year":2018,"All Rap Songs":0.7022761219,"Hot 100 Songs":0.7406697248,"East Coast":0.6606377473,"West Coast":0.7093820225,"Midwest":0.688806867,"South":0.7278909359},{"Year":2019,"All Rap Songs":0.6989613508,"Hot 100 Songs":0.7293921569,"East Coast":0.6591001789,"West Coast":0.724756,"Midwest":0.6958370221,"South":0.7308506098}],
            duration: [{"Year":1990,"All Rap Songs":256.9236071429,"Hot 100 Songs":270.4731666667,"East Coast":251.8365254237,"West Coast":260.6611785714,"Midwest":null,"South":271.2666046512},{"Year":1991,"All Rap Songs":235.0778333333,"Hot 100 Songs":302.4395,"East Coast":238.8448425926,"West Coast":221.6814117647,"Midwest":null,"South":222.7972},{"Year":1992,"All Rap Songs":237.0269425837,"Hot 100 Songs":238.1595,"East Coast":228.7807272727,"West Coast":234.4341341463,"Midwest":226.9063076923,"South":230.2293055556},{"Year":1993,"All Rap Songs":247.6959804878,"Hot 100 Songs":268.8745384615,"East Coast":254.6940126582,"West Coast":246.8574315789,"Midwest":null,"South":304.1275454545},{"Year":1994,"All Rap Songs":232.8280708955,"Hot 100 Songs":244.0891428571,"East Coast":215.715393617,"West Coast":227.4890540541,"Midwest":229.5856818182,"South":247.2930120482},{"Year":1995,"All Rap Songs":247.5634456825,"Hot 100 Songs":257.1071875,"East Coast":240.3008842975,"West Coast":253.7494431138,"Midwest":null,"South":263.9958648649},{"Year":1996,"All Rap Songs":245.607763285,"Hot 100 Songs":255.21945,"East Coast":228.9707655172,"West Coast":257.1997357143,"Midwest":224.86075,"South":248.3266448598},{"Year":1997,"All Rap Songs":243.2760440771,"Hot 100 Songs":241.46235,"East Coast":237.0652142857,"West Coast":243.5945824176,"Midwest":252.024,"South":250.4331637931},{"Year":1998,"All Rap Songs":244.0803477051,"Hot 100 Songs":260.445173913,"East Coast":234.2204782609,"West Coast":254.3862420382,"Midwest":230.066,"South":240.4386245955},{"Year":1999,"All Rap Songs":235.8515637664,"Hot 100 Songs":245.6524827586,"East Coast":228.1614408946,"West Coast":247.5010444444,"Midwest":222.4718125,"South":235.4242847896},{"Year":2000,"All Rap Songs":242.5181396011,"Hot 100 Songs":256.4278,"East Coast":234.0685212766,"West Coast":236.699242236,"Midwest":254.1788135593,"South":242.6158268551},{"Year":2001,"All Rap Songs":247.564930131,"Hot 100 Songs":247.6259285714,"East Coast":237.36592,"West Coast":256.1511062802,"Midwest":null,"South":250.6717196532},{"Year":2002,"All Rap Songs":244.4345599078,"Hot 100 Songs":265.5671388889,"East Coast":232.3658589744,"West Coast":244.4427692308,"Midwest":292.0232790698,"South":247.5496525424},{"Year":2003,"All Rap Songs":243.612506,"Hot 100 Songs":273.9841111111,"East Coast":241.5106653061,"West Coast":256.3451317829,"Midwest":224.9705102041,"South":257.4113928571},{"Year":2004,"All Rap Songs":233.8985478188,"Hot 100 Songs":242.7703469388,"East Coast":224.2626698413,"West Coast":222.5416090909,"Midwest":251.8529705882,"South":239.114123348},{"Year":2005,"All Rap Songs":231.435403794,"Hot 100 Songs":255.4312714286,"East Coast":232.2176505376,"West Coast":232.2064175824,"Midwest":225.3638815789,"South":241.1668563536},{"Year":2006,"All Rap Songs":233.1415150289,"Hot 100 Songs":241.8475932203,"East Coast":226.5779224138,"West Coast":232.7044448399,"Midwest":235.6739866667,"South":240.9610955975},{"Year":2007,"All Rap Songs":232.1530437774,"Hot 100 Songs":237.7980833333,"East Coast":216.6060503979,"West Coast":242.3560493274,"Midwest":228.6363714286,"South":235.7083814064},{"Year":2008,"All Rap Songs":228.047939354,"Hot 100 Songs":253.4857272727,"East Coast":218.73807393,"West Coast":229.4603444444,"Midwest":210.6201111111,"South":235.6404104348},{"Year":2009,"All Rap Songs":225.3083308042,"Hot 100 Songs":244.3719726027,"East Coast":220.3186481069,"West Coast":227.1272039216,"Midwest":237.6755365854,"South":222.5802517084},{"Year":2010,"All Rap Songs":223.6977936903,"Hot 100 Songs":254.572313253,"East Coast":221.3957303922,"West Coast":231.6595525424,"Midwest":235.2661944444,"South":226.3705680894},{"Year":2011,"All Rap Songs":223.4781678832,"Hot 100 Songs":238.61985,"East Coast":218.923405467,"West Coast":233.4796060606,"Midwest":227.2760121951,"South":223.32656479},{"Year":2012,"All Rap Songs":221.9361683658,"Hot 100 Songs":231.9653589744,"East Coast":221.6504557522,"West Coast":231.5596176471,"Midwest":217.8315965909,"South":222.8314563574},{"Year":2013,"All Rap Songs":226.0627534897,"Hot 100 Songs":251.9473913043,"East Coast":216.0113374384,"West Coast":231.2110793651,"Midwest":214.4151711712,"South":234.8435936232},{"Year":2014,"All Rap Songs":217.7645870398,"Hot 100 Songs":233.92525,"East Coast":229.4022617188,"West Coast":231.3134903846,"Midwest":216.7676521739,"South":222.6112057762},{"Year":2015,"All Rap Songs":219.205103486,"Hot 100 Songs":233.5663970588,"East Coast":225.5490572755,"West Coast":232.9497948052,"Midwest":214.6178950276,"South":216.8069078163},{"Year":2016,"All Rap Songs":216.6917444515,"Hot 100 Songs":231.2058723404,"East Coast":220.3068757637,"West Coast":222.2486413302,"Midwest":212.4955868421,"South":215.6688058559},{"Year":2017,"All Rap Songs":208.4864276417,"Hot 100 Songs":219.6001458333,"East Coast":221.2223886364,"West Coast":200.3794452555,"Midwest":203.5458102345,"South":208.9113851822},{"Year":2018,"All Rap Songs":196.6699760549,"Hot 100 Songs":205.3232201835,"East Coast":207.7483105023,"West Coast":202.7144462279,"Midwest":201.965695279,"South":193.1946827561},{"Year":2019,"All Rap Songs":192.8212457544,"Hot 100 Songs":190.5908088235,"East Coast":209.9765527728,"West Coast":193.957368,"Midwest":186.2856056338,"South":190.4149425813}],
            energy: [{"Year":1990,"All Rap Songs":0.6681714286,"Hot 100 Songs":0.6378333333,"East Coast":0.7118135593,"West Coast":0.6389642857,"Midwest":null,"South":0.5693953488},{"Year":1991,"All Rap Songs":0.6220052083,"Hot 100 Songs":0.706,"East Coast":0.62,"West Coast":0.6183921569,"Midwest":null,"South":0.4979333333},{"Year":1992,"All Rap Songs":0.6445732057,"Hot 100 Songs":0.7733333333,"East Coast":0.6244779221,"West Coast":0.6885853659,"Midwest":0.4970769231,"South":0.6188888889},{"Year":1993,"All Rap Songs":0.6179365854,"Hot 100 Songs":0.6291538462,"East Coast":0.5477088608,"West Coast":0.6261684211,"Midwest":null,"South":0.5763181818},{"Year":1994,"All Rap Songs":0.659641791,"Hot 100 Songs":0.636,"East Coast":0.7244574468,"West Coast":0.5909459459,"Midwest":0.6133181818,"South":0.6241445783},{"Year":1995,"All Rap Songs":0.6351364903,"Hot 100 Songs":0.659125,"East Coast":0.6593140496,"West Coast":0.6226287425,"Midwest":null,"South":0.617972973},{"Year":1996,"All Rap Songs":0.6438188406,"Hot 100 Songs":0.63445,"East Coast":0.6619172414,"West Coast":0.6260285714,"Midwest":0.5644166667,"South":0.6238317757},{"Year":1997,"All Rap Songs":0.6225027548,"Hot 100 Songs":0.62015,"East Coast":0.682452381,"West Coast":0.6137582418,"Midwest":0.55590625,"South":0.6432413793},{"Year":1998,"All Rap Songs":0.6789707928,"Hot 100 Songs":0.6623478261,"East Coast":0.675057971,"West Coast":0.6699808917,"Midwest":0.836,"South":0.6560485437},{"Year":1999,"All Rap Songs":0.6997818832,"Hot 100 Songs":0.7673103448,"East Coast":0.7040670927,"West Coast":0.6946277778,"Midwest":0.74928125,"South":0.7036796117},{"Year":2000,"All Rap Songs":0.7188162393,"Hot 100 Songs":0.7356,"East Coast":0.7314734043,"West Coast":0.7117826087,"Midwest":0.7087457627,"South":0.7330353357},{"Year":2001,"All Rap Songs":0.7316768559,"Hot 100 Songs":0.7061071429,"East Coast":0.7523833333,"West Coast":0.7126231884,"Midwest":null,"South":0.7375433526},{"Year":2002,"All Rap Songs":0.7052788252,"Hot 100 Songs":0.7605277778,"East Coast":0.7357264957,"West Coast":0.7132366864,"Midwest":0.6729069767,"South":0.692680791},{"Year":2003,"All Rap Songs":0.7286747,"Hot 100 Songs":0.7444166667,"East Coast":0.7653795918,"West Coast":0.7288062016,"Midwest":0.7338979592,"South":0.7345870879},{"Year":2004,"All Rap Songs":0.7190669379,"Hot 100 Songs":0.7438367347,"East Coast":0.7404247302,"West Coast":0.7023227273,"Midwest":0.7343235294,"South":0.7093215859},{"Year":2005,"All Rap Songs":0.7037020759,"Hot 100 Songs":0.7185857143,"East Coast":0.7403878065,"West Coast":0.6730714286,"Midwest":0.7044342105,"South":0.6838987109},{"Year":2006,"All Rap Songs":0.7138910983,"Hot 100 Songs":0.6790847458,"East Coast":0.7689913793,"West Coast":0.6850747331,"Midwest":0.7728,"South":0.712791195},{"Year":2007,"All Rap Songs":0.7188510319,"Hot 100 Songs":0.735125,"East Coast":0.7530132626,"West Coast":0.6639237668,"Midwest":0.7015285714,"South":0.7211299166},{"Year":2008,"All Rap Songs":0.7148154911,"Hot 100 Songs":0.7182909091,"East Coast":0.7789338521,"West Coast":0.6793283333,"Midwest":0.6703504274,"South":0.7024365217},{"Year":2009,"All Rap Songs":0.7159347496,"Hot 100 Songs":0.7623561644,"East Coast":0.7342271715,"West Coast":0.6876705882,"Midwest":0.7454146341,"South":0.7131867882},{"Year":2010,"All Rap Songs":0.7251518597,"Hot 100 Songs":0.7473012048,"East Coast":0.7791323529,"West Coast":0.7271627119,"Midwest":0.7401018519,"South":0.7141949492},{"Year":2011,"All Rap Songs":0.7274433346,"Hot 100 Songs":0.717775,"East Coast":0.7696810934,"West Coast":0.6851432507,"Midwest":0.799597561,"South":0.723896336},{"Year":2012,"All Rap Songs":0.7318898094,"Hot 100 Songs":0.7435769231,"East Coast":0.7562123894,"West Coast":0.696020362,"Midwest":0.7249375,"South":0.7159745704},{"Year":2013,"All Rap Songs":0.7061286991,"Hot 100 Songs":0.6717101449,"East Coast":0.7428103448,"West Coast":0.7064063492,"Midwest":0.6797792793,"South":0.6813588406},{"Year":2014,"All Rap Songs":0.6904333726,"Hot 100 Songs":0.6647625,"East Coast":0.7393164062,"West Coast":0.7029294872,"Midwest":0.6934009662,"South":0.6714118412},{"Year":2015,"All Rap Songs":0.6485778323,"Hot 100 Songs":0.5965441176,"East Coast":0.7170092879,"West Coast":0.6596337662,"Midwest":0.6444944751,"South":0.626538591},{"Year":2016,"All Rap Songs":0.6462388501,"Hot 100 Songs":0.576248227,"East Coast":0.6892631365,"West Coast":0.6443657957,"Midwest":0.6446605263,"South":0.6351964414},{"Year":2017,"All Rap Songs":0.6436607198,"Hot 100 Songs":0.598578125,"East Coast":0.7015636364,"West Coast":0.6448321168,"Midwest":0.6287957356,"South":0.6346483831},{"Year":2018,"All Rap Songs":0.6357741795,"Hot 100 Songs":0.6130422018,"East Coast":0.684805175,"West Coast":0.6348330658,"Midwest":0.6384978541,"South":0.6282073692},{"Year":2019,"All Rap Songs":0.6513178997,"Hot 100 Songs":0.6253578431,"East Coast":0.7243007156,"West Coast":0.666246,"Midwest":0.6347062374,"South":0.6352098069}],
            valence: [{"Year":1990,"All Rap Songs":0.6618785714,"Hot 100 Songs":0.6501666667,"East Coast":0.6501864407,"West Coast":0.64025,"Midwest":null,"South":0.6034418605},{"Year":1991,"All Rap Songs":0.614815625,"Hot 100 Songs":0.5885,"East Coast":0.6029722222,"West Coast":0.5996392157,"Midwest":null,"South":0.6092666667},{"Year":1992,"All Rap Songs":0.6484354067,"Hot 100 Songs":0.7446666667,"East Coast":0.6787272727,"West Coast":0.618402439,"Midwest":0.7078461538,"South":0.6366944444},{"Year":1993,"All Rap Songs":0.6165609756,"Hot 100 Songs":0.5890769231,"East Coast":0.6151518987,"West Coast":0.5823263158,"Midwest":null,"South":0.5577727273},{"Year":1994,"All Rap Songs":0.6133966418,"Hot 100 Songs":0.6123571429,"East Coast":0.6114680851,"West Coast":0.650972973,"Midwest":0.661,"South":0.5870759036},{"Year":1995,"All Rap Songs":0.5752061281,"Hot 100 Songs":0.6325625,"East Coast":0.602846281,"West Coast":0.5521676647,"Midwest":null,"South":0.5697972973},{"Year":1996,"All Rap Songs":0.5892297101,"Hot 100 Songs":0.5753,"East Coast":0.6237793103,"West Coast":0.5562985714,"Midwest":0.5335166667,"South":0.6022224299},{"Year":1997,"All Rap Songs":0.5887895317,"Hot 100 Songs":0.69855,"East Coast":0.5846785714,"West Coast":0.5759230769,"Midwest":0.54226875,"South":0.5736146552},{"Year":1998,"All Rap Songs":0.5935613352,"Hot 100 Songs":0.5907391304,"East Coast":0.6065253623,"West Coast":0.6302121019,"Midwest":0.712,"South":0.5657928803},{"Year":1999,"All Rap Songs":0.6234004768,"Hot 100 Songs":0.6892413793,"East Coast":0.606341853,"West Coast":0.6311888889,"Midwest":0.63728125,"South":0.6259676375},{"Year":2000,"All Rap Songs":0.6352702279,"Hot 100 Songs":0.69472,"East Coast":0.6253744681,"West Coast":0.631484472,"Midwest":0.6595220339,"South":0.6471674912},{"Year":2001,"All Rap Songs":0.6384808952,"Hot 100 Songs":0.7119285714,"East Coast":0.6208466667,"West Coast":0.6342405797,"Midwest":null,"South":0.6454763006},{"Year":2002,"All Rap Songs":0.6375574885,"Hot 100 Songs":0.6505277778,"East Coast":0.6191854701,"West Coast":0.6296532544,"Midwest":0.566255814,"South":0.6516466102},{"Year":2003,"All Rap Songs":0.6504044,"Hot 100 Songs":0.6825277778,"East Coast":0.6340914286,"West Coast":0.6361705426,"Midwest":0.6074693878,"South":0.6469434066},{"Year":2004,"All Rap Songs":0.6196682886,"Hot 100 Songs":0.6087755102,"East Coast":0.603495873,"West Coast":0.5979059091,"Midwest":0.5790573529,"South":0.6355806167},{"Year":2005,"All Rap Songs":0.5989738482,"Hot 100 Songs":0.6222,"East Coast":0.5985991935,"West Coast":0.5817423077,"Midwest":0.5601184211,"South":0.5786187845},{"Year":2006,"All Rap Songs":0.6001451445,"Hot 100 Songs":0.6432542373,"East Coast":0.5733212644,"West Coast":0.5833779359,"Midwest":0.5527,"South":0.5966233962},{"Year":2007,"All Rap Songs":0.5725624765,"Hot 100 Songs":0.5665236111,"East Coast":0.5860766578,"West Coast":0.5828600897,"Midwest":0.5532,"South":0.5629996424},{"Year":2008,"All Rap Songs":0.5655408701,"Hot 100 Songs":0.5254181818,"East Coast":0.5905953307,"West Coast":0.5796105556,"Midwest":0.5491957265,"South":0.5338547826},{"Year":2009,"All Rap Songs":0.5581308042,"Hot 100 Songs":0.5563150685,"East Coast":0.5693002227,"West Coast":0.5726843137,"Midwest":0.5666121951,"South":0.5523896355},{"Year":2010,"All Rap Songs":0.5437400581,"Hot 100 Songs":0.4946072289,"East Coast":0.5774598039,"West Coast":0.5224040678,"Midwest":0.4734175926,"South":0.5335356707},{"Year":2011,"All Rap Songs":0.5236398002,"Hot 100 Songs":0.45429875,"East Coast":0.5470498861,"West Coast":0.5127655647,"Midwest":0.5400329268,"South":0.5111816801},{"Year":2012,"All Rap Songs":0.5002002162,"Hot 100 Songs":0.5053846154,"East Coast":0.5112725664,"West Coast":0.5140255656,"Midwest":0.4989022727,"South":0.4886531959},{"Year":2013,"All Rap Songs":0.4851445282,"Hot 100 Songs":0.4765449275,"East Coast":0.5036433498,"West Coast":0.4790425397,"Midwest":0.4684396396,"South":0.4871834203},{"Year":2014,"All Rap Songs":0.4729473049,"Hot 100 Songs":0.4765,"East Coast":0.5030794922,"West Coast":0.5041480769,"Midwest":0.4412903382,"South":0.4579738628},{"Year":2015,"All Rap Songs":0.4594017886,"Hot 100 Songs":0.4238823529,"East Coast":0.4803390093,"West Coast":0.5185301299,"Midwest":0.4398933702,"South":0.4567363828},{"Year":2016,"All Rap Songs":0.4344104206,"Hot 100 Songs":0.3741368794,"East Coast":0.4826329939,"West Coast":0.4752028504,"Midwest":0.4341513158,"South":0.4186054054},{"Year":2017,"All Rap Songs":0.4375350306,"Hot 100 Songs":0.413278125,"East Coast":0.4839120455,"West Coast":0.4721321168,"Midwest":0.414654371,"South":0.4255759722},{"Year":2018,"All Rap Songs":0.4549825184,"Hot 100 Songs":0.4128626911,"East Coast":0.5059929985,"West Coast":0.4790170144,"Midwest":0.4350435622,"South":0.441842336},{"Year":2019,"All Rap Songs":0.4693678704,"Hot 100 Songs":0.4774289216,"East Coast":0.5364749553,"West Coast":0.4746474,"Midwest":0.4559629779,"South":0.4673123476}],
            tempo: [{"Year":1990,"All Rap Songs":113.4504285714,"Hot 100 Songs":143.001,"East Coast":108.0643728814,"West Coast":111.3929285714,"Midwest":null,"South":114.1415581395},{"Year":1991,"All Rap Songs":112.5828229167,"Hot 100 Songs":109.0075,"East Coast":110.595462963,"West Coast":114.0052941176,"Midwest":null,"South":115.4328},{"Year":1992,"All Rap Songs":111.9187464115,"Hot 100 Songs":104.909,"East Coast":106.320974026,"West Coast":109.846097561,"Midwest":100.0245384615,"South":109.4643333333},{"Year":1993,"All Rap Songs":112.5868146341,"Hot 100 Songs":116.393,"East Coast":110.6786708861,"West Coast":113.3775473684,"Midwest":null,"South":115.3063181818},{"Year":1994,"All Rap Songs":111.365130597,"Hot 100 Songs":102.0032142857,"East Coast":109.1010106383,"West Coast":112.4341081081,"Midwest":102.51,"South":111.7566506024},{"Year":1995,"All Rap Songs":109.3226963788,"Hot 100 Songs":94.016625,"East Coast":109.5605123967,"West Coast":105.3585808383,"Midwest":null,"South":113.0470405405},{"Year":1996,"All Rap Songs":107.0360386473,"Hot 100 Songs":107.43235,"East Coast":104.701662069,"West Coast":108.0665142857,"Midwest":97.5580833333,"South":113.8387383178},{"Year":1997,"All Rap Songs":106.5521735537,"Hot 100 Songs":101.88175,"East Coast":108.3624880952,"West Coast":98.1948791209,"Midwest":88.98125,"South":115.9704568966},{"Year":1998,"All Rap Songs":107.5941154381,"Hot 100 Songs":108.4896086957,"East Coast":102.0313333333,"West Coast":102.2621464968,"Midwest":85.322,"South":111.3533074434},{"Year":1999,"All Rap Songs":109.7084410012,"Hot 100 Songs":107.3559655172,"East Coast":106.2975654952,"West Coast":105.4470222222,"Midwest":108.41440625,"South":113.4610970874},{"Year":2000,"All Rap Songs":110.4408774929,"Hot 100 Songs":106.39888,"East Coast":107.3693882979,"West Coast":103.800136646,"Midwest":100.4455084746,"South":114.3799540636},{"Year":2001,"All Rap Songs":112.4777554585,"Hot 100 Songs":107.43675,"East Coast":108.0040466667,"West Coast":109.9636666667,"Midwest":null,"South":116.9185289017},{"Year":2002,"All Rap Songs":111.6870103687,"Hot 100 Songs":107.76775,"East Coast":109.6857222222,"West Coast":105.6145088757,"Midwest":110.274255814,"South":115.501539548},{"Year":2003,"All Rap Songs":110.965814,"Hot 100 Songs":120.9858055556,"East Coast":105.6949387755,"West Coast":103.4937674419,"Midwest":109.2438367347,"South":117.6250247253},{"Year":2004,"All Rap Songs":111.5123397651,"Hot 100 Songs":107.3288367347,"East Coast":106.5685650794,"West Coast":108.8269090909,"Midwest":114.2418235294,"South":116.8253436123},{"Year":2005,"All Rap Songs":111.1660365854,"Hot 100 Songs":112.8653428571,"East Coast":106.2701693548,"West Coast":104.4986923077,"Midwest":108.3278815789,"South":116.0708876611},{"Year":2006,"All Rap Songs":111.8254734104,"Hot 100 Songs":112.5956440678,"East Coast":108.0270316092,"West Coast":107.1845587189,"Midwest":108.7093866667,"South":116.7340289308},{"Year":2007,"All Rap Songs":115.1334540338,"Hot 100 Songs":111.5148611111,"East Coast":109.9135490716,"West Coast":109.0612735426,"Midwest":109.2750571429,"South":120.4302753278},{"Year":2008,"All Rap Songs":113.7439617666,"Hot 100 Songs":126.4195454545,"East Coast":106.5562801556,"West Coast":105.1343111111,"Midwest":115.5693076923,"South":119.0568765217},{"Year":2009,"All Rap Songs":116.3013854325,"Hot 100 Songs":118.3168082192,"East Coast":109.7295256125,"West Coast":110.5769568627,"Midwest":112.9447560976,"South":120.4073792711},{"Year":2010,"All Rap Songs":116.6046953093,"Hot 100 Songs":122.6633373494,"East Coast":114.1095441176,"West Coast":107.6877762712,"Midwest":112.0648055556,"South":120.34825},{"Year":2011,"All Rap Songs":116.7155063388,"Hot 100 Songs":126.708775,"East Coast":114.8660273349,"West Coast":111.737630854,"Midwest":119.8882439024,"South":121.3837819482},{"Year":2012,"All Rap Songs":116.782562249,"Hot 100 Songs":127.3344615385,"East Coast":114.1561526549,"West Coast":108.9482081448,"Midwest":120.2588693182,"South":119.9778405498},{"Year":2013,"All Rap Songs":118.8009720826,"Hot 100 Songs":118.7352608696,"East Coast":115.2146330049,"West Coast":110.8277809524,"Midwest":125.3806666667,"South":122.2226857971},{"Year":2014,"All Rap Songs":118.6765145803,"Hot 100 Songs":121.7630625,"East Coast":114.8732167969,"West Coast":110.0650801282,"Midwest":122.0688647343,"South":123.0027184116},{"Year":2015,"All Rap Songs":121.3703234167,"Hot 100 Songs":117.9970735294,"East Coast":115.9445232198,"West Coast":110.8769688312,"Midwest":125.6023646409,"South":126.517257273},{"Year":2016,"All Rap Songs":120.6102409639,"Hot 100 Songs":123.4608156028,"East Coast":117.5864032587,"West Coast":110.0518978622,"Midwest":122.0793026316,"South":124.6783067568},{"Year":2017,"All Rap Songs":123.078213438,"Hot 100 Songs":127.09546875,"East Coast":119.6061909091,"West Coast":114.3464452555,"Midwest":127.0306609808,"South":126.0359869014},{"Year":2018,"All Rap Songs":123.544764568,"Hot 100 Songs":126.0395535168,"East Coast":118.5036621005,"West Coast":114.3447046549,"Midwest":125.8943626609,"South":127.457449521},{"Year":2019,"All Rap Songs":120.6323882491,"Hot 100 Songs":124.4482352941,"East Coast":111.6508729875,"West Coast":111.415478,"Midwest":123.2988531187,"South":124.6657860772}],
            wpm: [{"Year":1990,"All Rap Songs":130.241870769,"Hot 100 Songs":139.6331980712,"East Coast":132.8351583802,"West Coast":162.1254948794,"Midwest":null,"South":131.5863620688},{"Year":1991,"All Rap Songs":143.1183352911,"Hot 100 Songs":141.1794145287,"East Coast":142.9367043878,"West Coast":152.5815794026,"Midwest":null,"South":109.5697906107},{"Year":1992,"All Rap Songs":150.8562900086,"Hot 100 Songs":165.954619046,"East Coast":157.9030306295,"West Coast":148.1554947502,"Midwest":168.8457095203,"South":143.9526640009},{"Year":1993,"All Rap Songs":150.2076749776,"Hot 100 Songs":146.6796064248,"East Coast":155.1072345282,"West Coast":147.9714979051,"Midwest":null,"South":156.9856516917},{"Year":1994,"All Rap Songs":142.6708280261,"Hot 100 Songs":144.0587793016,"East Coast":142.7052313763,"West Coast":161.5552130044,"Midwest":156.1340711846,"South":130.6911504139},{"Year":1995,"All Rap Songs":150.6292936958,"Hot 100 Songs":141.7466384418,"East Coast":158.8963794713,"West Coast":148.7004542779,"Midwest":null,"South":151.5584658511},{"Year":1996,"All Rap Songs":148.7010085416,"Hot 100 Songs":163.2290583097,"East Coast":152.0772293266,"West Coast":148.2030866588,"Midwest":139.714244742,"South":152.9826101571},{"Year":1997,"All Rap Songs":147.8848463997,"Hot 100 Songs":150.1755468494,"East Coast":153.4100878502,"West Coast":157.8700142917,"Midwest":130.8389603999,"South":146.5796017732},{"Year":1998,"All Rap Songs":147.4660878358,"Hot 100 Songs":148.0241452347,"East Coast":155.5397646226,"West Coast":152.2608641781,"Midwest":210.2005511462,"South":151.1273898197},{"Year":1999,"All Rap Songs":152.9754207276,"Hot 100 Songs":169.3428878548,"East Coast":154.0686572674,"West Coast":159.5191337848,"Midwest":186.1976882649,"South":148.6465984672},{"Year":2000,"All Rap Songs":153.4985234389,"Hot 100 Songs":203.1110774162,"East Coast":160.0911519791,"West Coast":143.601220711,"Midwest":166.5430828715,"South":158.1247806771},{"Year":2001,"All Rap Songs":146.9021705322,"Hot 100 Songs":156.4880806842,"East Coast":156.1166770223,"West Coast":148.6269237175,"Midwest":null,"South":142.6848603998},{"Year":2002,"All Rap Songs":141.0656369012,"Hot 100 Songs":154.3122182096,"East Coast":146.0486528178,"West Coast":147.4302502546,"Midwest":139.9409208816,"South":139.4398300828},{"Year":2003,"All Rap Songs":145.0368705021,"Hot 100 Songs":150.1201437072,"East Coast":146.6622928717,"West Coast":173.366744071,"Midwest":154.5900516503,"South":139.8560559634},{"Year":2004,"All Rap Songs":148.0726165003,"Hot 100 Songs":169.57068272,"East Coast":140.052413055,"West Coast":151.1253415881,"Midwest":176.2281415851,"South":154.9261857116},{"Year":2005,"All Rap Songs":146.8506687307,"Hot 100 Songs":149.0263285322,"East Coast":147.4630087083,"West Coast":155.5416123785,"Midwest":156.2438075584,"South":145.2430617095},{"Year":2006,"All Rap Songs":150.3693796649,"Hot 100 Songs":157.8618920098,"East Coast":156.1387082895,"West Coast":159.0591371631,"Midwest":149.0898599458,"South":149.706308935},{"Year":2007,"All Rap Songs":147.3302923737,"Hot 100 Songs":154.5879544049,"East Coast":148.5730674542,"West Coast":156.6737711474,"Midwest":156.6437897311,"South":151.7676692376},{"Year":2008,"All Rap Songs":144.4625442086,"Hot 100 Songs":140.8716532939,"East Coast":151.5149818953,"West Coast":158.271893817,"Midwest":127.1772040342,"South":149.9797374336},{"Year":2009,"All Rap Songs":147.4970479812,"Hot 100 Songs":145.4536157725,"East Coast":143.776918948,"West Coast":170.9460977979,"Midwest":153.8989297923,"South":147.4297105788},{"Year":2010,"All Rap Songs":143.5134418447,"Hot 100 Songs":144.71548118,"East Coast":160.0861311527,"West Coast":150.9230147318,"Midwest":149.3264352699,"South":145.0874848104},{"Year":2011,"All Rap Songs":143.0624678382,"Hot 100 Songs":137.7114163676,"East Coast":151.1881698579,"West Coast":156.4380982168,"Midwest":132.7643528081,"South":143.0769125317},{"Year":2012,"All Rap Songs":140.4720911718,"Hot 100 Songs":146.8289345277,"East Coast":142.3422937146,"West Coast":149.5336138202,"Midwest":129.8373849566,"South":144.5892279266},{"Year":2013,"All Rap Songs":138.7167017443,"Hot 100 Songs":148.350856494,"East Coast":154.5169523837,"West Coast":147.8863967992,"Midwest":133.9551366685,"South":140.7825587848},{"Year":2014,"All Rap Songs":135.873415675,"Hot 100 Songs":150.0698901901,"East Coast":137.3501510472,"West Coast":156.1464465796,"Midwest":131.9188369064,"South":144.1464853422},{"Year":2015,"All Rap Songs":139.4822171629,"Hot 100 Songs":145.9135765401,"East Coast":145.0675154642,"West Coast":145.232893698,"Midwest":131.5311826666,"South":142.0725880345},{"Year":2016,"All Rap Songs":143.8574163121,"Hot 100 Songs":137.6905058549,"East Coast":147.2479630098,"West Coast":153.7827519566,"Midwest":143.7053138006,"South":151.0840432779},{"Year":2017,"All Rap Songs":148.8985064045,"Hot 100 Songs":157.0868408066,"East Coast":157.3008938484,"West Coast":152.8569094166,"Midwest":151.4361141,"South":153.324181422},{"Year":2018,"All Rap Songs":155.7128890294,"Hot 100 Songs":166.085757729,"East Coast":164.5471488477,"West Coast":155.3066307817,"Midwest":157.8372061232,"South":164.3632894445},{"Year":2019,"All Rap Songs":159.4163937458,"Hot 100 Songs":171.4645882324,"East Coast":169.1686424696,"West Coast":170.5423067786,"Midwest":157.6698431256,"South":170.2464876074}],
            lexical: [{"Year":1990,"All Rap Songs":0.4383891068,"Hot 100 Songs":0.3615006401,"East Coast":0.4631379729,"West Coast":0.4189883284,"Midwest":null,"South":0.4032854449},{"Year":1991,"All Rap Songs":0.4442951476,"Hot 100 Songs":0.4140222863,"East Coast":0.4590650612,"West Coast":0.3987827167,"Midwest":null,"South":0.5152661266},{"Year":1992,"All Rap Songs":0.4315145758,"Hot 100 Songs":0.3846658298,"East Coast":0.4241312235,"West Coast":0.4323118473,"Midwest":0.4675466033,"South":0.4348625424},{"Year":1993,"All Rap Songs":0.4129207172,"Hot 100 Songs":0.3773550212,"East Coast":0.4043459847,"West Coast":0.4195360094,"Midwest":null,"South":0.3736572341},{"Year":1994,"All Rap Songs":0.4420754059,"Hot 100 Songs":0.3919890136,"East Coast":0.4869727601,"West Coast":0.4236183567,"Midwest":0.3937162202,"South":0.4254932827},{"Year":1995,"All Rap Songs":0.4441356839,"Hot 100 Songs":0.4122422815,"East Coast":0.4616659424,"West Coast":0.4324601616,"Midwest":null,"South":0.4353652407},{"Year":1996,"All Rap Songs":0.459913021,"Hot 100 Songs":0.409362922,"East Coast":0.4739940246,"West Coast":0.4425993985,"Midwest":0.4892940448,"South":0.4361164475},{"Year":1997,"All Rap Songs":0.4403313412,"Hot 100 Songs":0.3695094073,"East Coast":0.475121736,"West Coast":0.4265412131,"Midwest":0.4885450002,"South":0.4349831839},{"Year":1998,"All Rap Songs":0.4561156308,"Hot 100 Songs":0.3798963772,"East Coast":0.4750137283,"West Coast":0.4313039697,"Midwest":0.4106699752,"South":0.4389501179},{"Year":1999,"All Rap Songs":0.4420942264,"Hot 100 Songs":0.3491103999,"East Coast":0.4663448354,"West Coast":0.4350514632,"Midwest":0.4362903723,"South":0.4287956692},{"Year":2000,"All Rap Songs":0.4298504729,"Hot 100 Songs":0.3146428417,"East Coast":0.4514259236,"West Coast":0.4456546371,"Midwest":0.4136717732,"South":0.4162740979},{"Year":2001,"All Rap Songs":0.4379582213,"Hot 100 Songs":0.332523246,"East Coast":0.4559082075,"West Coast":0.4273671371,"Midwest":null,"South":0.4404961134},{"Year":2002,"All Rap Songs":0.4507938867,"Hot 100 Songs":0.3397288667,"East Coast":0.4622143988,"West Coast":0.4501611517,"Midwest":0.4203335429,"South":0.4483480083},{"Year":2003,"All Rap Songs":0.4424312383,"Hot 100 Songs":0.3753061293,"East Coast":0.4539914333,"West Coast":0.4199006226,"Midwest":0.4336591139,"South":0.4279385162},{"Year":2004,"All Rap Songs":0.4496448899,"Hot 100 Songs":0.3561615446,"East Coast":0.4723175304,"West Coast":0.4584990007,"Midwest":0.386837556,"South":0.422202405},{"Year":2005,"All Rap Songs":0.4311747938,"Hot 100 Songs":0.3300878113,"East Coast":0.4521468996,"West Coast":0.4400444352,"Midwest":0.4094774738,"South":0.4247526604},{"Year":2006,"All Rap Songs":0.4324057561,"Hot 100 Songs":0.3385138922,"East Coast":0.4485651801,"West Coast":0.4303362642,"Midwest":0.4369662466,"South":0.4193267103},{"Year":2007,"All Rap Songs":0.4231616315,"Hot 100 Songs":0.3234613371,"East Coast":0.4508400152,"West Coast":0.4078367495,"Midwest":0.4098080247,"South":0.4167646115},{"Year":2008,"All Rap Songs":0.4328012424,"Hot 100 Songs":0.3405737056,"East Coast":0.4725016469,"West Coast":0.4375163607,"Midwest":0.4723734866,"South":0.4120750568},{"Year":2009,"All Rap Songs":0.4253879743,"Hot 100 Songs":0.3305490154,"East Coast":0.4706938619,"West Coast":0.4474356204,"Midwest":0.408152968,"South":0.4233313686},{"Year":2010,"All Rap Songs":0.4346087739,"Hot 100 Songs":0.3182703948,"East Coast":0.4767993179,"West Coast":0.4360936725,"Midwest":0.4341632245,"South":0.4099897152},{"Year":2011,"All Rap Songs":0.4360297398,"Hot 100 Songs":0.3460391393,"East Coast":0.4754020395,"West Coast":0.4263563123,"Midwest":0.4705274788,"South":0.4274801548},{"Year":2012,"All Rap Songs":0.4284620359,"Hot 100 Songs":0.3237886531,"East Coast":0.447176283,"West Coast":0.4394215981,"Midwest":0.42889043,"South":0.4200305935},{"Year":2013,"All Rap Songs":0.4314303633,"Hot 100 Songs":0.3379117811,"East Coast":0.4676542496,"West Coast":0.4379832722,"Midwest":0.4065315211,"South":0.4183616266},{"Year":2014,"All Rap Songs":0.430835844,"Hot 100 Songs":0.3268456642,"East Coast":0.4745898688,"West Coast":0.4259677036,"Midwest":0.431330875,"South":0.4022030212},{"Year":2015,"All Rap Songs":0.4154759563,"Hot 100 Songs":0.3250444245,"East Coast":0.439853041,"West Coast":0.4114218944,"Midwest":0.3816982254,"South":0.4038451955},{"Year":2016,"All Rap Songs":0.387621649,"Hot 100 Songs":0.3263145916,"East Coast":0.428223439,"West Coast":0.3821023163,"Midwest":0.3655506909,"South":0.3698097234},{"Year":2017,"All Rap Songs":0.3832179294,"Hot 100 Songs":0.3539331775,"East Coast":0.4075410267,"West Coast":0.4160174556,"Midwest":0.3648711202,"South":0.3697545123},{"Year":2018,"All Rap Songs":0.3863209241,"Hot 100 Songs":0.3612446056,"East Coast":0.4243615783,"West Coast":0.4005706044,"Midwest":0.3685671651,"South":0.369413243},{"Year":2019,"All Rap Songs":0.3932949814,"Hot 100 Songs":0.3465148805,"East Coast":0.4428773755,"West Coast":0.3957137518,"Midwest":0.3797026083,"South":0.3738970365}],
            hot100: [{"Year":1990,"All Rap Songs":6,"East Coast":4,"West Coast":0,"Midwest":null,"South":6},{"Year":1991,"All Rap Songs":2,"East Coast":2,"West Coast":0,"Midwest":null,"South":0},{"Year":1992,"All Rap Songs":6,"East Coast":1,"West Coast":4,"Midwest":0.0,"South":0},{"Year":1993,"All Rap Songs":13,"East Coast":6,"West Coast":7,"Midwest":null,"South":1},{"Year":1994,"All Rap Songs":14,"East Coast":3,"West Coast":2,"Midwest":3.0,"South":3},{"Year":1995,"All Rap Songs":16,"East Coast":7,"West Coast":8,"Midwest":null,"South":3},{"Year":1996,"All Rap Songs":20,"East Coast":7,"West Coast":7,"Midwest":2.0,"South":5},{"Year":1997,"All Rap Songs":20,"East Coast":5,"West Coast":5,"Midwest":0.0,"South":5},{"Year":1998,"All Rap Songs":23,"East Coast":9,"West Coast":8,"Midwest":0.0,"South":7},{"Year":1999,"All Rap Songs":29,"East Coast":10,"West Coast":5,"Midwest":2.0,"South":7},{"Year":2000,"All Rap Songs":25,"East Coast":6,"West Coast":1,"Midwest":7.0,"South":10},{"Year":2001,"All Rap Songs":28,"East Coast":10,"West Coast":0,"Midwest":null,"South":12},{"Year":2002,"All Rap Songs":36,"East Coast":13,"West Coast":2,"Midwest":4.0,"South":13},{"Year":2003,"All Rap Songs":36,"East Coast":4,"West Coast":1,"Midwest":1.0,"South":24},{"Year":2004,"All Rap Songs":49,"East Coast":10,"West Coast":6,"Midwest":11.0,"South":27},{"Year":2005,"All Rap Songs":70,"East Coast":21,"West Coast":1,"Midwest":11.0,"South":22},{"Year":2006,"All Rap Songs":59,"East Coast":14,"West Coast":3,"Midwest":1.0,"South":39},{"Year":2007,"All Rap Songs":72,"East Coast":18,"West Coast":3,"Midwest":6.0,"South":33},{"Year":2008,"All Rap Songs":55,"East Coast":6,"West Coast":0,"Midwest":4.0,"South":28},{"Year":2009,"All Rap Songs":73,"East Coast":9,"West Coast":0,"Midwest":11.0,"South":27},{"Year":2010,"All Rap Songs":83,"East Coast":8,"West Coast":3,"Midwest":13.0,"South":28},{"Year":2011,"All Rap Songs":80,"East Coast":15,"West Coast":3,"Midwest":5.0,"South":29},{"Year":2012,"All Rap Songs":78,"East Coast":18,"West Coast":4,"Midwest":7.0,"South":38},{"Year":2013,"All Rap Songs":69,"East Coast":5,"West Coast":1,"Midwest":12.0,"South":26},{"Year":2014,"All Rap Songs":80,"East Coast":20,"West Coast":1,"Midwest":3.0,"South":40},{"Year":2015,"All Rap Songs":136,"East Coast":17,"West Coast":10,"Midwest":10.0,"South":57},{"Year":2016,"All Rap Songs":141,"East Coast":26,"West Coast":2,"Midwest":11.0,"South":47},{"Year":2017,"All Rap Songs":192,"East Coast":25,"West Coast":12,"Midwest":15.0,"South":92},{"Year":2018,"All Rap Songs":327,"East Coast":40,"West Coast":5,"Midwest":24.0,"South":134},{"Year":2019,"All Rap Songs":204,"East Coast":25,"West Coast":5,"Midwest":27.0,"South":83}],
            profanity: [{"Year":1990,"All Rap Songs":0.0788494206,"Hot 100 Songs":0.0019607843,"East Coast":0.0151171606,"West Coast":0.2312163723,"Midwest":null,"South":0.1187717675},{"Year":1991,"All Rap Songs":0.0951502516,"Hot 100 Songs":0.008,"East Coast":0.0345448688,"West Coast":0.2077723,"Midwest":null,"South":0.2084725308},{"Year":1992,"All Rap Songs":0.1624605582,"Hot 100 Songs":0.0818364556,"East Coast":0.0757259556,"West Coast":0.2268586554,"Midwest":0.1234194193,"South":0.2272208382},{"Year":1993,"All Rap Songs":0.1298823383,"Hot 100 Songs":0.0831579393,"East Coast":0.0741094001,"West Coast":0.1885599278,"Midwest":null,"South":0.0880778783},{"Year":1994,"All Rap Songs":0.133519428,"Hot 100 Songs":0.086949625,"East Coast":0.1052440021,"West Coast":0.2274503372,"Midwest":0.1374256783,"South":0.168745618},{"Year":1995,"All Rap Songs":0.1669511207,"Hot 100 Songs":0.0611479762,"East Coast":0.1072752103,"West Coast":0.1924654641,"Midwest":null,"South":0.2442321508},{"Year":1996,"All Rap Songs":0.1653645649,"Hot 100 Songs":0.1262856832,"East Coast":0.1412447825,"West Coast":0.1864168394,"Midwest":0.1269701914,"South":0.2119770058},{"Year":1997,"All Rap Songs":0.1459998454,"Hot 100 Songs":0.0477216735,"East Coast":0.1203065383,"West Coast":0.1885554224,"Midwest":0.1067060846,"South":0.1896803791},{"Year":1998,"All Rap Songs":0.1686625424,"Hot 100 Songs":0.1039848485,"East Coast":0.1356231287,"West Coast":0.2023337628,"Midwest":0.3173076923,"South":0.2059965953},{"Year":1999,"All Rap Songs":0.1911651872,"Hot 100 Songs":0.1303512652,"East Coast":0.1668536259,"West Coast":0.2299412501,"Midwest":0.1622901559,"South":0.2294410399},{"Year":2000,"All Rap Songs":0.1679695679,"Hot 100 Songs":0.1357715329,"East Coast":0.1529739677,"West Coast":0.1741436907,"Midwest":0.1877948321,"South":0.2208093633},{"Year":2001,"All Rap Songs":0.1784018053,"Hot 100 Songs":0.1194183907,"East Coast":0.1761536673,"West Coast":0.1986329424,"Midwest":null,"South":0.2134557101},{"Year":2002,"All Rap Songs":0.1260500417,"Hot 100 Songs":0.0670342775,"East Coast":0.1042002847,"West Coast":0.1666231666,"Midwest":0.1399575433,"South":0.1601870589},{"Year":2003,"All Rap Songs":0.1409336724,"Hot 100 Songs":0.0790791944,"East Coast":0.1383832136,"West Coast":0.1905565119,"Midwest":0.1668019587,"South":0.1670849626},{"Year":2004,"All Rap Songs":0.1356143193,"Hot 100 Songs":0.0888312392,"East Coast":0.1063893503,"West Coast":0.1615021676,"Midwest":0.1171735003,"South":0.1557227372},{"Year":2005,"All Rap Songs":0.1276660378,"Hot 100 Songs":0.0795697623,"East Coast":0.1219886323,"West Coast":0.158177211,"Midwest":0.1321285499,"South":0.1651402779},{"Year":2006,"All Rap Songs":0.1384929584,"Hot 100 Songs":0.0997562165,"East Coast":0.1341673459,"West Coast":0.1994588089,"Midwest":0.1237782872,"South":0.1635854355},{"Year":2007,"All Rap Songs":0.1399072924,"Hot 100 Songs":0.083340517,"East Coast":0.1322335071,"West Coast":0.1933524293,"Midwest":0.1245503913,"South":0.1711935279},{"Year":2008,"All Rap Songs":0.1162827248,"Hot 100 Songs":0.0565576743,"East Coast":0.0922025138,"West Coast":0.1677056952,"Midwest":0.1392034749,"South":0.1389176491},{"Year":2009,"All Rap Songs":0.1224653893,"Hot 100 Songs":0.0651318014,"East Coast":0.1321739615,"West Coast":0.1798079703,"Midwest":0.1197137216,"South":0.1395868875},{"Year":2010,"All Rap Songs":0.1455425646,"Hot 100 Songs":0.0912065647,"East Coast":0.1234654629,"West Coast":0.1827237712,"Midwest":0.1342284473,"South":0.169445682},{"Year":2011,"All Rap Songs":0.1504627532,"Hot 100 Songs":0.1251817709,"East Coast":0.1305037821,"West Coast":0.1863980706,"Midwest":0.1472204093,"South":0.177457296},{"Year":2012,"All Rap Songs":0.181454603,"Hot 100 Songs":0.1485712003,"East Coast":0.1512910686,"West Coast":0.1958654591,"Midwest":0.2081530059,"South":0.2017153235},{"Year":2013,"All Rap Songs":0.1811316148,"Hot 100 Songs":0.152625087,"East Coast":0.1585730476,"West Coast":0.2178026272,"Midwest":0.2381132266,"South":0.218648846},{"Year":2014,"All Rap Songs":0.1798780634,"Hot 100 Songs":0.1652329767,"East Coast":0.1470952473,"West Coast":0.2351424695,"Midwest":0.2180790828,"South":0.2291476991},{"Year":2015,"All Rap Songs":0.185488635,"Hot 100 Songs":0.1400468188,"East Coast":0.1617561033,"West Coast":0.2033406899,"Midwest":0.2211818971,"South":0.2213456909},{"Year":2016,"All Rap Songs":0.1722925449,"Hot 100 Songs":0.1213626643,"East Coast":0.1500057039,"West Coast":0.2099763719,"Midwest":0.1815149871,"South":0.2193295711},{"Year":2017,"All Rap Songs":0.1736213891,"Hot 100 Songs":0.1547696297,"East Coast":0.1627246047,"West Coast":0.1956165353,"Midwest":0.2335344702,"South":0.2076957046},{"Year":2018,"All Rap Songs":0.1872392393,"Hot 100 Songs":0.1693591318,"East Coast":0.1421936935,"West Coast":0.19916981,"Midwest":0.2092475764,"South":0.2139301012},{"Year":2019,"All Rap Songs":0.1715317944,"Hot 100 Songs":0.1646629299,"East Coast":0.1391183161,"West Coast":0.2117871146,"Midwest":0.1957370852,"South":0.2093086495}],
            money: [{"Year":1990,"All Rap Songs":0.5142857143,"Hot 100 Songs":0.1666666667,"East Coast":0.4745762712,"West Coast":0.6785714286,"Midwest":null,"South":0.5813953488},{"Year":1991,"All Rap Songs":0.5885416667,"Hot 100 Songs":1.0,"East Coast":0.6481481481,"West Coast":0.4901960784,"Midwest":null,"South":0.4666666667},{"Year":1992,"All Rap Songs":0.5980861244,"Hot 100 Songs":0.6666666667,"East Coast":0.5584415584,"West Coast":0.6463414634,"Midwest":0.3846153846,"South":0.5555555556},{"Year":1993,"All Rap Songs":0.5756097561,"Hot 100 Songs":0.6153846154,"East Coast":0.582278481,"West Coast":0.6421052632,"Midwest":null,"South":0.6363636364},{"Year":1994,"All Rap Songs":0.6156716418,"Hot 100 Songs":0.5,"East Coast":0.6063829787,"West Coast":0.6756756757,"Midwest":0.5,"South":0.5421686747},{"Year":1995,"All Rap Songs":0.651810585,"Hot 100 Songs":0.5625,"East Coast":0.694214876,"West Coast":0.6526946108,"Midwest":null,"South":0.6756756757},{"Year":1996,"All Rap Songs":0.690821256,"Hot 100 Songs":0.9,"East Coast":0.675862069,"West Coast":0.7214285714,"Midwest":0.75,"South":0.738317757},{"Year":1997,"All Rap Songs":0.6418732782,"Hot 100 Songs":0.55,"East Coast":0.6785714286,"West Coast":0.7912087912,"Midwest":0.5,"South":0.6206896552},{"Year":1998,"All Rap Songs":0.7343532684,"Hot 100 Songs":0.7391304348,"East Coast":0.7028985507,"West Coast":0.7898089172,"Midwest":1.0,"South":0.7669902913},{"Year":1999,"All Rap Songs":0.7401668653,"Hot 100 Songs":0.6551724138,"East Coast":0.7252396166,"West Coast":0.8055555556,"Midwest":0.71875,"South":0.7928802589},{"Year":2000,"All Rap Songs":0.6595441595,"Hot 100 Songs":0.56,"East Coast":0.7287234043,"West Coast":0.6956521739,"Midwest":0.6949152542,"South":0.6925795053},{"Year":2001,"All Rap Songs":0.7030567686,"Hot 100 Songs":0.6071428571,"East Coast":0.7,"West Coast":0.768115942,"Midwest":null,"South":0.7369942197},{"Year":2002,"All Rap Songs":0.6463133641,"Hot 100 Songs":0.4722222222,"East Coast":0.6538461538,"West Coast":0.7928994083,"Midwest":0.488372093,"South":0.7316384181},{"Year":2003,"All Rap Songs":0.636,"Hot 100 Songs":0.6944444444,"East Coast":0.6816326531,"West Coast":0.7751937984,"Midwest":0.6734693878,"South":0.7115384615},{"Year":2004,"All Rap Songs":0.6434563758,"Hot 100 Songs":0.6326530612,"East Coast":0.6285714286,"West Coast":0.6318181818,"Midwest":0.6911764706,"South":0.7004405286},{"Year":2005,"All Rap Songs":0.6158536585,"Hot 100 Songs":0.5571428571,"East Coast":0.6747311828,"West Coast":0.6648351648,"Midwest":0.5526315789,"South":0.6758747698},{"Year":2006,"All Rap Songs":0.676300578,"Hot 100 Songs":0.5593220339,"East Coast":0.7528735632,"West Coast":0.7508896797,"Midwest":0.64,"South":0.7106918239},{"Year":2007,"All Rap Songs":0.6923076923,"Hot 100 Songs":0.6111111111,"East Coast":0.6949602122,"West Coast":0.7219730942,"Midwest":0.6571428571,"South":0.7842669845},{"Year":2008,"All Rap Songs":0.6407382993,"Hot 100 Songs":0.4727272727,"East Coast":0.6809338521,"West Coast":0.6722222222,"Midwest":0.5726495726,"South":0.7339130435},{"Year":2009,"All Rap Songs":0.6322711179,"Hot 100 Songs":0.5342465753,"East Coast":0.6792873051,"West Coast":0.6941176471,"Midwest":0.4512195122,"South":0.7186788155},{"Year":2010,"All Rap Songs":0.6317974263,"Hot 100 Songs":0.5301204819,"East Coast":0.7254901961,"West Coast":0.7694915254,"Midwest":0.4351851852,"South":0.7022357724},{"Year":2011,"All Rap Songs":0.6772954284,"Hot 100 Songs":0.5375,"East Coast":0.7425968109,"West Coast":0.7355371901,"Midwest":0.6463414634,"South":0.7587131367},{"Year":2012,"All Rap Songs":0.6685202348,"Hot 100 Songs":0.5384615385,"East Coast":0.7300884956,"West Coast":0.7511312217,"Midwest":0.6534090909,"South":0.7484536082},{"Year":2013,"All Rap Songs":0.6895589056,"Hot 100 Songs":0.6086956522,"East Coast":0.7807881773,"West Coast":0.8063492063,"Midwest":0.6981981982,"South":0.7820289855},{"Year":2014,"All Rap Songs":0.6597938144,"Hot 100 Songs":0.6125,"East Coast":0.681640625,"West Coast":0.7884615385,"Midwest":0.7439613527,"South":0.7523465704},{"Year":2015,"All Rap Songs":0.7052381822,"Hot 100 Songs":0.6544117647,"East Coast":0.7631578947,"West Coast":0.7792207792,"Midwest":0.6961325967,"South":0.797406239},{"Year":2016,"All Rap Songs":0.6550412175,"Hot 100 Songs":0.5886524823,"East Coast":0.6639511202,"West Coast":0.7125890736,"Midwest":0.6473684211,"South":0.754954955},{"Year":2017,"All Rap Songs":0.6644333844,"Hot 100 Songs":0.6510416667,"East Coast":0.7363636364,"West Coast":0.6447688564,"Midwest":0.7270788913,"South":0.7544003275},{"Year":2018,"All Rap Songs":0.6723040857,"Hot 100 Songs":0.6911314985,"East Coast":0.701674277,"West Coast":0.6773675762,"Midwest":0.7489270386,"South":0.7505526898},{"Year":2019,"All Rap Songs":0.6351747023,"Hot 100 Songs":0.5980392157,"East Coast":0.6887298748,"West Coast":0.746,"Midwest":0.5955734406,"South":0.7367886179}],
            brands: [{"Year":1990,"All Rap Songs":0.0214285714,"Hot 100 Songs":0.1666666667,"East Coast":0.0338983051,"West Coast":0.0,"Midwest":null,"South":0.0465116279},{"Year":1991,"All Rap Songs":0.03125,"Hot 100 Songs":0.0,"East Coast":0.0555555556,"West Coast":0.0,"Midwest":null,"South":0.0},{"Year":1992,"All Rap Songs":0.023923445,"Hot 100 Songs":0.0,"East Coast":0.025974026,"West Coast":0.012195122,"Midwest":0.0769230769,"South":0.0},{"Year":1993,"All Rap Songs":0.0243902439,"Hot 100 Songs":0.0,"East Coast":0.0506329114,"West Coast":0.0,"Midwest":null,"South":0.0},{"Year":1994,"All Rap Songs":0.0335820896,"Hot 100 Songs":0.0,"East Coast":0.0319148936,"West Coast":0.0540540541,"Midwest":0.0909090909,"South":0.0240963855},{"Year":1995,"All Rap Songs":0.0473537604,"Hot 100 Songs":0.0625,"East Coast":0.0743801653,"West Coast":0.0299401198,"Midwest":null,"South":0.0810810811},{"Year":1996,"All Rap Songs":0.0942028986,"Hot 100 Songs":0.05,"East Coast":0.0896551724,"West Coast":0.0785714286,"Midwest":0.0833333333,"South":0.1028037383},{"Year":1997,"All Rap Songs":0.085399449,"Hot 100 Songs":0.2,"East Coast":0.1071428571,"West Coast":0.0769230769,"Midwest":0.125,"South":0.0775862069},{"Year":1998,"All Rap Songs":0.066759388,"Hot 100 Songs":0.0869565217,"East Coast":0.0579710145,"West Coast":0.0636942675,"Midwest":0.0,"South":0.0647249191},{"Year":1999,"All Rap Songs":0.0727056019,"Hot 100 Songs":0.2068965517,"East Coast":0.0926517572,"West Coast":0.0666666667,"Midwest":0.0,"South":0.0809061489},{"Year":2000,"All Rap Songs":0.0683760684,"Hot 100 Songs":0.12,"East Coast":0.0904255319,"West Coast":0.0372670807,"Midwest":0.0169491525,"South":0.1060070671},{"Year":2001,"All Rap Songs":0.0807860262,"Hot 100 Songs":0.0357142857,"East Coast":0.1033333333,"West Coast":0.0483091787,"Midwest":null,"South":0.0809248555},{"Year":2002,"All Rap Songs":0.0783410138,"Hot 100 Songs":0.1944444444,"East Coast":0.0555555556,"West Coast":0.0414201183,"Midwest":0.0,"South":0.1271186441},{"Year":2003,"All Rap Songs":0.062,"Hot 100 Songs":0.1944444444,"East Coast":0.0734693878,"West Coast":0.0852713178,"Midwest":0.0408163265,"South":0.0741758242},{"Year":2004,"All Rap Songs":0.0755033557,"Hot 100 Songs":0.0612244898,"East Coast":0.0888888889,"West Coast":0.0727272727,"Midwest":0.1323529412,"South":0.0991189427},{"Year":2005,"All Rap Songs":0.0569105691,"Hot 100 Songs":0.0857142857,"East Coast":0.0537634409,"West Coast":0.032967033,"Midwest":0.0526315789,"South":0.0847145488},{"Year":2006,"All Rap Songs":0.061849711,"Hot 100 Songs":0.0677966102,"East Coast":0.0574712644,"West Coast":0.0640569395,"Midwest":0.0266666667,"South":0.0968553459},{"Year":2007,"All Rap Songs":0.0794246404,"Hot 100 Songs":0.1111111111,"East Coast":0.0557029178,"West Coast":0.0582959641,"Midwest":0.1285714286,"South":0.1144219309},{"Year":2008,"All Rap Songs":0.0764667106,"Hot 100 Songs":0.1090909091,"East Coast":0.1011673152,"West Coast":0.0444444444,"Midwest":0.0341880342,"South":0.1026086957},{"Year":2009,"All Rap Songs":0.1011633789,"Hot 100 Songs":0.1369863014,"East Coast":0.0890868597,"West Coast":0.0588235294,"Midwest":0.0609756098,"South":0.1640091116},{"Year":2010,"All Rap Songs":0.104607721,"Hot 100 Songs":0.1445783133,"East Coast":0.1102941176,"West Coast":0.0610169492,"Midwest":0.0833333333,"South":0.1422764228},{"Year":2011,"All Rap Songs":0.0898962735,"Hot 100 Songs":0.0875,"East Coast":0.1230068337,"West Coast":0.0771349862,"Midwest":0.0731707317,"South":0.1340482574},{"Year":2012,"All Rap Songs":0.0957676861,"Hot 100 Songs":0.141025641,"East Coast":0.1305309735,"West Coast":0.0656108597,"Midwest":0.1136363636,"South":0.1422680412},{"Year":2013,"All Rap Songs":0.1139028476,"Hot 100 Songs":0.1304347826,"East Coast":0.1083743842,"West Coast":0.1111111111,"Midwest":0.0810810811,"South":0.1536231884},{"Year":2014,"All Rap Songs":0.1175257732,"Hot 100 Songs":0.175,"East Coast":0.11328125,"West Coast":0.0993589744,"Midwest":0.1207729469,"South":0.1711191336},{"Year":2015,"All Rap Songs":0.2299689724,"Hot 100 Songs":0.1323529412,"East Coast":0.1346749226,"West Coast":0.1090909091,"Midwest":0.1215469613,"South":0.3718892394},{"Year":2016,"All Rap Songs":0.157683365,"Hot 100 Songs":0.1489361702,"East Coast":0.1486761711,"West Coast":0.1187648456,"Midwest":0.1473684211,"South":0.2382882883},{"Year":2017,"All Rap Songs":0.1634762634,"Hot 100 Songs":0.25,"East Coast":0.2045454545,"West Coast":0.1240875912,"Midwest":0.1918976546,"South":0.2210397053},{"Year":2018,"All Rap Songs":0.1922304086,"Hot 100 Songs":0.2905198777,"East Coast":0.1552511416,"West Coast":0.1605136437,"Midwest":0.2253218884,"South":0.2439204127},{"Year":2019,"All Rap Songs":0.1696271716,"Hot 100 Songs":0.2156862745,"East Coast":0.1466905188,"West Coast":0.186,"Midwest":0.1670020121,"South":0.2205284553}],
            cars: [{"Year":1990,"All Rap Songs":0.2571428571,"Hot 100 Songs":0.1666666667,"East Coast":0.2203389831,"West Coast":0.5,"Midwest":null,"South":0.4418604651},{"Year":1991,"All Rap Songs":0.2239583333,"Hot 100 Songs":0.0,"East Coast":0.2314814815,"West Coast":0.137254902,"Midwest":null,"South":0.3333333333},{"Year":1992,"All Rap Songs":0.3301435407,"Hot 100 Songs":0.3333333333,"East Coast":0.2987012987,"West Coast":0.3292682927,"Midwest":0.2307692308,"South":0.3888888889},{"Year":1993,"All Rap Songs":0.3170731707,"Hot 100 Songs":0.1538461538,"East Coast":0.2911392405,"West Coast":0.4,"Midwest":null,"South":0.5909090909},{"Year":1994,"All Rap Songs":0.2985074627,"Hot 100 Songs":0.3571428571,"East Coast":0.2872340426,"West Coast":0.2432432432,"Midwest":0.1818181818,"South":0.3253012048},{"Year":1995,"All Rap Songs":0.2896935933,"Hot 100 Songs":0.1875,"East Coast":0.2975206612,"West Coast":0.3413173653,"Midwest":null,"South":0.2162162162},{"Year":1996,"All Rap Songs":0.3212560386,"Hot 100 Songs":0.35,"East Coast":0.3034482759,"West Coast":0.3285714286,"Midwest":0.25,"South":0.4672897196},{"Year":1997,"All Rap Songs":0.305785124,"Hot 100 Songs":0.2,"East Coast":0.3452380952,"West Coast":0.3296703297,"Midwest":0.4375,"South":0.2672413793},{"Year":1998,"All Rap Songs":0.3226703755,"Hot 100 Songs":0.1739130435,"East Coast":0.3188405797,"West Coast":0.2802547771,"Midwest":0.0,"South":0.359223301},{"Year":1999,"All Rap Songs":0.3921334923,"Hot 100 Songs":0.5517241379,"East Coast":0.3961661342,"West Coast":0.4555555556,"Midwest":0.28125,"South":0.4401294498},{"Year":2000,"All Rap Songs":0.3760683761,"Hot 100 Songs":0.28,"East Coast":0.4042553191,"West Coast":0.3416149068,"Midwest":0.2203389831,"South":0.4770318021},{"Year":2001,"All Rap Songs":0.4028384279,"Hot 100 Songs":0.4285714286,"East Coast":0.3966666667,"West Coast":0.3913043478,"Midwest":null,"South":0.4739884393},{"Year":2002,"All Rap Songs":0.3617511521,"Hot 100 Songs":0.3055555556,"East Coast":0.3418803419,"West Coast":0.4201183432,"Midwest":0.2325581395,"South":0.4209039548},{"Year":2003,"All Rap Songs":0.322,"Hot 100 Songs":0.4444444444,"East Coast":0.3306122449,"West Coast":0.4651162791,"Midwest":0.306122449,"South":0.3406593407},{"Year":2004,"All Rap Songs":0.3481543624,"Hot 100 Songs":0.3265306122,"East Coast":0.326984127,"West Coast":0.3272727273,"Midwest":0.4264705882,"South":0.4074889868},{"Year":2005,"All Rap Songs":0.3184281843,"Hot 100 Songs":0.3857142857,"East Coast":0.3252688172,"West Coast":0.3461538462,"Midwest":0.4210526316,"South":0.3756906077},{"Year":2006,"All Rap Songs":0.3612716763,"Hot 100 Songs":0.3389830508,"East Coast":0.3850574713,"West Coast":0.4483985765,"Midwest":0.44,"South":0.4201257862},{"Year":2007,"All Rap Songs":0.3858661664,"Hot 100 Songs":0.4861111111,"East Coast":0.374005305,"West Coast":0.4125560538,"Midwest":0.4285714286,"South":0.4338498212},{"Year":2008,"All Rap Songs":0.3256427159,"Hot 100 Songs":0.4,"East Coast":0.326848249,"West Coast":0.4222222222,"Midwest":0.2222222222,"South":0.387826087},{"Year":2009,"All Rap Songs":0.3591299949,"Hot 100 Songs":0.3287671233,"East Coast":0.3853006682,"West Coast":0.4156862745,"Midwest":0.2804878049,"South":0.444191344},{"Year":2010,"All Rap Songs":0.3457866335,"Hot 100 Songs":0.2409638554,"East Coast":0.4240196078,"West Coast":0.3762711864,"Midwest":0.2685185185,"South":0.3902439024},{"Year":2011,"All Rap Songs":0.3545908567,"Hot 100 Songs":0.2625,"East Coast":0.3917995444,"West Coast":0.4022038567,"Midwest":0.3536585366,"South":0.4343163539},{"Year":2012,"All Rap Songs":0.3209762125,"Hot 100 Songs":0.3846153846,"East Coast":0.3960176991,"West Coast":0.3597285068,"Midwest":0.3011363636,"South":0.4006872852},{"Year":2013,"All Rap Songs":0.3640424344,"Hot 100 Songs":0.4347826087,"East Coast":0.4113300493,"West Coast":0.4253968254,"Midwest":0.3063063063,"South":0.4284057971},{"Year":2014,"All Rap Songs":0.3449189985,"Hot 100 Songs":0.3125,"East Coast":0.37109375,"West Coast":0.4070512821,"Midwest":0.3285024155,"South":0.4577617329},{"Year":2015,"All Rap Songs":0.4018981566,"Hot 100 Songs":0.3529411765,"East Coast":0.4086687307,"West Coast":0.3766233766,"Midwest":0.361878453,"South":0.5012267788},{"Year":2016,"All Rap Songs":0.3384062566,"Hot 100 Songs":0.3546099291,"East Coast":0.3625254582,"West Coast":0.406175772,"Midwest":0.2947368421,"South":0.4364864865},{"Year":2017,"All Rap Songs":0.3631316998,"Hot 100 Songs":0.4635416667,"East Coast":0.4272727273,"West Coast":0.296836983,"Midwest":0.407249467,"South":0.4424887433},{"Year":2018,"All Rap Songs":0.3729068989,"Hot 100 Songs":0.4709480122,"East Coast":0.4231354642,"West Coast":0.3338683788,"Midwest":0.4055793991,"South":0.4712601326},{"Year":2019,"All Rap Songs":0.3531134101,"Hot 100 Songs":0.4705882353,"East Coast":0.427549195,"West Coast":0.39,"Midwest":0.3501006036,"South":0.4552845528}],
            cops: [{"Year":1990,"All Rap Songs":0.1928571429,"Hot 100 Songs":0.3333333333,"East Coast":0.2033898305,"West Coast":0.3928571429,"Midwest":null,"South":0.1627906977},{"Year":1991,"All Rap Songs":0.203125,"Hot 100 Songs":0.0,"East Coast":0.1018518519,"West Coast":0.3921568627,"Midwest":null,"South":0.3333333333},{"Year":1992,"All Rap Songs":0.2583732057,"Hot 100 Songs":0.5,"East Coast":0.1298701299,"West Coast":0.3780487805,"Midwest":0.1538461538,"South":0.2777777778},{"Year":1993,"All Rap Songs":0.312195122,"Hot 100 Songs":0.2307692308,"East Coast":0.2025316456,"West Coast":0.4526315789,"Midwest":null,"South":0.3181818182},{"Year":1994,"All Rap Songs":0.2201492537,"Hot 100 Songs":0.0714285714,"East Coast":0.2340425532,"West Coast":0.2162162162,"Midwest":0.0909090909,"South":0.2771084337},{"Year":1995,"All Rap Songs":0.2841225627,"Hot 100 Songs":0.125,"East Coast":0.2561983471,"West Coast":0.3113772455,"Midwest":null,"South":0.2702702703},{"Year":1996,"All Rap Songs":0.2777777778,"Hot 100 Songs":0.3,"East Coast":0.2551724138,"West Coast":0.2714285714,"Midwest":0.25,"South":0.2897196262},{"Year":1997,"All Rap Songs":0.261707989,"Hot 100 Songs":0.3,"East Coast":0.2976190476,"West Coast":0.3846153846,"Midwest":0.25,"South":0.2586206897},{"Year":1998,"All Rap Songs":0.2934631433,"Hot 100 Songs":0.2173913043,"East Coast":0.2971014493,"West Coast":0.3375796178,"Midwest":0.0,"South":0.2653721683},{"Year":1999,"All Rap Songs":0.326579261,"Hot 100 Songs":0.3793103448,"East Coast":0.3514376997,"West Coast":0.4,"Midwest":0.34375,"South":0.3430420712},{"Year":2000,"All Rap Songs":0.3091168091,"Hot 100 Songs":0.24,"East Coast":0.3882978723,"West Coast":0.2732919255,"Midwest":0.4237288136,"South":0.2862190813},{"Year":2001,"All Rap Songs":0.2783842795,"Hot 100 Songs":0.1785714286,"East Coast":0.3266666667,"West Coast":0.270531401,"Midwest":null,"South":0.274566474},{"Year":2002,"All Rap Songs":0.2373271889,"Hot 100 Songs":0.1944444444,"East Coast":0.2777777778,"West Coast":0.2603550296,"Midwest":0.2325581395,"South":0.2372881356},{"Year":2003,"All Rap Songs":0.314,"Hot 100 Songs":0.1944444444,"East Coast":0.3673469388,"West Coast":0.4263565891,"Midwest":0.2653061224,"South":0.3131868132},{"Year":2004,"All Rap Songs":0.2818791946,"Hot 100 Songs":0.2244897959,"East Coast":0.2888888889,"West Coast":0.3409090909,"Midwest":0.2941176471,"South":0.2378854626},{"Year":2005,"All Rap Songs":0.2574525745,"Hot 100 Songs":0.1285714286,"East Coast":0.3064516129,"West Coast":0.3461538462,"Midwest":0.2894736842,"South":0.2596685083},{"Year":2006,"All Rap Songs":0.287283237,"Hot 100 Songs":0.1016949153,"East Coast":0.3764367816,"West Coast":0.3024911032,"Midwest":0.3866666667,"South":0.279245283},{"Year":2007,"All Rap Songs":0.2388993121,"Hot 100 Songs":0.1111111111,"East Coast":0.2546419098,"West Coast":0.2376681614,"Midwest":0.2142857143,"South":0.2586412396},{"Year":2008,"All Rap Songs":0.232036915,"Hot 100 Songs":0.2545454545,"East Coast":0.3463035019,"West Coast":0.2666666667,"Midwest":0.3162393162,"South":0.2226086957},{"Year":2009,"All Rap Songs":0.2089023773,"Hot 100 Songs":0.1369863014,"East Coast":0.2694877506,"West Coast":0.2941176471,"Midwest":0.1829268293,"South":0.2141230068},{"Year":2010,"All Rap Songs":0.2146118721,"Hot 100 Songs":0.0722891566,"East Coast":0.3039215686,"West Coast":0.2983050847,"Midwest":0.1759259259,"South":0.1930894309},{"Year":2011,"All Rap Songs":0.2143680369,"Hot 100 Songs":0.1,"East Coast":0.2756264237,"West Coast":0.2699724518,"Midwest":0.2195121951,"South":0.2162645219},{"Year":2012,"All Rap Songs":0.1887550201,"Hot 100 Songs":0.0641025641,"East Coast":0.2588495575,"West Coast":0.2058823529,"Midwest":0.1931818182,"South":0.2020618557},{"Year":2013,"All Rap Songs":0.2199888331,"Hot 100 Songs":0.1449275362,"East Coast":0.2660098522,"West Coast":0.2825396825,"Midwest":0.2342342342,"South":0.2371014493},{"Year":2014,"All Rap Songs":0.2273932253,"Hot 100 Songs":0.175,"East Coast":0.3203125,"West Coast":0.3012820513,"Midwest":0.2270531401,"South":0.2534296029},{"Year":2015,"All Rap Songs":0.2224858551,"Hot 100 Songs":0.125,"East Coast":0.2832817337,"West Coast":0.2207792208,"Midwest":0.2624309392,"South":0.247108307},{"Year":2016,"All Rap Songs":0.2041851617,"Hot 100 Songs":0.1418439716,"East Coast":0.2586558045,"West Coast":0.2114014252,"Midwest":0.2473684211,"South":0.2342342342},{"Year":2017,"All Rap Songs":0.2055895865,"Hot 100 Songs":0.1875,"East Coast":0.3113636364,"West Coast":0.2165450122,"Midwest":0.2985074627,"South":0.2443716742},{"Year":2018,"All Rap Songs":0.2021098459,"Hot 100 Songs":0.2018348624,"East Coast":0.2922374429,"West Coast":0.2150882825,"Midwest":0.2575107296,"South":0.2347089167},{"Year":2019,"All Rap Songs":0.1891469842,"Hot 100 Songs":0.181372549,"East Coast":0.3059033989,"West Coast":0.244,"Midwest":0.1830985915,"South":0.2286585366}],
            drugs: [{"Year":1990,"All Rap Songs":0.4142857143,"Hot 100 Songs":0.5,"East Coast":0.3728813559,"West Coast":0.6785714286,"Midwest":null,"South":0.3953488372},{"Year":1991,"All Rap Songs":0.46875,"Hot 100 Songs":0.5,"East Coast":0.4259259259,"West Coast":0.431372549,"Midwest":null,"South":0.5333333333},{"Year":1992,"All Rap Songs":0.5071770335,"Hot 100 Songs":0.5,"East Coast":0.4155844156,"West Coast":0.6219512195,"Midwest":0.6153846154,"South":0.5833333333},{"Year":1993,"All Rap Songs":0.4829268293,"Hot 100 Songs":0.5384615385,"East Coast":0.3670886076,"West Coast":0.5473684211,"Midwest":null,"South":0.5454545455},{"Year":1994,"All Rap Songs":0.5111940299,"Hot 100 Songs":0.5714285714,"East Coast":0.4255319149,"West Coast":0.5945945946,"Midwest":0.4545454545,"South":0.6144578313},{"Year":1995,"All Rap Songs":0.5125348189,"Hot 100 Songs":0.3125,"East Coast":0.4132231405,"West Coast":0.6047904192,"Midwest":null,"South":0.6081081081},{"Year":1996,"All Rap Songs":0.5314009662,"Hot 100 Songs":0.6,"East Coast":0.4965517241,"West Coast":0.5571428571,"Midwest":0.6666666667,"South":0.6542056075},{"Year":1997,"All Rap Songs":0.4958677686,"Hot 100 Songs":0.2,"East Coast":0.4761904762,"West Coast":0.6153846154,"Midwest":0.5625,"South":0.4482758621},{"Year":1998,"All Rap Songs":0.5702364395,"Hot 100 Songs":0.5217391304,"East Coast":0.5144927536,"West Coast":0.6624203822,"Midwest":1.0,"South":0.6116504854},{"Year":1999,"All Rap Songs":0.5566150179,"Hot 100 Songs":0.4827586207,"East Coast":0.5111821086,"West Coast":0.7333333333,"Midwest":0.78125,"South":0.5987055016},{"Year":2000,"All Rap Songs":0.5413105413,"Hot 100 Songs":0.52,"East Coast":0.4893617021,"West Coast":0.5776397516,"Midwest":0.7288135593,"South":0.5724381625},{"Year":2001,"All Rap Songs":0.538209607,"Hot 100 Songs":0.5357142857,"East Coast":0.5066666667,"West Coast":0.6328502415,"Midwest":null,"South":0.5953757225},{"Year":2002,"All Rap Songs":0.4965437788,"Hot 100 Songs":0.3888888889,"East Coast":0.4743589744,"West Coast":0.6213017751,"Midwest":0.4186046512,"South":0.5847457627},{"Year":2003,"All Rap Songs":0.523,"Hot 100 Songs":0.4722222222,"East Coast":0.5102040816,"West Coast":0.6821705426,"Midwest":0.6734693878,"South":0.5989010989},{"Year":2004,"All Rap Songs":0.505033557,"Hot 100 Songs":0.387755102,"East Coast":0.4158730159,"West Coast":0.5727272727,"Midwest":0.5882352941,"South":0.5550660793},{"Year":2005,"All Rap Songs":0.4762872629,"Hot 100 Songs":0.4142857143,"East Coast":0.502688172,"West Coast":0.6208791209,"Midwest":0.5921052632,"South":0.5230202578},{"Year":2006,"All Rap Songs":0.4936416185,"Hot 100 Songs":0.4745762712,"East Coast":0.5057471264,"West Coast":0.6619217082,"Midwest":0.5066666667,"South":0.5194968553},{"Year":2007,"All Rap Songs":0.5115697311,"Hot 100 Songs":0.2777777778,"East Coast":0.4986737401,"West Coast":0.6860986547,"Midwest":0.5428571429,"South":0.557806913},{"Year":2008,"All Rap Songs":0.4370468029,"Hot 100 Songs":0.2909090909,"East Coast":0.3852140078,"West Coast":0.6444444444,"Midwest":0.4273504274,"South":0.4834782609},{"Year":2009,"All Rap Songs":0.4906423875,"Hot 100 Songs":0.3561643836,"East Coast":0.5300668151,"West Coast":0.6784313725,"Midwest":0.5365853659,"South":0.5375854214},{"Year":2010,"All Rap Songs":0.4503943545,"Hot 100 Songs":0.313253012,"East Coast":0.5490196078,"West Coast":0.6237288136,"Midwest":0.4351851852,"South":0.4806910569},{"Year":2011,"All Rap Songs":0.4821359969,"Hot 100 Songs":0.4125,"East Coast":0.5444191344,"West Coast":0.5757575758,"Midwest":0.5365853659,"South":0.5406613047},{"Year":2012,"All Rap Songs":0.5304294099,"Hot 100 Songs":0.4615384615,"East Coast":0.5575221239,"West Coast":0.6085972851,"Midwest":0.5965909091,"South":0.5835051546},{"Year":2013,"All Rap Songs":0.5709101061,"Hot 100 Songs":0.4927536232,"East Coast":0.578817734,"West Coast":0.7047619048,"Midwest":0.6216216216,"South":0.6231884058},{"Year":2014,"All Rap Songs":0.5237113402,"Hot 100 Songs":0.4375,"East Coast":0.525390625,"West Coast":0.641025641,"Midwest":0.5169082126,"South":0.6194945848},{"Year":2015,"All Rap Songs":0.5663442234,"Hot 100 Songs":0.4044117647,"East Coast":0.5665634675,"West Coast":0.587012987,"Midwest":0.5883977901,"South":0.6438836313},{"Year":2016,"All Rap Songs":0.5144789685,"Hot 100 Songs":0.4326241135,"East Coast":0.4745417515,"West Coast":0.5605700713,"Midwest":0.5842105263,"South":0.6040540541},{"Year":2017,"All Rap Songs":0.500957121,"Hot 100 Songs":0.484375,"East Coast":0.5818181818,"West Coast":0.4598540146,"Midwest":0.5906183369,"South":0.5759312321},{"Year":2018,"All Rap Songs":0.5051908908,"Hot 100 Songs":0.4801223242,"East Coast":0.5251141553,"West Coast":0.5232744783,"Midwest":0.6180257511,"South":0.5821665438},{"Year":2019,"All Rap Songs":0.4634003514,"Hot 100 Songs":0.4215686275,"East Coast":0.4865831843,"West Coast":0.486,"Midwest":0.4527162978,"South":0.5579268293}],
            gangs: [{"Year":1990,"All Rap Songs":0.1785714286,"Hot 100 Songs":0.3333333333,"East Coast":0.2372881356,"West Coast":0.3571428571,"Midwest":null,"South":0.2325581395},{"Year":1991,"All Rap Songs":0.125,"Hot 100 Songs":0.5,"East Coast":0.1018518519,"West Coast":0.1960784314,"Midwest":null,"South":0.0},{"Year":1992,"All Rap Songs":0.2344497608,"Hot 100 Songs":0.0,"East Coast":0.1428571429,"West Coast":0.3658536585,"Midwest":0.2307692308,"South":0.1111111111},{"Year":1993,"All Rap Songs":0.2243902439,"Hot 100 Songs":0.1538461538,"East Coast":0.164556962,"West Coast":0.3578947368,"Midwest":null,"South":0.2272727273},{"Year":1994,"All Rap Songs":0.2686567164,"Hot 100 Songs":0.2142857143,"East Coast":0.1808510638,"West Coast":0.5135135135,"Midwest":0.3181818182,"South":0.2409638554},{"Year":1995,"All Rap Songs":0.286908078,"Hot 100 Songs":0.0625,"East Coast":0.1900826446,"West Coast":0.3173652695,"Midwest":null,"South":0.3378378378},{"Year":1996,"All Rap Songs":0.2342995169,"Hot 100 Songs":0.2,"East Coast":0.1517241379,"West Coast":0.3214285714,"Midwest":0.25,"South":0.1682242991},{"Year":1997,"All Rap Songs":0.2314049587,"Hot 100 Songs":0.1,"East Coast":0.1785714286,"West Coast":0.2417582418,"Midwest":0.0625,"South":0.3534482759},{"Year":1998,"All Rap Songs":0.2851182197,"Hot 100 Songs":0.0869565217,"East Coast":0.231884058,"West Coast":0.3757961783,"Midwest":0.0,"South":0.3333333333},{"Year":1999,"All Rap Songs":0.2967818832,"Hot 100 Songs":0.2068965517,"East Coast":0.2747603834,"West Coast":0.4444444444,"Midwest":0.3125,"South":0.2588996764},{"Year":2000,"All Rap Songs":0.2094017094,"Hot 100 Songs":0.2,"East Coast":0.25,"West Coast":0.248447205,"Midwest":0.1186440678,"South":0.1908127208},{"Year":2001,"All Rap Songs":0.3100436681,"Hot 100 Songs":0.1785714286,"East Coast":0.3166666667,"West Coast":0.4589371981,"Midwest":null,"South":0.274566474},{"Year":2002,"All Rap Songs":0.2776497696,"Hot 100 Songs":0.1944444444,"East Coast":0.3162393162,"West Coast":0.4023668639,"Midwest":0.3023255814,"South":0.302259887},{"Year":2003,"All Rap Songs":0.264,"Hot 100 Songs":0.25,"East Coast":0.306122449,"West Coast":0.4031007752,"Midwest":0.2653061224,"South":0.2582417582},{"Year":2004,"All Rap Songs":0.2567114094,"Hot 100 Songs":0.1632653061,"East Coast":0.2349206349,"West Coast":0.2772727273,"Midwest":0.2058823529,"South":0.2444933921},{"Year":2005,"All Rap Songs":0.2642276423,"Hot 100 Songs":0.1,"East Coast":0.2983870968,"West Coast":0.3626373626,"Midwest":0.1447368421,"South":0.2965009208},{"Year":2006,"All Rap Songs":0.2485549133,"Hot 100 Songs":0.1186440678,"East Coast":0.2155172414,"West Coast":0.3096085409,"Midwest":0.1866666667,"South":0.2591194969},{"Year":2007,"All Rap Songs":0.2407754847,"Hot 100 Songs":0.1666666667,"East Coast":0.2652519894,"West Coast":0.3677130045,"Midwest":0.1714285714,"South":0.2443384982},{"Year":2008,"All Rap Songs":0.2221489782,"Hot 100 Songs":0.1272727273,"East Coast":0.2529182879,"West Coast":0.3722222222,"Midwest":0.2393162393,"South":0.2226086957},{"Year":2009,"All Rap Songs":0.1992918563,"Hot 100 Songs":0.0684931507,"East Coast":0.2093541203,"West Coast":0.3215686275,"Midwest":0.1707317073,"South":0.2232346241},{"Year":2010,"All Rap Songs":0.1797426318,"Hot 100 Songs":0.1204819277,"East Coast":0.2205882353,"West Coast":0.3423728814,"Midwest":0.1296296296,"South":0.1605691057},{"Year":2011,"All Rap Songs":0.1932385709,"Hot 100 Songs":0.1625,"East Coast":0.1685649203,"West Coast":0.3002754821,"Midwest":0.1463414634,"South":0.2028596962},{"Year":2012,"All Rap Songs":0.172072907,"Hot 100 Songs":0.1025641026,"East Coast":0.1836283186,"West Coast":0.257918552,"Midwest":0.1590909091,"South":0.1807560137},{"Year":2013,"All Rap Songs":0.1736460078,"Hot 100 Songs":0.1304347826,"East Coast":0.145320197,"West Coast":0.2317460317,"Midwest":0.1036036036,"South":0.1976811594},{"Year":2014,"All Rap Songs":0.1696612666,"Hot 100 Songs":0.1,"East Coast":0.171875,"West Coast":0.3461538462,"Midwest":0.1256038647,"South":0.1862815884},{"Year":2015,"All Rap Songs":0.1739368498,"Hot 100 Songs":0.0808823529,"East Coast":0.1811145511,"West Coast":0.2883116883,"Midwest":0.1298342541,"South":0.1815632667},{"Year":2016,"All Rap Songs":0.1557810188,"Hot 100 Songs":0.0921985816,"East Coast":0.1323828921,"West Coast":0.2589073634,"Midwest":0.0842105263,"South":0.1783783784},{"Year":2017,"All Rap Songs":0.1382082695,"Hot 100 Songs":0.0989583333,"East Coast":0.1409090909,"West Coast":0.2262773723,"Midwest":0.1194029851,"South":0.1477691363},{"Year":2018,"All Rap Songs":0.147019424,"Hot 100 Songs":0.1314984709,"East Coast":0.2267884323,"West Coast":0.1926163724,"Midwest":0.1394849785,"South":0.1584377303},{"Year":2019,"All Rap Songs":0.1465937927,"Hot 100 Songs":0.0882352941,"East Coast":0.2164579606,"West Coast":0.254,"Midwest":0.1207243461,"South":0.1676829268}],
            guns: [{"Year":1990,"All Rap Songs":0.6142857143,"Hot 100 Songs":0.5,"East Coast":0.5254237288,"West Coast":0.8571428571,"Midwest":null,"South":0.5813953488},{"Year":1991,"All Rap Songs":0.5572916667,"Hot 100 Songs":1.0,"East Coast":0.5555555556,"West Coast":0.6078431373,"Midwest":null,"South":0.2666666667},{"Year":1992,"All Rap Songs":0.6602870813,"Hot 100 Songs":0.8333333333,"East Coast":0.4805194805,"West Coast":0.8048780488,"Midwest":0.5384615385,"South":0.6388888889},{"Year":1993,"All Rap Songs":0.6829268293,"Hot 100 Songs":0.5384615385,"East Coast":0.6075949367,"West Coast":0.7578947368,"Midwest":null,"South":0.7272727273},{"Year":1994,"All Rap Songs":0.6492537313,"Hot 100 Songs":0.5,"East Coast":0.6489361702,"West Coast":0.8108108108,"Midwest":0.3636363636,"South":0.6506024096},{"Year":1995,"All Rap Songs":0.7270194986,"Hot 100 Songs":0.625,"East Coast":0.7768595041,"West Coast":0.7305389222,"Midwest":null,"South":0.7162162162},{"Year":1996,"All Rap Songs":0.7125603865,"Hot 100 Songs":0.75,"East Coast":0.724137931,"West Coast":0.7428571429,"Midwest":0.75,"South":0.7757009346},{"Year":1997,"All Rap Songs":0.6446280992,"Hot 100 Songs":0.5,"East Coast":0.7261904762,"West Coast":0.7362637363,"Midwest":0.5,"South":0.6637931034},{"Year":1998,"All Rap Songs":0.6870653686,"Hot 100 Songs":0.5652173913,"East Coast":0.7137681159,"West Coast":0.8025477707,"Midwest":1.0,"South":0.6634304207},{"Year":1999,"All Rap Songs":0.7067938021,"Hot 100 Songs":0.8275862069,"East Coast":0.696485623,"West Coast":0.7611111111,"Midwest":0.84375,"South":0.6893203883},{"Year":2000,"All Rap Songs":0.6851851852,"Hot 100 Songs":0.48,"East Coast":0.7712765957,"West Coast":0.6894409938,"Midwest":0.7457627119,"South":0.6925795053},{"Year":2001,"All Rap Songs":0.6834061135,"Hot 100 Songs":0.4642857143,"East Coast":0.7366666667,"West Coast":0.7342995169,"Midwest":null,"South":0.6791907514},{"Year":2002,"All Rap Songs":0.6428571429,"Hot 100 Songs":0.4444444444,"East Coast":0.6666666667,"West Coast":0.7573964497,"Midwest":0.6744186047,"South":0.6836158192},{"Year":2003,"All Rap Songs":0.641,"Hot 100 Songs":0.6388888889,"East Coast":0.7469387755,"West Coast":0.7286821705,"Midwest":0.7551020408,"South":0.6346153846},{"Year":2004,"All Rap Songs":0.6350671141,"Hot 100 Songs":0.4285714286,"East Coast":0.6158730159,"West Coast":0.6772727273,"Midwest":0.6911764706,"South":0.6585903084},{"Year":2005,"All Rap Songs":0.6050135501,"Hot 100 Songs":0.5714285714,"East Coast":0.6612903226,"West Coast":0.7527472527,"Midwest":0.6447368421,"South":0.6372007366},{"Year":2006,"All Rap Songs":0.6115606936,"Hot 100 Songs":0.4406779661,"East Coast":0.6781609195,"West Coast":0.6868327402,"Midwest":0.5066666667,"South":0.6226415094},{"Year":2007,"All Rap Songs":0.6097560976,"Hot 100 Songs":0.4305555556,"East Coast":0.6578249337,"West Coast":0.6860986547,"Midwest":0.4857142857,"South":0.6555423123},{"Year":2008,"All Rap Songs":0.5563612393,"Hot 100 Songs":0.3636363636,"East Coast":0.6536964981,"West Coast":0.6888888889,"Midwest":0.6239316239,"South":0.5756521739},{"Year":2009,"All Rap Songs":0.5255437532,"Hot 100 Songs":0.3835616438,"East Coast":0.6080178174,"West Coast":0.6666666667,"Midwest":0.6829268293,"South":0.5410022779},{"Year":2010,"All Rap Songs":0.5379825654,"Hot 100 Songs":0.421686747,"East Coast":0.6789215686,"West Coast":0.6915254237,"Midwest":0.5092592593,"South":0.5304878049},{"Year":2011,"All Rap Songs":0.545908567,"Hot 100 Songs":0.35,"East Coast":0.576309795,"West Coast":0.6639118457,"Midwest":0.512195122,"South":0.5844504021},{"Year":2012,"All Rap Songs":0.5279579858,"Hot 100 Songs":0.3846153846,"East Coast":0.5663716814,"West Coast":0.6470588235,"Midwest":0.5511363636,"South":0.5484536082},{"Year":2013,"All Rap Songs":0.5566722501,"Hot 100 Songs":0.4637681159,"East Coast":0.5960591133,"West Coast":0.6825396825,"Midwest":0.6081081081,"South":0.6191304348},{"Year":2014,"All Rap Songs":0.5372606775,"Hot 100 Songs":0.3625,"East Coast":0.66015625,"West Coast":0.7435897436,"Midwest":0.5893719807,"South":0.5898916968},{"Year":2015,"All Rap Songs":0.5486402628,"Hot 100 Songs":0.3529411765,"East Coast":0.6099071207,"West Coast":0.6545454545,"Midwest":0.5801104972,"South":0.6102348405},{"Year":2016,"All Rap Songs":0.5049672374,"Hot 100 Songs":0.3475177305,"East Coast":0.5784114053,"West Coast":0.5748218527,"Midwest":0.4526315789,"South":0.5977477477},{"Year":2017,"All Rap Songs":0.5290964778,"Hot 100 Songs":0.4635416667,"East Coast":0.6727272727,"West Coast":0.5401459854,"Midwest":0.6673773987,"South":0.6197298404},{"Year":2018,"All Rap Songs":0.5493971869,"Hot 100 Songs":0.5657492355,"East Coast":0.601217656,"West Coast":0.5714285714,"Midwest":0.652360515,"South":0.6293294031},{"Year":2019,"All Rap Songs":0.5328908842,"Hot 100 Songs":0.4656862745,"East Coast":0.6404293381,"West Coast":0.622,"Midwest":0.5331991952,"South":0.6290650407}],
            violence: [{"Year":1990,"All Rap Songs":0.7571428571,"Hot 100 Songs":0.5,"East Coast":0.7457627119,"West Coast":0.9285714286,"Midwest":null,"South":0.6511627907},{"Year":1991,"All Rap Songs":0.7395833333,"Hot 100 Songs":1.0,"East Coast":0.7314814815,"West Coast":0.7647058824,"Midwest":null,"South":0.6},{"Year":1992,"All Rap Songs":0.8421052632,"Hot 100 Songs":1.0,"East Coast":0.8311688312,"West Coast":0.8536585366,"Midwest":0.8461538462,"South":0.75},{"Year":1993,"All Rap Songs":0.8,"Hot 100 Songs":0.7692307692,"East Coast":0.7594936709,"West Coast":0.8736842105,"Midwest":null,"South":0.8181818182},{"Year":1994,"All Rap Songs":0.7537313433,"Hot 100 Songs":0.5714285714,"East Coast":0.7659574468,"West Coast":0.8108108108,"Midwest":0.7727272727,"South":0.7108433735},{"Year":1995,"All Rap Songs":0.8300835655,"Hot 100 Songs":0.8125,"East Coast":0.8595041322,"West Coast":0.8502994012,"Midwest":null,"South":0.8243243243},{"Year":1996,"All Rap Songs":0.809178744,"Hot 100 Songs":0.9,"East Coast":0.7448275862,"West Coast":0.85,"Midwest":0.8333333333,"South":0.8598130841},{"Year":1997,"All Rap Songs":0.7245179063,"Hot 100 Songs":0.75,"East Coast":0.7142857143,"West Coast":0.8241758242,"Midwest":0.5625,"South":0.775862069},{"Year":1998,"All Rap Songs":0.7635605007,"Hot 100 Songs":0.5652173913,"East Coast":0.7608695652,"West Coast":0.8280254777,"Midwest":1.0,"South":0.8122977346},{"Year":1999,"All Rap Songs":0.7449344458,"Hot 100 Songs":0.5862068966,"East Coast":0.7252396166,"West Coast":0.8277777778,"Midwest":0.84375,"South":0.71197411},{"Year":2000,"All Rap Songs":0.7578347578,"Hot 100 Songs":0.72,"East Coast":0.7659574468,"West Coast":0.7453416149,"Midwest":0.813559322,"South":0.7985865724},{"Year":2001,"All Rap Songs":0.7532751092,"Hot 100 Songs":0.6071428571,"East Coast":0.7466666667,"West Coast":0.8647342995,"Midwest":null,"South":0.7716763006},{"Year":2002,"All Rap Songs":0.685483871,"Hot 100 Songs":0.4166666667,"East Coast":0.7307692308,"West Coast":0.8165680473,"Midwest":0.7441860465,"South":0.7316384181},{"Year":2003,"All Rap Songs":0.725,"Hot 100 Songs":0.6666666667,"East Coast":0.7428571429,"West Coast":0.8527131783,"Midwest":0.693877551,"South":0.7582417582},{"Year":2004,"All Rap Songs":0.7206375839,"Hot 100 Songs":0.6734693878,"East Coast":0.6952380952,"West Coast":0.7636363636,"Midwest":0.7794117647,"South":0.7511013216},{"Year":2005,"All Rap Songs":0.6761517615,"Hot 100 Songs":0.5571428571,"East Coast":0.75,"West Coast":0.7527472527,"Midwest":0.75,"South":0.6850828729},{"Year":2006,"All Rap Songs":0.674566474,"Hot 100 Songs":0.6440677966,"East Coast":0.7212643678,"West Coast":0.7971530249,"Midwest":0.68,"South":0.7119496855},{"Year":2007,"All Rap Songs":0.7110694184,"Hot 100 Songs":0.75,"East Coast":0.7135278515,"West Coast":0.7892376682,"Midwest":0.7428571429,"South":0.7651966627},{"Year":2008,"All Rap Songs":0.6453526697,"Hot 100 Songs":0.5636363636,"East Coast":0.6809338521,"West Coast":0.7444444444,"Midwest":0.7094017094,"South":0.6886956522},{"Year":2009,"All Rap Songs":0.6616084977,"Hot 100 Songs":0.6301369863,"East Coast":0.6971046771,"West Coast":0.8196078431,"Midwest":0.7195121951,"South":0.6685649203},{"Year":2010,"All Rap Songs":0.6546284765,"Hot 100 Songs":0.5180722892,"East Coast":0.7696078431,"West Coast":0.7661016949,"Midwest":0.6666666667,"South":0.6676829268},{"Year":2011,"All Rap Songs":0.6527084134,"Hot 100 Songs":0.5375,"East Coast":0.7038724374,"West Coast":0.7685950413,"Midwest":0.5365853659,"South":0.7015192136},{"Year":2012,"All Rap Songs":0.6543095459,"Hot 100 Songs":0.5512820513,"East Coast":0.7079646018,"West Coast":0.7760180995,"Midwest":0.6931818182,"South":0.6934707904},{"Year":2013,"All Rap Songs":0.6781127862,"Hot 100 Songs":0.5507246377,"East Coast":0.7290640394,"West Coast":0.8285714286,"Midwest":0.7162162162,"South":0.7275362319},{"Year":2014,"All Rap Songs":0.654197349,"Hot 100 Songs":0.5875,"East Coast":0.70703125,"West Coast":0.8333333333,"Midwest":0.6570048309,"South":0.714801444},{"Year":2015,"All Rap Songs":0.666727505,"Hot 100 Songs":0.5735294118,"East Coast":0.6826625387,"West Coast":0.7636363636,"Midwest":0.6712707182,"South":0.7097791798},{"Year":2016,"All Rap Songs":0.6438385119,"Hot 100 Songs":0.5957446809,"East Coast":0.6619144603,"West Coast":0.7648456057,"Midwest":0.6394736842,"South":0.6981981982},{"Year":2017,"All Rap Songs":0.6625191424,"Hot 100 Songs":0.6770833333,"East Coast":0.7295454545,"West Coast":0.6642335766,"Midwest":0.7420042644,"South":0.7228817028},{"Year":2018,"All Rap Songs":0.6702947086,"Hot 100 Songs":0.7370030581,"East Coast":0.704718417,"West Coast":0.6902086677,"Midwest":0.7038626609,"South":0.7269712601},{"Year":2019,"All Rap Songs":0.6576224868,"Hot 100 Songs":0.681372549,"East Coast":0.7495527728,"West Coast":0.754,"Midwest":0.6498993964,"South":0.7418699187}],
            jail: [{"Year":1990,"All Rap Songs":0.1714285714,"Hot 100 Songs":0.1666666667,"East Coast":0.1016949153,"West Coast":0.4642857143,"Midwest":null,"South":0.1627906977},{"Year":1991,"All Rap Songs":0.1822916667,"Hot 100 Songs":0.5,"East Coast":0.1574074074,"West Coast":0.2745098039,"Midwest":null,"South":0.2},{"Year":1992,"All Rap Songs":0.2009569378,"Hot 100 Songs":0.5,"East Coast":0.1428571429,"West Coast":0.2926829268,"Midwest":0.0769230769,"South":0.1388888889},{"Year":1993,"All Rap Songs":0.1804878049,"Hot 100 Songs":0.0769230769,"East Coast":0.1392405063,"West Coast":0.2315789474,"Midwest":null,"South":0.1363636364},{"Year":1994,"All Rap Songs":0.1343283582,"Hot 100 Songs":0.1428571429,"East Coast":0.1914893617,"West Coast":0.1081081081,"Midwest":0.0909090909,"South":0.1445783133},{"Year":1995,"All Rap Songs":0.1559888579,"Hot 100 Songs":0.125,"East Coast":0.173553719,"West Coast":0.119760479,"Midwest":null,"South":0.2027027027},{"Year":1996,"All Rap Songs":0.1884057971,"Hot 100 Songs":0.2,"East Coast":0.2,"West Coast":0.2214285714,"Midwest":0.1666666667,"South":0.1308411215},{"Year":1997,"All Rap Songs":0.1983471074,"Hot 100 Songs":0.2,"East Coast":0.2142857143,"West Coast":0.2747252747,"Midwest":0.25,"South":0.1551724138},{"Year":1998,"All Rap Songs":0.2100139082,"Hot 100 Songs":0.1739130435,"East Coast":0.2644927536,"West Coast":0.1337579618,"Midwest":0.0,"South":0.2394822006},{"Year":1999,"All Rap Songs":0.2514898689,"Hot 100 Songs":0.275862069,"East Coast":0.3162939297,"West Coast":0.1722222222,"Midwest":0.25,"South":0.2330097087},{"Year":2000,"All Rap Songs":0.1809116809,"Hot 100 Songs":0.08,"East Coast":0.2127659574,"West Coast":0.1863354037,"Midwest":0.1694915254,"South":0.1943462898},{"Year":2001,"All Rap Songs":0.2248908297,"Hot 100 Songs":0.2857142857,"East Coast":0.2566666667,"West Coast":0.2222222222,"Midwest":null,"South":0.2138728324},{"Year":2002,"All Rap Songs":0.1889400922,"Hot 100 Songs":0.1666666667,"East Coast":0.2735042735,"West Coast":0.224852071,"Midwest":0.2790697674,"South":0.2118644068},{"Year":2003,"All Rap Songs":0.201,"Hot 100 Songs":0.1111111111,"East Coast":0.2571428571,"West Coast":0.2558139535,"Midwest":0.2040816327,"South":0.1923076923},{"Year":2004,"All Rap Songs":0.2072147651,"Hot 100 Songs":0.1632653061,"East Coast":0.219047619,"West Coast":0.2363636364,"Midwest":0.1176470588,"South":0.1850220264},{"Year":2005,"All Rap Songs":0.1876693767,"Hot 100 Songs":0.0857142857,"East Coast":0.2096774194,"West Coast":0.2197802198,"Midwest":0.2236842105,"South":0.197053407},{"Year":2006,"All Rap Songs":0.2156069364,"Hot 100 Songs":0.1016949153,"East Coast":0.2557471264,"West Coast":0.2135231317,"Midwest":0.28,"South":0.2201257862},{"Year":2007,"All Rap Songs":0.1682301438,"Hot 100 Songs":0.1805555556,"East Coast":0.1856763926,"West Coast":0.1479820628,"Midwest":0.1714285714,"South":0.168057211},{"Year":2008,"All Rap Songs":0.1793012525,"Hot 100 Songs":0.1272727273,"East Coast":0.2607003891,"West Coast":0.2055555556,"Midwest":0.1709401709,"South":0.1739130435},{"Year":2009,"All Rap Songs":0.1745068285,"Hot 100 Songs":0.0547945205,"East Coast":0.1982182628,"West Coast":0.2039215686,"Midwest":0.2926829268,"South":0.1890660592},{"Year":2010,"All Rap Songs":0.1718555417,"Hot 100 Songs":0.0963855422,"East Coast":0.2254901961,"West Coast":0.1661016949,"Midwest":0.1759259259,"South":0.1544715447},{"Year":2011,"All Rap Songs":0.1732616212,"Hot 100 Songs":0.15,"East Coast":0.2232346241,"West Coast":0.2148760331,"Midwest":0.1585365854,"South":0.1680071492},{"Year":2012,"All Rap Songs":0.1637318505,"Hot 100 Songs":0.0769230769,"East Coast":0.1924778761,"West Coast":0.1538461538,"Midwest":0.1306818182,"South":0.1649484536},{"Year":2013,"All Rap Songs":0.175041876,"Hot 100 Songs":0.1304347826,"East Coast":0.2192118227,"West Coast":0.2222222222,"Midwest":0.1486486486,"South":0.1855072464},{"Year":2014,"All Rap Songs":0.1723122239,"Hot 100 Songs":0.0625,"East Coast":0.263671875,"West Coast":0.2019230769,"Midwest":0.1497584541,"South":0.1819494585},{"Year":2015,"All Rap Songs":0.1580580398,"Hot 100 Songs":0.1176470588,"East Coast":0.2105263158,"West Coast":0.1428571429,"Midwest":0.1464088398,"South":0.1486154925},{"Year":2016,"All Rap Songs":0.1602198267,"Hot 100 Songs":0.1276595745,"East Coast":0.1812627291,"West Coast":0.1591448931,"Midwest":0.1368421053,"South":0.1855855856},{"Year":2017,"All Rap Songs":0.1519908116,"Hot 100 Songs":0.15625,"East Coast":0.225,"West Coast":0.1386861314,"Midwest":0.1684434968,"South":0.1747851003},{"Year":2018,"All Rap Songs":0.1450100469,"Hot 100 Songs":0.1406727829,"East Coast":0.2313546423,"West Coast":0.1797752809,"Midwest":0.1502145923,"South":0.147752395},{"Year":2019,"All Rap Songs":0.1380050752,"Hot 100 Songs":0.1078431373,"East Coast":0.2271914132,"West Coast":0.144,"Midwest":0.1428571429,"South":0.1605691057}],
            misogyny: [{"Year":1990,"All Rap Songs":0.2357142857,"Hot 100 Songs":0.0,"East Coast":0.0677966102,"West Coast":0.7142857143,"Midwest":null,"South":0.2325581395},{"Year":1991,"All Rap Songs":0.2395833333,"Hot 100 Songs":0.0,"East Coast":0.1203703704,"West Coast":0.4509803922,"Midwest":null,"South":0.5333333333},{"Year":1992,"All Rap Songs":0.3875598086,"Hot 100 Songs":0.3333333333,"East Coast":0.1558441558,"West Coast":0.5609756098,"Midwest":0.4615384615,"South":0.5277777778},{"Year":1993,"All Rap Songs":0.4048780488,"Hot 100 Songs":0.2307692308,"East Coast":0.253164557,"West Coast":0.5684210526,"Midwest":null,"South":0.3636363636},{"Year":1994,"All Rap Songs":0.4029850746,"Hot 100 Songs":0.4285714286,"East Coast":0.3191489362,"West Coast":0.5675675676,"Midwest":0.5909090909,"South":0.4698795181},{"Year":1995,"All Rap Songs":0.4401114206,"Hot 100 Songs":0.125,"East Coast":0.2561983471,"West Coast":0.5209580838,"Midwest":null,"South":0.7162162162},{"Year":1996,"All Rap Songs":0.5676328502,"Hot 100 Songs":0.55,"East Coast":0.4137931034,"West Coast":0.7,"Midwest":0.8333333333,"South":0.738317757},{"Year":1997,"All Rap Songs":0.4931129477,"Hot 100 Songs":0.15,"East Coast":0.2857142857,"West Coast":0.6373626374,"Midwest":0.625,"South":0.6465517241},{"Year":1998,"All Rap Songs":0.5591098748,"Hot 100 Songs":0.3913043478,"East Coast":0.4420289855,"West Coast":0.6624203822,"Midwest":1.0,"South":0.6666666667},{"Year":1999,"All Rap Songs":0.5923718713,"Hot 100 Songs":0.5517241379,"East Coast":0.5463258786,"West Coast":0.7666666667,"Midwest":0.625,"South":0.6828478964},{"Year":2000,"All Rap Songs":0.5441595442,"Hot 100 Songs":0.56,"East Coast":0.5478723404,"West Coast":0.5652173913,"Midwest":0.813559322,"South":0.6395759717},{"Year":2001,"All Rap Songs":0.5884279476,"Hot 100 Songs":0.4285714286,"East Coast":0.61,"West Coast":0.6666666667,"Midwest":null,"South":0.6647398844},{"Year":2002,"All Rap Songs":0.4331797235,"Hot 100 Songs":0.3333333333,"East Coast":0.3333333333,"West Coast":0.6272189349,"Midwest":0.5813953488,"South":0.4915254237},{"Year":2003,"All Rap Songs":0.474,"Hot 100 Songs":0.3333333333,"East Coast":0.4734693878,"West Coast":0.6744186047,"Midwest":0.7142857143,"South":0.5247252747},{"Year":2004,"All Rap Songs":0.4546979866,"Hot 100 Songs":0.2653061224,"East Coast":0.3873015873,"West Coast":0.5681818182,"Midwest":0.4705882353,"South":0.4713656388},{"Year":2005,"All Rap Songs":0.4214092141,"Hot 100 Songs":0.3,"East Coast":0.4596774194,"West Coast":0.5824175824,"Midwest":0.5263157895,"South":0.4696132597},{"Year":2006,"All Rap Songs":0.4549132948,"Hot 100 Songs":0.3728813559,"East Coast":0.4712643678,"West Coast":0.6903914591,"Midwest":0.4666666667,"South":0.506918239},{"Year":2007,"All Rap Songs":0.4484052533,"Hot 100 Songs":0.3472222222,"East Coast":0.4164456233,"West Coast":0.668161435,"Midwest":0.3428571429,"South":0.5411203814},{"Year":2008,"All Rap Songs":0.3902439024,"Hot 100 Songs":0.2545454545,"East Coast":0.3229571984,"West Coast":0.6111111111,"Midwest":0.4700854701,"South":0.452173913},{"Year":2009,"All Rap Songs":0.4137582195,"Hot 100 Songs":0.2876712329,"East Coast":0.4610244989,"West Coast":0.5647058824,"Midwest":0.4634146341,"South":0.5079726651},{"Year":2010,"All Rap Songs":0.4889995849,"Hot 100 Songs":0.421686747,"East Coast":0.4460784314,"West Coast":0.6576271186,"Midwest":0.4444444444,"South":0.543699187},{"Year":2011,"All Rap Songs":0.5090280446,"Hot 100 Songs":0.4625,"East Coast":0.4851936219,"West Coast":0.6308539945,"Midwest":0.512195122,"South":0.6219839142},{"Year":2012,"All Rap Songs":0.5869632376,"Hot 100 Songs":0.5384615385,"East Coast":0.5309734513,"West Coast":0.6923076923,"Midwest":0.6306818182,"South":0.6542955326},{"Year":2013,"All Rap Songs":0.5949190396,"Hot 100 Songs":0.5797101449,"East Coast":0.5467980296,"West Coast":0.7047619048,"Midwest":0.7522522523,"South":0.7107246377},{"Year":2014,"All Rap Songs":0.5870397644,"Hot 100 Songs":0.5125,"East Coast":0.521484375,"West Coast":0.75,"Midwest":0.5797101449,"South":0.7075812274},{"Year":2015,"All Rap Songs":0.6156232889,"Hot 100 Songs":0.5147058824,"East Coast":0.5510835913,"West Coast":0.6311688312,"Midwest":0.6740331492,"South":0.7343147564},{"Year":2016,"All Rap Songs":0.5831748045,"Hot 100 Songs":0.5177304965,"East Coast":0.5315682281,"West Coast":0.6627078385,"Midwest":0.6184210526,"South":0.7297297297},{"Year":2017,"All Rap Songs":0.5985834609,"Hot 100 Songs":0.6302083333,"East Coast":0.5386363636,"West Coast":0.6520681265,"Midwest":0.7420042644,"South":0.7077363897},{"Year":2018,"All Rap Songs":0.6076691226,"Hot 100 Songs":0.6391437309,"East Coast":0.4748858447,"West Coast":0.6099518459,"Midwest":0.7145922747,"South":0.7100221076},{"Year":2019,"All Rap Songs":0.5736872926,"Hot 100 Songs":0.6274509804,"East Coast":0.4561717352,"West Coast":0.692,"Midwest":0.6338028169,"South":0.7098577236}],
            losangeles: [{"Year":1990,"All Rap Songs":0.0714285714,"Hot 100 Songs":0.0,"East Coast":0.0338983051,"West Coast":0.1785714286,"Midwest":null,"South":0.1162790698},{"Year":1991,"All Rap Songs":0.0677083333,"Hot 100 Songs":0.0,"East Coast":0.0277777778,"West Coast":0.1176470588,"Midwest":null,"South":0.2666666667},{"Year":1992,"All Rap Songs":0.1291866029,"Hot 100 Songs":0.0,"East Coast":0.012987013,"West Coast":0.3048780488,"Midwest":0.0,"South":0.1111111111},{"Year":1993,"All Rap Songs":0.0926829268,"Hot 100 Songs":0.0769230769,"East Coast":0.0632911392,"West Coast":0.1473684211,"Midwest":null,"South":0.1363636364},{"Year":1994,"All Rap Songs":0.0671641791,"Hot 100 Songs":0.0714285714,"East Coast":0.0531914894,"West Coast":0.1891891892,"Midwest":0.0909090909,"South":0.0722891566},{"Year":1995,"All Rap Songs":0.1337047354,"Hot 100 Songs":0.125,"East Coast":0.041322314,"West Coast":0.2215568862,"Midwest":null,"South":0.1486486486},{"Year":1996,"All Rap Songs":0.0966183575,"Hot 100 Songs":0.15,"East Coast":0.0137931034,"West Coast":0.2071428571,"Midwest":0.1666666667,"South":0.0654205607},{"Year":1997,"All Rap Songs":0.0826446281,"Hot 100 Songs":0.05,"East Coast":0.0833333333,"West Coast":0.2087912088,"Midwest":0.0,"South":0.0344827586},{"Year":1998,"All Rap Songs":0.0806675939,"Hot 100 Songs":0.0434782609,"East Coast":0.0507246377,"West Coast":0.152866242,"Midwest":0.0,"South":0.0550161812},{"Year":1999,"All Rap Songs":0.0703218117,"Hot 100 Songs":0.1034482759,"East Coast":0.0319488818,"West Coast":0.2,"Midwest":0.125,"South":0.0388349515},{"Year":2000,"All Rap Songs":0.0626780627,"Hot 100 Songs":0.04,"East Coast":0.0372340426,"West Coast":0.1614906832,"Midwest":0.0847457627,"South":0.038869258},{"Year":2001,"All Rap Songs":0.056768559,"Hot 100 Songs":0.0,"East Coast":0.0466666667,"West Coast":0.1449275362,"Midwest":null,"South":0.0404624277},{"Year":2002,"All Rap Songs":0.0599078341,"Hot 100 Songs":0.0,"East Coast":0.0341880342,"West Coast":0.1301775148,"Midwest":0.023255814,"South":0.0621468927},{"Year":2003,"All Rap Songs":0.063,"Hot 100 Songs":0.0555555556,"East Coast":0.0448979592,"West Coast":0.1550387597,"Midwest":0.0816326531,"South":0.0796703297},{"Year":2004,"All Rap Songs":0.1006711409,"Hot 100 Songs":0.1632653061,"East Coast":0.0698412698,"West Coast":0.1954545455,"Midwest":0.0882352941,"South":0.0814977974},{"Year":2005,"All Rap Songs":0.075203252,"Hot 100 Songs":0.0571428571,"East Coast":0.0456989247,"West Coast":0.1868131868,"Midwest":0.0526315789,"South":0.0939226519},{"Year":2006,"All Rap Songs":0.063583815,"Hot 100 Songs":0.1016949153,"East Coast":0.0344827586,"West Coast":0.1387900356,"Midwest":0.0666666667,"South":0.0716981132},{"Year":2007,"All Rap Songs":0.0606629143,"Hot 100 Songs":0.0277777778,"East Coast":0.0424403183,"West Coast":0.1434977578,"Midwest":0.0142857143,"South":0.0560190703},{"Year":2008,"All Rap Songs":0.0646011866,"Hot 100 Songs":0.0727272727,"East Coast":0.0311284047,"West Coast":0.1555555556,"Midwest":0.0256410256,"South":0.067826087},{"Year":2009,"All Rap Songs":0.0738492666,"Hot 100 Songs":0.0273972603,"East Coast":0.0400890869,"West Coast":0.2156862745,"Midwest":0.0365853659,"South":0.0808656036},{"Year":2010,"All Rap Songs":0.0514736405,"Hot 100 Songs":0.0120481928,"East Coast":0.0441176471,"West Coast":0.1898305085,"Midwest":0.0277777778,"South":0.0477642276},{"Year":2011,"All Rap Songs":0.0576258164,"Hot 100 Songs":0.0125,"East Coast":0.0318906606,"West Coast":0.1515151515,"Midwest":0.0487804878,"South":0.0625558534},{"Year":2012,"All Rap Songs":0.0642570281,"Hot 100 Songs":0.0512820513,"East Coast":0.0309734513,"West Coast":0.1809954751,"Midwest":0.0397727273,"South":0.0701030928},{"Year":2013,"All Rap Songs":0.081239531,"Hot 100 Songs":0.0144927536,"East Coast":0.0443349754,"West Coast":0.1746031746,"Midwest":0.027027027,"South":0.1072463768},{"Year":2014,"All Rap Songs":0.0530191458,"Hot 100 Songs":0.025,"East Coast":0.03515625,"West Coast":0.1506410256,"Midwest":0.0241545894,"South":0.0620938628},{"Year":2015,"All Rap Songs":0.0582223033,"Hot 100 Songs":0.0735294118,"East Coast":0.0464396285,"West Coast":0.1818181818,"Midwest":0.0248618785,"South":0.060637925},{"Year":2016,"All Rap Songs":0.056859015,"Hot 100 Songs":0.0283687943,"East Coast":0.0407331976,"West Coast":0.1377672209,"Midwest":0.0289473684,"South":0.0765765766},{"Year":2017,"All Rap Songs":0.0446018377,"Hot 100 Songs":0.0364583333,"East Coast":0.0409090909,"West Coast":0.1459854015,"Midwest":0.0447761194,"South":0.0474826034},{"Year":2018,"All Rap Songs":0.0401875419,"Hot 100 Songs":0.0183486239,"East Coast":0.0471841705,"West Coast":0.0930979133,"Midwest":0.0343347639,"South":0.0453205601},{"Year":2019,"All Rap Songs":0.0374780402,"Hot 100 Songs":0.0392156863,"East Coast":0.0465116279,"West Coast":0.088,"Midwest":0.0261569416,"South":0.0401422764}],
            newyork: [{"Year":1990,"All Rap Songs":0.0571428571,"Hot 100 Songs":0.0,"East Coast":0.1016949153,"West Coast":0.0357142857,"Midwest":null,"South":0.023255814},{"Year":1991,"All Rap Songs":0.0520833333,"Hot 100 Songs":0.0,"East Coast":0.0833333333,"West Coast":0.0,"Midwest":null,"South":0.0},{"Year":1992,"All Rap Songs":0.1100478469,"Hot 100 Songs":0.1666666667,"East Coast":0.1428571429,"West Coast":0.0609756098,"Midwest":0.0,"South":0.0277777778},{"Year":1993,"All Rap Songs":0.1073170732,"Hot 100 Songs":0.0769230769,"East Coast":0.2278481013,"West Coast":0.0526315789,"Midwest":null,"South":0.0454545455},{"Year":1994,"All Rap Songs":0.0895522388,"Hot 100 Songs":0.0714285714,"East Coast":0.2234042553,"West Coast":0.0540540541,"Midwest":0.0,"South":0.0602409639},{"Year":1995,"All Rap Songs":0.1364902507,"Hot 100 Songs":0.1875,"East Coast":0.3223140496,"West Coast":0.0179640719,"Midwest":null,"South":0.0540540541},{"Year":1996,"All Rap Songs":0.1207729469,"Hot 100 Songs":0.1,"East Coast":0.2344827586,"West Coast":0.0428571429,"Midwest":0.0,"South":0.046728972},{"Year":1997,"All Rap Songs":0.1019283747,"Hot 100 Songs":0.15,"East Coast":0.2261904762,"West Coast":0.010989011,"Midwest":0.0,"South":0.0603448276},{"Year":1998,"All Rap Songs":0.1098748261,"Hot 100 Songs":0.0869565217,"East Coast":0.2210144928,"West Coast":0.0700636943,"Midwest":0.0,"South":0.0841423948},{"Year":1999,"All Rap Songs":0.0786650775,"Hot 100 Songs":0.0,"East Coast":0.1693290735,"West Coast":0.0111111111,"Midwest":0.0,"South":0.0647249191},{"Year":2000,"All Rap Songs":0.0783475783,"Hot 100 Songs":0.08,"East Coast":0.2074468085,"West Coast":0.0186335404,"Midwest":0.0508474576,"South":0.0918727915},{"Year":2001,"All Rap Songs":0.0742358079,"Hot 100 Songs":0.0,"East Coast":0.18,"West Coast":0.0144927536,"Midwest":null,"South":0.0260115607},{"Year":2002,"All Rap Songs":0.064516129,"Hot 100 Songs":0.0277777778,"East Coast":0.1666666667,"West Coast":0.0236686391,"Midwest":0.023255814,"South":0.0451977401},{"Year":2003,"All Rap Songs":0.064,"Hot 100 Songs":0.0277777778,"East Coast":0.1265306122,"West Coast":0.023255814,"Midwest":0.0,"South":0.032967033},{"Year":2004,"All Rap Songs":0.0788590604,"Hot 100 Songs":0.0612244898,"East Coast":0.1841269841,"West Coast":0.0181818182,"Midwest":0.0294117647,"South":0.0462555066},{"Year":2005,"All Rap Songs":0.0691056911,"Hot 100 Songs":0.0428571429,"East Coast":0.185483871,"West Coast":0.021978022,"Midwest":0.0394736842,"South":0.0478821363},{"Year":2006,"All Rap Songs":0.0543352601,"Hot 100 Songs":0.0338983051,"East Coast":0.1637931034,"West Coast":0.0177935943,"Midwest":0.0,"South":0.0301886792},{"Year":2007,"All Rap Songs":0.0594121326,"Hot 100 Songs":0.0416666667,"East Coast":0.1379310345,"West Coast":0.0089686099,"Midwest":0.0714285714,"South":0.0488676996},{"Year":2008,"All Rap Songs":0.0619644034,"Hot 100 Songs":0.0363636364,"East Coast":0.2023346304,"West Coast":0.0277777778,"Midwest":0.0170940171,"South":0.0295652174},{"Year":2009,"All Rap Songs":0.0490642387,"Hot 100 Songs":0.0273972603,"East Coast":0.1336302895,"West Coast":0.031372549,"Midwest":0.0,"South":0.0250569476},{"Year":2010,"All Rap Songs":0.0493980905,"Hot 100 Songs":0.0240963855,"East Coast":0.1397058824,"West Coast":0.0101694915,"Midwest":0.0092592593,"South":0.0233739837},{"Year":2011,"All Rap Songs":0.042258932,"Hot 100 Songs":0.025,"East Coast":0.1412300683,"West Coast":0.0165289256,"Midwest":0.012195122,"South":0.035746202},{"Year":2012,"All Rap Songs":0.0447945629,"Hot 100 Songs":0.0256410256,"East Coast":0.1504424779,"West Coast":0.0248868778,"Midwest":0.0397727273,"South":0.0378006873},{"Year":2013,"All Rap Songs":0.0332216639,"Hot 100 Songs":0.0144927536,"East Coast":0.118226601,"West Coast":0.0031746032,"Midwest":0.0225225225,"South":0.0249275362},{"Year":2014,"All Rap Songs":0.0432989691,"Hot 100 Songs":0.05,"East Coast":0.1328125,"West Coast":0.0224358974,"Midwest":0.0144927536,"South":0.0259927798},{"Year":2015,"All Rap Songs":0.0239094725,"Hot 100 Songs":0.0073529412,"East Coast":0.0820433437,"West Coast":0.0181818182,"Midwest":0.0055248619,"South":0.0161233789},{"Year":2016,"All Rap Songs":0.0350877193,"Hot 100 Songs":0.0,"East Coast":0.1425661914,"West Coast":0.0166270784,"Midwest":0.0131578947,"South":0.022972973},{"Year":2017,"All Rap Songs":0.0325421133,"Hot 100 Songs":0.046875,"East Coast":0.125,"West Coast":0.0145985401,"Midwest":0.0063965885,"South":0.0282439623},{"Year":2018,"All Rap Songs":0.0318151373,"Hot 100 Songs":0.0152905199,"East Coast":0.1171993912,"West Coast":0.0321027287,"Midwest":0.017167382,"South":0.0228445099},{"Year":2019,"All Rap Songs":0.0333788796,"Hot 100 Songs":0.0294117647,"East Coast":0.137745975,"West Coast":0.014,"Midwest":0.0080482897,"South":0.0233739837}],
            opioids: [{"Year":1990,"All Rap Songs":0.1071428571,"Hot 100 Songs":0.1666666667,"East Coast":0.1186440678,"West Coast":0.0714285714,"Midwest":null,"South":0.0697674419},{"Year":1991,"All Rap Songs":0.1302083333,"Hot 100 Songs":1.0,"East Coast":0.1759259259,"West Coast":0.0784313725,"Midwest":null,"South":0.1333333333},{"Year":1992,"All Rap Songs":0.1435406699,"Hot 100 Songs":0.1666666667,"East Coast":0.0519480519,"West Coast":0.2073170732,"Midwest":0.0769230769,"South":0.0277777778},{"Year":1993,"All Rap Songs":0.087804878,"Hot 100 Songs":0.0,"East Coast":0.1012658228,"West Coast":0.0842105263,"Midwest":null,"South":0.1363636364},{"Year":1994,"All Rap Songs":0.1268656716,"Hot 100 Songs":0.0714285714,"East Coast":0.1170212766,"West Coast":0.1351351351,"Midwest":0.0909090909,"South":0.156626506},{"Year":1995,"All Rap Songs":0.139275766,"Hot 100 Songs":0.0625,"East Coast":0.1239669421,"West Coast":0.1377245509,"Midwest":null,"South":0.1216216216},{"Year":1996,"All Rap Songs":0.154589372,"Hot 100 Songs":0.1,"East Coast":0.124137931,"West Coast":0.1642857143,"Midwest":0.25,"South":0.1308411215},{"Year":1997,"All Rap Songs":0.1239669421,"Hot 100 Songs":0.1,"East Coast":0.130952381,"West Coast":0.1318681319,"Midwest":0.0,"South":0.1379310345},{"Year":1998,"All Rap Songs":0.1668984701,"Hot 100 Songs":0.1739130435,"East Coast":0.1231884058,"West Coast":0.1337579618,"Midwest":0.0,"South":0.2362459547},{"Year":1999,"All Rap Songs":0.1656734207,"Hot 100 Songs":0.275862069,"East Coast":0.1693290735,"West Coast":0.1222222222,"Midwest":0.28125,"South":0.1812297735},{"Year":2000,"All Rap Songs":0.1623931624,"Hot 100 Songs":0.2,"East Coast":0.1329787234,"West Coast":0.149068323,"Midwest":0.1186440678,"South":0.1766784452},{"Year":2001,"All Rap Songs":0.1637554585,"Hot 100 Songs":0.0714285714,"East Coast":0.1533333333,"West Coast":0.1449275362,"Midwest":null,"South":0.1994219653},{"Year":2002,"All Rap Songs":0.198156682,"Hot 100 Songs":0.1388888889,"East Coast":0.1666666667,"West Coast":0.1952662722,"Midwest":0.2093023256,"South":0.2768361582},{"Year":2003,"All Rap Songs":0.194,"Hot 100 Songs":0.1388888889,"East Coast":0.2163265306,"West Coast":0.1782945736,"Midwest":0.1020408163,"South":0.217032967},{"Year":2004,"All Rap Songs":0.2046979866,"Hot 100 Songs":0.1836734694,"East Coast":0.1682539683,"West Coast":0.1681818182,"Midwest":0.1470588235,"South":0.2841409692},{"Year":2005,"All Rap Songs":0.1890243902,"Hot 100 Songs":0.2142857143,"East Coast":0.188172043,"West Coast":0.1373626374,"Midwest":0.1447368421,"South":0.2320441989},{"Year":2006,"All Rap Songs":0.1815028902,"Hot 100 Songs":0.1186440678,"East Coast":0.1695402299,"West Coast":0.1637010676,"Midwest":0.1466666667,"South":0.1987421384},{"Year":2007,"All Rap Songs":0.1738586617,"Hot 100 Songs":0.1666666667,"East Coast":0.1379310345,"West Coast":0.130044843,"Midwest":0.2428571429,"South":0.2085816448},{"Year":2008,"All Rap Songs":0.1463414634,"Hot 100 Songs":0.0909090909,"East Coast":0.1284046693,"West Coast":0.1555555556,"Midwest":0.094017094,"South":0.172173913},{"Year":2009,"All Rap Songs":0.1881638847,"Hot 100 Songs":0.1369863014,"East Coast":0.1581291759,"West Coast":0.2549019608,"Midwest":0.1951219512,"South":0.1867881549},{"Year":2010,"All Rap Songs":0.1718555417,"Hot 100 Songs":0.1325301205,"East Coast":0.1789215686,"West Coast":0.1661016949,"Midwest":0.1388888889,"South":0.1666666667},{"Year":2011,"All Rap Songs":0.1751824818,"Hot 100 Songs":0.0875,"East Coast":0.1480637813,"West Coast":0.1707988981,"Midwest":0.1951219512,"South":0.1939231457},{"Year":2012,"All Rap Songs":0.1890639481,"Hot 100 Songs":0.1666666667,"East Coast":0.185840708,"West Coast":0.185520362,"Midwest":0.1477272727,"South":0.1945017182},{"Year":2013,"All Rap Songs":0.2261306533,"Hot 100 Songs":0.1449275362,"East Coast":0.224137931,"West Coast":0.2063492063,"Midwest":0.2522522523,"South":0.2637681159},{"Year":2014,"All Rap Songs":0.1946980854,"Hot 100 Songs":0.125,"East Coast":0.171875,"West Coast":0.2243589744,"Midwest":0.1642512077,"South":0.2375451264},{"Year":2015,"All Rap Songs":0.2139076474,"Hot 100 Songs":0.1470588235,"East Coast":0.1811145511,"West Coast":0.1844155844,"Midwest":0.1491712707,"South":0.229232387},{"Year":2016,"All Rap Songs":0.211371803,"Hot 100 Songs":0.219858156,"East Coast":0.1588594705,"West Coast":0.1686460808,"Midwest":0.2578947368,"South":0.2468468468},{"Year":2017,"All Rap Songs":0.2166921899,"Hot 100 Songs":0.2760416667,"East Coast":0.2045454545,"West Coast":0.1922141119,"Midwest":0.2388059701,"South":0.2668849775},{"Year":2018,"All Rap Songs":0.2129939719,"Hot 100 Songs":0.2354740061,"East Coast":0.1780821918,"West Coast":0.2311396469,"Midwest":0.2446351931,"South":0.2450257922},{"Year":2019,"All Rap Songs":0.1969549092,"Hot 100 Songs":0.2107843137,"East Coast":0.1896243292,"West Coast":0.15,"Midwest":0.1871227364,"South":0.2418699187}],
            coasts: [{"Year":1990,"All Rap Songs":0.1214285714,"Hot 100 Songs":0.0,"East Coast":0.1016949153,"West Coast":0.1785714286,"Midwest":null,"South":0.2093023256},{"Year":1991,"All Rap Songs":0.078125,"Hot 100 Songs":0.0,"East Coast":0.1111111111,"West Coast":0.0196078431,"Midwest":null,"South":0.1333333333},{"Year":1992,"All Rap Songs":0.0765550239,"Hot 100 Songs":0.0,"East Coast":0.025974026,"West Coast":0.1219512195,"Midwest":0.0769230769,"South":0.0833333333},{"Year":1993,"All Rap Songs":0.1219512195,"Hot 100 Songs":0.0769230769,"East Coast":0.0759493671,"West Coast":0.1894736842,"Midwest":null,"South":0.2272727273},{"Year":1994,"All Rap Songs":0.1343283582,"Hot 100 Songs":0.1428571429,"East Coast":0.0957446809,"West Coast":0.2432432432,"Midwest":0.1363636364,"South":0.1927710843},{"Year":1995,"All Rap Songs":0.1727019499,"Hot 100 Songs":0.25,"East Coast":0.1157024793,"West Coast":0.251497006,"Midwest":null,"South":0.1351351351},{"Year":1996,"All Rap Songs":0.2246376812,"Hot 100 Songs":0.35,"East Coast":0.1517241379,"West Coast":0.2928571429,"Midwest":0.3333333333,"South":0.2710280374},{"Year":1997,"All Rap Songs":0.1239669421,"Hot 100 Songs":0.15,"East Coast":0.1071428571,"West Coast":0.2087912088,"Midwest":0.0625,"South":0.0517241379},{"Year":1998,"All Rap Songs":0.1488178025,"Hot 100 Songs":0.2173913043,"East Coast":0.0905797101,"West Coast":0.2611464968,"Midwest":0.0,"South":0.1262135922},{"Year":1999,"All Rap Songs":0.1299165673,"Hot 100 Songs":0.0689655172,"East Coast":0.0766773163,"West Coast":0.2111111111,"Midwest":0.0625,"South":0.1197411003},{"Year":2000,"All Rap Songs":0.1210826211,"Hot 100 Songs":0.08,"East Coast":0.0904255319,"West Coast":0.149068323,"Midwest":0.2033898305,"South":0.0989399293},{"Year":2001,"All Rap Songs":0.1517467249,"Hot 100 Songs":0.1071428571,"East Coast":0.1066666667,"West Coast":0.270531401,"Midwest":null,"South":0.1329479769},{"Year":2002,"All Rap Songs":0.1278801843,"Hot 100 Songs":0.0277777778,"East Coast":0.094017094,"West Coast":0.2307692308,"Midwest":0.1395348837,"South":0.1242937853},{"Year":2003,"All Rap Songs":0.11,"Hot 100 Songs":0.1111111111,"East Coast":0.1102040816,"West Coast":0.2015503876,"Midwest":0.0816326531,"South":0.1291208791},{"Year":2004,"All Rap Songs":0.1325503356,"Hot 100 Songs":0.1428571429,"East Coast":0.1142857143,"West Coast":0.1954545455,"Midwest":0.2205882353,"South":0.1365638767},{"Year":2005,"All Rap Songs":0.1280487805,"Hot 100 Songs":0.1285714286,"East Coast":0.1155913978,"West Coast":0.2472527473,"Midwest":0.1973684211,"South":0.1123388582},{"Year":2006,"All Rap Songs":0.1294797688,"Hot 100 Songs":0.0169491525,"East Coast":0.1206896552,"West Coast":0.2704626335,"Midwest":0.16,"South":0.1157232704},{"Year":2007,"All Rap Songs":0.1075672295,"Hot 100 Songs":0.0416666667,"East Coast":0.1061007958,"West Coast":0.2331838565,"Midwest":0.1142857143,"South":0.0941597139},{"Year":2008,"All Rap Songs":0.1034937376,"Hot 100 Songs":0.0545454545,"East Coast":0.1245136187,"West Coast":0.2222222222,"Midwest":0.1196581197,"South":0.0852173913},{"Year":2009,"All Rap Songs":0.0991401113,"Hot 100 Songs":0.0273972603,"East Coast":0.0668151448,"West Coast":0.2745098039,"Midwest":0.0609756098,"South":0.0797266515},{"Year":2010,"All Rap Songs":0.1120797011,"Hot 100 Songs":0.0481927711,"East Coast":0.1274509804,"West Coast":0.2915254237,"Midwest":0.1111111111,"South":0.0894308943},{"Year":2011,"All Rap Songs":0.1064156742,"Hot 100 Songs":0.05,"East Coast":0.1070615034,"West Coast":0.2286501377,"Midwest":0.0487804878,"South":0.0965147453},{"Year":2012,"All Rap Songs":0.1115230151,"Hot 100 Songs":0.0641025641,"East Coast":0.0685840708,"West Coast":0.2126696833,"Midwest":0.1136363636,"South":0.1003436426},{"Year":2013,"All Rap Songs":0.0929648241,"Hot 100 Songs":0.1449275362,"East Coast":0.1034482759,"West Coast":0.1714285714,"Midwest":0.036036036,"South":0.0950724638},{"Year":2014,"All Rap Songs":0.0886597938,"Hot 100 Songs":0.0625,"East Coast":0.125,"West Coast":0.233974359,"Midwest":0.038647343,"South":0.0888086643},{"Year":2015,"All Rap Songs":0.0930826793,"Hot 100 Songs":0.0514705882,"East Coast":0.0897832817,"West Coast":0.2077922078,"Midwest":0.0110497238,"South":0.0956887487},{"Year":2016,"All Rap Songs":0.0786303107,"Hot 100 Songs":0.085106383,"East Coast":0.0794297352,"West Coast":0.1947743468,"Midwest":0.0736842105,"South":0.0761261261},{"Year":2017,"All Rap Songs":0.068338438,"Hot 100 Songs":0.0625,"East Coast":0.0772727273,"West Coast":0.1630170316,"Midwest":0.0405117271,"South":0.0622185837},{"Year":2018,"All Rap Songs":0.0671466845,"Hot 100 Songs":0.0397553517,"East Coast":0.1050228311,"West Coast":0.1107544141,"Midwest":0.0493562232,"South":0.0615327929},{"Year":2019,"All Rap Songs":0.074370486,"Hot 100 Songs":0.0539215686,"East Coast":0.1180679785,"West Coast":0.152,"Midwest":0.0402414487,"South":0.0741869919}],
            sources:[{
                link: 'https://www.latimes.com/entertainment/music/posts/la-et-ms-hip-hop-photos-annenberg-20190529-story.html',
                text: 'Appleford, Steve. "A Panoramic History of Hip-hop, from the Bronx to Compton." Los Angeles Times. Los Angeles Times, 29 May 2019. Web. 01 May 2020.'
            },{
                link: 'https://genius.com/Bmxe-the-history-of-hip-hop-music-annotated',
                text: '"BMXE – The History of Hip Hop Music." Genius. Genius Lyrics, 24 Nov. 2014. Web. 01 May 2020.'
            },{
                link: 'https://tv.apple.com/us/movie/set-in-the-west-the-genesis-of-l-a-hip-hop/umc.cmc.6et5fmo9tolsev5b6caalnrmq',
                text: 'Set in the West: The Genesis of L.A. Hip Hop. Dir. Wolfgang Amadeuz. Perf. Alonzo Williams. Wolfgangs Production, 2016. 2019. Web. 05 May 2020.'
            },{
                link: 'https://www.blackpast.org/african-american-history/death-row-records-1992/',
                text: 'White, Davon. "Death Row Records (1992- )." Black Past. N.p., 12 Aug. 2019. Web. 05 May 2020.'
            },{
                link: 'https://www.wiblacity.org/images/reports/UCLA-Labor-Center_BlackWorkersinLACounty_report_March2017.pdf',
                text: 'Black Workers in LA County. Rep. UCLA Labor Center, Mar. 2017. Web. 05 May 2020.'
            },{
                link: 'https://www.rollingstone.com/music/music-album-reviews/the-chronic-250626/',
                text: 'Nelson, Havelock. "The Chronic." Rolling Stone. Rolling Stone, 25 June 2018. Web. 05 May 2020.'
            },{
                link: 'https://www.citybeat.com/music/music-feature/blog/21082455/cincinnati-police-cited-nwa-for-saying-bad-words-30-years-ago-this-summer',
                text: 'Breen, Mike. "30 Years Ago This Summer, N.W.A Got in Trouble With Cincinnati Police for Saying Bad Words." CityBeat Cincinnati. N.p., 14 Aug. 2019. Web. 05 May 2020.'
            },{
                link: 'https://www.nytimes.com/1995/06/01/us/coalition-challenges-time-warner-over-gangsta-rap.html',
                text: 'Landler, Mark. "Coalition Challenges Time Warner Over Gangsta Rap." The New York Times, 01 June 1995. Web. 05 May 2020.'
            },{
                link: 'https://timelines.latimes.com/rodney-king/',
                text: 'Los Angeles Times Staff. "Rodney King Beating Reverberated For years." Los Angeles Times, 1 Mar. 2016. Web. 05 May 2020.'
            },{
                link: 'https://www.npr.org/2017/04/26/524744989/when-la-erupted-in-anger-a-look-back-at-the-rodney-king-riots',
                text: 'Sastry, Anjuli, and Karen Grigsby Bates. "When LA Erupted In Anger: A Look Back At The Rodney King Riots." NPR. National Public Radio, 26 Apr. 2017. Web. 05 May 2020.'
            },{
                link: 'https://www.hrw.org/legacy/reports98/police/uspo73.htm',
                text: '"Los Angeles: The Christopher Commission Report." Shielded from Justice: Los Angeles: The Christopher Commission Report. Human Rights Watch, June 1998. Web. 05 May 2020.'
            },{
                link: 'https://www.latimes.com/entertainment/music/la-et-ms-hip-hop-rosecrans-20180118-htmlstory.html',
                text: 'Roberts, Randall. "Rolling down Rosecrans in Compton, L.A. Hip-hop\'s Main Street." Los Angeles Times, 27 Jan. 2018. Web. 05 May 2020.'
            },{
                link: 'https://www.history.com/this-day-in-history/tupac-shakur-is-shot',
                text: '"Tupac Shakur Is Shot." History.com. A&E Television Networks, 13 Nov. 2009. Web. 05 May 2020.'
            },{
                link: 'https://www.latimes.com/archives/la-xpm-1991-07-23-ca-55-story.html',
                text: 'Philips, Chuck. "N.W.A\'s Dr. Dre Target of Suit by Host of Rap Show : Pop Music: $22.7-million Lawsuit over an Alleged Assault Dramatizes the Debate over the Possible Relationship between Pop Lyrics and Violent Crimes against Women." Los Angeles Times, 23 July 1991. Web. 05 May 2020.'
            },{
                link: 'https://www.imdb.com/title/tt12027020/',
                text: 'LA Originals. Dir. Estevan Oriol. Perf. Estevan Oriol, Snoop Dogg, Mister Cartoon. LA Originals (2020). Netflix, 10 Apr. 2020. Web. 05 May 2020.'
            },{
                link: 'https://www.lamag.com/culturefiles/estevan-oriol/',
                text: 'Alonso, Andrea. "This Photographer Is the King of Capturing L.A.\'s Lowrider and Street Cultures." Los Angeles Magazine, 27 July 2018. Web. 05 May 2020.'
            },{
                link: 'https://www.rollingstone.com/music/music-album-reviews/get-rich-or-die-tryin-122197/',
                text: 'Hoard, Christian. "Get Rich Or Die Tryin\'." Rolling Stone, 25 June 2018. Web. 05 May 2020.'
            },{
                link: 'https://www.youtube.com/watch?v=oi5b_j-c5Ng',
                text: 'Special Report: "Gangsta Rap" Lyrics Under Attack. Columbia Broadcasting System, 1990s. YouTube, 1990. Web. 05 May 2020.'
            },{
                link: 'https://www.youtube.com/watch?v=GpPbYGJRg0Q',
                text: 'Tupac on Growing Up Poor, His Rise to Fame. Perf. Tupac Shakur and Tabitha Soren. YouTube. MTV News, 1995. Web. 05 May 2020.'
            },{
                link: 'https://www.pewresearch.org/wp-content/uploads/sites/3/2010/10/Race-2007.pdf',
                text: 'Optimism about Black Progress Declines: Blacks See Growing Values Gap Between Poor and Middle Class. Rep. N.p.: Pew Research Center, 13 November 2007. Web. 05 May 2020.'
            },{
                link: 'https://www.latimes.com/local/lanow/la-me-ln-kendrick-lamar-compton-key-to-the-city-20160213-story.html',
                text: 'Mejia, Brittny. "Kendrick Lamar, the Pride of Compton, Receives Key to the City Today." Los Angeles Times, 13 Feb. 2016. Web. 05 May 2020.'
            },{
                link: 'https://www.rollingstone.com/music/music-album-reviews/review-kendrick-lamar-moves-from-uplift-to-beast-mode-on-dazzling-damn-112650/',
                text: 'Weingarten, Christopher R. "Review: Kendrick Lamar Moves From Uplift to Beast Mode on Dazzling \'Damn.\'" Rolling Stone, 25 June 2018. Web. 05 May 2020.'
            },{
                link: 'https://www.nytimes.com/2018/04/16/arts/music/kendrick-lamar-pulitzer-prize-damn.html',
                text: 'Coscarelli, Joe. "Kendrick Lamar Wins Pulitzer in \'Big Moment for Hip-Hop\'." The New York Times. The New York Times, 16 Apr. 2018. Web. 05 May 2020.'
            },{
                link: 'https://www.apa.org/news/press/releases/2019/03/mental-health-adults',
                text: 'American Psychological Association. Mental Health Issues Increased Significantly in Young Adults Over Last Decade. American Psychological Association, 14 Mar. 2019. Web. 05 May 2020.'
            },{
                link: 'https://www.latimes.com/entertainment-arts/music/story/2019-12-10/lil-peep-juice-wrld-death-soundcloud-rap',
                text: 'Brown, August. "In Wake of Juice Wrld\'s Death, the Tragic Tale of SoundCloud Rap Star Lil Peep Looms Ever Larger." Los Angeles Times, 11 Dec. 2019. Web. 05 May 2020.'
            },{
                link: 'https://www.rollingstone.com/music/music-news/lil-peep-death-lawsuit-first-access-entertainment-932575/',
                text: 'Bernstein, Jonathan. "What the Messy Legal Battle Over Lil Peep\'s Death Reveals." Rolling Stone, 31 Dec. 2019. Web. 05 May 2020.'
            },{
                link: 'https://www.rollingstone.com/music/music-album-reviews/tyler-the-creator-igor-review-837811/',
                text: 'Schwartz, Danny. "Tyler the Creator\'s Surreal, Summery \'IGOR\'." Rolling Stone, 21 May 2019. Web. 05 May 2020.'
            },{
                link: 'https://www.forbes.com/sites/brittneynanton/2020/01/27/grammys-2020-tyler-the-creator-brings-down-the-stage-and-takes-home-rap-album-of-the-year/#2feec33d746c',
                text: 'Nanton, Brittney. "Grammys 2020: Tyler, The Creator Brings Down The Stage And Takes Home Rap Album Of The Year." Forbes Magazine, 27 Jan. 2020. Web. 05 May 2020.'
            },{
                link: 'https://www.latimes.com/projects/la-fi-construction-trump/',
                text: 'Kitroeff, Natalie. "Construction Workers in L.A. Make Less Now than 40 Years Ago. Here\'s Why." Los Angeles Times, 22 Apr. 2017. Web. 05 May 2020.'
            },{
                link: 'https://www.nytimes.com/2020/03/12/books/pharma-gerald-posner.html',
                text: 'Singer, Natasha. "How Big Pharma Grew Addicted to Big Profits." The New York Times, 12 Mar. 2020. Web. 05 May 2020.'
            },{
                link: 'https://www.kcet.org/shows/city-rising/the-history-of-south-central-los-angeles-and-its-struggle-with-gentrification',
                text: 'Sonksen, Mike. "The History of South Central Los Angeles and Its Struggle with Gentrification." KCET. N.p., 13 Sept. 2017. Web. 05 May 2020.'
            },{
                link: 'https://www.prisonpolicy.org/graphs/raceinc.html',
                text: 'Wagner, Peter. "U.S. Incarceration Rates by Race." Prison Policy Initiative, 2010. Web. 05 May 2020.'
            },{
                link: 'https://www.npr.org/2020/01/22/798756656/juice-wrld-cause-of-death-was-accidental-overdose',
                text: 'Romo, Vanessa. "Juice WRLD Cause Of Death Was Accidental Overdose." National Public Radio, 22 Jan. 2020. Web. 05 May 2020.'
            },{
                link: 'https://pitjournal.unc.edu/article/listen-story-banksy-tyler-creator-and-nihilism-urban-artistic-expression',
                text: 'Long, Duri. "Listen to the Story: Banksy, Tyler the Creator, and Nihilism in Urban Artistic Expression." The People, Idea, and Things (PIT) Journal, 2012. Web. 05 May 2020.'
            },{
                link: 'https://www.fastcompany.com/90245399/a-creator-in-bloom',
                text: 'Wilson, Mark. "Tyler, the Creator Is in Full Bloom." Fast Company, 18 Oct. 2018. Web. 05 May 2020.'
            },{
                link: 'https://www.vulture.com/2011/05/tyler_the_creator_visionary_ra.html',
                text: 'Abebe, Nitsuh. "Tyler, the Creator: Visionary Rapper or Obnoxious Teenager?" Vulture. New York Magazine, 10 May 2011. Web. 05 May 2020.'
            },{
                link: 'https://www.vice.com/en_us/article/bjqnna/the-new-generation-of-la-rap-is-changing-everything',
                text: 'MacAdams, Torii. "The New Generation of LA Rap Is Changing Everything." Vice, 03 Feb. 2019. Web. 05 May 2020.'
            },{
                link: 'https://www.newyorker.com/magazine/2018/08/20/the-return-of-west-coast-hip-hop',
                text: 'Battan, Carrie. "The Return of West Coast Hip-Hop." The New Yorker, 13 Aug. 2018. Web. 05 May 2020.'
            },{
                link: 'https://www.npr.org/2019/04/01/708664048/grammy-nominated-rapper-nipsey-hussel-shot-dead-in-los-angeles',
                text: 'Martin, Rachel, and Steve Inskeep. "Grammy-Nominated Rapper Nipsey Hussle Shot Dead In Los Angeles." National Public Radio, 01 Apr. 2019. Web. 05 May 2020.'
            },{
                link: 'http://web.stanford.edu/class/e297c/poverty_prejudice/mediarace/socialsignificance.htm',
                text: 'Blanchard, Becky. "The Social Significance of Rap & Hip-Hop Culture." Stanford University - Ethics of Development in a Global Environment (EDGE), 26 July 1999. Web. 05 May 2020.'
            }]
        }

        this.introRef = React.createRef()
        this.timelineRef = React.createRef()
        this.dataRef = React.createRef()
    }

    scrollIntro = () => window.scrollTo(0, this.introRef.current.offsetTop)
    scrollTimeIntro = () => window.scrollTo(0, this.timelineRef.current.offsetTop)
    scrollDataIntro = () => window.scrollTo(0, this.dataRef.current.offsetTop)

    render() {
        return (
            <div className='body'>
                <section className='home'>
                    <Fade cascade duration={1500}>
                        <div className='container py-5 outline'>
                            <h1 className='font-fancy noselect'>Los Angeles Rapped</h1>
                            <h2 className='font-crimson bold mt-5 mb-1 noselect'>An Interactive Archive</h2>
                            <h3 className='font-crimson mb-5 noselect'>Nate Coffin, Taha Mohamad, Miles Bernhard</h3>

                            <div className='row intro-set mt-5 pt-5'>
                                <div className='col'>
                                    <button onClick={this.scrollIntro} className='font-crimson bold intro-button'>Introduction</button>
                                </div>

                                <div className='col mt-3 mt-md-0 timeline-col'>
                                    <button onClick={this.scrollTimeIntro} className='font-crimson bold intro-button'>Timeline</button>
                                </div>

                                <div className='mt-3 mt-md-0 col'>
                                    <button onClick={this.scrollDataIntro} className='font-crimson bold intro-button'>Data Analyses</button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </section>


                <section ref={this.introRef} className='introduction'>
                    <div className='container'>
                        <Fade top>
                            <div>
                            <div className='row'>
                                <div className='col bg-white text-center'>
                                    <h1 className='font-fancy text-black'>Introduction</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='px-3 pt-3 outline no-t no-b-m no-b'>
                                    <p className='font-crimson text-justify'>As first year students at Claremont McKenna College, located 30 miles east of Los Angeles, we (Nate, Taha, Miles) soon found that our immediate circle of friends came from all walks of life while subconsciously possessing one commonality: a love for rap music. It soon became self-apparent that hip-hop culture had manifested itself within us in more ways than we were actively aware, from the shoes we wore, to the vernacular we understood, to the like-minded worldviews we shared. Hip-hop culture goes way beyond a popular genre of music, it is an energy. An energy that in its purest form excites social interaction, inspires ambition, and drives change. </p>
                                </div>
                            </div>
                            </div>
                        </Fade>

                        <div className='row p-0'>
                            <Fade left>
                                <div className='col-lg d-flex center-within outline p-0 text-center'>
                                    <img className='w-100 h-100' src={textIMG}/>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className='col-lg outline py-3'>
                                    <p className='font-crimson text-justify'>The Gould Center for Humanistic Studies, a research institute at CMC, provided us the opportunity to explore our passion for hip-hop culture through the Imagining Los Angeles humanities lab. This project aims to develop an understanding of the cultures development over time, and analyze the ways in which it has impacted the city of Los Angeles and the world in its entirety, both through qualitative and quantitative assessment.<br/><br/><a style={{textDecoration: 'italic'}}>A special thank you to Professor Moffett for his guidance in developing this project.</a></p>
                                    <img className='w-100' src={require('../media/gould.png')}/>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </section>

                <section ref={this.timelineRef} className='timeline-intro'>
                    <div className='container'>
                        <div className='row outline'>
                            <div className='col-md bg-white text-center'>
                                <h1 className='font-fancy text-black'>TIMELINE</h1>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md center-within outline no-t'>
                                <p className='font-crimson pt-3 text-white text-justify'>While the genre started in New York, hip-hop's rise to popularity can be largely attributed to West Coast and LA specifically. Hip-hop in Los Angeles spawned from the poverty-stricken streets of South Central LA in the 80s, in the trenches of a war on drugs and the peak of street gang activity. Over the past several decades, it has evolved into the epicenter of a multi-billionaire dollar industry that has influenced culture all over the world- extending beyond music to fashion, art, film, language, and social interaction as a whole. At its worst, hip-hop culture is seen to promote themes of violence, drug use, misogyny, and criminal activity. However, just as prevalently, the movement has undoubtedly been a catalyst for social activism, civil rights, and upward mobility. This project aims to track the genesis of hip-hop in Los Angeles and tell an untold story, as an archive of the prominent contributors to this movement and as a commentary on the effects it has had on society.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='timeline-content 1970-sec pt-5'>
                    <div className='container outline pb-5 no-r no-b no-t no-r-m no-b-m no-t-m'>
                        <div className='row no-l no-l-m outline'>
                            <div className='col-md  text-left'>
                                <h2 className='text-white font-fancy'>1970's</h2>
                                <h3 className='text-white font-crimson'>A Genre is Born</h3>
                            </div>
                            <div className='col-md'>

                            </div>
                        </div>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within'>
                                            <p className='font-crimson text-justify'>Hip-Hop music origins can first be traced to South Bronx New York, in the late 1960s. DJ Africa Bambataa. Kool Herc. While the term hip-hop had not yet been coined, “rap” was used to refer to the verse spoken over instrumentals. Term MC “master of ceremony” was used to refer to the person speaking over verse. Instrumental breaks between verses encouraged dancers to come out on the dance floor, hence the start of “break-dancing” occurred. Before long, the music became a cultural staple for black communities in New York City.</p>
                                        </div>
                                        <div className='col-lg text-center m-0'>
                                            <img className='outline timeline-img' src={require('../media/1970s/southbronx.jpg')}/>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                        <div className='row'>
                                            <div className='col-lg-auto text-center pt-3 m-0'>
                                                    <img className='outline timeline-img' src={require('../media/1970s/djlovebug.jpg')}/>
                                                    <h3 className='font-crimson py-2 text-center text-white bold'>DJ Lovebug</h3>
                                            </div>
                                            <div className='col-lg d-flex  center-within'>
                                                <div className=' mt-3 mt-md-0'>
                                                    <p className='font-crimson text-justify'>A Bronx native, Kevin Smith's career in hip hop began in 1971 as a record boy. Becoming influential in the music community as DJ Lovebug, he coined the term hip hop.</p>
                                                    <h3 className='font-crimson text-center text-italic py-3'>“HIP HOP is Higher Infinite Power in Healing Our People.”</h3>
                                                    <p className='font-crimson text-justify'>The genre was thought of as a form of spiritual inspiration. Its culture and essence served as the manifestation of energy. Hip hop goes beyond the music itself. 4 major elements: Graffiti, Emceeing, DJing, and dance.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within'>
                                            <p className='font-crimson text-justify'>While the culture began in Bronx block parties, its genesis occured on the West Coast.<br/><br/>The 70s in LA were a period of significant changes. The civil rights movement of the previous decade was still being absorbed, and there was widespread white-flight out of central Los Angeles and its public schools, towards more surrounding suburbs.  Meanwhile the party scene was rampant, and it was in Los Angeles where early hip-hop style dance originated, before the music itself even arrived.</p>
                                        </div>
                                        <div className='col-lg text-justify m-0'>
                                            <p className='font-crimson '>During this period there was constant cultural exchange between the black communities of New York and LA.<br/><br/>Party promoting was a common hustle, opening clubs and dance halls. Mostly with Disco and funk music from the late 70s into the 80s… As East Coast groups such as Sugar Hill released hip hop albums they began gaining popularity at these gatherings. → This is the point at which rap reached the West Coast.</p>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>
                        <LazyLoad height='60vh' offset={200}>
                            <div className='row mt-5 pb-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                        <div className='row'>
                                            <div className='col-lg text-center pt-3 m-0'>
                                                    <img className='outline timeline-img' src={require('../media/1970s/unclejam.jpg')}/>
                                                    <h3 className='font-crimson py-2 text-center text-white bold'>Uncle Jam's Army</h3>
                                            </div>
                                            <div className='col-lg d-flex  center-within'>
                                                <div className='text-center mt-3 mt-md-0'>
                                                    <p className='font-crimson text-justify'>Uncle Jams Army were the pioneers of West Coast hip hop, a grassroots party promoting group and hip hop crew that was founded by Rodger Clayton. They started out playing disco music but brought hip-hop to LA in 1979 through the New York group Sugarhill Records breakout album.<br/><br/>They collaborated with Lonzo Williams, sometimes referred to as the Godfather of LA Hip/Hop, who owned a local club, “Eve After Dark” and was a popular DJ. Lonzo recalls getting arrested simply for handing out party flyers on a street corner.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                </section>

                <section className='timeline-content 1980-sec p-0 m-0'>
                    <div className='container outline no-l no-b no-t no-l-m no-b-m no-t-m'>
                        <div className='row no-r no-r-m outline'>
                            <div className='col-md'>

                            </div>
                            <div className='col-md text-right'>
                                <h2 className='text-white font-fancy'>1980's</h2>
                                <h3 className='text-white font-crimson'>Electro-Hip/Hop Fusion Era</h3>
                            </div>
                        </div>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg text-center m-0 mb-4 mb-md-0'>
                                            <div>
                                                    <img style={{maxWidth: '45%'}}  className='outline timeline-img' src={require('../media/1980s/worldposter.jpg')}/>
                                                    <img style={{maxWidth: '45%'}} className='outline ml-0 ml-md-2 timeline-img' src={require('../media/1980s/turnoffthelights.jpg')}/>
                                            </div>
                                        </div>
                                        <div className='col-lg m-0 d-flex flex-column'>
                                            <p className='font-crimson pt-3 text-justify'>It was Lonzo Williams who brought in Dr. Dre and DJ Yella, who began fusing the electro-funk/ disco music of the 70s in with new hip/hop style in a collective called the “World Class Wreckin Cru”.<br/><br/>The rise of the World Class Wreckin Cru coincided with the introduction of new president of KDAY radio station, Greg Mack. He was living in South Central when he first arrived in LA and constantly heard rap music and saw it as an opportunity to boost the failing station's ratings. When he asked Lonzo Williams for DJs to mix on the show, he was sent Dr. Dre and DJ Yella.</p>

                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>

                                <div className='col'>
                                    <Fade left>
                                    <div className='row flex-row-reverse'>
                                        <div className='col-lg m-0 d-flex flex-column center-within'>
                                            <p className='font-crimson text-justify'>Now Los Angeles was home to the only radio station in the world playing solely hip/hop music 24 hours a day.</p>
                                                <img className='timeline-img outline' src={require('../media/1980s/kday.jpg')}/>
                                        </div>
                                        <div className='col-lg d-flex center-within pt-3 pt-lg-0 m-0'>
                                            <div className='outline' style={{width: '100%'}}>
                                                <ReactPlayer className='m-auto' width='99%' url='https://www.youtube.com/watch?v=RT9O-pUGsVM' />
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row mt-5'>

                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg text-center pt-3 pt-lg-0 m-0'>
                                            <h3 className='font-crimson text-center text-italic'>“I never heard one of my songs in New York, but I heard it out here.”</h3><p className='text-white pb-4 font-crimson bold text-center'>- Public Enemy’s Professor Griff<br/>(referring to KDAY)</p>
                                            <h3 className='font-crimson text-center text-italic'>“Remember KDAY?<br/>Weekends, Crenshaw, MLK?”</h3><p className='text-white pb-4 font-crimson bold text-center'>- 2Pac<br/>To Live & Die in L.A.</p>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>

                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                    </div>
                </section>

                <section className='timeline-content 1980-sec'>
                    <div className='container outline pb-5 no-r no-b no-t no-r-m no-b-m no-t-m'>
                        <div className='row no-l no-l-m outline'>
                            <div className='col-md  text-left'>
                                <h2 className='text-white font-fancy'>Gangsta Rap</h2>
                                <h3 className='text-white font-crimson'>N.W.A. - "The World's Most Dangerous Group"</h3>
                            </div>
                        </div>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <p className='font-crimson text-justify'>Gangster rap rose from the depths of the exacerbated struggles for low-income minority people in Los Angeles that characterized the 80s. The crack cocaine epidemic devastated these communities and they were targeted by aggressive policies from the War on Drugs including mandatory minimum sentencing. To make matters worse, the economic landscape shifted with many unionized manufacturing jobs moving offshore, decreasing personal incomes, vanishing affordable housing, severe reduction of welfare programs.</p>
                                            <img className='outline timeline-img' src={require('../media/1980s/crackhouse.jpeg')}/>
                                            <p className='font-crimson text-center text-italic py-3 m-auto'>Daryl Gates (center) with Former First Lady Nancy Reagan (right) counting bullet holes in a suspected South L.A. crackhouse</p>
                                        </div>
                                        <div className='col-lg m-0 text-center'>
                                            <p className='font-crimson text-justify'>Drug addiction and gang violence were running rampant, and the L.A.P.D. responded with militant levels of force. The L.A.P.D. Chief, Daryl Gates, broadly expanded the police force in accordance with the War on Drugs. He co-founded S.W.A.T., as well as founded Community Resources Against Street Hoodlums (CRASH) units, that were tasked specifically with targeting gangs. This increased law enforcement meant suspected drug houses getting battery-rammed and raided regularly, and the night skies of Southern Los Angeles were constantly patrolled via helicopter.</p>
                                            <img className='outline timeline-img' src={require('../media/1980s/homeless.jpeg')}/>
                                            <p className='font-crimson text-center text-italic pt-3'>“The disappearance of manufacturing jobs from the Los Angeles area during the latter half of the 20th century devastated its workforce, and deindustrialization had a disproportionately negative effect on Black communities.”<br/><a target='_blank' href='https://www.wiblacity.org/images/reports/UCLA-Labor-Center_BlackWorkersinLACounty_report_March2017.pdf'>-UCLA Labor Center</a></p>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg mb-5 mb-lg-0 d-flex center-within'>
                                                <p className='font-crimson m-auto text-left'>“At night I see your light through my bedroom window
                                                    <br/>But I ain't got shit but the pad and pencil
                                                    <br/>I can't wait till I hear you say
                                                    <br/>"I'm going down mayday mayday." I'm gonna clown
                                                    <br/>Cause everytime that the pigs have got me
                                                    <br/>y'all rub it in with the flying Nazi
                                                    <br/>military force, but we don't want ya
                                                    <br/>Standin' on my roof with the rocket launcher”
                                                    <br/><br/>- Ghetto Bird by Ice Cube (1993)
                                                </p>
                                        </div>
                                        <div className='col-lg text-center m-0'>
                                            <img className='outline timeline-img' src={require('../media/1980s/rams.jpg')}/>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <img className='outline timeline-img' src={require('../media/1980s/justsayno.jpg')}/>
                                            <p className='font-crimson text-center w-75 text-italic py-3 m-auto'>Former First Lady Nancy Reagan advocating for D.A.R.E. America's "Just Say No" campaign</p>
                                        </div>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <p className='font-crimson text-justify'>Gates was also responsible for the creation of D.A.R.E. America, an educational program implemented in Los Angeles’ public schools that aimed to inform youth about the dangers of drugs, alcohol and violence. The program was extremely unsuccessful despite still existing today, as it has seen a 73% decrease in taxpayer funding. The issues ravaging these communities ran way deeper than a lack of education, rather it was a systemic failure to provide them the resources necessary to make positive choices.</p>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col m-0 text-center'>
                                            <h3 className='font-crimson text-center text-italic w-75 m-auto'>“Boys who’d gotten down to Uncle Jamm’s Army’s 'Dial-A-Freak' were getting mowed down. Gangsta rap was born from this gruesome miasma.”</h3><p className='text-white font-crimson bold text-center'>- <a href='https://www.vice.com/en_us/article/bjqnna/the-new-generation-of-la-rap-is-changing-everything' target='_blank'>VICE</a></p>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <img style={{width: '65%'}} className='outline' src={require('../media/1980s/rhymepays.jpg')}/>
                                            <p className='font-crimson mt-5 text-justify'> Ice-T, born as Tracy Marrow, is known as one of the founders of gangsta rap. The rapper moved from Newark, New Jersey to Los Angeles at age 12 and attended Crenshaw High School. He was also associated with Uncle Jamm’s Army early in his career, and in 1987 he released his debut studio album Rhyme Pays- selling over 700K copies.</p>
                                        </div>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-left'>“A child was born in the east one day
                                                    <br/>Moved to the west coast after his parents passed away
                                                    <br/>Never understood his fascination with rhymes or beats
                                                    <br/>In poetry, he was considered elite
                                                    <br/>Became a young gangster in the streets of L.A.
                                                    <br/>Lost connections with his true roots far away
                                                    <br/>But no matter the job or crime
                                                    <br/>He never lost his hardcore obsession to rhyme
                                                    <br/>New Yorks hip hop movement broke loose
                                                    <br/>D. J's cut records, raps had the juice”
                                                </p>
                                                <p className='font-crimson text-italic mt-3 text-center'>
                                                -Ice-T in the opening lines of Rhyme Pays<br/><br/>He pays tribute in recognition of the East Coast as the birthplace of both hip-hop and himself.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <img className='outline timeline-img' src={require('../media/1980s/nwe.jpg')}/>
                                            <p className='font-crimson text-center text-italic py-3 m-auto'>N.W.A.<br/>(Left to Right) Ice Cube, Dr. Dre, Eazy-E, Yella, M.C. Ren</p>
                                        </div>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <p className='font-crimson text-justify'>NWA, N***** With Attitude, consisted of Eazy-E, Dr. Dre, Ice Cube, MC Ren, DJ Yella, and Arabian Prince. They were based out of Compton, a predominantly low-income minority city situated south of Downtown Los Angeles. The group formed in 1987 and soon created Ruthless Records, managed by Jerry Heller. Heller attended USC and had established himself in the music industry working with artists such as Elton John and representing Journey, Van Morrison, and Ike & Tina Turner.</p>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg order-lg-1 m-0 d-flex center-within text-center'>
                                            <div>
                                                <div className='outline' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='99%' height='100%' controls  url={require('../media/1980s/eazye.mp4')} />
                                                </div>
                                                <p className='font-crimson text-center text-italic py-3 m-auto'>"Some people call him the godfather of gangsta rap, please welcome Compton's own...Eazy E."</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex center-within text-center'>
                                            <div>
                                                <img style={{width: '65%'}} className='outline' src={require('../media/1980s/straightouttacompton.jpg')}/>
                                                <p className='font-crimson mt-4 text-justify'>Their riotous music was full of anti-police rhetoric in response to the War on Drugs that was ravaging their hometown of Compton.<br/><br/>In 1988, N.W.A. released their infamous debut album, “Straight Outta Compton”. The project consisted of music reflecting the frustration within protests, conveyed most earnestly on their famous track, “Fuck Tha Police.”</p>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg my-4 mt-lg-0 text-center'>
                                            <div>
                                                <p style={{display: 'inline-block'}} className='font-crimson outline p-4 m-auto text-italic text-left'>“Fuck the police comin' straight from the underground
                                                    <br/>A young n**** got it bad 'cause I'm brown
                                                    <br/>And not the other color so police think
                                                    <br/>They have the authority to kill a minority”
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <div>
                                                <div className='outline' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=u31FO_4d9TY' />
                                                </div>
                                                <p className='font-crimson text-center text-italic py-3 m-auto'>"Express Yourself" Music Video</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex center-within text-center'>
                                            <div>
                                                <p className='font-crimson text-justify'>In addition to its protestful tone, the album also exhibited impressive lyricism and storytelling on its tracks. On “Express Yourself”, one of the few “clean” songs made by the group, Dr. Dre boasts of N.W.A’s imminent rise to fame while promoting the importance of artistic originality and nonconformity.<br/><br/>NWA became the voice for the perspectives of young minorities growing up in inner-city communities in the greater Los Angeles area. The controversial group came under national scrutiny as their music made waves far beyond the crime-ridden streets of Compton and into the ears of white suburban dwellers.<br/><br/>NWA was soon attributed by the media as the pioneers of the genre, “gangsta rap”. Decades later, in 2015, Ice Cube described their music to Rolling Stone as, “reality rap.”</p>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center order-lg-1'>
                                            <img className='outline timeline-img' src={require('../media/1980s/fbi.png')}/>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex center-within text-center'>
                                            <p className='font-crimson text-justify'>Throughout the group’s rise to fame, countless entities attempted to censor them, including the F.B.I.. They proved to be champions of free speech and used these disputes to further the attention drawn to the oppressive state of affairs in Compton and black-America as a whole, while also catapulting them to fame.<br/><br/>On June 18th, 1989, N.W.A. members MC Ren and Ice Cube <a href='https://www.citybeat.com/music/music-feature/blog/21082455/cincinnati-police-cited-nwa-for-saying-bad-words-30-years-ago-this-summer' target='_blank'>received citations for disorderly conduct and "profane" lyricism by Cincinnati law enforcement</a>. Soon after in Detroit, <a target='_blank' href='https://www.metrotimes.com/city-slang/archives/2015/08/17/the-real-story-behind-nwas-straight-outta-compton-detroit-riot'>local law enforcement warned against N.W.A. performing "Fuck Tha Police".</a></p>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                </section>

                <section className='timeline-content 1990-sec p-0 m-0'>
                    <div className='container outline pb-5 no-l no-b no-t no-l-m no-b-m no-t-m'>
                        <div className='row no-r no-r-m outline'>
                            <div className='col-md'>

                            </div>
                            <div className='col-md text-right'>
                                <h2 className='text-white font-fancy'>1990's</h2>
                                <h3 className='text-white font-crimson'>Evolving Past N.W.A.</h3>
                            </div>
                        </div>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg d-flex center-within m-0 mb-4 mb-md-0'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'> Ice Cube Leaves N.W.A.</h3>
                                                <p className='font-crimson mt-3 text-justify'>In December 1989, Ice Cube, the group's lyricist, left N.W.A. to pursue a solo career after a falling out over the terms of his contract. He felt that manager Jerry Heller was unfairly profiteering off their commercial success and felt significantly undervalued. On his diss track “No Vaseline”, he insinuates that the relationship between Heller and the remaining group members is metaphoric of slave and master, and accuses them of forgetting their roots due to their new affluent lifestyle.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg m-0 text-center'>
                                        <div style={{display: 'inline-block'}} className='outline p-3'>
                                            <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>“So don't believe what Ren say
                                                <br/>'Cause he's goin' out like Kunte Kinte
                                                <br/>But I got a whip for ya Toby
                                                <br/>Used to be my homie, now you act like you don't know me
                                                <br/>It's a case of divide-and-conquer
                                                <br/>'Cause you let a Jew break up my crew
                                                <br/>House n**** gotta run and hide
                                                <br/>Yellin' Compton, but you moved to Riverside”
                                            </p>
                                            <p className='text-center font-crimson text-white mt-2'>"No Vaseline"<br/>(released 1991)</p>
                                        </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5 mb-3 mb-md-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>

                                        <div className='col-lg-auto m-0 text-center'>
                                            <img style={{height: '250px'}} className='outline' src={require('../media/1990s/boyz.jpg')}/>
                                        </div>
                                        <div className='col-lg d-flex center-within m-0 mb-4 mb-md-0'>
                                            <div>
                                                <h3 className='font-crimson mt-3 mt-lg-0 text-left bold'> Boyz-N-The-Hood</h3>
                                                <p className='font-crimson mt-3 text-justify'>In 1991, Ice Cube brought the hardships of Compton to a new creative medium, major motion picture, in the award-winning movie "Boyz-N-The-Hood".<br/><br/>The <a href='imdb.com/title/tt0101507/' target='_blank'>critically acclaimed film</a> featured Ice Cube as “Doughboy”, one of the lead roles. It tells a story of a group of friends growing up in South Central LA amidst the gang violence and radical policing of the 80s. Doughboy’s younger brother, Ricky, is a star player for the Crenshaw High School football team with dreams of receiving a scholarship to play at USC. Ricky is tragically murdered by a senseless act of street violence, and Doughboy (Ice Cube) carries out retribution against his murderer, only to be killed himself weeks later. The story told in the film brought attention to the kind of tragedies that were occuring in South Central LA and has become a common point of reference by more contemporary rappers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5 mt-2 mt-md-5'>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col m-0 text-center'>
                                            <h3 className='font-crimson text-center text-italic w-75 mww-100 m-auto'>“Ridin' 'round wit' the same shotgun that shot <a style={{textDecoration: 'underline'}}>Ricky</a><br/>Lil' n**** should've zig-zagged, then he got his back wet”</h3><p className='mt-3 text-white font-crimson bold text-center'>-Vince Staples on 'Norf Norf'</p>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>

                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>
                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5 mt-3'>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col m-0 text-center'>
                                            <h3 className='font-crimson text-center text-italic w-75 mww-100 m-auto'>“21-Savage not <a style={{textDecoration: 'underline'}}>Boyz N The Hood</a> but I pull up on you<br/>Shoot yo' ass in the back”</h3><p className='mt-3 text-white font-crimson bold text-center'>-21 Savage on 'No Heart'</p>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>

                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg d-flex center-within m-0 mb-4 mb-md-0'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>The Founding of Death Row</h3>
                                                <p className='font-crimson mt-3 text-justify'>In 1991, Dr. Dre left N.W.A. due to a lack of financial compensation, subsequently founding Death Row Records with Suge Knight.<br/><br/>With the fall of N.W.A. came the rise of Death Row Records. In 1991 Dr. Dre and D.O.C. found themselves in a feud with Jerry Heller and Eazy-E, trying to get released from their contracts. Suge Knight, founder of Death Row, resorted to extreme measures to free the artists, including showing up at the office of Ruthless Records brandishing a baseball bat, and informing Eazy-E that he knew where his mother lived.<br/><br/>Ultimately Knight’s scare tactics succeeded in liberating Dr. Dre from his commitment to Ruthless, but not without a deal being made where a large portion of royalties from Dre’s music would be paid back to Ruthless Records. The rappers’ animosity is evident through the music that ensued.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg-auto m-0 text-center'>
                                            <img className='outline timeline-img' src={require('../media/1990s/dresuge.png')}/>
                                            <p className='font-crimson text-center w-75 text-italic py-3 m-auto'>Dr. Dre (left) and Suge Knight (right)</p>
                                            <div className='outline w-100 py-2 d-flex flex-column center-within'>
                                                <h3 className='font-crimson text-center text-italic'>“It was like 'The Godfather...'”</h3>
                                                <p className='m-0 mt-1 text-white font-crimson bold text-center'>- Ruthless Records lawyer, Michael Borbeau</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg text-center'>
                                            <div style={{display: 'inline-block'}} className='p-3 m-auto'>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    “The hoods you threw up with, n***** you grew up with
                                                    <br/>Don't even respect your ass
                                                    <br/>That's why it's time for the doctor to check your ass, n****
                                                    <br/>Used to be my homie, used to be my ace
                                                    <br/>Now I wanna slap the taste out ya mouth
                                                    <br/>Make ya bow down to the Row”
                                                </p>
                                                <p className='text-center font-crimson text-white bold m-0 mt-3'>- Dr. Dre on his track 'Fuck wit Dre Day (and Everyone is Celebrating)'</p>

                                                <div className='outline mt-4' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='99%' height='100%' controls  url={require('../media/1990s/dissingdre.mp4')} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg my-4 my-m-0 d-flex center-within text-center'>
                                            <div className='outline p-3' style={{display: 'inline-block'}}>
                                                <p className='text-center font-crimson text-white bold m-0 mb-3'>Eazy E’s Response on Real Muthaphuckkin G’s:</p>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    “Damn E, they tried to fade you on Dre Day
                                                    <br/>But Dre Day only met Eazy's pay day”
                                                </p>
                                                <p className='text-justify font-crimson text-white bold m-0 my-3'>This line is a direct reference to the money that Dr. Dre was obligated to pay back to Ruthless.</p>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    “The Dresta, smoother then a bitch but portray the role of
                                                    <br/>Gangsta, ain't broke a law in ya life, yet every time you rap
                                                    <br/>Ye yap about the guns and knifes, just take a good look
                                                    <br/>Afta n****, and you'll capture the fact, that the rasta is
                                                    <br/>Simply just an actor, who mastered the bang and the slang
                                                    <br/>And the Mental, of n****z in Compton, Wattz, and South Central
                                                    <br/>Never ever once have you ran with the turf, but yet in every verse
                                                    <br/>Claim you used to do the dirt, but tell me who's a witness”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                </section>

                <section className='timeline-content 1990-sec p-0 m-0'>
                    <div className='container outline pb-5 no-r no-b no-t no-r-m no-b-m no-t-m'>
                        <div className='row no-l no-l-m outline'>
                            <div className='col-md  text-left'>
                                <h2 className='text-white font-fancy'>Los Angeles Riots</h2>
                                <h3 className='text-white font-crimson'>A defining moment for early '90s LA</h3>
                            </div>
                        </div>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <h3 className='font-crimson text-left bold'>March 3rd, 1991</h3>
                                            <p className='font-crimson mt-2 mb-4 text-justify'>American construction worker Rodney King was driving on Interstate-210 when police attempted to pull him over. A high speed chase ensued that ended with him stopping in a residential area. Four police officers proceeded to taze King and brutally beat him, making no attempt to handcuff him until he was completely still laying on the ground. The beating was recorded by a bystander and sparked national controversy within days.</p>
                                            <img className='outline timeline-img' src={require('../media/1990s/rodney.jpg')}/>
                                            <p className='font-crimson text-center text-italic py-3 m-auto'>A still from video of LAPD officers beating Rodney King</p>
                                        </div>
                                        <div className='col-lg m-0 text-center'>
                                            <h3 className='font-crimson text-left bold'>March 14th, 1991</h3>
                                            <p className='font-crimson mt-2 mb-4 text-justify'>The four officers seen attacking King in the video are charged with felony assault and other offenses by a Los Angeles County Grand Jury. More than a dozen officers also seen in the video standing by and watching the beating were not charged.</p>
                                            <h3 className='font-crimson text-left bold'>March 21st, 1991</h3>
                                            <p className='font-crimson mt-2 mb-4 text-justify'>The LAPD officers plead not guilty.</p>
                                            <img className='outline timeline-img' src={require('../media/1990s/mugshots.jpg')}/>
                                            <p className='font-crimson text-center text-italic py-3 m-auto'>(Left to right) Sgt. Stacey C. Koon, Officers Theodore J. Briseno, Timothy E. Wind, and Laurence M. Powell</p>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row flex-row-reverse'>
                                        <div className='col-lg m-0 text-center'>
                                            <h3 className='font-crimson text-left bold'>July 9th, 1991</h3>
                                            <p className='font-crimson mt-2 mb-4 text-justify'>As a result of the beating, the Christopher Commission, led by eventual U.S. Secretary of State Warren Christopher, highlighted the police brutality problems within the L.A.P.D.</p>
                                            <img className='outline timeline-img' src={require('../media/1990s/christopher.jpg')}/>
                                            <p className='font-crimson text-center text-italic py-3 m-auto'>Police Chief Daryl F. Gates (right) receives a copy of the Christopher Commission report from Warren Christopher (left)</p>
                                        </div>
                                        <div className='col-lg d-flex center-within m-0 text-center'>
                                            <div>
                                                <img className='outline timeline-img' src={require('../media/1990s/gatestwo.jpeg')}/>
                                                <p className='font-crimson text-center text-italic py-3 m-auto'>LAPD Chief Gates cheered on by supporters at the Police Academy only a few weeks after the videotape of King was released.</p>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col m-0 text-center'>
                                            <h2 className='font-crimson text-center my-5'>The following quotes are <a href='https://www.hrw.org/legacy/reports98/police/uspo73.htm#P2030_509594' target='_blank'>verbatim from the Christopher Commission</a>.</h2>
                                            <h3 className='font-crimson text-center text-italic m-auto'>“There is a significant number of officers in the LAPD who repetitively use excessive force against the public and persistently ignore the written guidelines of the department regarding force.”</h3>
                                            <p className='font-crimson outline p-3 text-justify my-5'>“The failure to control these officers is a management issue that is at the heart of the problem. The documents and data that we have analyzed have all been available to the department; indeed, most of this information came from that source. The LAPD's failure to analyze and act upon these revealing data evidences a significant breakdown in the management and leadership of the Department. The Police Commission, lacking investigators or other resources, failed in its duty to monitor the Department in this sensitive use of force area. The Department not only failed to deal with the problem group of officers but it often rewarded them with positive evaluations and promotions.”</p>
                                            <h3 className='font-crimson text-center text-italic m-auto'>“We recommend a new standard of accountability....Ugly incidents will not diminish until ranking officers know they will be held responsible for what happens in their sector, whether or not they personally participate.”</h3>
                                            <p className='font-crimson outline p-3 text-justify my-5'>“The commission highlighted the problem of "repeat offenders" on the force, finding that of approximately 1,800 officers against whom an allegation of excessive force or improper tactics was made from 1986 to 1990, more than 1,400 had only one or two allegations. But 183 officers had four or more allegations, forty-four had six or more, sixteen had eight or more, and one had sixteen such allegations. Generally, the forty-four officers with six complaints or more had received positive performance evaluations that failed to record "sustained" complaints or to discuss their significance.”</p>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>April 29th, 1992</h3>
                                                <p className='font-crimson mt-2 mb-4 text-justify'>The trial is controversially held in Ventura County (where many officers were from) instead of Downtown L.A., with a jury consisting of no African-Americans. Rodney King himself was never called to the stand. With the declaration of a mistrial, the officers are acquitted of almost all charges; Officer Powell is charged with a single account of assault.<br/><br/>Hours later, Los Angeles Mayor Tom Bradley conveyed outrage at the result, but predominantly black South L.A. expresses sentiments beyond words. LAPD responds with its characteristic militarized response.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg  m-0 text-center'>
                                            <div>
                                                <img style={{width: '100%'}} className='outline' src={require('../media/1990s/fire.jpg')}/>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <div>
                                                <img style={{width: '100%'}} className='outline' src={require('../media/1990s/lapd.png')}/>
                                            </div>
                                        </div>
                                        <div className='col-lg m-0 mt-5 mt-lg-0 text-center'>
                                            <div>
                                                <img style={{width: '100%'}} className='outline' src={require('../media/1990s/fire2.jpg')}/>
                                                <p className='font-crimson text-center text-italic pt-3'>“To get some respect we had to tear this muthafucka up”<br/><a style={{fontStyle: 'normal', fontWeight: '700'}}>- Ice Cube</a></p>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <div>
                                                <img style={{width: '100%'}} className='outline' src={require('../media/1990s/riotarrest.jpg')}/>
                                                <p className='font-crimson mt-2 text-center bold'>Over the course of a few days, 60 people were killed, around 12,000 were arrested, and the city incurred over $1 billion in damage.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg m-0 mt-4 mt-lg-0 d-flex flex-column center-within text-center'>
                                            <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    “Fuck the police, yeah!
                                                    <br/>Fuck the police, for Daryl Gates.
                                                    <br/>Fuck the police, for Rodney King.
                                                    <br/>Fuck the police, for my dead homies.”
                                                </p>
                                                <p className='text-center font-crimson text-white bold m-0 mt-3'>- Ice-T on his controversial track 'Cop Killer'</p>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0  text-center'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>June 28th, 1992</h3>
                                                <p className='font-crimson mt-2 mb-4 text-justify'>Nearly two months after the acquittal of a majority of the LAPD officers in Rodney King's case, mounting pressure forces LAPD Chief Daryl F. Gates to resign after serving in the position for 14 years.</p>
                                                <h3 className='font-crimson text-left bold'>August 5th, 1992</h3>
                                                <p className='font-crimson mt-2 mb-4 text-justify'>Federal prosecutors launch an indictment against the four LAPD members involved in the beating of Rodney King's case, bringing potential civil rights violation charges against the officers.</p>
                                                <h3 className='font-crimson text-left bold'>April 19th, 1994</h3>
                                                <p className='font-crimson mt-2 mb-4 text-justify'>More than 3 years after he was brutally beaten, Rodney King was awarded compensation from the city of Los Angeles by a jury in federal court.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg d-flex center-within m-0 text-center'>
                                            <img style={{width: '100%'}} className='outline' src={require('../media/1990s/resign.jpg')}/>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                </section>

                <section className='timeline-content 1990-sec p-0 m-0'>
                    <div className='container outline pb-5 no-l no-b no-t no-l-m no-b-m no-t-m'>
                        <div className='row no-r no-r-m outline'>
                            <div className='col-md text-right'>
                                <h2 className='text-white font-fancy'>Death Row Rises</h2>
                                <h3 className='text-white font-crimson'>The establishment of classics</h3>
                            </div>
                        </div>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0  text-center'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>New Public Attention</h3>
                                                <p className='font-crimson mt-2 mb-4 text-justify'>In the wake of the riots, Los Angeles and its crew of gangster rappers were in the national spotlight, and the music did not disappoint. At the end of 1992 Dr. Dre released his first album under Death Row, The Chronic, which was highly successful with the help of a $10 million distribution deal with Nor Cal’s Interscope Records. The Chronic received universal praise from critics and cemented the G-Funk style (fusion of funk and gangster rap) as the sound characteristic of 90s West Coast hip-hop. The album had numerous features, but most notably it marked the emergence of Snoop Dogg, the rapper out of Long Beach. Snoop Dogg was friends with Warren G, another rapper from Long Beach, who was step-brothers with Dr. Dre.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg d-flex center-within m-0 text-center'>
                                            <div className='col'>
                                                <img style={{width: '100%'}} className='outline' src={require('../media/1990s/deathrow.jpg')}/>
                                            </div>
                                            <div className='col'>
                                                <img style={{width: '100%'}} className='outline' src={require('../media/1990s/thechronic.jpg')}/>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0  text-center'>
                                            <div>
                                                <div className='outline' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=MDOdVdS8Z1A' />
                                                </div>
                                                <p className='font-crimson text-center text-italic py-3 m-auto'>"Ain't Nuthin But a G Thang" Music Video</p>
                                            </div>
                                        </div>
                                        <div className='col-lg d-flex center-within m-0 text-center'>
                                            <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    “One, two, three and to the fo'
                                                    <br/>Snoop Doggy Dogg and Dr. Dre is at the do'
                                                    <br/>Ready to make an entrance, so back on up
                                                    <br/>('Cause you know about to rip shit up)
                                                    <br/>Gimme the microphone first, so I can bust like a bubble
                                                    <br/>Compton and Long Beach together, now you know you in trouble
                                                    <br/>Ain't nothin' but a "G" thang, baby!”
                                                </p>
                                                <p className='text-center font-crimson text-white bold m-0 mt-3'>- Snoop Dogg on the hit song “Ain't Nuthin But a G Thang”</p>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg d-flex center-within m-0 text-center'>
                                            <div>
                                                <div className='outline' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='99%' height='100%' controls  url={require('../media/1990s/snooppac.mp4')} />
                                                </div>
                                                <p className='font-crimson text-center text-italic py-3 m-auto'>A reporter comments on and predicts the success of Snoop Dogg's breakout album "Doggystyle" in addition to other Death Row artists.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg m-0  text-center'>
                                            <div>
                                                <div className='outline' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=DI3yXg-sX5c' />
                                                </div>
                                                <p className='font-crimson text-center text-italic py-3 m-auto'>Snoop Dogg's "Gin and Juice"</p>
                                            </div>
                                        </div>


                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within  text-center'>
                                            <div>
                                                <p className='font-crimson mt-2 mb-4 text-justify'>As the music changed, so too, did Dr. Dre. The artist who started out dancing and mixing to disco and years prior rapped on “Express Yourself”, “I don’t smoke weed or cess/ Cause its known to give a brother brain damage”, was not so innocent anymore. He was business partners with Suge Knight, who was known to be involved with shady business dealings, and controversy followed them seemingly everywhere they went. <a target='_blank' href='https://www.latimes.com/archives/la-xpm-1991-07-23-ca-55-story.html'>Dre also assaulted a female video host and was involved in numerous other violent altercations.</a><br/><br/>The star studded lineup of LA rappers found themselves at the top of the music industry, but faced more and more scrutiny from the news media and even <a href='https://www.nytimes.com/1995/06/01/us/coalition-challenges-time-warner-over-gangsta-rap.html' target='_blank'>US Congress</a>.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg d-flex center-within m-0 text-center'>
                                            <div>
                                                <div className='outline' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='99%' height='100%' controls  url={require('../media/1990s/1993gangsta.mp4')} />
                                                </div>
                                                <p className='font-crimson text-center text-italic py-3 m-auto'>American Journalist Brian Williams covers the issue on NBC News</p>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>
                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0  text-center'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>2Pac</h3>
                                                <p className='font-crimson mt-2 mb-4 text-justify'>2Pac, born Tupac Amaru Shakur, is accredited as one of, if not the, greatest rappers in history. While he was born in Harlem, New York, the rapper moved to Oakland as a teenager and is considered one of the faces of the West Coast rap tradition. Both of his parents were members of the Black Panther party, and he was a proponent of communism, black nationalism, and egalitarianism movements. Growing up, he said his mother was very loving but struggled with addiction to crack cocaine, and he was never certain of who his biological father was. 2Pac was known for deeply philosophical lyricism, and his music is remembered as “conscious/political hip-hop”.</p>
                                            </div>
                                            <div>
                                                <div className='outline' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='99%' height='100%' controls  url={require('../media/1990s/2pac.mp4')} />
                                                </div>
                                                <p className='font-crimson text-center text-italic py-3 m-auto'>2Pac interviewed as he walks down Venice Beach, California</p>
                                            </div>
                                        </div>
                                        <div className='col-lg m-0  text-center'>
                                            <div>
                                                <h3 className='font-crimson no-select text-black text-left bold'>2Pac</h3>
                                                <p className='font-crimson mt-2 mb-4 text-justify'>After 2Pac was sentenced to 4 and a half years in prison in 1995 on sexual assault charges, Suge Knight paid his bail and signed him to Death Row. Shortly after, Pac and Dr. Dre released the single, “California Love”, a classic West Coast party anthem.</p>
                                                <div className='outline' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=HaTgQkG3Mmc' />
                                                </div>
                                                <p className='font-crimson text-center text-italic py-3 m-auto'>"California Love" by 2Pac and Dr. Dre</p>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>All Eyez on Me</h3>
                                                <p className='font-crimson mb-4 text-justify'>Following 2Pac's release from prison in 1995, L.A. Times Journalist Chuck Philips interviewed him about his upcoming album, which would eventually be named All Eyez on Me. Pac said that he recorded 13 tracks over the course of just 4 days following his release.</p>
                                                <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                    <p className='font-crimson text-italic text-justify'>
                                                        “This album is a reaction to the backlash from C. Delores Tucker, Bob Dole, all those people that kept sweating me about the music. Now, I feel as though this album is something for them to sweat. Before my album wasn’t even bad and they was calling me a gangster and just messing up my whole credit line and ruining my reputation. Look at my songs. On the first album, ‘Brenda’s Got A Baby.’ On the second album, ‘Keep Ya Head Up.’ On the third album, ‘Dear Mama.’ Where is the killer music? Where is the make-a-kid-wanna-jump-off-a-bridge shit? I just don’t see it.”
                                                    </p>
                                                    <p className='text-center font-crimson text-white bold m-0 mt-2'><a href='https://www.latimes.com/local/la-me-tupac-qa-story.html' target='_blank'>- Tupac Shakur</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-5 mt-lg-0 d-flex center-within text-center'>
                                            <img className='outline timeline-img m-auto' src={require('../media/1990s/alleyez.jpg')}/>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div>
                                                <p className='font-crimson mb-4 text-justify'>The album title fit true to size, as all eyes really were on 2Pac following his release from prison, signing with Death Row, and his leadership of the West Coast in hip-hop’s nationwide turf war. The album featured hard-hitting, forbidding beats while Pac’s authoritative delivery asserts abhorrence for his rivals.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg m-0 text-center'>
                                        <img className='outline timeline-img' src={require('../media/1990s/sugetupac.jpg')}/>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 order-lg-1 text-center'>
                                            <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    Spittin' at adversaries, envious and after me
                                                    <br/>I'd rather die before they capture me, watch me bleed
                                                    <br/>Mama, come rescue me, I'm suicidal, thinkin' thoughts
                                                    <br/>I'm innocent so there'll be bullets flyin' when I'm caught (Shoot)
                                                    <br/>Fuck doin' jail time, better day, sacrifice
                                                    <br/>Won't get a chance to do me like they did my n**** <a style={{textDecoration: 'underline'}}>Tys</a>
                                                </p>
                                                <p className='text-center font-crimson text-white bold m-0 mt-3'>- Tupac on "Ambitionz Az a Ridah"</p>

                                            </div>
                                            <p className='font-crimson my-4 text-justify'>Pac maintained his innocence throughout his trial and jail time. He also felt that his close friend, professional boxer Mike Tyson, was unjustly tried in a similar sexual assault case years prior.</p>
                                        </div>

                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <img className='outline timeline-img m-auto' src={require('../media/1990s/tupacmike.jpg')}/>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>September 13th, 1996</h3>
                                                <p className='font-crimson mb-4 text-justify'>Following a Mike Tyson boxing match in Las Vegas, Nevada, Tupac was murdered at a traffic light in a drive-by shooting. Earlier that day, he and Suge Knight had been involved in a physical altercation against members of the Southside Crips gang, captured by surveillance video at the MGM Grand. While there was suspicion that one of the gang members shot him, the case was never resolved as the suspect was killed in Los Angeles in 1998. Despite his untimely death, 2Pac continued to have an influence on the rap game through several posthumous albums.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-3 mt-lg-0  text-center'>
                                            <img className='outline timeline-img m-auto' src={require('../media/1990s/tupac last photo.jpg')}/>
                                            <p className='font-crimson text-center text-italic py-3 m-auto'>2Pac and Suge Knight in the car that would later be the scene of the crime.<br/><a href='https://nypost.com/2020/01/14/heres-where-you-can-buy-the-bmw-tupac-was-shot-in/' target='_blank'>The same BMW would later be restored and available in auction for $1.75 million.</a></p>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>Cypress Hill</h3>
                                                <p className='font-crimson mb-4 text-justify'>Death Row was not the only group of artists in LA making hits during the 90s. Cypress Hill, for example, achieved mainstream success and topped the Billboard rankings with their song, “Insane in the Membrane”. They were the first Latino American group to be put on the Hollywood Walk of Fame.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-3 mt-lg-0  text-center'>
                                            <div className='outline' style={{width: '100%'}}>
                                                <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=-qcWuXxedGU' />
                                            </div>
                                            <p className='font-crimson text-center text-italic py-3 m-auto'>"Insane in the Membrane" performed live at Woodstock '94<br/>(attendance of almost 550,000 people)</p>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                </section>

                <section className='timeline-content 1990-sec p-0 m-0'>
                    <div className='container outline pb-5 no-r no-b no-t no-r-m no-b-m no-t-m'>
                        <div className='row no-l no-l-m outline'>
                            <div className='col-md  text-left'>
                                <h2 className='text-white font-fancy'>Hip Hop & Art</h2>
                                <h3 className='text-white font-crimson'>Estevan and Mr. Cartoon</h3>
                            </div>
                        </div>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <p className='font-crimson mb-4 text-justify'>Hip-hop culture was making waves into the mainstream beyond just the music. This is most evident with the likes of Estevan Oriol and Mark Machado, better known as Mr. Cartoon. Estevan worked with the likes of Cypress Hill and House of Pain as a manager early in his career, and documented the lives of urban LA and its celebrities through photography. Cartoon went from vandalizing buildings with graffiti to becoming a world renowned tattoo artist.</p>
                                            <img  className='outline w-100' src={require('../media/art/LA_Fingers.jpg')}/>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 text-center'>
                                            <div style={{display: 'inline-block'}} className='p-3 outline w-100 mb-4'>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-center'>
                                                    “At that time in the 80s, it was all about where you fit into hip-hop. Are you a breaker? Are you a rapper? Are you a locker? Or are you a writer? I found my place in hip-hop through art.”
                                                </p>
                                                <p className='text-center font-crimson text-white bold m-0 mt-3'>- Mark Machado aka Cartoon</p>

                                            </div>
                                            <img className='outline w-100' src={require('../media/art/dretattoo.jpg')}/>
                                            <img className='outline mt-4 w-100' src={require('../media/art/50cent.jpg')}/>
                                            <p className='font-crimson mt-4 text-justify'>Cartoon tattooed many celebrities, including 50 Cent, Eminem, Kobe Bryant, and Beyonce.</p>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <img className='outline timeline-img' src={require('../media/art/eminemtattoo.jpg')}/>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex center-within text-center'>
                                            <div>
                                                <div style={{display: 'inline-block'}} className='p-3 outline w-100'>
                                                    <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-center'>
                                                        “Cartoon is the greatest tattoo artist to ever live”
                                                    </p>
                                                    <p className='text-center font-crimson text-white bold m-0 mt-3'>- Eminem</p>
                                                </div>
                                                <div style={{display: 'inline-block'}} className='p-3 outline w-100 mt-4'>
                                                    <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-center'>
                                                        “There's only one guy that I let do my tattoos and my kids tattoos, the great Cartoon”
                                                    </p>
                                                    <p className='text-center font-crimson text-white bold m-0 mt-3'>- Snoop Dogg</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>
                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <p className='font-crimson mb-4 text-justify'>Estevan’s photos tell an authentic story of LA street culture. He shines light on its darkest parts from drug addiction, to homelessness, to gang activity. His work also highlights the dichotomy of Los Angeles’ social order, from Hollywood to Compton, having photographed the likes of Ryan Gosling.</p>
                                            <img className='outline w-100' src={require('../media/art/ryan.jpg')}/>
                                            <img className='outline w-100 mt-4' src={require('../media/art/a.jpg')}/>
                                            <p className='font-crimson mt-4 text-justify'>Estevan also designed a version of the Nike Cortez shoe, paying homage to fashion trends popularized by the likes of NWA. The aesthetic of LA’s gangster rappers: white tees, Dickies pants, and Raiders gear, is still emulated by countless youth around the country.</p>
                                            <div className='outline'>
                                                <p className='font-crimson text-center text-italic w-75 mww-100 m-auto'>“And I ain't rockin' no more designer shit<br/>White T’s and Nike Cortez, this red Corvette's anonymous”</p><p className='mt-3 text-white font-crimson bold text-center'>-Kendrick Lamar on "Control" in 2013</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex flex-column center-within text-center'>
                                            <div>
                                                <img className='outline w-75' src={require('../media/art/snooplongbeach.jpg')}/>
                                                <img className='outline w-75 mt-4' src={require('../media/art/streetlife_12.jpg')}/>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='m-auto outline p-4 w-75 mww-100 text-center'>
                                            <p className='font-crimson mb-4 text-justify'>Throughout Comic’s career, the societal perception of tattoos has changed dramatically. Tattoos used to be symbolic of prison or gang affiliation, but now it is a common practice made mainstream in large part by hip-hop celebrities.<br/><br/>The two still live in LA, and Estevan works to encourage young latinos to follow his lead and find positive outlets through art. Together through their work, they have innovated Downtown LA to a highly respected art hub, and legitimized hip-hop culture immensely. They feel that their work in promoting Chicano art is of particular importance given recent social and political marginalization of immigrants.<br/><br/>Their story is told through the Netflix documentary, <a href='https://www.theguardian.com/film/2020/apr/09/la-originals-hip-hop-netflix-film' target='_blank'>LA Originals.</a></p>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                </section>

                <section className='timeline-content 1990-sec p-0 m-0'>
                    <div className='container outline pb-5 no-l no-b no-t no-l-m no-b-m no-t-m'>
                        <div className='row no-r no-r-m outline'>
                            <div className='col-md text-right'>
                                <h2 className='text-white font-fancy'>The Aftermath of Gangster Rap</h2>
                                <h3 className='text-white font-crimson'>The establishment of classics</h3>
                            </div>
                        </div>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0  text-center'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>March 9th, 1997</h3>
                                                <p className='font-crimson mt-2 mb-4 text-justify'>Just six months after the death of Tupac Shakur, New York rapper Notorious B.I.G. was shot four times in Los Angeles. No one was convicted in the murder, however it was widely suspected that Suge Knight played a role in orchestrating the killing. These deaths shocked the hip hop scene. The two rappers were not only respected across the nation's listeners of rap and hip-hop, but also infamous for their 'West vs. East' coast rivalry.</p>
                                                <img className='outline timeline-img m-auto' src={require('../media/2000s/tupacbiggie.jpg')}/>
                                                <p className='font-crimson text-center text-italic py-3 m-auto'>Before the fame, fortune, and conflict, 2Pac and Biggie carried a level of respect for each other.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg d-flex center-within m-0 text-center'>
                                            <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    “I ain't got no motherfuckin' friends
                                                    <br/>That's why I fucked yo' bitch, you fat motherfucker!
                                                    <br/>(Take money) West Side, M.O.B., Bad Boy killas
                                                    <br/>(Take money) You know who the realest is
                                                    <br/>(Take money) We bring it too
                                                    <br/>(Take money)”
                                                </p>
                                                <p className='text-center font-crimson text-white bold m-0 mt-3'>- 2Pac on the song "Hit 'Em Up"<br/><a style={{fontWeight: '300'}}>2Pac directly shouts out his own association with West Coast acts, and continues makes derogatory statements towards Biggie Smalls and his label (Bad Boy Entertainment). Even Puff Daddy, arguably the equivalent of Dr. Dre in label management for the East Coast, is insulted in this song.</a></p>
                                                <p style={{display: 'inline-block'}} className='mt-3 font-crimson m-auto text-italic text-left'>
                                                    <br/>“We bust on Bad Boys, n****s fucked for life
                                                    <br/>Plus, Puffy tryna see me, weak hearts I rip
                                                    <br/>Biggie Smalls and Junior M.A.F.I.A. some mark-ass bitches”
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0  text-center'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>The Industry Moves On</h3>
                                                <p className='font-crimson mt-2 mb-4 text-justify'>The end of the 90s marked the start of a new age of hip-hop. The West vs. East Coast rivalry concluded with each side's respective leaders dead. Suge Knight was facing trial for racketeering charges and Death Row Records was on the way out. Both Dr. Dre and Snoop Dogg left the label, and Dre started a new label backed by Interscope, Aftermath Entertainment. The days of regional-bias in rap were over, and a new era of widespread collaboration from artists all over the country began. The emergence of online music streaming and technology such as the iPod (released October 2001) contributed to the crumbling of regional barriers in music. Exposure to hip hop was no longer limited by what local radio stations played.<br/><br/>	Although the rap game was changing, Dre and Snoop Dogg withstood the test of time and remained at the top. Their 1999 collab single, “Still D.R.E.”, was reminiscent of the chemistry they demonstrated years prior when they first linked up.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg d-flex center-within m-0 text-center'>
                                            <div className='outline' style={{width: '100%'}}>
                                                <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=_CL6n0FJZpk' />
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0  text-center'>
                                            <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    “My last album was The Chronic
                                                    <br/>They want to know if he still got it
                                                    <br/>They say rap's changed
                                                    <br/>They wanna know how I feel about it”
                                                </p>
                                                <p className='text-center font-crimson text-white bold m-0 mt-3'>- Dr. Dre on "Still D.R.E."</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row mt-lg-5'>
                                        <div className='col-lg m-0 d-flex center-within  text-center'>
                                            <div>
                                                <p className='font-crimson mt-2 my-4 text-justify'>Under Aftermath, Dr. Dre attracted new artists working with New York’s Nas and discovering Detroit rapper Eminem. He produced several albums for Eminem including The Slim Shady LP and the Marshall Mathers LP that both went platinum. He also connected with New York’s 50 Cent (Curtis Jackson), and produced his classic album, “Get Rich or Die Tryin’”, released in 2003. The album featured Eminem as well as Nate Dogg, the former Death Row rapper from Long Beach.<br/><br/>Snoop Dogg was even featured on a remix of 50 Cent's hit "P.I.M.P.", with the rapper seen using an iPod in the music video.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-3 mt-lg-0 d-flex center-within text-center'>
                                            <div className='outline' style={{width: '100%'}}>
                                                <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=UDApZhXTpH8' />
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0  text-center'>
                                            <h3 className='font-crimson text-center text-italic m-auto'>“Dre, Eminem and a handful of lesser-known producers are at the top of their game here, concocting these alternately club-ready and spaced-out tracks out of dark synth grooves, buzzy keyboards and a persistently funky bounce.”</h3>
                                            <p className='text-white mt-3 font-crimson bold text-center'>- <a href='https://www.rollingstone.com/music/music-album-reviews/get-rich-or-die-tryin-122197/' target='_blank'>Rolling Stone</a></p>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within order-lg-1 text-center'>
                                            <div>
                                                <p className='font-crimson mb-4 text-justify'>	Staying true to his roots, Dr. Dre also brought young Compton rapper, The Game, on board. The Game’s cool delivery and more modern gangster style, accompanied with Dre’s mentorship, led him to instant success. His debut album “The Documentary”, was released in January 2005 featuring fellow Aftermath artists 50 Cent and Nate Dogg. His single from the album, “How We Do”, was nominated for a grammy.</p>
                                                <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                    <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                        “It's red rum, Ready here I come
                                                        <br/>Compton unh, Dre found me in the slums”
                                                    </p>
                                                    <p className='text-center font-crimson text-white bold m-0 mt-3'>-The Game grew up in Compton and is well known for his affiliation with the Bloods, as his brother was the leader of the Piru Bloods in West Compton.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-3 mt-lg-0 d-flex center-within text-center'>
                                            <div className='outline' style={{width: '100%'}}>
                                                <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=PH34kMOjmQk' />
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    “Take me away from the hood, like a state penitentiary
                                                    <br/>Take me away from the hood, in a casket or a Bentley
                                                    <br/>Take me away, like I overdosed on cocaine
                                                    <br/>Or take me away, like a bullet from Kurt Cobain
                                                    <br/>Suicide, I'm from a windy city, like Do or Die
                                                    <br/>From a block close to where Biggie was crucified
                                                    <br/>That was Brooklyn's Jesus, shot for no fuckin' reason
                                                    <br/>And you wonder why Kanye wears Jesus pieces?”
                                                </p>
                                                <p className='text-center font-crimson text-white bold m-0 mt-3'>On his 2008 track, “My Life”, featuring Lil Wayne, he describes the harsh realities of life that persisted in Compton.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg m-0 d-flex center-within  text-center'>
                                            <div>
                                                <p className='font-crimson mt-2 my-4 text-justify'>Hip-hop had come a long way by the end of the 2000s. The music was well within the mainstream as the industry flourished, with its artists posing in foreign cars and designer clothing. Los Angeles was undoubtedly the place to be given it's well endowed labels and Dr. Dre’s highly sought after production skills. However, the same old issues persisted. South Central was still riddled with poverty and gang violence, and the music still glorified crime and degraded women.<br/><br/><a href='https://www.pewresearch.org/wp-content/uploads/sites/3/2010/10/Race-2007.pdf' target='_blank'>Pew Research Poll published in 2008 found that over 70% of adults believed hip-hop to have impacted society negatively.</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                </section>

                <section className='timeline-content 2000-sec p-0 m-0'>
                    <div className='container outline pb-5 no-r no-b no-t no-r-m no-b-m no-t-m'>
                        <div className='row no-l no-l-m outline'>
                            <div className='col-md  text-left'>
                                <h2 className='text-white font-fancy'>Kendrick Lamar</h2>
                                <h3 className='text-white font-crimson'>L.A. Hip-Hop's Prophet from Compton</h3>
                            </div>
                        </div>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <p className='font-crimson mb-4 text-justify'>Lamar is hailed as perhaps the greatest rapper of the current generation. Growing up in Compton, California, he is a quintessential example of an individual inspired to greatness from the 'hood'. He idolized artists Tupac Shakur, and Dr. Dre, two of the most notable catalysts for the West Coast hip hop scene, and he acknowledges watching the filming over their video “California Love”, as an important moment in his life. Lamar was born in 1987, as the gangster rap era was just getting started, so his childhood lended him firsthand experience of the rise of hip-hop amidst the peak of gang violence and war on drugs. His experience watching the first generation of LA rappers equipped him with a degree of maturity and wisdom from the start of his career. He prefers to be considered a writer rather than a rapper.</p>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 text-center'>
                                            <div className='outline' style={{width: '100%'}}>
                                                <ReactPlayer className='m-auto' width='99%' height='100%' controls  url={require('../media/2000s/kendrick17.mp4')} />
                                            </div>
                                            <p className='font-crimson text-center text-italic py-3 m-auto'>An early video of Kendrick Lamar freestyling at age 17</p>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <p className='font-crimson mb-4 text-justify'>Originally known as K-Dot, he released his first album at age 16 and was soon after signed to a contract with Top Dawg Entertainment (Carson, California). Lamar was a straight-A student at Compton High School and his intelligence and genuinity is clear through his music. In many ways, his work legitimized the highly scrutinized genre on a global stage. He was helped by Dr. Dre, who in 2010 became a mentor to him in all things music and business.</p>
                                            <div>
                                                <img  className='outline w-100' src={require('../media/2000s/tde.png')}/>
                                                <p className='font-crimson text-center text-italic py-3 m-auto'>Initial members of Top Dawg Entertainment:<br/>(Ab-Soul from Carson, Kendrick from Compton, Schoolboy Q from Crenshaw, Jay Rock from Watts)</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex center-within text-center'>
                                            <div>
                                                <p className='font-crimson mb-4 text-justify'>His first album Section.80 is named in reference to Section 8 Housing, a federal housing assistance program enacted after The Great Depression that Lamar grew up on. On the album he reminisces of his upbringing in Compton, putting forth social commentary in a creative and sophisticated manner that was unrivaled by any of his predecessors.</p>
                                                <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                    <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                        “Let's hit the county building gotta catch my check
                                                        <br/>Spend it all to a 40 ounce to the neck
                                                        <br/>And in retrospect I remember December being the hottest
                                                        <br/>Squad cars, neighborhood wars and stolen monsters
                                                        <br/>I tell you mothafuckers that life is full of hydraulics
                                                        <br/>Up and down, get 64 better know how to drive it
                                                        <br/>I'm driving on E with no license or registration
                                                        <br/>Heart racin' racing past johnny because he's racist
                                                        <br/>1987, the children of Ronald Reagan raped the leaves off your front porch
                                                        <br/>With a machine blow torch”
                                                    </p>
                                                    <p className='text-center font-crimson text-white bold m-0 mt-3'>- Kendrick on his song "Ronald Reagan Era"</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <p className='font-crimson mb-4 text-justify'>In 2011, Kendrick received the title as, “The New King of the West Coast”, by Snoop Dogg, Dr. Dre and The Game at a concert in West Los Angeles.<br/><br/>On his next album, Good Kid m.A.A.d. City, Kendrick delivers iconic storytelling of adolescence in Compton with a particular emphasis on the gang violence that surrounded him. In one particular song, "m.A.A.d. City," Kendrick references the two most prevalent gangs in Compton and implies the unavoidability of their perpetual violence.</p>
                                            <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    “If Pirus and Crips all got along
                                                    <br/>They'd probably gun me down by the end of this song”
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex center-within text-center'>
                                            <div>
                                                <p className='font-crimson mb-4 text-justify'>Kendrick rhetorically criticizes the government for their systematic oppression of his home city. Defeatedly, he suggests that people’s only line of defense is arming themselves and being ready to call an ambulance for the imminent violence that plagues their streets. </p>
                                                <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                    <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                        “When you hop on that trolley
                                                        <br/>Make sure your colors correct
                                                        <br/>Make sure you're corporate, or they'll be calling your mother collect
                                                        <br/>They say the governor collect, all of our taxes except
                                                        <br/>When we in traffic and tragic happens, that shit ain't no threat
                                                        <br/>You movin backwards if you suggest that you sleep with a TEC
                                                        <br/>Go buy a chopper and have a doctor on speed dial, I guess
                                                        <br/>M.A.A.d city”
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <div>
                                                <img  className='outline w-100' src={require('../media/2000s/xxlcover.jpg')}/>
                                                <p className='font-crimson text-center text-italic py-3 m-auto'>Kendrick Lamar on the cover of a 2015 issue of XXL Magazine</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex center-within text-center'>
                                            <div>
                                                <div className='outline' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=EZW7et3tPuQ' />
                                                </div>
                                                <p className='font-crimson mt-4 text-justify'>Kendrick opens the song referencing MLK in saying, “Martin had a dream… Kendrick have a dream.” While he is uncharacteristically boastful on the track, it is with an element of calculated ignorance that aims to portray the aspirations inherent to a youth in the impoverished streets of LA.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 text-center'>
                                            <div>
                                                <img  className='outline timeline-img' src={require('../media/2000s/topimp.jpg')}/>
                                                <p className='font-crimson text-center text-italic py-3 m-auto'>To Pimp a Butterfly</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex  center-within text-center'>
                                            <div>
                                                <p className='font-crimson text-justify'>Kendrick’s 2015 Grammy-winning album To Pimp A Butterfly, was produced by Dr. Dre and became an artistic masterpiece of African-American culture. It includes the song “How Much Does a Dollar Cost”, <a href='https://time.com/4143040/president-obama-kendrick-lamar-michelle-uptown-/' target='_blank'>President Obama’s favorite song of 2015</a>. Even the production tells a story of African-American history, fusing jazz music founded in New Orleans nearly a century prior with the West Coast G-funk sound of the 80s and 90s.<br/><br/>The album is a reflection of the African-American experience within the US and is highly critical of social and political institutions. It would prove to become representative of the #BlackLivesMatter movement. The album's most emotionally-charged track, “The Blacker the Berry”, <a href='https://www.theguardian.com/music/2015/jun/21/kendrick-lamar-interview-to-pimp-a-butterfly-trayvon-martin' target='_blank'>was first drafted immediately after the death of Trayvon Martin</a>.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div className='m-auto'>
                                                <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                    <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                        “You hate me don't you?
                                                        <br/>You hate my people, your plan is to terminate my culture
                                                        <br/>You're fuckin' evil I want you to recognize that I'm a proud monkey
                                                        <br/>You vandalize my perception but can't take style from me”

                                                        <br/><br/>“Or eat watermelon, chicken, and Kool-Aid on weekdays
                                                        <br/>Or jump high enough to get Michael Jordan endorsements
                                                        <br/>Or watch BET 'cause urban support is important
                                                        <br/>So why did I weep when Trayvon Martin was in the street
                                                        <br/>When gang banging make me kill a n**** blacker than me?
                                                        <br/>Hypocrite!”
                                                    </p>
                                                    <p className='text-center font-crimson text-white bold m-0 mt-3'>- Kendrick Lamar, "The Blacker the Berry"</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex  center-within text-center'>
                                            <div>
                                                <div className='outline' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=hRK7PVJFbS8' />
                                                </div>
                                                <p className='font-crimson mt-4 text-justify'>King Kunta refers to the fictional character, Kunta Kinte, a rebellious slave in the 70s TV show the Roots. The video captures Kendrick outside the same Compton shopping center that he had inspiredly watched the filming of the “California Love” when he was just a kid.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div>
                                                <p className='font-crimson mb-4 text-justify'>On "Hood Politics," Kendrick criticizes the political state of the US, likening Congress’s partisan division to that of the Bloods and Crips street gangs, and expressing frustration on the government’s failure to address problems in places like Compton.</p>
                                                <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                    <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                        “From Compton to Congress, set trippin’ all around
                                                        <br/>Ain't nothin' new, but a flu of new Demo-Crips and Re-Blood-licans
                                                        <br/>Red state versus a blue state, which one you governin'?
                                                        <br/>They give us guns and drugs, call us thugs
                                                        <br/>Make it they promise to fuck with you
                                                        <br/>No condom, they fuck with you, Obama say, "What it do?”
                                                    </p>
                                                    <p className='text-center font-crimson text-white bold m-0 mt-3'>"Hood Politics"</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex  center-within text-center'>
                                            <div>
                                                <p className='font-crimson mb-4 text-justify'>The album also featured uplifting tracks such as “i” and “Alright”, spreading a message of positivity and solidarity in the face of racial injustice. On “i” Kendrick preaches about having pride in his identity despite the inequities and bigotry existing in society.</p>
                                                <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                    <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    “And I love myself
                                                    <br/>(The world is a ghetto with big guns and picket signs)
                                                    <br/>I love myself
                                                    <br/>(But it can do what it want whenever it want, I don't mind)
                                                    <br/>I love myself
                                                    <br/>(He said I gotta get up, life is more than suicide)
                                                    <br/>I love myself
                                                    <br/>(One day at a time, sun gon' shine)”
                                                    </p>
                                                    <p className='text-center font-crimson text-white bold m-0 mt-3'>"i"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within order-lg-1 text-center'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>February 13th, 2016</h3>
                                                <p className='font-crimson mt-2 mb-4 text-justify'>Kendrick Lamar receives the <a href='https://www.latimes.com/local/lanow/la-me-ln-kendrick-lamar-compton-key-to-the-city-20160213-story.html' target='_blank'>key to the city of Compton</a> from Mayor Aja Brown.</p>
                                                <h3 className='font-crimson text-left bold'>April 14th, 2017</h3>
                                                <p className='font-crimson mt-2 text-justify'>DAMN., Kendrick's fourth studio album, releases to critical acclaim and unrivaled mainstream success, demonstrating his incredible versatility as an artist.</p>
                                                <h3 className='font-crimson text-left bold'>April 16th, 2018</h3>
                                                <p className='font-crimson mt-2 text-justify'>Kendrick Lamar <a href='https://www.nytimes.com/2018/04/16/arts/music/kendrick-lamar-pulitzer-prize-damn.html' target='_blank'>receives the Pulitzer Prize for DAMN.</a>, becoming the first artist outside of classical and jazz music in history to receive the award.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex center-within text-center'>
                                            <img className='outline m-auto timeline-img' src={require('../media/2000s/damn.png')}/>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0  text-center'>
                                            <h3 className='font-crimson text-center text-italic m-auto'>“The electric part about Damn.: 2Pac rapped through his contradictions; Lamar raps about his contradictions. The theme here is humility, and Kendrick clearly has mixed feelings.”</h3>
                                            <p className='text-white mt-3 font-crimson bold text-center'>- <a href='https://www.rollingstone.com/music/music-album-reviews/review-kendrick-lamar-moves-from-uplift-to-beast-mode-on-dazzling-damn-112650/' target='_blank'>Rolling Stone</a></p>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div>
                                                <p className='font-crimson text-justify'>Kendrick Lamar absolved any doubts about hip-hop’s potential to be recognized as a legitimate form of art. Through his ingenious lyricism, lucid storytelling, and wise worldly perception, he has created a progressive cultural movement with millions of fans rallying behind him. His music illustrates the reality that hip-hop’s controversial content will not go away until fundamental institutional reform is achieved, and youth in these marginalized communities are afforded the proper resources. There is still a long way to go in addressing social injustices in America, and Kendrick’s music empowered that message.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0  text-center'>
                                                <div className='outline' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=4_MMmEJ2BIc' />
                                                </div>
                                                <p className='font-crimson mt-4 text-center'>Kendrick Lamar - Best Rap Album<br/>60th Grammy's Acceptance Speech</p>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>LA Beneath King Kendrick</h3>
                                                <p className='font-crimson mt-2 mb-4 text-justify'>The rise of Kendrick’s sincerely motivated and conscious hip-hop was contrasted by a different, not so high-minded direction of the music. Much of LA’s music in the 2010s can be categorized within a phenomenon known as “ratchet” music. Ratchet music is characterized by songs that are meant for dancing in night clubs, typically devoid of any real substance aside from indulgent vanity, objectification of women, and gross materialism. This kind of music proved to be highly popular among mainstream fans.<br/><br/>The subgenre became sustainably successful carried by DJ Mustard’s undeniably intriguing production. Artists that worked with DJ Mustard during this period include YG, Ty Dolla $ign, 2 Chainz, and Kid Ink.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex center-within text-center'>
                                            <div className='w-100'>
                                                <div className='outline' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=AE3yia1AJeQ' />
                                                </div>
                                                <p className='font-crimson mt-4 text-center'>Compton rapper Tyga’s “Rack City” produced by DJ Mustard reached No. 7 on the Billboard in 2012.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg d-flex center-within text-center'>
                                            <div className='w-100'>
                                                <p className='font-crimson text-center text-italic m-auto'>“The gangbanging shit is over. You can't have fun because of it. I create my music so you can go to the club and have fun.”</p>
                                                <p className='text-white mt-3 font-crimson bold text-center'>- DJ Mustard</p>
                                                <img className='outline m-auto timeline-img' src={require('../media/2000s/mustard.jpg')}/>
                                                <p className='font-crimson mt-2 text-italic text-center'>(Left to right) Ty Dolla $ign, YG, DJ Mustard</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                </section>

                <section className='timeline-content 1990-sec p-0 m-0'>
                    <div className='container outline pb-5 no-l no-b no-t no-l-m no-b-m no-t-m'>
                        <div className='row no-r no-r-m outline'>
                            <div className='col-md text-right'>
                                <h2 className='text-white font-fancy'>YG & Nipsey Hussle</h2>
                                <h3 className='text-white font-crimson'>Modern Day Gangsta Rappers</h3>
                            </div>
                        </div>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within  text-center'>
                                            <p className='font-crimson text-justify'>The rappers first met in 2009 and formed an unlikely friendship as Compton’s YG (Young Gangster) is a member of the Bloods, while Crenshaw’s Nipsey Hussle was a Crip. Nipsey became a mentor to YG and the two collaborated on numerous projects together over the years, working closely with DJ Mustard.<br/><br/>In 2016, the pair released a protest song in reaction to the anti-immigrant rhetoric at President Donald Trump’s campaign rallies. Almost two decades after the likes of NWA and Ice-T protested police brutality via vinyl records, YG and Nipsey Hussle’s video went viral with a similarly politically inspired message.</p>
                                        </div>
                                        <div className='col-lg mt-3 mt-lg-0 d-flex center-within text-center'>
                                            <div className='outline w-100'>
                                                <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=WkZ5e94QnWk' />
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within order-lg-1 text-center'>
                                            <p className='font-crimson text-justify'>Over the decades succeeding hip-hop’s arrival in LA, the city’s racial demographics changed dramatically, with its Hispanic/Latino population rising to nearly 50%. As many of these immigrants are undocumented, Trump’s candidacy threatened the subsistence of a significant portion of Angelenos.</p>
                                        </div>
                                        <div className='col-lg mt-3 mt-lg-0 d-flex center-within text-center'>
                                            <img className=' m-auto timeline-img' src={require('../media/2000s/popgraph.jpg')}/>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within order-lg-1 text-center'>
                                            <div style={{display: 'inline-block', width: '80%'}} className='p-3 outline m-auto'>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    “Home of the Rodney King riot, we don't give a fuck
                                                    <br/>Black students, ejected from your rally, what?
                                                    <br/>I'm ready to go right now, your racist ass did too much
                                                    <br/>I'm 'bout to turn Black Panther
                                                    <br/>Don't let Donald Trump win, that n**** cancer”
                                                </p>
                                                <p className='text-center font-crimson text-white bold m-0 mt-3'>- YG</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-3 mt-lg-0 d-flex center-within text-center'>
                                            <div style={{display: 'inline-block', width: '80%'}} className='p-3 outline m-auto'>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    “It wouldn't be the USA without Mexicans
                                                    <br/>And if it's time to team up, shit, let's begin
                                                    <br/>White people feel the same as my next of kin
                                                    <br/>If we let this n**** win,
                                                    <br/>God bless the kids”
                                                </p>
                                                <p className='text-center font-crimson text-white bold m-0 mt-3'>- Nipsey Hussle</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within  text-center'>
                                            <div className='outline w-100'>
                                                <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=zLRzRW0gga0' />
                                            </div>
                                        </div>
                                        <div className='col-lg mt-3 mt-lg-0 d-flex center-within text-center'>
                                            <div>
                                                <p className='font-crimson text-justify'><a href='https://www.npr.org/2019/04/01/708664048/grammy-nominated-rapper-nipsey-hussel-shot-dead-in-los-angeles' target='_blank'>The death of Grammy-nominated Nipsey Hussle</a> reverberated throughout LA and the hip-hop community as a whole. He was a well respected public figure and those who knew him personally raved about his kindness. The killing was a senseless act of violence following Nip telling an old acquaintance that he heard rumors of “snitching” outside of his South Central LA clothing store.</p>

                                                <div style={{display: 'inline-block', width: '80%'}} className='p-3 outline m-auto'>
                                                    <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                        “Me and Mustard kept this shit lit, ooh
                                                        <br/>Pac ain't the only motherfucker with the juice
                                                        <br/>Call Dre, call Snoop, call Game and Kendrick too
                                                        <br/>When you think about the West,
                                                        <br/>it's me and Nip, red and blue, n****”
                                                    </p>
                                                    <p className='text-justify font-crimson text-white bold m-0 my-3'>- YG on “Hard Bottoms & White Socks” refers to the legacy that DJ Mustard, Nipsey, and him carried in maintaining LA’s gangster rap tradition. In the same song, he asserts his bosslike persona in saying:</p>
                                                    <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                        “Everybody wants to be Pac, I’m Suge.”
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                </section>

                <section className='timeline-content 2000-sec p-0 m-0'>
                    <div className='container outline pb-5 no-r no-b no-t no-r-m no-b-m no-t-m'>
                        <div className='row no-l no-l-m outline'>
                            <div className='col-md  text-left'>
                                <h2 className='text-white font-fancy'>SoundCloud Era</h2>
                                <h3 className='text-white font-crimson'>The Rise(and fall) of Emo Rappers</h3>
                            </div>
                        </div>



                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                    <div className='circle bg-white outline'/>
                                </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within  text-center'>
                                            <p className='font-crimson mb-4 text-justify'>While SoundCloud was released in 2007, it really began developing traction within the hip-hop world around 2014. The music streaming website and app allows any of its users to share songs on the platform, thus enabling individuals to outsource their music in ways never before possible. This trend led to a bunch of unusual suspects arriving on the hip-hop scene, radically changing standards for what defined hip-hop. The rise of SoundCloud rap coincided with <a href='https://www.apa.org/news/press/releases/2019/03/mental-health-adults' target='_blank'>rising rates of mental illness among young people</a> as well as the peak of the opioid epidemic, which proved to be a lethal combination.</p>
                                        </div>
                                        <div className='col-lg mt-3 mt-lg-0 d-flex center-within text-center'>
                                            <div>
                                                <p className='font-crimson text-center m-auto'>“The rate of individuals reporting symptoms consistent with major depression in the last 12 months increased 52 percent in adolescents from 2005 to 2017 (from 8.7 percent to 13.2 percent) and 63 percent in young adults age 18 to 25 from 2009 to 2017 (from 8.1 percent to 13.2 percent). There was also a 71 percent increase in young adults experiencing serious psychological distress in the previous 30 days from 2008 to 2017 (from 7.7 percent to 13.1 percent).”</p>
                                                <p className='text-white mt-3 font-crimson bold text-center'>American Psychology Association</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>

                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                            <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                <div className='circle bg-white outline'/>
                            </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within  text-center'>
                                            <div className='w-100'>
                                                <img style={{maxHeight: '300px', maxWidth: '100%'}} className='outline m-auto' src={require('../media/2000s/figure8.jpg')}/>
                                                <p className='text-white bold text-center font-crimson'><a href='https://www.drugabuse.gov/related-topics/trends-statistics/overdose-death-rates' target='_blank'>National Institute on Drug Abuse</a></p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-3 mt-lg-0 d-flex center-within text-center'>
                                            <div className='w-100'>
                                                <img style={{maxHeight: '300px', maxWidth: '100%'}} className='outline m-auto' src={require('../media/2000s/cdc.png')}/>
                                                <p className='text-white bold text-center font-crimson'><a href='https://www.cdc.gov/drugoverdose/data/analysis.html' target='_blank'>Center for Disease Control</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                            <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                <div className='circle bg-white outline'/>
                            </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within  text-center'>
                                            <p className='font-crimson text-justify'>Artists like Lil Xan from Redlands, California, taking his name after the prescription benzodiazepine Xanax, became the pioneers of “emo rap”. These new rappers were different from anything hip-hop had seen before, both in appearance and stylistically. The music was nihilistic and subdued, often lamenting about girl problems and glorifying the use of various prescription drugs.</p>
                                        </div>
                                        <div className='col-lg mt-3 mt-lg-0 d-flex center-within text-center'>
                                            <img className='outline m-auto timeline-img' src={require('../media/2000s/lilxan.jpg')}/>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                            <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                <div className='circle bg-white outline'/>
                            </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within order-lg-1 text-center'>
                                            <p className='font-crimson text-justify'>In 2014, then 17 year old Lil Peep, raised by 2 Harvard graduates, arrived in LA in pursuit of musical success. He was homeless off and on before rising to SoundCloud fame. Along with his friend Lil Tracey, he produced hit songs within the music collective GothBoiClique. His music possessed elements of 2000s punk rock and resonated with an angsty generation addicted to social media and exposed to a popularized drug culture. Tragically, his fame was short-lived as he <a href='https://www.rollingstone.com/music/music-news/lil-peep-death-lawsuit-first-access-entertainment-932575/' target='_blank'>died on his tour bus of an accidental overdose of fentanyl and alprazolam (Xanax)</a> shortly after his 21st birthday.</p>
                                        </div>
                                        <div className='col-lg mt-3 mt-lg-0 d-flex center-within text-center'>
                                            <div className='w-100'>
                                                <div className='outline' style={{width: '100%'}}>
                                                    <ReactPlayer className='m-auto' width='98%' url='https://www.youtube.com/watch?v=WvV5TbJc9tQ' />
                                                </div>
                                                <p className='font-crimson mt-4 text-center'>"Save That Shit" Music Video</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                            <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                <div className='circle bg-white outline'/>
                            </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within order-lg-1 text-center'>
                                            <div>
                                                <p className='font-crimson mb-4 text-justify'>On September 7th, 2018, Pittsburgh rapper and producer Mac Miller was <a href='https://www.latimes.com/local/lanow/la-mep-mac-miller-died-20180907-story.html' target='_blank'>found dead in his Studio City, Los Angeles home</a> from an accidental overdose of cocaine and fentanyl.</p>
                                                <img className='outline m-auto timeline-img' src={require('../media/2000s/macmiller.png')}/>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-5 mt-lg-0 d-flex center-within text-center'>
                                            <div>
                                                <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                    <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                        “If I overdose, bae, are you gon' drop with me?
                                                        <br/>I don't even wanna think about that right now
                                                        <br/>Let's get too high, reach a new high
                                                        <br/>Take the shrooms and the pills at the same time
                                                        <br/>Went to Hollywood thrills from the street life
                                                        <br/>Took too many drugs, now I don't feel right”
                                                    </p>
                                                    <p className='text-center font-crimson text-white bold m-0 mt-3'>- Chicago SoundCloud Rapper Juice Wrld on hit song “Lean Wit Me”</p>
                                                </div>
                                                <p className='font-crimson mt-4 text-justify'>Juice tragically died from an <a href='https://www.npr.org/2020/01/22/798756656/juice-wrld-cause-of-death-was-accidental-overdose' target='_blank'>overdose of oxycodone and codeine</a> the day after his 21st birthday in December 2019, after his flight home from Los Angeles landed at Chicago Midway.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                            <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                <div className='circle bg-white outline'/>
                            </div>
                                <Fade right>
                                <div className='col-lg m-0  text-center'>
                                    <h3 className='font-crimson text-center text-italic m-auto'>“Hip-hop, more than any genre, moves at a head-spinning pace today. Stars, sounds and scenes arrive, ascend and flame out before artists hit their mid 20s. A huge streaming single can launch you from bedroom obscurity to a seven-figure record deal in weeks. Fentanyl or a violent life can end it just as quickly.”</h3>
                                    <p className='text-white mt-3 font-crimson bold text-center'>- <a href='https://www.latimes.com/entertainment-arts/music/story/2019-12-10/lil-peep-juice-wrld-death-soundcloud-rap' target='_blank'>LA Times</a></p>
                                </div>
                                </Fade>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                            <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                <div className='circle bg-white outline'/>
                            </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg mt-3 mt-lg-0 d-flex center-within text-center'>
                                            <img className='outline m-auto w-75' src={require('../media/2000s/xxlfreshman.jpg')}/>
                                        </div>
                                        <div className='col-lg m-0 d-flex center-within  text-center'>
                                            <p className='font-crimson outline p-3 text-justify'>Every year, XXL Magazine releases their 'Freshman Class' Cover, a list of rappers and hip hop artists on the rise. The 2016 Freshman class reflects the unique but undeniably talented artists propelled into fame by the SoundCloud era. The artists are generally known as the pioneers of mumble rap, stereotypically obsessing over designer clothing and drinking lean.</p>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                </section>

                <section className='timeline-content 2000-sec p-0 m-0'>
                    <div className='container outline pb-5 no-l no-b no-t no-l-m no-b-m no-t-m'>
                        <div className='row no-r no-r-m outline'>
                            <div className='col-md text-right'>
                                <h2 className='text-white font-fancy'>Alternative Sound</h2>
                                <h3 className='text-white font-crimson'>Odd Future and Beyond</h3>
                            </div>
                        </div>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>Anderson .Paak</h3>
                                                <p className='font-crimson text-justify'>Los Angeles native Anderson .Paak proved to be distinct from the rest of his XXL Freshman Class with a more old-school and eccentric alternative sound. His music has notable influences from both rap and R&B.<br/><br/>Anderson Paak’s mother was a Korean-war orphan raised in Compton, but she started a successful business and he had an affluent upbringing in Oxnard. He was signed to Aftermath Records where Dr. Dre produced several albums for him, including his 2018 album Grammy-winning album Oxnard, that features Kendrick Lamar, Snoop Dogg, and J Cole, and pays tribute to his late friend Mac Miller.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 text-center'>
                                            <div className='outline' style={{width: '100%'}}>
                                                <ReactPlayer className='m-auto' width='99%' controls  url='https://www.youtube.com/watch?v=zafcgmK_Xbw' />
                                            </div>
                                            <p className='font-crimson text-center text-italic py-3 m-auto'>Anderson .Paak performs "Anywhere" from his album "Oxnard"</p>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 order-lg-1 d-flex center-within text-center'>
                                            <div>
                                            <h3 className='font-crimson text-left bold'>Odd Future</h3>
                                                <p className='font-crimson text-justify'>In 2008, a collective of California misfits dropped their self-titled mixtape: 'Odd Future'. With their de-facto leader Tyler Gregory Okonma–known by his stage name Tyler the Creator–rapping on and producing a majority of the tracks, the group quickly attracted more young L.A. talent. With Odd Future beginning right as social media began to truly intertwine in every facet of people's lives, its history reflects the very beginning of hip hop's web-based commercialization. Building a unique cast of artists that would go on to become some of the biggest names in music, Odd Future is a prime example of how Los Angeles youth influences hip hop and vice-versa.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 text-center'>
                                            <img className='outline m-auto timeline-img' src={require('../media/2000s/oddfuture.jpg')}/>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div>
                                                <h3 className='font-crimson text-left bold'>Tyler the Creator</h3>
                                                <p className='font-crimson text-justify'>Born in Ladera Heights, California, in 1991, Tyler the Creator was raised for most of his childhood by his mother. As a co-founder of Odd Future, he broke into the rap scene with a distinctly dark and grunge style. His unique voice complimented the obscenity of his lyrics, and he appeared to have a penchant for disturbing the general public with his music. As he grew an underground group of followers amongst Los Angeles youth, he remained connected to new-found fans via social media. Some lyrics from his early works such as "Bastard" and "Goblin" were directly cited by the United Kingdom Home Office as reason for <a href='https://www.rollingstone.com/music/music-news/tyler-the-creator-banned-from-united-kingdom-over-lyrics-71119/' target='_blank'>banning him from the country.</a><br/><br/>For Tyler, a combination of talent and controversy garnered him his initial fame.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 d-flex center-within text-center'>
                                            <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                    I'm not gay, I just wanna boogie to some Marvin
                                                    <br/>(What you think of Hayley Williams?)
                                                    <br/>Fuck her, Wolf Haley robbin' them
                                                    <br/>I'll crash that fuckin' airplane that that f***** n**** B.o.B is in
                                                    <br/>And stab Bruno Mars in his goddamn esophagus
                                                    <br/>And won't stop until the cops come in
                                                </p>
                                                <p className='text-center font-crimson text-white bold m-0 mt-3'>- Tyler the Creator on "Yonkers"</p>
                                            </div>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within order-lg-1 text-center'>
                                            <div>
                                                <p className='font-crimson text-justify'>His initial albums came under harsh criticism for his incessant use of homophobic slurs, but Tyler maintained he had no harmful intentions and that his use of the word is disassociated from its perceived meanings. Critics also pointed to his dark descriptive fantasies that included rape and murder, but admirers maintain that this was merely a literary device to convey raw and instinctual emotion. <a href='https://pitjournal.unc.edu/article/listen-story-banksy-tyler-creator-and-nihilism-urban-artistic-expression' target='_blank'>As Tyler plainly put it</a>, “Its fucking art, listen to the fucking story.” Regardless of the critics, Tyler’s instrumental skill and lyrical ingenuity had synthesized a new sound that went beyond the conventional boundaries of hip-hop.<br/><br/>Beyond music, Odd Future were involved in comedy and fashion. Their Adult Swim TV show, Loiter Squad, documented the groups outrageous shenanigans. The sketch comedy was produced by Dickhouse Productions, <a href='http://www.mtv.com/news/1681716/odd-future-loiter-squad-tv-show/' target='_blank'>the creators of Jackass.</a> They also founded the clothing line, Golf Wang, which now is a staple of the West Coast skater aesthetic.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 text-center'>
                                            <img style={{width: '80%'}} className='outline m-auto' src={require('../media/2000s/golfwang.jpg')}/>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div>
                                                <p className='font-crimson text-justify'>Tyler was not the only rapper in the group to have a successful solo career. Earl Sweatshirt, grew up in Santa Monica and his mother was a law professor at UCLA. He was sent away to a boarding school after his parents learned of his drug habits. On his first single after returning to LA he says:</p>
                                                <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                    <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-left'>
                                                        “Searching for a big brother, Tyler was that
                                                        <br/>And plus he liked how I rap, the blunted mice in the trap
                                                        <br/>Too black for the white kids, and too white for the blacks
                                                        <br/>From honor roll to cracking locks up off them bicycle racks”
                                                    </p>
                                                    <p className='text-center font-crimson text-white bold m-0 mt-3'>- Earl Sweatshirt on "Chum"</p>
                                                </div>
                                                <p className='font-crimson text-justify mt-4'>The members of Odd Future were in many ways different than their peers and other artists before them. They struggled to find where they fit in early in life, so collectively they formed a group of creative and like minded individuals that they could relate to.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 text-center'>
                                            <img style={{width: '80%'}} className='outline m-auto' src={require('../media/2000s/earl.jpg')}/>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within order-lg-1 text-center'>
                                            <div>
                                                <p className='font-crimson text-justify'>With time, Tyler’s music evolved from its crude origins. In 2015, he released “Cherry Bomb” featuring prominent artists such as Kanye West, Schoolboy Q and Lil Wayne. The album demonstrated impressive versatility ranging from hard hitting raps to graceful melodies. His next album “Flowerboy”, is regarded as a modern musical masterpiece in which he drastically changed his style to be far more eloquent. Once ridiculed for being homophobic, a line on the album might even <a href='https://www.independent.co.uk/arts-entertainment/music/news/tyler-the-creator-gay-bisexual-flower-boy-album-track-a7833876.html' target='_blank'>suggest he is coming out of the closet</a>.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 text-center'>
                                            <div className='outline' style={{width: '100%'}}>
                                                <ReactPlayer className='m-auto' width='99%' controls  url='https://www.youtube.com/watch?v=cLkmqEzEJzc' />
                                            </div>
                                            <p className='font-crimson text-center mt-3'>-Tyler expresses frustration towards his fans while performing his song “Boredom” from Flowerboy. This performance is at Camp Flog Gnaw, Tyler’s annual music festival at Dodger stadium, featuring various hip-hop, indie, and alternative artists.</p>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <div className='col'>
                                    <Fade left>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div>
                                                <p className='font-crimson text-justify'>Tyler’s fifth studio album, Igor, won ‘Best Rap Album’ at the 2020 Grammy Awards. While Tyler said he is appreciative that his art could be recognized, he felt a degree of frustration as the album was not really rap music at all. He said in a interview with CBS following the Grammys:</p>
                                                <div style={{display: 'inline-block'}} className='p-3 outline m-auto'>
                                                    <p style={{display: 'inline-block'}} className='font-crimson m-auto text-italic text-center'>
                                                         “It sucks that whenever we, and I mean guys that look like me, do anything that’s genre bending, or anything, they always put it in a rap or urban category… And I don’t like that urban word, it's just a politically correct way to say the n-word.”
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 text-center'>
                                            <img style={{width: '80%'}} className='outline m-auto' src={require('../media/2000s/igorgrammy.jpg')}/>
                                        </div>

                                    </div>
                                    </Fade>
                                </div>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                                <Fade left>
                                <div className='col-lg m-0  text-center'>
                                    <h3 className='font-crimson text-center text-italic m-auto'>“Igor is a heartfelt album that finds Tyler lowering his guard and revealing himself to be a shape-shifting artist who is still growing, and who has fully shed his skin as a vulgar internet cowboy.”</h3>
                                    <p className='text-white mt-3 font-crimson bold text-center'>- <a href='https://www.rollingstone.com/music/music-album-reviews/tyler-the-creator-igor-review-837811/' target='_blank'>Rolling Stone</a></p>
                                </div>
                                </Fade>
                                <div className='col-auto w-10 d-flex flex-row-reverse center-within m-0 p-0'>
                                    <div className='circle reverse bg-white outline'/>
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                </section>

                <section className='timeline-content 2000-sec p-0 m-0'>
                    <div className='container outline pb-5 no-r no-t no-r-m no-t-m'>
                        <div className='row no-l no-l-m outline'>
                            <div className='col-md text-right'>
                                <h2 className='text-white font-fancy'>The Future</h2>
                            </div>
                        </div>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                            <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                <div className='circle bg-white outline'/>
                            </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within text-center'>
                                            <div>
                                                <p className='font-crimson text-justify'>Watching Compton’s Roddy Ricch fly down Interstate-10 in a Lamborghini Aventador, the immense change in hip-hop that has occurred since Eazy-E cruised down Rosecrans in his ‘64 is pronounced as can be. On his breakout song, “Ballin’”, Roddy rejoices over his unlikely success story and reminisces of his humble beginnings in Southern Los Angeles.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 mt-lg-0 text-center'>
                                            <div className='outline' style={{width: '100%'}}>
                                                <ReactPlayer className='m-auto' width='99%' controls  url='https://www.youtube.com/watch?v=YS0h2-hy9rw' />
                                            </div>
                                            <p className='font-crimson text-center mt-3'>"Ballin'" Music Video</p>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>

                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                            <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                <div className='circle bg-white outline'/>
                            </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within order-lg-1 text-center'>
                                            <div>
                                                <p className='font-crimson text-justify'>Hip-hop’s many transformations can certainly be attributed to changes in Los Angeles, but arguably just as much, Los Angeles has been influenced by changes in hip-hop. The music that used to only be distributed by vinyl records is now readily available at our fingertips through streaming services and apps. Dr. Dre, once deemed a dangerous street gangster by the news media, owns the company that has become <a href='https://www.forbes.com/sites/briansolomon/2014/05/28/apple-brings-dr-dre-on-board-with-official-3-billion-beats-deal/#70db19743974' target='_blank'>Apple’s largest ever acquisition</a>. The LAPD, once responsible for using militarized force in the neighborhoods home to Los Angeles’ prospective rappers, now enforces security for them at events such as Rolling Loud Los Angeles. The music has been a determinant force in enacting these changes in LA and society at large. Gangster rap drew attention and public outrage towards the Rodney King beating, just as Kendrick Lamar would to the death of Trayvon Martin close to a quarter century later.</p>
                                            </div>
                                        </div>
                                        <div className='col-lg mt-4 d-flex center-within mt-lg-0 text-center'>
                                            <img style={{width: '100%'}} className='outline m-auto' src={require('../media/2000s/rollingloud.jpeg')}/>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>

                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                            <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                <div className='circle bg-white outline'/>
                            </div>
                                <div className='col'>
                                    <Fade right>
                                    <div className='row'>
                                        <div className='col-lg m-0 d-flex center-within order-lg-1 text-center'>
                                            <div>
                                                <p className='font-crimson text-justify'>Regardless of how far it has come, the same age-old problems in and surrounding hip-hop persist: crime, violence, drug-use, misogyny, racism and widespread poverty. We must ask ourselves, why is this the case? Is hip-hop detrimental to society, or is hip-hop the product of a society that is detrimental to its people? In the forbidding streets of Southern Los Angeles, it is hard to see how the latter can not be the case. Minorities still face significantly <a href='https://www.prisonpolicy.org/graphs/raceinc.html' target='_blank'>higher incarceration rates</a> under our judicial system, <a href='https://www.kcet.org/shows/city-rising/the-history-of-south-central-los-angeles-and-its-struggle-with-gentrification' target='_blank'>USC continues to gentrify South Central</a> worsening an already dire homelessness cris, real wages in LA have <a href='https://www.latimes.com/projects/la-fi-construction-trump/' target='_blank'>decreased since the 1970s</a>, and our privatized healthcare system <a href='https://www.nytimes.com/2020/03/12/books/pharma-gerald-posner.html' target='_blank'>profits off of drug addiction</a>. In order to fix the problems within the realm of hip hop, we must first address the underlying issues that perpetuate their reflection in music. For many of the most marginalized youth in LA and across the country, hip hop music is the only thing they turn to aspirationally.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>

                            </div>
                        </LazyLoad>

                        <LazyLoad height='60vh' offset={200}>
                            <div className='row my-5'>
                            <div className='col-auto w-10 d-flex center-within m-0 p-0'>
                                <div className='circle bg-white outline'/>
                            </div>
                                <Fade left>
                                <div className='col-lg m-0  text-center'>
                                    <h3 className='font-crimson text-center text-italic m-auto'>Thank you.</h3>
                                    <h3 className='text-white mt-3 font-crimson bold text-center'>Nathaniel Coffin, Taha Mohamad, Miles Bernhard</h3>
                                </div>
                                </Fade>
                            </div>
                        </LazyLoad>
                    </div>
                </section>

                <section ref={this.dataRef} className='data-intro mt-5'>
                    <div className='container'>
                        <div className='row outline'>
                            <div className='col-md bg-white text-center'>
                                <h1 className='font-fancy text-black'>Data Sets</h1>
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <div className='col'>
                                <h2 className='font-crimson bold text-white'>The Goal</h2>
                                <p className='font-crimson mt-3 text-white'>We attempted to compile a dataset that contained every rap song ever made, with as much information as possible for each song. With this data, we hoped to quantify trends in rap music, identify key characteristics that differentiate the eras of rap, and analyze the changing impact of geographic origin on rap songs.</p>
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <div className='col'>
                                <h2 className='font-crimson bold text-white'>The Process</h2>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg'>
                                <h3 className='font-crimson bold text-white'>Artists</h3>
                                <p className='font-crimson text-white text-justify'>We first pursued a comprehensive list of rappers. We considered finding as many ranked lists of rappers as we could, then compiling them all together. However, we felt this may lead to a recency bias, and could neglect the “mediocre rapper”, who is in no way notable. Instead, we started with a <a href='https://en.wikipedia.org/wiki/List_of_hip_hop_musicians' target='_blank'>list from Wikipedia</a>, which was the largest we could find. We then began matching these artists to their Spotify profiles using <a href='https://developer.spotify.com/documentation/web-api/' target='_blank'>Spotify’s remarkably powerful API</a> and the <a href='https://spotipy.readthedocs.io/en/2.12.0/' target='_blank'>python library Spotipy</a>. Of the 1423 artists, we were able to match 1240 of them. From there, we pared the list down using the data Spotify provides on popularity and genre. We removed artists whose genres suggested a non-American following, as well as those with very low popularity scores or and very low follower counts, as we wanted to focus on popular, American rap culture. The result was 819 artists on which we would focus, for which we had their names, Spotify ID’s, associated genre’s, followers, and popularity score.</p>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-lg'>
                                <h3 className='font-crimson bold text-white'>Discographies</h3>
                                <p className='font-crimson text-white text-justify'>We used Spotify’s API to get the track name, release date, album, duration, and Spotify ID of each of the artist’s songs. We were careful to avoid clean versions and duplicates, for example when an artist releases a song as a single and then includes it on an album. We dropped songs with durations less than 60 seconds, as we found that they were mistakes of some kind, skits, or otherwise insignificant.</p>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg'>
                                <h3 className='font-crimson bold text-white'>Song Data</h3>
                                <p className='font-crimson text-white text-justify'>We then began compiling as much data as we could for each song. First, we used Spotify’s API to collect a variety of “features” for each song: acousticness, danceability, energy, instrumentalness, liveness, loudness, speechiness, valence, and tempo. More about these metrics can be read <a href='https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-audio-features/' target='_blank'>here</a>. Any songs that did not have this data were dropped from the data set. We then focused on collecting lyrics. For this, we looked to <a href='https://www.genius.com' target='_blank'>Genius</a>, a site that provides crowd sourced lyrics that are well maintained and widely considered to be reputable. We used the <a href='https://docs.genius.com' target='_blank'>Genius API</a> and accessed it through John Miller’s fantastic python library,<a href='https://github.com/johnwmillr/LyricsGenius' target='_blank'> LyricsGenius</a>. We dropped songs where lyrics were not available, and songs where the lyrics we found were less than 20 words long, as this points to either an error in the lyric data or an insignificant song. Finally, we collected data on the Billboard success of the song using a data set provided by Sean Miller that compiles the Billboard Weekly Hot 100 chart from 1958 through the end of 2019. We cross referenced our songs with this data set to assign each song a Hot 100 score. Each week spent at number 1 earned 100 points, number 2 earned 99 points, all the way down to number 100, which earned 1 point. We summed these points to determine each songs score. We dropped all the songs from 2020, seeing as we didn’t have Billboard history for this time period. <a style={{fontWeight: '700'}}>The result was a dataset of including 819 artists, 10167 albums, and 58775 songs, with release dates ranging from the beginning of 1980 through the end of 2019.</a> For each song, we had the artist, Spotify followers, Spotify popularity, artist genres, album name, album release date, song name, lyrics, Hot 100 score, acousticness, danceability, energy, instrumentalness, liveness, loudness, speechiness, valence, and tempo. This was stored in a plain text CSV that was over a third of a gigabyte.</p>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-lg'>
                                <h3 className='font-crimson bold text-white'>A Note on Data Quality</h3>
                                <p className='font-crimson text-white text-justify'>Throughout the process of collecting this data, we balanced two ideals in mind: “quantity over quality” and “garbage in, garbage out”. While we made sure to avoid erroneous data as much as possible, and we ignored songs where we didn’t have all the data we wanted, we quickly learned that our data was not going to be perfect. There were errors in lyrics on Genius, mismatched songs and lyrics, and songs that would be missed, for example. However, we determined that if we did our best to prevent these problems, that they would “average out” over time. By assembling as much data as possible, we felt that the legitimacy of the overall trends could be established despite a few errors here and there.</p>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg'>
                                <h3 className='font-crimson bold text-white'>Computing More Metrics</h3>
                                <p className='font-crimson text-white text-justify'>We then went about computing a few additional columns for easier analysis going forwards. First, we added a column called ‘words’, which consisted of each word in the lyrics, all lowercase, with all punctuation and line breaks removed. We then used the natural language processing library nltk to create a list of unique word stems for each song. We were then able to compute total word count by counting the number of words and unique word count by counting the number of unique stems. This further allowed us to computer words per minute, unique words per minute, and lexical diversity (a ratio of unique words to total words). Furthermore, we computed a metric called profanity using a <a href='https://github.com/vzhou842/profanity-check' target='_blank'> Python library called profanity-check</a>. This column represents the ratio of words were flagged as profane to words that weren’t.</p>
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <div className='col'>
                                <h2 className='font-crimson bold text-white'>Analysis</h2>
                                <p className='font-crimson text-white text-justify'>We determined two primary avenues for analyzing the data. The first of which is plotting the value of one of our metrics over time for a given subset of the songs. For example, we could plot the average Hot 100 score per year of all rap songs, or rap songs by Kanye West, or rap songs of a certain genre, ect. The second direction for data analysis was through the lyrics in particular. We could assemble word lists and plot their frequency in various subsets of songs over time. For example, we could create a list of words related to drugs, and plot drug references over time. We also created a list of every genre that Spotify provided for the artists, and sorted them into east coast, west coast, midwest, and the south to allow us to create different graphs for each region.</p>
                            </div>
                        </div>
                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Song Duration</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.duration}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[175,200,225,250,275, 300, 325]} type="number" domain={[175, 325]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Seconds', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                Plotting the duration over time shows a gradual decrease beginning most notably around 2005 from about 240 seconds to under 200 in 2019. Songs that make the Hot 100 are noticeably higher than average over pretty much the entire course of history, but that changes in 2017. All genres make a sharp downwards turn and converge together, and the Hot 100 line intersects with the average line for the first time in 2019. There is not a clear trend involving the various regional genres. We can see that the variation between the genres decreases significantly in the past 5 years, which suggests some combination of an increased number of total songs and increased homogeneity. The substantial decrease in the past 5 years aligns with the general idea of a decreased cultural attention span and perhaps suggests a decreased quality and complexity in rap music.
                                </p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Energy</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.energy}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.2, 0.4, 0.6, 0.8, 1]} type="number" tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                According to Spotify, energy “represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.” We see an increase in energy from around .63 to around .72 from around 1994 to 2005, followed by a gradual decline until around 2016-2017 where energy begins to level off and show signs of increasing. We can see that east coast rap remained high energy when the others began to slip, and the Hot 100 songs were noticeably less energetic than the average around 2016-2017. While the magnitude of these changes are not large enough to be definitely substantial, the general decrease in variability over the past few years that we observed in the duration graph is also visible here.
                                </p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Valence</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.valence}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.2, 0.4, 0.6, 0.8, 1]} type="number" tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                Spotify defines valence as “the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).” The graph shows a decline from around .67 to around .6 from 1990 to 1995, followed by a gradual increase up until around 2003. Part of this could be explained by the decline into the violent and hateful rivalry between the east and west coasts in the first half of the 1990’s. After 2Pac’s death, the reality of the music came crashing down, and rap began slightly shifting away from the coastal war, which may explain the raising valence before the turn of the century. The steady decline from the early 2000’s through 2016-2017 suggests a shift to darker, more aggressive songs. Comparing this with the energy graph above, it suggests that the average rap song was aggressive and dark over most of the 2000’s and 2010’s. In the 2010’s, rap dips below .5, which based on Spotify’s distribution graph implies that rap was more negative than the average song. The beginning of an upward trend that we see in the past few years may be partially attributable to the emergence of “bubble gum trap”. This type of rap, championed by artists like Lil Yachty, is characterized by positive, almost Disney-esque beats with traditional lyrics revolving around violence, drug consumption, and the pursuit of money.
                                </p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Tempo</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.tempo}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[80, 90, 100, 110, 120, 130, 140, 150]} type="number" domain={[80, 150]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Beats/Minute', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                The tempo graph appears to have the same shape as valence, but upside down.
                                It fits in with the overall theme the other graphs have been eliciting: Rap got faster, darker, and more aggressive from the 2000’s onwards.
                                </p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Words Per Minute</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.wpm}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[80, 100, 120, 140, 160, 180, 200, 220]} type="number" domain={[80, 220]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Words/Minute', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                The words per minute graph shows a very slight decline from closer to 160 to around 140 by 2014. In 2014, we see a noticeable decrease in variability between the genres, and a sharp uptick in pace through 2019. This could potentially be explained by the frequent use of ad libs. Modern rap is riddled with “yuh” and “ay”, which increases the words per minute drastically.
                                </p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Lexical Diversity</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.lexical}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55]} type="number" domain={[0, 0.55]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                When we look at a graph of lexical diversity, we see a relatively steady graph followed by a sharp dip around 2015. East coast rap is consistently above average, suggesting that it’s stuck closer to its roots in classic, lyrical rap. The songs that make the Hot 100 are noticeably less lexically diverse than average, beginning around 1995. This follows with the idea that the popular sound is repetitive, simple, and easy to sell. The dip in lexical diversity perfectly characterizes era of Soundcloud/mumble rap, and the beginning of an upward trend in the past few years suggests a potential return to lyricism.
                                </p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Hot 100 Entries</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.hot100}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 50, 100, 150, 200, 250, 300, 350]} type="number" domain={[0, 350]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                The graph of hot 100 entries shows the rise of hip hop to the dominant force in music that it is today. Noticeably, southern rap is the dominant genre, which can be easily seen in the super stars of today: Atlanta alone produced Andre 3000, Jeezy, T.I. Ludacris, Gucci Mane, Migos, Future, Young Thug, Lil Baby, Gunna, Lil Yachty, and many more. While the west coast produced the defining rappers of the 90’s, the south eclipses them at the turn of the century and never looks back. The sharp dip in 2019 can be attributed to the lack of major albums released by some of rap’s biggest stars. It was widely seen as a weak year in rap, and not because of a lack of quality but more because of a lack in content. We fully expect the upward trend to return in 2020, as the year has already been marked by some major releases.
                                </p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Profanity</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.profanity}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.05, 0.100, 0.150, 0.200, 0.250, 0.300, 0.35]} type="number" domain={[0, 0.35]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                The library we used to compute profanity did not depend on any list of swear words, but rather used machine learning. It was trained on a set of tweets that had been accurately flagged as either profane or not. It produced a clear trend of increasing profanity from the beginning of the data up until the turn of the century, followed by a gradual dip that eventually begins climbing until now. To confirm the validity of this trend, we tried calculating profanity line by line, and also by using a word list sourced from the internet. All methods showed the same general shape. Notably, songs that reached the Hot 100 were less profane, which we speculate is due to the need for mass appeal. West coast rap is noticeably above average in profanity.
                                </p>
                            </div>
                        </div>
                        </LazyLoad>
                        <div className='row mt-5'>
                            <div className='col'>
                                <h2 className='font-crimson bold text-white'>Word List Analysis</h2>
                            </div>
                        </div>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Money</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.money}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.2, 0.4, 0.6, 0.8, 1.0]} type="number" domain={[0, 1]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                We assembled a massive list of slang words for money using <a href='https://genius.com/Rap-genius-slang-dictionary-money-lyrics' target='_blank'>a Genius list</a> as well as personal knowledge. Graphing it over time demonstrates the unwavering importance of money in rap. The average is consistently between 60 and 70%, and there are no strong tendencies by any one genre in terms of referencing money.

                                </p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Brands</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.brands}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4]} type="number" domain={[0, 0.4]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                We assembled a list of popular brand names in rap using sources like <a href='https://www.wsj.com/articles/these-are-the-fashion-brands-rappers-namedrop-the-most-11555943601' target='_blank'>the Wall Street Journal</a> and <a href='https://money.cnn.com/infographic/luxury/rap-luxury-brands/index.html' target='_blank'>CNN</a>. Graphing the percent of songs that make at least one reference to one of these brands each year by genre, we see a very clear upward trend that appears to be growing exponentially. In 2000, only 7.5% of rap songs featured such a reference, while in 2019, that number had skyrocketed to about 17.5% on average, and nearly 22% for Hot 100 songs. The south tends to be above average in these references, while the West coast remains generally below average. In most years, Hot 100 songs are more likely to reference a brand than the average rap song. This speaks to the focus of rap on luxury, fashion and brand names in particular, and more broadly to the general commercialization of rap.
                                </p>
                            </div>
                        </div>
                        </LazyLoad>
                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Cars</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.cars}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6]} type="number" domain={[0, 0.6]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                We assembled a list of car makes, models, and slang terms based on numerous lists of car brands. Graphing it over time, we see a gradual rise in the average from about .25 in 1990 to around .4 in 2000. It then remains relatively constant through 2019, varying between .3 and .4. There do not appear to be any strong stylistic differences between the various genres and the hot 100 songs, although the South is noticeably above average. While rap may just be developing its love for fashion, the cars have pretty much always been there.
                                </p>
                            </div>
                        </div>
                        </LazyLoad>
                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Cops</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.cops}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55]} type="number" domain={[0, 0.55]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                We assembled a list of slang words for cops using <a href='https://en.wikipedia.org/wiki/List_of_police-related_slang_terms' target='_blank'>a Wikipedia list</a> as well as some personal knowledge. Graphing it over time, we see a gradual decline in the average from a peak of around one third in 1998. As of 2019, the average is around .2. However, we see that both West Coast and East Coast rap are distinctly above average. In the early 1990’s, during the time of N.W.A. and rioting in LA over police brutality, over 40 percent of West Coast rap songs referenced the police. Interestingly, the Hot 100 songs fall well below average after the turn of the century. This speaks to the commercialization and depoliticization of rap over time; the popular music is not the music of activists and societal criticism.
                                </p>
                            </div>
                        </div>
                        </LazyLoad>
                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Drugs</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.drugs}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]} type="number" domain={[0, 1]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                We assembled a massive list of drugs and slang words for drugs using a variety of lists. While the list was certainly not all encompassing, we expected it would be representative of overall drug references. When we graph drug references over time, we see a relatively constant chart, with the average gravitating around 50% of rap songs. Notably, West Coast rap is significantly above average, averaging closer to 60% through 2015. This aligns with California rap’s notorious focus on drugs, famously marijuana.  Also interestingly, we see less drug references on average in Hot 100 songs, again speaking to the need for mass appeal and the standard of “appropriateness” needed to reach the mainstream. That standard is certainly low however, as over 40% of  Hot 100 rap songs still reference drugs most years.</p>
                            </div>
                        </div>
                        </LazyLoad>
                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Gangs</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.gangs}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6]} type="number" domain={[0, 0.6]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                We assembled a list of words related to gangs by hand. It included words such as gangster and gangsta, as well as the names of notable gangs, such as the Bloods, Crips, and Pirus. Graphing references over time, we see a trend that aligns extremely well with the timeline. Gang references peak at almost 30% in the mid to late 90’s, during the Gangsta rap era. West Coast references to gangs are way above average, with over half of West Coast songs referencing gangs in 1994. After 2000, the average steadily declines to around 15% in 2019. However, West Coast rap still trends way above average at over 20% in its lowest year. This speaks to the lasting impact of the Gangsta rap era on West Coast rap as well as the prevalence of gang life in the backgrounds of California rappers. Finally, gang references are noticeably low on Hot 100 songs, furthering the point that the lives of rappers need a little adapting to achieve mass appeal, and that popular rap is a bit more tame than the average rap song.</p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Guns</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.guns}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]} type="number" domain={[0, 1]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                We adapted a list of gun related words from a <a href='https://genius.com/Rap-genius-slang-dictionary-firearms-lyrics' target='_blank'>list on Genius</a>. Graphing references over time, we see a quick rise from around 60% in 1990 to a peak of over 70% in 1995. West Coast rap references to guns are even higher, peaking at over 80% in the early 90’s. References in all genres gradually declined to just over 50% by 2008, before leveling off through 2019. West Coast references stay notably above average, alluding to the prevalence of gun violence in certain parts of California, primarily Los Angeles. Again, we see a generally tamer pattern in the Hot 100 songs, where guns are referenced 5% to 10% less than the average rap song in most years.</p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Violence</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.violence}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]} type="number" domain={[0, 1]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                We assembled a list of words relating to violence by hand and using a few online thesauruses and slang dictionaries. It included a variety of words related to violent acts. Graphing it over time shows a gradual decline from a peak of about 85% in 1995 to over 65% in 2019. Violence is absolutely prevalent in rap music, as the graph clearly demonstrates, but it seems to have peaked in the era of gangster rap and coastal rivalry. Hot 100 songs tend to be slightly below average, while West Coast songs remain slightly above average.</p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Jail</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.jail}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55]} type="number" domain={[0, 0.55]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                We assembled a list of words related to jail by hand. Graphing it, we see a gradual rise from under 20% to over 20% by the turn of the century, followed by a gradual decline to around 15% in 2019. Noticeably, we see that East Coast rap tends to be well above average, while Hot 100 songs tend to be below average. West Coast jail references don’t seem to differ much from the average rap song.</p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Misogyny</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.misogyny}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]} type="number" domain={[0, 1]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                You cannot talk about rap lyrics without mentioning the overwhelming misogyny that permeates the culture. We assembled a list of derogatory terms for women and graphed their presence in rap songs over time. Unsurprisingly, for the majority of rap’s history the average rap song was more likely to use a derogatory term for women than not. The average increased from just over 20% in 1990 to a relative high of 60% just before the turn of the century. Overall references then proceeded to parabolically dip to about 40% around 2007, before rocketing back up to an all time high of over 60% in the past few years. East Coast rap is marginally less likely to use these words over the course of rap’s history, as well as Hot 100 songs, while West Coast rap is well above average. Dishearteningly, misogyny is at an all time high in Hot 100 songs as of 2018-2019. Rap has shown an inability to escape its misogynistic roots thus far, and based on this data does not show signs of slowing down.</p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Los Angeles</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.losangeles}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5]} type="number" domain={[0, 0.5]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                We assembled a list of keywords related to Los Angeles by hand. These included neighborhoods/cities that were identified as significant by our timelines, such as Compton and Watts, as well as famous street signs and sports teams. As we can see through the graph, and unsurprisingly, West Coast rap songs are about twice as likely to reference LA as the average rap song. The average song has not changed much in average references, slipping from around 8% to just under 5% from 1990 to 2019. This decrease can be attributed to the growing presence of other cities in the rap game, as Los Angeles is no longer one of essentially two cities producing popular rappers. The fact that Los Angeles references remains so high, despite the falling relative popularity of West Coast rap songs speaks to its prominence as a city and its importance to rap culture as a whole. No matter where you’re from, Los Angeles is often where you hope to end up as a rapper.</p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>New York</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.newyork}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5]} type="number" domain={[0, 0.5]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                We assembled a list of words related to New York in a similar manner to our Los Angeles word list. Unsurprisingly, the two graphs look strikingly similar, with the East Coast and West Coast lines reversed. However, the references to New York City by non-East Coast songs are slightly lower than that of Los Angeles. While New York City is an incredibly famous city, more so than Los Angeles, it appears slightly less important to the rap game (that is, assuming you aren’t from there).</p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Opioids</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.opioids}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5]} type="number" domain={[0, 0.5]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                We assembled a list of words related to opioids by finding lists of such drugs and sourcing slang terms for each. Graphing references shows a steady rise from an average of just over 10% in 1990 to over 20% in 2019. Hot 100 references track the average very closely, suggesting that the drugs are not getting blocked by the “mass appeal” factor in the same way other topics like guns have been. There’s an anomalous data point for Hot 100 songs in 1991 caused by the very low number of Hot 100 rap songs that year. However, in general, it appears opioids are gathering momentum and permeating rap culture and popular culture in general.</p>
                            </div>
                        </div>
                        </LazyLoad>

                        <LazyLoad offset={50}>
                        <div className='row outline mt-3'>
                            <div className='w-100'>
                                <h3 style={{textDecoration: 'underline'}} className='font-crimson bold text-center text-white'>Coastal Rivalry</h3>
                                <ResponsiveContainer aspect={1.75}>
                                    <LineChart data={this.state.coasts}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
                                      </XAxis>
                                      <YAxis ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5]} type="number" domain={[0, 0.5]} tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
                                      <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
                                      <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
                                      <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
                                      <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
                                      <Line type="linear" dot={false} dataKey="South" stroke="red" />
                                      <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
                                      <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
                                      <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='w-100 mt-2'>
                                <p className='font-crimson text-justify p-4 text-white'>
                                Graphing the use of the words “coast”, “east”, and “west” reveals the diversification of rap over time. Usage peaks in 1996, with over 20% of all rap songs using one of the words, and 35% of Hot 100 songs. Over time, the average usage decreased to around 7.5%, suggesting the growth of rap in between the coasts and the reduction in importance of geography when writing lyrics. References by West Coast rappers remained well above average at over 20% until 2012, before falling to 15% by 2019.</p>
                            </div>
                        </div>
                        </LazyLoad>
                    </div>
                </section>

                <section className='citations mt-5'>
                    <div className='container'>
                        <div className='row outline'>
                            <div className='col-md bg-white text-center'>
                                <h1 className='font-fancy text-black'>Sources & Citations</h1>
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <div className='col'>
                                {this.state.sources.map((source) => (
                                    <p className='text-white font-crimson'><a target='_blank' href={source.link}>{source.text}</a></p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
