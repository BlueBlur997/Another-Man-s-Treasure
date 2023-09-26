import { Link } from 'react-router-dom';
import myGif from '/home/blueblur997/CourseWork/Capstone-1/Another-Man-s-Treasure/kid-sonic-the-hedgehog.gif'

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img
        className='sonicGif'
          src={myGif}
          alt="One man's trash..."
          style={styles.image}
          height='500px'
        />
        <Link to="/signin" style={styles.button}  className='signin'>
          Another Man's Treasure
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // This sets the container to full viewport height
  },
  content: {
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '400px', // Adjust the image size as needed
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    background: '#007bff', // Button background color
    color: '#fff', // Button text color
    fontSize: '18px',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '20px',
    cursor: 'pointer',
  },
};

export default Home;