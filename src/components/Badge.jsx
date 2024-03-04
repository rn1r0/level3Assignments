
function Badge({ badge }) {
  const { firstName, lastName, email, phone, placeOfBirth, favoriteFood } = badge;

  return (
    <div className="badge">
      <h2>Badge</h2>
      <p><strong>Name:</strong> {firstName} {lastName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Place of Birth:</strong> {placeOfBirth}</p>
      <p><strong>Favorite Food:</strong> {favoriteFood}</p>
    </div>
  );
}

export default Badge;
