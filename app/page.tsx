import Image from "next/image";
import NavBar from "@/components/navbar/navBar";
import EmptyField from "@/components/inputs/emptyField";
import TaskList from "@/components/Tasks/TaskList";
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
        <div className="container m-auto">
          <div className="flex flex-col space-y-4">

            <div className="h-auto bg-navy rounded-lg p-8">
              <TaskList />
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
