import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

const App = () => {
  // contoh hooks useState 
  const [showAddTask, setShowAddTask] = useState(false)

  return (
    // redux dipanggil disini biar semua component bisa akses store
    <Provider store={store}>
      <Router>
        <div className="container">
          {/* manggil Header component
              Dari induk ke anak pake prop, contohnya title, 
              liat di header component cara manggilnya.
              Dari anak ke induk tinggal panggil header
          */}
          <Header 
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />

          {/* cara pake route */}
          <Route path='/' exact
            render={(props) => (
              <>
                {/* manggil AddTask Component
                onAdd={addTask} */}
                {showAddTask && <AddTask />}

                {/* manggil Tasks Component
                    {tasks.length...} <<< ini contoh dari conditional 
                */}
                {/* {tasks.length > 0 ? (
                  <Tasks onDelete={deleteTask} onToggle={toggleReminder}/>
                ) : (
                  'No Tasks To Show'
                )} */}

                <Tasks />
              </>
            )}
          />
          <Route path='/about' component={About} />

          {/* manggil Footer component */}
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
