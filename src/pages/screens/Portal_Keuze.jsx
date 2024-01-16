import PropTypes from "prop-types";
import "@/pages/pages_css/Portal_Keuze.css";

const Portaalkeuze = ({ handlePortalButtonClick }) => {
    return (
        <div className="container mt-5">
            <div className="card border-0">
                <div className="half-circle top-left d-none d-md-block"></div>
                <div className="half-circle bottom-right d-none d-md-block"></div>
                <div className="card-body text-center text-md-left">
                    <img className="logo d-none d-sm-block" alt="Logo" src="/icons/logo.png" />
                    <h1 className="mb-4">Kies uw portaal:</h1>
                    <div className="row">
                        <div className="col-md-6 mb-4 col-12">
                            <div
                                className="button1 d-flex justify-content-center align-items-center"
                                onClick={() => handlePortalButtonClick("company")}
                            >
                                <div className="button-content text-center">
                                    <h2 className="d-none d-md-block">Bedrijf</h2>
                                    <img
                                        className="company-icon"
                                        alt="Bedrijven icoon"
                                        src="/icons/company_icon.png"
                                    />
                                    <p className="d-none d-md-block">
                                        Het bedrijfsportaal is het portaal voor de bedrijven die de
                                        onderzoeken maken.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 col-12">
                            <div
                                className="button2 d-flex justify-content-center align-items-center"
                                onClick={() => handlePortalButtonClick("expert")}
                            >
                                <div className="button-content text-center">
                                    <h2 className="d-none d-md-block">Ervaringsdeskundige</h2>
                                    <img
                                        className="people-icon"
                                        alt="Ervaringsdeskundige icoon"
                                        src="/icons/people_icon.png"
                                    />
                                    <p className="d-none d-md-block">
                                        Het ervaringsdeskundigeportaal is het portaal voor deelnemers
                                        met een beperking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Portaalkeuze.propTypes = {
    handlePortalButtonClick: PropTypes.func.isRequired,
};

export default Portaalkeuze;
