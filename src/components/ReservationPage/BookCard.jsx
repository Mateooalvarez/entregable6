import React from "react";
import './styles/BookCard.css';

const BookCard = ({ book, deleteReservation, handleRate }) => {
  const initialDate = (new Date(book.checkIn)).getTime();
  const finaldate = (new Date(book.checkOut)).getTime();
  const reservationDays = (finaldate - initialDate) / (1000 * 60 * 60 * 24);

  const handleDelete = () => {
    const url = `https://hotels-api.academlo.tech/bookings/${book.id}`;
    deleteReservation(url, book.id, true);
  };

  return (
    <section className="reservation">
      <header>
        <img className="img__reservation" src={book.hotel.images[0].url} alt="" />
      </header>
      <section className="inform__card">
        <h3 className='name__hotel'>{book.hotel.name}</h3>
        {book.hotel.city.name}, {book.hotel.city.country}
        <p onClick={handleRate} className="rate__comment">Rate and comment this visit... ¡CLICK HERE!</p>
      </section>
      <ul className='reservation__hotel'>
        <span><span>Reservations Days </span><span>{reservationDays}</span></span>
        <span><span>subtotal Price </span><span>{reservationDays * Number(book.hotel.price)}</span></span>
      </ul>
      <button className="hotel__btn" onClick={handleDelete}><i className='bx bx-trash'></i></button>
    </section>
  );
}

export default BookCard;
