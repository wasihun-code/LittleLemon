/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import logo from '../imgs/Logo.svg'
export default function Footer(props) {
  return (
          <footer className="footer">

            <div className="col">
              <img
                loading="lazy"
                src={logo}
                // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c396aeb44057ba039c214bb42113d3aecf53b09c266919cfcbfdb6ca4bd12691?apiKey=fd5f70311d6e4631913a50062159fe38&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c396aeb44057ba039c214bb42113d3aecf53b09c266919cfcbfdb6ca4bd12691?apiKey=fd5f70311d6e4631913a50062159fe38&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c396aeb44057ba039c214bb42113d3aecf53b09c266919cfcbfdb6ca4bd12691?apiKey=fd5f70311d6e4631913a50062159fe38&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c396aeb44057ba039c214bb42113d3aecf53b09c266919cfcbfdb6ca4bd12691?apiKey=fd5f70311d6e4631913a50062159fe38&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c396aeb44057ba039c214bb42113d3aecf53b09c266919cfcbfdb6ca4bd12691?apiKey=fd5f70311d6e4631913a50062159fe38&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c396aeb44057ba039c214bb42113d3aecf53b09c266919cfcbfdb6ca4bd12691?apiKey=fd5f70311d6e4631913a50062159fe38&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c396aeb44057ba039c214bb42113d3aecf53b09c266919cfcbfdb6ca4bd12691?apiKey=fd5f70311d6e4631913a50062159fe38&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c396aeb44057ba039c214bb42113d3aecf53b09c266919cfcbfdb6ca4bd12691?apiKey=fd5f70311d6e4631913a50062159fe38&"
                className="img"
              />
            </div>
               
            <div className="col-2">
                <h1 className="header">Navigation</h1>
                <Link to='#'>Home</Link>
                <Link to='#'>Menu</Link>
                <Link to='/booking'>Reservation</Link>
            </div>
               
            <div className="col-2">
                <h1 className="header">Contact Us</h1>
                <Link to='#'>Address</Link>
                <Link to='#'>Phone number</Link>
                <Link to='#'>Email</Link>
            </div>

            <div className="col-2">
                <h1 className="header">Social Media</h1>
                <Link to='#'>Instagram</Link>
                <Link to='#'>Youtube</Link>
                <Link to='#'>Facebook</Link>
            </div>
    
        </footer>
  );
}


