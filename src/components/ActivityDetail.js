import "../styles/activityDetail.scss";

export default function ActivityDetail() {
  return (
    <div className="activity-detail">
      <div className="activity-title">
        <div className="activity-picto"></div>
        <div className="activity-name">
          <div className="name-wrapper">
            <div className="main-title">Atelier Top Chef !</div>
            <div className="sub-title">(spécial Navet)</div>
          </div>
          <div className="creation-date">
            Crée le 8 mai à 16h50 par Ilana Brazzolotto
          </div>
        </div>
      </div>

      <div className="activity-desc">
        <div className="intro">Bonjour à tous !</div>
        <div className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </div>
      </div>

      <div className="activity-infos">
        <div className="activity-date">
          <div className="picto"></div>
          <div className="text">Mardi 12 huillet 2021 de 10h à 11h</div>
        </div>

        <div className="activity-place">
          <div className="picto"></div>
          <div className="text">
            À l'hôpital Robert Debré / Activité unique à ton hôpital
          </div>
        </div>
      </div>

      <div className="volunteers">
        <div className="volunteers-number">
          <div className="picto"></div>
          <div className="text">3 bénévoles</div>
        </div>

        <div className="volunteers-list">
          <div className="volunteer">Jean Becquart</div>
          <div className="volunteer">Emilie Vannier</div>
          <div className="volunteer">Matthieu Plouvier</div>
        </div>
      </div>

      <div className="cta-wrapper">
        <div className="btn-pink">Activité précédente</div>
        <div className="btn-pink">Activité suivante</div>
      </div>
    </div>
  );
}
