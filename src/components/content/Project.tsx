
import { Button, Modal } from 'antd';
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import { RiNextjsFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";

interface IProject {
    image: any;
    title: string;
    shortDescription: string;
    detail: {
        description: string;
        frontend: string;
        backend: string;
        member: string;
        role: string;
        githubFrontend: string;//link video, link github, link deploy
        githubBackend: string;
    }
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataView, setDataView] = useState<IProject | null>(null);

    const dataProjects: IProject[] = [
        {
            image: <FaReact size={50} color="#00d9ff" />,
            title: " Clone Tiki",
            shortDescription: "Trang web thương mại điện tử bán sách ",
            detail: {
                description: "Trang web được làm vào năm 2 ",
                frontend: "React.JS, Ant design, html, scss",
                backend: "Nodejs, Express, MongoDB",
                member: "Duy",
                role: "front end",
                githubFrontend: "https://github.com/QuangDuy212/udemy-react-test-fresher-hoidanit",//link video, link github, link deploy
                githubBackend: "Không có"
            }
        },
        {
            image: <RiNextjsFill size={50} color="#000" />,
            title: "Sound-cloud Clone",
            shortDescription: "Trang web nghe nhạc online",
            detail: {
                description: "Nghe nhiều thể loại nhạc, có tua nhạc trên nền và có thể comment",
                frontend: "Nextjs, MUI, html, scss",
                backend: "Nodejs, Express, MongoDB",
                member: "Duy",
                role: "front end",
                githubFrontend: "https://github.com/QuangDuy212/Sound-cloud",//link video, link github, link deploy
                githubBackend: "k có"
            }
        },
        {
            image: <SiSpring size={50} color="#6aad3c" />,
            title: "Laptop shop",
            shortDescription: "Trang web thương mại điện tử bán laptop chính hãng",
            detail: {
                description: "Trang web làm một cách đơn giản theo mô hình MVC còn nhiều hạn chế",
                frontend: "JSP, html, css",
                backend: "Java Spring, Spring data JPA, Spring Security, Spring boot",
                member: "Duy",
                role: "Fullstack",
                githubFrontend: "https://github.com/QuangDuy212/laptop-shop",//link video, link github, link deploy
                githubBackend: "https://github.com/QuangDuy212/laptop-shop"
            }
        },
        {
            image: <SiSpring size={50} color="#6aad3c" />,
            title: "Book Store",
            shortDescription: "Trang web thương mại điện tử bán sách chính hàng",
            detail: {
                description: "Trang web làm một cách đơn giản theo mô hình MVC còn nhiều hạn chế",
                frontend: "JSP, html, css",
                backend: "Java Spring, Spring data JPA, Spring Security, Spring boot",
                member: "Duy",
                role: "Fullstack",
                githubFrontend: "https://github.com/QuangDuy212/book-store-java-spring-mvc",//link video, link github, link deploy
                githubBackend: "https://github.com/QuangDuy212/book-store-java-spring-mvc"
            }
        },
        {
            image: [<SiSpring size={50} color='#6aad3c' />, <FaReact size={50} color="#00d9ff" />],
            title: "Jobhunter",
            shortDescription: "Trang web xin việc làm IT chất",
            detail: {
                description: "Trang web được làm bằng mô hình REST xịn xò hơn so với MVC",
                frontend: "React.JS, Ant design, html, scss",
                backend: "Java spring, Spring Boot, Spring Sercurity, Spring data JPA, Spring Mail",
                member: "Duy",
                role: "FullStack",
                githubFrontend: "https://github.com/QuangDuy212/jobhunter-reactjs-frontend",//link video, link github, link deploy
                githubBackend: "https://github.com/QuangDuy212/jobhunter-java-spring-restfull-learn"
            }
        },
        {
            image: [<SiSpring size={50} color='#6aad3c' />, <RiNextjsFill size={50} color="#000" />],
            title: "Cinema",
            shortDescription: "Trang web đặt mua vé xem phim",
            detail: {
                description: "Trang web được làm bằng mô hình REST xịn xò hơn so với MVC",
                frontend: "Nextjs, Ant design, html, scss",
                backend: "Java spring, Spring Boot, Spring Sercurity, Spring data JPA, Spring Mail",
                member: "Duy",
                role: "FullStack",
                githubFrontend: "https://github.com/QuangDuy212/cinema-nextjs-frontend",//link video, link github, link deploy
                githubBackend: "https://github.com/QuangDuy212/cinema-java-spring-restful"
            }
        }
    ]

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleViewDetail = (data: IProject) => {
        setIsModalOpen(true);
        setDataView(data);
    }
    return (
        <>
            <div className="arlo_tm_section" id="projects">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>My project</h3>
                            <span>Các dự án đã hoàn thiện</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects && dataProjects.map((item, index) => {
                                    return (
                                        <li>
                                            <div className="inner" key={`project-${index}`}>
                                                <div className="icon">
                                                    {item.image}
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text" style={{ height: "50px" }}>
                                                    <p>{item.shortDescription}</p>
                                                </div>
                                                <Button type='primary' className='viewdetail' onClick={() => handleViewDetail(item)}
                                                    style={{ marginTop: "20px" }}
                                                >
                                                    &nbsp;
                                                    <span className='icon'>Xem chi tiết</span>
                                                </Button>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                title={dataView && dataView?.title ? dataView?.title : ""}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={<></>}
                maskClosable={false}
            >
                <ul style={{ listStyle: "none" }}>
                    <li ><strong>Miêu tả:</strong> {dataView?.detail.description}</li>
                    <li><strong>Frontend:</strong>{dataView?.detail.frontend}</li>
                    <li><strong>Backend:</strong> {dataView?.detail.backend}</li>
                    <li><strong>Số lượng thành viên:</strong> 1</li>
                    <li><strong>Vai trò:</strong> {dataView?.detail.role}</li>
                    <li><strong>Demo:</strong> <a href={`${dataView?.detail.githubFrontend}`} style={{ cursor: "pointer" }}>{dataView?.detail.githubFrontend}</a></li>
                    <li><strong>Github:</strong> <a href={`${dataView?.detail.githubBackend}`} style={{ cursor: "pointer" }}>{dataView?.detail.githubBackend}</a></li>
                </ul>
            </Modal>
        </>
    )
}
export default Project;