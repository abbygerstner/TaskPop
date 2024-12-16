import TaskListItem from "./TaskListItem"

export default function TaskList(){
    return(
          <div className="eventHolder mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <TaskListItem eventName="Zach Bryan Concert"/>
            <TaskListItem eventName="Japanese Festival at the Botanical Gardens"/>
            <TaskListItem eventName="Earth Day Park Cleanup"/>
            <TaskListItem eventName="Grounds Crew"/>
            <TaskListItem eventName="Greek Festival"/>
          </div>
    )
}