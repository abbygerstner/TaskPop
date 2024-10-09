import Image from "next/image";
import NavBar from "@/components/navBar";
import EventCard from "@/components/eventCard";
import EmptyField from "@/components/inputs/emptyField";
/* Idea: each event is a module like canvas classes in card view or module view, click on an event and it takes you to an info page*/
/* Idea: Find events near you */
/* https://github.com/tailwindlabs/tailwindcss-forms */
/* events.map(function(event){
            return( <EventCard eventName="Zach Bryan Concert" />)
          })*/

export default function Home() {
  const events = ['Zach Bryan Concert','Japanese Festival at the Botanical Gardens','Earth Day Park Cleanup']
  return (
    <div className="wholeWebsite">
      <NavBar />
      <div className="websiteBckg bg-fixed bg-[url('/bckg.jpg')]">
        <div className="centerContent container m-auto">
          <div className="flex flex-col space-y-4">
            <div className="h-24 flex mb-2 mt-2 rounded-lg bg-navy">
              <div className="m-auto">
                <div className="profileWelcome">

                  <p className="text-left text-3xl font-semibold">Welcome, [User]!</p>
                </div>
              </div>
            </div>
        <div className="currentEvents h-auto bg-navy rounded-lg p-8 content-center">
          <p className="text-3xl font-semibold">Your Events:</p>
          <div className="eventHolder grid grid-cols-3 gap-4 content-center">
          <EventCard eventName="Zach Bryan Concert"/>
          <EventCard eventName="Japanese Festival at the Botanical Gardens"/>
          <EventCard eventName="Earth Day Park Cleanup"/>
          <EventCard eventName="Scholastic Book Fair"/>
          <EventCard eventName="Grounds Crew"/>
          <EventCard eventName="Greek Festival"/>
          <EventCard eventName="Pool Cleanup"/>
          <EventCard eventName="Canvassing for Politician"/>
          </div>
          <p className="text-lg font-semibold">Want to add another event?</p>
        </div>

        <div className="mapAddEvent h-auto flex bg-navy rounded-lg p-4">
            <div className="addEvent flex-none w-1/4 bg-white p-4 rounded-lg">
              <p className="text-center text-2xl font-semibold mb-4">Add Event</p>
              <div className="actions flex flex-col space-y-4">
                <p className="dropPin">Drop Pin</p>
                <p className="jobTitle">Job Title:</p>
                <EmptyField placeholder="Enter Job Title"/>
                <p className="assignWorkers">Assign Workers:</p>
                <EmptyField placeholder="Enter Workers"/>
                <p className="assignTime">Assign Date and Time:</p>
                <input type="datetime-local" className="form-input px-4 py-3 rounded-full text-gray-600 bg-navy"></input>
                <p className="assignTools">Assign Tools:</p>
                <EmptyField placeholder="Enter Tools"/>
                <input type="submit" className="submitButton"/>
                <div className="flex items-center">
                </div>
              </div>
            </div>
            <div className="map flex-1 w-3/4 h-auto bg-[url('/mapSample.jpeg')] bg-cover bg-center rounded-lg ml-4">
              {/* Map content here */}
            </div>
        </div>
          </div>
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
