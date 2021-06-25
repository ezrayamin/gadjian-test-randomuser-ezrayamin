import React from 'react'
import Axios from 'axios'
import { Navbar, Image } from 'react-bootstrap'

import './css/App.css'
import { LOGO, PROFPIC } from './assets'
import UsersCard from './components/usersCard'
import Pagination from './components/pagination'

function App() {
  const [showMobileDrawer, setShowMobileDrawer] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [shownData, setShownData] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const dataPerPage = 4
  const url = 'https://randomuser.me/api/?results=28'

  React.useEffect(() => {
    const getUsersData = async () => {
      try {
        setLoading(true)
        let results = []

        if (localStorage.getItem('list') !== null) {
          const tempResults = localStorage.getItem('list')
          results = JSON.parse(tempResults)
        } else {
          const get = await Axios.get(url)
          results = get.data.results

          localStorage.setItem('list', JSON.stringify(results))
        }

        setShownData(results)
        setLoading(false)
      }
      catch (err) {
        setLoading(true)
        console.log(err)
      }
    }
    getUsersData()
  }, [])

  const changeDrawerStatus = () => {
    if (showMobileDrawer) {
      setShowMobileDrawer(false)
    } else if (!showMobileDrawer) {
      setShowMobileDrawer(true)
    }
  }

  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;

  const currentShownData = shownData.slice(indexOfFirstPost, indexOfLastPost)

  const changePage = (selectedNumber) => setCurrentPage(selectedNumber)

  return (
    <div className="App">
      <Navbar className="navbar" style={{ backgroundColor: 'white' }}>
        <Navbar.Brand>
          <i className="fas fa-bars" id="bar-icon" onClick={() => changeDrawerStatus()}></i>
          <Image src={LOGO.default} alt='logo' className="logo" />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="userGreetings-container">
              <h5 className="grey-h5" id="hello">Hello, </h5>
              <h5 className="tosca-h5" id="username">Gadjian User </h5>
              <Image src={PROFPIC.default} alt='logo' className="profpic" roundedCircle />
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <div className="body">
        <div className={showMobileDrawer ? "show-drawer" : "drawer-container"}>
          <h5> <i className="fas fa-home" id="home-icon"></i> Beranda</h5>
          <h5 className="tosca-h5"> <i className="fas fa-users" id="users-icon"></i>Personnel List</h5>
          <h5> <i className="far fa-calendar-alt" id="calendar-icon"></i>Daily Attendance</h5>
        </div>
        <div className="list-container">
          <div className="list-header">
            <div className="left-header">
              <h2 className="font-header">PERSONNEL LIST</h2>
              <h5 className="grey-h5">List of all personnels</h5>
            </div>
            <div className="right-header">
              <div className="search-container">
                <i className="fas fa-search" id="search-icon"></i>
                <input placeholder="Find Personnels" className="search-input" />
              </div>
              <button className="add-button">
                <h5 className="button-text">ADD PERSONNEL </h5>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <UsersCard
            data={currentShownData}
            loading={loading}
          />
          <Pagination
            totalData={shownData.length}
            changePage={changePage}
            dataPerPage={dataPerPage}
            currentPage={currentPage}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
