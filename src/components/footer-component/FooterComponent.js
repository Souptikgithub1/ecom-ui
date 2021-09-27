import './FooterComponent.css'
import {Icon} from "@mui/material";
import Divider from "../divider-component/Divider";

const footers = [
    {
        footerIcon: 'headset_mic_outlined',
        footerHeader: 'CUSTOMER SUPPORT',
        footerTag: 'Need Assistance?',
        footerDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.'
    },
    {
        footerIcon: 'payment_outlined',
        footerHeader: 'SECURED PAYMENT',
        footerTag: 'Safe & Fast',
        footerDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.'
    },
    {
        footerIcon: 'replay_outlined',
        footerHeader: 'FREE RETURNS',
        footerTag: 'Easy & Free',
        footerDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.'
    },
    {
        footerIcon: 'local_shipping_outlined',
        footerHeader: 'FREE SHIPPING',
        footerTag: 'Orders Over $99',
        footerDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.'
    }
]

const FooterComponent = () => {
  return <div className='footer-container'>
      <Divider />
     <div className="footer-cards-container">
         {footers.map((footer, i) => <div key={i} className="footer-card">
             <Icon className="footer-icon">{footer.footerIcon}</Icon>
             <div className="footer-header">{footer.footerHeader}</div>
             <div className="footer-tag">{footer.footerTag}</div>
             <div className="footer-desc">{footer.footerDesc}</div>
         </div>)}
     </div>
  </div>
}

export default FooterComponent