import "../styles/globals.css";

//INTERNAL IMPORT

import { votingProvider } from "../context/Voter";
import NavBar from '../components/NavBar/NavBar';


const MyApp = ({ Component, pageProps }) =>(
    <votingProvider>
        <div>
            <NavBar/>
             <div>
                <Component {...pageProps} />;
            </div>
        </div>
    </votingProvider>
);

export default MyApp;
