import Logo from '../../../assets/images/logo/logo.png';
import backgroundOne from '../../../assets/images/background/background.png';
import yodaImage from '../float/floatImage.js';

let homeSectionOne = `
<section class="section background--one" style="background-image: url(${backgroundOne})">
    <div class="block-section--one">
        <h1>CLIQUE NO BABY YODA, ELE TE MOSTRARÁ O CAMINHO</h1>
        <img src=${Logo} alt="Logo Star Wars">
        ${yodaImage}
    </div>    
</section>
`;

export default homeSectionOne;