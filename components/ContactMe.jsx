
import React from "react";



function ContactMe() {
  return (
    <>
    <main className='inline-block'>
      <div className="pt-[150px] m-auto text-center text-white">
        <h1 className="text-4xl textclear font-bold">Kontakt</h1>
        <p className="text-md py-2 textclear font-semibold">Telefon: +1 555 123 456 789</p>
        <p className="text-md py-2 textclear font-semibold">E-mail: email@example.com</p>
        <a href="https://www.google.com/maps/place/Billstedt/@53.5424256,10.0969204,15z/data=!3m1!4b1!4m6!3m5!1s0x47b18c5b9111d205:0xd98619cb186ea65c!8m2!3d53.542426!4d10.1071987!16s%2Fm%2F0124sbv7?entry=ttu" target="_blank" rel="noreferrer"><p className="text-md py-2 textclear font-semibold">Anschrift: 2148 Straßenname, Stadtname, Landkreis, 92103</p></a>
      </div>
      {/*contact card*/}
      <div className="flex items-center justify-center w-screen text-white my-[50px] m-[30px]">
      <form action="https://getform.io/f/86537289-4693-4bb5-b5fa-ef02736c1a18" method="POST" className="hvr-float">      
        <input name="name" type="text" className="feedback-input" placeholder="Name*" required/>
        <input name="subject" type="text" className="feedback-input" placeholder="Betreff" />    
        <input name="email" type="text" className="feedback-input" placeholder="Email | Kontakt*" required/>
        <textarea name="text" className="feedback-input" placeholder="Nachricht*" required></textarea>
        <div className="pb-5 text-center">
        <input type='checkbox' className="cursor-pointer" required></input><span className="pl-4">Ich bin damit einverstanden, dass diese Daten zum Zweck der Kontaktaufnahme gespeichert und verarbeitet werden. Mir ist bekannt, dass ich meine Einwilligung jederzeit widerrufen kann.*</span>
        <div className="py-3">Kennzeichnet erforderliche Felder*</div>
        </div>
        <input type="submit" value="Senden" className="hvr-float py-3 bg-white text-black sm:bg-[#0e1111] sm:text-white" />
        <input type="reset" value="Löschen" className="hvr-float text-center py-3"/>
      </form>
      </div>
      </main>
    </>
  );
}

export default ContactMe;
