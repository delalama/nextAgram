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
            <Image
              src={phone}
              className="styleIphone"
              width="371"
              height="580"
            />
          </div>
        </div>

        <div class="row oneColumnLogin">
          <div class="column ">
            <div className="centered">
              <Image
                src={loginFake}
                className="loginFake"
              />

              <h4 className="instaFont"> Descarga la aplicación.</h4>
            </div>

            <div class="row centered">
              <div class="column">
                <Image
                  src={logoApple}
                  className="styleBtns"
                  width="371"
                  height="80"
                />
              </div>

              <div class="column">
                <Image
                  src={logoGoogle}
                  className="styleBtns"
                  width="371"
                  height="80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
