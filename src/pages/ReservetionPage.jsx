import React, { useEffect, useState } from "react";
import useCrud from "../hooks/useCrud";
import BookCard from "../components/ReservationPage/BookCard";
import FormRating from "../components/ReservationPage/FormRating";
import './style/ReservationPage.css';

const ReservetionPage = () => {
  const [bookSelected, setBookSelected] = useState();
  const [showRatingForm, setShowRatingForm] = useState(false);
  const [reservations, getReservations, ,deleteReservation ] = useCrud();

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/bookings';
    getReservations(url, true);
  }, []);

  const handleRate = (book) => {
    setBookSelected(book);
    setShowRatingForm(true);
  };

  return (
    <article className="article__reservation">
      <h2>Reservations active</h2>
      {showRatingForm && <FormRating bookSelected={bookSelected} setBookSelected={setBookSelected} />}
      <hr className="hr__reserve" />
      <hr className="hr__reserve" />
      <hr className="hr__reserve" />
      <div>
        {reservations?.map(book => (
          <BookCard
            key={book.id}
            book={book}
            deleteReservation={deleteReservation}
            handleRate={() => handleRate(book)} // Pass handleRate function
          />
        ))}
      </div>
    </article>
  );
}

export default ReservetionPage;
