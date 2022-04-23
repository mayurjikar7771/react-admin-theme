import "./list.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List = () => {
  return (
    <div className="listData">
      <Sidebar/>
      <div className="listContainerData">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List