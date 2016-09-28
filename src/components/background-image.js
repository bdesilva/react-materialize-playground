import React from 'react';
import Styles from '../../styles/selection.css';

export default class BackgroundImage extends React.Component {
  render() {
    const urls = {
      'login': 'http://www.publicdomainpictures.net/pictures/10000/velka/1-1255449988dV2j.jpg',      
      'main': 'http://photoeverywhere.co.uk/west/usa/hawaii/palm-trees-DSC_3986.jpg'
    };

    const styles = {
      'something': Styles.login,
      'something/main': Styles.main
    };
    
   let src = urls[this.props.page];
  
   return <img src={src} className={styles[this.props.page] || Styles.other} />;
  }
}
