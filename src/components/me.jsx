import { FaSquareFacebook, FaSquareWhatsapp, FaSquareGithub, FaLinkedin, FaSquareBehance } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


const Me = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen my-10 md:my-16">
                <div>
                    <div className="card md:mx-20 mx-5 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/fx4tJcM/Whats-App-Image-2024-03-20-at-19-02-54-a462226b.jpg" alt="Mushfikus Salehin Mahi" className="border-8 border-black rounded-full h-60" />
                        </figure>
                        <div className="card-body items-center text-center space-y-5">
                            <h2 className="card-title text-3xl">Mushfikus Salehin Mahi</h2>
                            <p>I am Senior Web Developer at SpangleD and a student of Govt. City Collage Chittagong currently living in Chittagong, Bangladesh. My interests range from technology to design. I am also interested in programming, coding, and Digital marketing.</p>
                            <div className="card-actions flex items-center flex-col md:flex-row">
                                <div>
                                <p>Connect with me through -</p>
                                </div>
                                <nav className="flex items-center gap-5 text-4xl">
                                    <a href="https://www.facebook.com/mushfik.mahi.52/"><FaSquareFacebook /></a>
                                    <a href="https://wa.me/8801408000789"><FaSquareWhatsapp /></a>
                                    <a href="https://github.com/MushfikMahi"><FaSquareGithub /></a>
                                    <a href="https://www.instagram.com/mushfik_mahi_/"><FaInstagramSquare /></a>
                                    <a href="https://www.behance.net/mushfikmahi"><FaSquareBehance /></a>
                                    <a href="https://www.linkedin.com/in/mushfik-mahi/"><FaLinkedin /></a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Me;