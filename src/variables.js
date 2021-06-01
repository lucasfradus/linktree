
import { faAndroid, faAppStoreIos, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";


const Variables =  {
  textColor: '#fff',
  facebookColor: '#4267B2',
  instagramColor: '#C13584',
  youtubeColor: '#FF0000',
  whatsappColor: '#4AC959',
  web: '#FF585D',
  linkedinColor: '#2867B2',
  twitterColor: '#1DA1F2',
  githubColor: '#24292e',
  opt1Color: '#366251',
  opt2Color: '#FF8300',
  apple: '#636363',
  android:'#9FC037'

}

const Data = [

  {
    id: "1",
    link: 'https://apps.apple.com/ar/app/vinimay/id1506565366',
    icon: faAppStoreIos,
    name: 'Descargar para iOS',
    backgroundColor : Variables.apple
},
{
  id: "2",
  link: 'https://play.google.com/store/apps/details?id=com.vinimay.app',
  icon: faAndroid,
  name: 'Descargar para Android',
  backgroundColor : Variables.android
},
{
  id: "3",
  link: 'https://www.instagram.com/vinimayapp_es',
  icon: faInstagram,
  name: 'Instagram',
  backgroundColor : Variables.instagramColor
},
{
  id: "4",
  link: 'https://www.vinimayapp.com/',
  icon: faInfoCircle,
  name: 'Sitio Web',
  backgroundColor : Variables.web
},
{
  id: "5",
  link: 'https://www.linkedin.com/company/vinimay-app/',
  icon: faLinkedinIn,
  name: 'LinkedIn',
  backgroundColor : Variables.linkedinColor
},
]



export {Data , Variables} ;



