

function BadgeForm({ badgeInfo, onInputChange, onSubmit }) {
  const { firstName, lastName, email, phone, placeOfBirth, favoriteFood } = badgeInfo;

  return (
    <form onSubmit={onSubmit}>
      <div className="badge-container">
        <div className="input-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={firstName} onChange={onInputChange} placeholder="First Name" />
          <label>Last Name:</label>
          <input type="text" name="lastName" value={lastName} onChange={onInputChange} placeholder="Last Name" />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={onInputChange} placeholder="Email" />
          <label>Phone:</label>
          <input type="tel" name="phone" value={phone} onChange={onInputChange} placeholder="Phone (e.g., 9757653323)" />
        </div>
        <div className="input-group">
          <label>Place of Birth:</label>
          <input type="text" name="placeOfBirth" value={placeOfBirth} onChange={onInputChange} placeholder="Place of Birth" />
          <label>Favorite Food:</label>
          <input type="text" name="favoriteFood" value={favoriteFood} onChange={onInputChange} placeholder="Favorite Food" />
        </div>
        <button type="submit" disabled={!firstName || !lastName || !email || !phone || !placeOfBirth || !favoriteFood}>Submit</button>
      </div>
    </form>
  );
}

export default BadgeForm;
