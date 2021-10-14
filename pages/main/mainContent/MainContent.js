import phone from './../../static/images/phone.png';
import logoGoogle from './../../static/images/gPlay.png';
import logoApple from './../../static/images/appStore.png';
import loginFake from './../../static/images/loginFake.png';
import Image from 'next/image';

export default function MainContent() {
  return (
    <div>
      <div class="row">
        <div class="column iphoneColumn">
          <div className="centered">
            <Image src={phone} className="styleIphone" />
          </div>
        </div>
        <div class="column">
          <div className="centered">
            <Image src={loginFake} className="styleIphone" />
            <h4 className="instaFont"> Descarga la aplicación.</h4>

            <div class="smallColumn">
              <div className="centered">
                <Image src={logoApple} className="styleBtns" />
              </div>
            </div>
            <div class="column">
              <div className="centered">
                <Image src={logoGoogle} className="styleBtns" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
