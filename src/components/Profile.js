import "../styles/profile.scss";

export default function Profile() {
  return (
    <div className="profile">
      <div>
        <input type="text" defaultValue="Becquart" placeholder="Nom" />

        <input type="text" defaultValue="Caroline" placeholder="Prénom" />

        <textarea>Texte&#13;&#10;placeholder</textarea>
      </div>
    </div>
  );
}
