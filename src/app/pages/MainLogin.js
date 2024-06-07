import Image from "next/image";
import styles from "./mainLogin.module.css";
import textLogo from "../../assets/logo-text.svg";
import circleLogo from "../../assets/logo-circle.svg";
import persons from "../../assets/persons-web.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person-19.png";
import person3 from "../../assets/person-20.png";
import person4 from "../../assets/person-21.png";
import person5 from "../../assets/person-22.png";

export default function mainLogin() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftIntro}>
        <div className={styles.introContent}>
          <Image
            className={styles.textLogo}
            src={textLogo}
            alt="fb_text_logo"
          />
          <p className={styles.slogan}>
            Facebook helps you connect and share with the people in your life.
          </p>
          <Image
            width={300}
            className={styles.persons}
            src={persons}
            alt="persons-stacked"
          />
        </div>
      </div>

      <div className={styles.logInWrapper}>
        <div className={styles.loginAcc}>
          <Image
            className={styles.circleLogo}
            src={circleLogo}
            alt="facebook logo"
          />

          <div className={styles.loginDialog}>
            <p className={styles.loginRegister}>Log in to Facebook</p>

            <div className={styles.notYou}>
              <div className={styles.accList}>
                <Image className={styles.person} src={person1} alt="person" />
                <Image className={styles.person} src={person2} alt="person" />
                <Image className={styles.person} src={person3} alt="person" />
                <Image className={styles.person} src={person4} alt="person" />
                <Image className={styles.person} src={person5} alt="person" />
              </div>
              <p className={styles.personName}>Jason Thompson</p>
              <p className={styles.notYouText}>Not you?</p>
            </div>

            <div className={styles.submitData}>
              <input
                placeholder="Email address or phone number"
                type="text"
                className={styles.input}
              />
              <input
                placeholder="Password"
                type="password"
                className={styles.input}
              />
              <button className={styles.logInBtn}>Log in</button>
              <p className={styles.forgotPassword}>
                Did you forgot your password?
              </p>
            </div>

            <div className={styles.createAcc}>
              <div className={styles.lang}>
                <p>English (US)</p>
              </div>
              <hr className={styles.divider} />
              <button className={styles.createAccBtn}>
                Create a new account
              </button>
            </div>
          </div>
        </div>

        <div className={styles.bottomLinks}>
          <div className={styles.row}>
            <p className={styles.link}>Sign up</p>
            <p className={styles.link}>Log in</p>
            <p className={styles.link}>Messenger</p>
            <p className={styles.link}>Facebook Lite</p>
            <p className={styles.link}>Video</p>
            <p className={styles.link}>Places</p>
            <p className={styles.link}>Games</p>
            <p className={styles.link}>Marketplace</p>
            <p className={styles.link}>Meta Pay</p>
            <p className={styles.link}>Meta Store</p>
            <p className={styles.link}>Meta Quest</p>
            <p className={styles.link}>Meta AI</p>
            <p className={styles.link}>Instagram</p>
          </div>
          <div className={styles.row}>
            <p className={styles.link}>Threads</p>
            <p className={styles.link}>Fundraisers</p>
            <p className={styles.link}>Services</p>
            <p className={styles.link}>Voting Information Center</p>
            <p className={styles.link}>Privacy Policy</p>
            <p className={styles.link}>Privacy Center</p>
            <p className={styles.link}>Groups</p>
            <p className={styles.link}>About</p>
            <p className={styles.link}>Create Ad</p>
            <p className={styles.link}>Create Page</p>
            <p className={styles.link}>Developers</p>
          </div>
          <div className={styles.row}>
            <p className={styles.link}>Careers</p>
            <p className={styles.link}>Cookies</p>
            <p className={styles.link}>AdChoices</p>
            <p className={styles.link}>Terms</p>
            <p className={styles.link}>Help</p>
            <p className={styles.link}>Contact uploading for non-users</p>
          </div>
        </div>
      </div>
    </div>
  );
}
