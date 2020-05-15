import _AC from '../resources/PNG/AC.png'
import _2C from '../resources/PNG/2C.png'
import _3C from '../resources/PNG/3C.png'
import _4C from '../resources/PNG/4C.png'
import _5C from '../resources/PNG/5C.png'
import _6C from '../resources/PNG/6C.png'
import _7C from '../resources/PNG/7C.png'
import _8C from '../resources/PNG/8C.png'
import _9C from '../resources/PNG/9C.png'
import _10C from '../resources/PNG/10C.png'
import _JC from '../resources/PNG/JC.png'
import _QC from '../resources/PNG/QC.png'
import _KC from '../resources/PNG/KC.png'
import _AS from '../resources/PNG/AS.png'
import _2S from '../resources/PNG/2S.png'
import _3S from '../resources/PNG/3S.png'
import _4S from '../resources/PNG/4S.png'
import _5S from '../resources/PNG/5S.png'
import _6S from '../resources/PNG/6S.png'
import _7S from '../resources/PNG/7S.png'
import _8S from '../resources/PNG/8S.png'
import _9S from '../resources/PNG/9S.png'
import _10S from '../resources/PNG/10S.png'
import _JS from '../resources/PNG/JS.png'
import _QS from '../resources/PNG/QS.png'
import _KS from '../resources/PNG/KS.png'
import _AH from '../resources/PNG/AH.png'
import _2H from '../resources/PNG/2H.png'
import _3H from '../resources/PNG/3H.png'
import _4H from '../resources/PNG/4H.png'
import _5H from '../resources/PNG/5H.png'
import _6H from '../resources/PNG/6H.png'
import _7H from '../resources/PNG/7H.png'
import _8H from '../resources/PNG/8H.png'
import _9H from '../resources/PNG/9H.png'
import _10H from '../resources/PNG/10H.png'
import _JH from '../resources/PNG/JH.png'
import _QH from '../resources/PNG/QH.png'
import _KH from '../resources/PNG/KH.png'
import _AD from '../resources/PNG/AD.png'
import _2D from '../resources/PNG/2D.png'
import _3D from '../resources/PNG/3D.png'
import _4D from '../resources/PNG/4D.png'
import _5D from '../resources/PNG/5D.png'
import _6D from '../resources/PNG/6D.png'
import _7D from '../resources/PNG/7D.png'
import _8D from '../resources/PNG/8D.png'
import _9D from '../resources/PNG/9D.png'
import _10D from '../resources/PNG/10D.png'
import _JD from '../resources/PNG/JD.png'
import _QD from '../resources/PNG/QD.png'
import _KD from '../resources/PNG/KD.png'




const cards = {'AC' :_AC ,'2C' :_2C ,'3C' :_3C ,'4C' :_4C ,'5C' :_5C ,'6C' :_6C ,'7C' :_7C ,'8C' :_8C ,'9C' :_9C ,'10C' :_10C ,'JC' :_JC ,'QC' :_QC ,'KC' :_KC ,'AS' :_AS ,'2S' :_2S ,'3S' :_3S ,'4S':_4S ,'5S' :_5S ,'6S' :_6S ,'7S' :_7S ,'8S' :_8S ,'9S' :_9S ,'10S' :_10S ,'JS' :_JS ,'QS' :_QS ,'KS' :_KS ,'AH' :_AH ,'2H' :_2H ,'3H' :_3H ,'4H' :_4H ,'5H' :_5H ,'6H' :_6H ,'7H':_7H ,'8H' :_8H ,'9H' :_9H ,'10H' :_10H ,'JH' :_JH ,'QH' :_QH ,'KH ' :_KH ,'AD' :_AD ,'2D' :_2D ,'3D' :_3D ,'4D' :_4D ,'5D' :_5D ,'6D' :_6D ,'7D' :_7D ,'8D' :_8D ,'9D' :_9D ,'10D' :_10D ,'JD' :_JD ,'QD' :_QD ,'KD' :_KD };
export default class Card {
   
    constructor(rank='', suit='', index = 0, user=null) {
        this.rank = rank;
        this.suit = suit;
        this.used = false;
        this.index = index;
        this.user = user;
        this.image= cards[rank+suit.charAt(0).toUpperCase()];
        
    }
}