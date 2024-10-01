import duy1 from 'src/assets/img/about/avatarEdited.jpg';
import about from 'src/assets/img/about/550x640.jpg';
import cvduy from 'src/assets/duy.pdf';
import english from 'src/assets/cvEng.pdf'
import vietnam from 'src/assets/cvViet.pdf'
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';

const About = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        if (sceneEl && sceneEl.current) {
            const parallaxInstance = new Parallax(sceneEl.current, {
                relativeInput: true,
                hoverOnly: false
            })

            parallaxInstance.enable();

            return () => parallaxInstance.disable();
        }
    }, [])
    return (
        <>
            <div className="arlo_tm_section relative" id="about" style={{ paddingTop: "100px" }}>
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Thông tin chính </span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div className="about_image_wrap parallax" data-relative-input="true" ref={sceneEl}>
                                        <div className="image layer" data-depth="0.1">
                                            <img src={about} alt="550x640" />
                                            <div className="inner"
                                                style={{ backgroundImage: `url(${duy1})` }}></div>
                                        </div>
                                        <div className="border layer" data-depth="0.2">
                                            <img src={about} alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4><p>Hi,  I'm a
                                            <> </>
                                            <TypeAnimation
                                                sequence={[
                                                    // Same substring at the start will only be typed out once, initially
                                                    'Frontend Developer',
                                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                                                    'Java Backend Developer',
                                                    2000,
                                                    'Web Developer',
                                                    2000,
                                                ]}
                                                wrapper="span"
                                                speed={50}
                                                repeat={Infinity}
                                            // style={{ fontSize: '2em', display: 'inline-block' }}
                                            />
                                        </p></h4>
                                    </div>
                                    <div className="definition">
                                        <p>Xin chào mình là <strong>Duy</strong>. Vốn là lập trình viên website, cơ mà mình có sở thích là No code.</p>
                                        &nbsp;
                                        <p>Mình đã học nhiều thứ về frontend và backend nhưng vẫn chưa đủ. Mình luôn theo đuổi đam mê code web của mình.</p>
                                        &nbsp;
                                        <p>Hiện tại mình là sinh viên năm 3. </p>
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span><label>Ngày sinh:</label> 10.01.2004</span>
                                            </li>
                                            <li>
                                                <span><label>Giới tính:</label> Name</span>
                                            </li>
                                            <li>
                                                <span><label>Trường:</label> Đại học Công nghiệp Hà Nội</span>
                                            </li>
                                            <li>
                                                <span><label>Chuyên ngành:</label> Công nghệ thông tin</span>
                                            </li>
                                            <li>
                                                <span><label>Github:</label>
                                                    <a href="https://github.com/QuangDuy212">Quang Duy</a>
                                                </span>
                                            </li>
                                            <li>
                                                <span><label>CPA:</label> 3.40</span>
                                            </li>
                                            <li>
                                                <span><label>Mail:</label> <a href="mailto:duy2k4ml1234@gmail.com">duy2k4ml1234&#64;gmail.com</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a href={english} download><span>Download CV English</span></a>
                                            </li>
                                            <li>
                                                <a href={vietnam} download><span>Download CV Vietnamese</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;