import EmptyField from "./inputs/emptyField"

export default function MapAddEvent(){
    return(
      <main>
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
      </main>
    )
  }