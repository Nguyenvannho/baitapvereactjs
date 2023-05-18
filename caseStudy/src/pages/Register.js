import React, { useState } from "react";


function Register() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { password } = formData;

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // TODO: handle form submission
    }

    return (
        <>
          <style
        dangerouslySetInnerHTML={{
          __html:
            "\n@import url('https://fonts.googleapis.com/css?family=Abel%7CAbril+Fatface%7CAlegreya%7CArima+Madurai%7CDancing+Script%7CDosis%7CMerriweather%7COleo+Script%7COverlock%7CPT+Serif%7CPacifico%7CPlayball%7CPlayfair+Display%7CShare%7CUnica+One%7CVibur');\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);\nbackground-image: linear-gradient(to top, #A8EDEA 0%, #FED6E3 100%);\nbackground-attachment: fixed;\n  background-repeat: no-repeat;\n    font-family: 'Vibur', cursive;\n/*   the main font */\n    font-family: 'Abel', sans-serif;\nopacity: .95;\n}\nform {\n    width: 450px;\n    min-height: 500px;\n    height: auto;\n    border-radius: 5px;\n    margin: 2% auto;\n    box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);\n    padding: 2%;\n    background-image: linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%);\n}\nform .con {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: space-around;\n    justify-content: space-around;\n    -webkit-flex-wrap: wrap;\n    flex-wrap: wrap;\n      margin: 0 auto;\n}\nheader {\n    margin: 2% auto 10% auto;\n    text-align: center;\n}\nheader h2 {\n    font-size: 250%;\n    font-family: 'Playfair Display', serif;\n    color: #3E403F;\n}\nheader p {letter-spacing: 0.05em;}\n.input-item {\n    background: #fff;\n    color: #333;\n    padding: 14.5px 0px 15px 9px;\n    border-radius: 5px 0px 0px 5px;\n}\n#eye {\n    background: #fff;\n    color: #333;\n    margin: 5.9px 0 0 0;\n    margin-left: -20px;\n    padding: 15px 9px 19px 0px;\n    border-radius: 0px 5px 5px 0px;\n    float: right;\n    position: relative;\n    right: 1%;\n    top: -.2%;\n    z-index: 5;\n    cursor: pointer;\n}\n/* inputs form  */\ninput[class=\"form-input\"]{\n    width: 240px;\n    height: 50px;\n    margin-top: 2%;\n    padding: 15px;\n    font-size: 16px;\n    font-family: 'Abel', sans-serif;\n    color: #5E6472;\n    outline: none;\n    border: none;\n    border-radius: 0px 5px 5px 0px;\n    transition: 0.2s linear;\n}\ninput[id=\"txt-input\"] {width: 250px;}\n/* focus  */\ninput:focus {\n    transform: translateX(-2px);\n    border-radius: 5px;\n}\nbutton {\n    display: inline-block;\n    color: #252537;\n    width: 280px;\n    height: 50px;\n    padding: 0 20px;\n    background: #fff;\n    border-radius: 5px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    text-align: center;\n    transition: all 0.2s linear;\n    margin: 7% auto;\n    letter-spacing: 0.05em;\n}\n/* Submits */\n.submits {\n    width: 48%;\n    display: inline-block;\n    float: left;\n    margin-left: 2%;\n}\n/*       Forgot Password button FAF3DD  */\n.frgt-pass {background: transparent;}\n/*     Sign Up button  */\n.sign-up {background: #B8F2E6;}\n/* buttons hover */\nbutton:hover {\n    transform: translatey(3px);\n    box-shadow: none;\n}\n/* buttons hover Animation */\nbutton:hover {\n    animation: ani9 0.4s ease-in-out infinite alternate;\n}\n@keyframes ani9 {\n    0% {\n        transform: translateY(3px);\n    }\n    100% {\n        transform: translateY(5px);\n    }\n}\n"
        }}
      />

            <div className="overlay">
                <form onSubmit={handleSubmit}>
                    <div className="con">
                        <header className="head-form">
                            <h2>Đăng kí tài khoản</h2>
                        </header>
                        <br />
                        <div className="field-set">
                            <input
                                className="form-input"
                                id="txt-input"
                                type="text"
                                placeholder="Tên"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required=""
                            />
                            <br />
                            <input
                                className="form-input"
                                id="txt-input"
                                type="text"
                                placeholder="Địa chỉ"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required=""
                            />
                            <br />
                            <input
                                className="form-input"
                                id="txt-input"
                                type="text"
                                placeholder="Số điện thoại"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required=""
                            />
                            <br />
                            <input
                                className="form-input"
                                id="txt-input"
                                type="text"
                                placeholder="Giới tính"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                required=""
                            />
                            <br />
                            <input
                                className="form-input"
                                id="txt-input"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange
                                ={handleInputChange}
                                required=""
                            />
                            <br />
                            <input
                                className="form-input"
                                id="txt-input"
                                type="password"
                                placeholder="Mật khẩu"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                                required=""
                            />
                            <br />
                            <input
                                className="form-input"
                                id="txt-input"
                                type="password"
                                placeholder="Xác nhận mật khẩu"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required=""
                            />
                            <br />
                            <button className="log-in">Đăng kí</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;  