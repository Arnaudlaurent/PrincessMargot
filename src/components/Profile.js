import "../styles/profile.scss";

export default function Profile() {
  return (
    <div className="profile">
      <div className="input-row">
        <input type="text" defaultValue="Becquart" placeholder="Nom" />

        <input type="text" defaultValue="Caroline" placeholder="Prénom" />

        <select>
          <option value="majeur">Majeur</option>
          <option value="mineur">Mineur</option>
        </select>
      </div>

      <div className="input-row">
        <input
          type="text"
          defaultValue="20/02/1988"
          placeholder="Date de naissance"
        />
        <input
          type="mail"
          defaultValue="becquartcaroline@gmail.com"
          placeholder="Mail"
        />
        <textarea rows="5" cols="30" placeholder="Adresse">
          698 rue du Recueil, 59491 Villeneuve d'Ascq
        </textarea>
      </div>

      <div className="input-row">
        <select>
          <option value="f">Fille</option>
          <option value="m">Garçon</option>
        </select>

        <input type="text" defaultValue="Robert Debré" placeholder="Hôpital" />
      </div>
    </div>
  );
}
