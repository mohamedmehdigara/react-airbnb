import React, { useState } from 'react';

function Profile() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
  });

  const [bookings, setBookings] = useState([
    {
      id: 1,
      isGuest: true, // Flag to indicate guest or host booking
      listing: { title: 'Cozy Beachfront Apartment' },
      checkInDate: '2024-06-01',
      checkOutDate: '2024-06-07',
    },
    {
      id: 2,
      isGuest: false,
      listing: { title: 'Mountain Cabin Retreat' },
      checkInDate: '2024-06-15',
      checkOutDate: '2024-06-20',
    },
  ]);

  const handleEditProfile = () => {
    // Handle edit profile functionality (e.g., display alert)
    alert('Edit profile functionality is not implemented (placeholder)');
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-info">
        <p>
          <b>Name:</b> {userData.name}
        </p>
        <p>
          <b>Email:</b> {userData.email}
        </p>
        <button onClick={handleEditProfile}>Edit Profile</button>
      </div>
      <h2>My Bookings</h2>
      {bookings.length > 0 ? (
        <ul className="bookings-list">
          {bookings.map((booking) => (
            <li key={booking.id}>
              <p>
                {booking.isGuest ? 'Guest at' : 'Hosting'}: {booking.listing.title}
              </p>
              <p>
                Dates: {booking.checkInDate} - {booking.checkOutDate}
              </p>
              {/* Add link to booking details page if needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>You don't have any bookings yet.</p>
      )}
      <h2>Communication Preferences</h2>
      {/* Implement form or options to manage communication preferences (e.g., email notifications) */}
      <p>Communication preference management is not implemented (placeholder).</p>
    </div>
  );
}

export default Profile;
