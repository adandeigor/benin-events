import { render } from '@react-email/render';
import MagicLinkEmail from './magic-link';



const renderEmail = async(link:string)=> {
    const html = await render(MagicLinkEmail ({link}), {
        pretty: true,
      });
    return html
}

export default renderEmail