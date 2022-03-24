import "../styles/footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="infos">
        <div className="title">
          Espace membre de l'association princesse margot
        </div>
        <div className="content-wrapper">
          <div className="contact">
            <div className="adress">
              <div className="icon"></div>
              <div className="text">
                12 - 14 Rue Georges Huchon 94300 Vincennes
              </div>
            </div>
          </div>

          <div className="contact">
            <div className="phone">
              <div className="icon"></div>
              <div className="text">01 82 39 15 15</div>
            </div>

            <div className="mail">
              <div className="icon"></div>
              <div className="text">contact@princessemargot.fr</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sitemap">
        <div className="title">Plan du site</div>
        <ul>
          <li>Page planning (accueil)</li>
          <li>Page profil</li>
          <li>Page notifications</li>
        </ul>
      </div>

      <div className="about">
        <div className="title">À propos</div>
        <ul>
          <li>Mentions légales</li>
          <li>Politique des données personnelles</li>
        </ul>
      </div>
    </div>
  );
}
