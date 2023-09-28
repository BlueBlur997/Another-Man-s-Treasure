import { Link } from 'react-router-dom';
import myGif from '/home/blueblur997/CourseWork/Capstone-1/Another-Man-s-Treasure/kid-sonic-the-hedgehog.gif';
import "./Home.css";

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
      <Link
         to="/signin"
         style={{
          ...styles.button,
          ":hover": styles.buttonHover, // Apply the hover effect
        }}
        className="signin"
      >Another Man's Treasure</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  },
  content: {
    textAlign: 'center',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    background: 'gray',
    color: '#fff',
    fontSize: '18px',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '300px', 
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    background: '#0056b3',
  },
};


export default Home;
