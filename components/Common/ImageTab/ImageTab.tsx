/* eslint-disable @next/next/no-img-element */
import { cards } from "@lib/consts";
interface ImageTabProps {
    toggle: number;
  }
const toggleImages =({ toggle }: ImageTabProps)=> {
    switch (toggle) {
      case 1 :
     return (<img className="rounded-xl" src={cards[toggle-1].img} alt={cards[toggle-1].title}/>);
      case 2:
        return (<img className="rounded-xl" src={cards[toggle-1].img} alt={cards[toggle-1].title}/>);
      case 3:
        return (<img className="rounded-xl" src={cards[toggle-1].img} alt={cards[toggle-1].title}/>);
      case 4:
        return(<img className="rounded-xl" src={cards[toggle-1].img} alt={cards[toggle-1].title}/>);
      default:
        return null;
      } 
  }
  export default toggleImages;