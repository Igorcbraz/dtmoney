import { HeaderDesktop } from '../Desktop/index';
import { HeaderMobile } from '../Mobile/index';

import { useWindowDimensions } from '../../../hooks/useWindowDimensions'

export function RenderHeader(){
  const { width } = useWindowDimensions();
 
  if(width >= 950){
    return <HeaderDesktop/>
  } else {
    return <HeaderMobile/>
  }
}
