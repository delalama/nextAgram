import phone from "./../../static/images/phone.png";
import logoGoogle from "./../../static/images/gPlay.png";
import logoApple from "./../../static/images/appStore.png";
import loginFake from "./../../static/images/loginFake.png";
import Image from "next/image";

export default function MainContent() {
  return (
    <>
      <section>
        <div className="phones">
          <Image src={phone} alt="" width="371" height="580" />
        </div>
        <div className="container">
          <Image alt="" width="350" height="440" src={loginFake} />
          <h4>Descarga la aplicación.</h4>
          <div className="buttons">
            <img
              alt=""
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_castilian_spanish-es.png/bec9a7397c42.png"
              width="136"
              height="40"
            />
            <img
              alt=""
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_spanish-es.png/723534f78879.png"
              width="136"
              height="40"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          display: flex;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }

        .phones {
          display: none;
        }

        .container {
          text-align: center;
        }

        @media (min-width: 859px) {
          .phones {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
