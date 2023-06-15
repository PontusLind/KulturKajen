//TO DO
// 1. Refine fetch & put correct information on ChosenCards
// 2. Why doesn't the adresses work?
// 5. Insert and animate logo
// 6. Make site dynamic/for phones
// 7. Make an eventcard clickable -> for more information
// 8. Rotate information on "today"

//Last
// Create search field
// Create date search field

import EventStyle from "./EventStyle.css";
import { useState, useEffect } from "react";

function EventPage(props) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const date = new Date(dateString);
    return date.toLocaleDateString("sv-SE", options);
  };

  const formatTime = (timeString) => {
    const options = { hour: "2-digit", minute: "2-digit" };
    const time = new Date(timeString);
    return time.toLocaleTimeString("sv-SE", options);
  };

  return (
    <>
      <main className="headerContainer">
        <div className="header">
          <h1>
            - OBS! Work in progress! <br /> KulturKajen{" "}
          </h1>
          <p>Skepp O'hoj! Dags för Skoj!</p>
        </div>
      </main>
      <main className="chosenCardsContainer">
        <section className="chosenCards">
          <div className="kostnadsfri">
            <img className="chosenImg" src="tram.jpg" />
            <div className="kostnadsfriText">
              <h1>{props.activities[3].title}</h1> <br />
              <br />
              <div
                dangerouslySetInnerHTML={{
                  __html: props.activities[3].description,
                }}
              />
            </div>
          </div>
          <div className="other">
            <div className="idag">{props.activities[6].title}</div>
            <div className="barn">
              <img
                className="chosenImg"
                src="kids.jpg"
                alt="4 kids lining up, wearing clothes for rain"
              />
              {props.activities[9].title}
            </div>
          </div>
        </section>
      </main>
      <main className="eventsContainer">
        {props.activities.map((activity) => {
          return (
            <>
              <main className="eventCard">
                <section>
                  <div className="activityTitle">
                    {activity.image ? (
                      <>
                        <img
                          className="cardImage"
                          src={`${activity.image.host}${activity.image.path}`}
                          alt="Activity Image"
                        />
                      </>
                    ) : (
                      <img
                        className="cardImage"
                        src="NoImg.jpg"
                        alt="Default Image"
                      />
                    )}
                    {activity.title}
                  </div>
                  <div className="activityAddress">
                    {/* {activity.unit.addsstreet} <br /> {activity.unit.name} */}
                  </div>
                </section>
                <section>
                  <div className="activityDate">
                    <p>
                      Tid: {formatTime(activity.startTime)} <br />
                      Datum: {formatDate(activity.startTime)}
                    </p>
                  </div>
                </section>
              </main>
            </>
          );
        })}
      </main>
    </>
  );
}

export default EventPage;