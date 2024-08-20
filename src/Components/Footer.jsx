import CardDeal from "./CardDeal";
import {logo} from "../assets";
import {footerLinks, socialMedia} from "../utils/index";
const Footer = () => {
    return (
        <div>
            <CardDeal />
            <section className="max-[960px]:flex-col bg-black py-32 px-24 flex justify-between items-center max-h-full">
                <div className="bank__image flex-col justify-center">
                    <div className="h-10 flex items-center gap-2">
                        <img src={logo} alt="Niviq" className="w-14 h-14" />
                        <p className="text-white text-3xl font-bold">NIVIQ</p>
                    </div>
                    <div className=" justify-center flex flex-row md:mt-5 mt-6">
                        {socialMedia.map((social, index) => (
                            <img
                                key={social.id}
                                src={social.icon}
                                alt={social.id}
                                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                                    index !== socialMedia.length - 1
                                        ? "mr-6"
                                        : "mr-0"
                                }`}
                                onClick={() => window.open(social.link)}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex max-[960px]:flex-col max-[960px]:text-center gap-16">
                    <p className="max-[960px]:mt-20 text-white w-[200px] hover:text-[#72e485] cursor-pointer max-[960px]:mb-5 ">
                        Technology Park 8-14 Marie Curie Street 08042 Barcelona
                    </p>

                    <div className="flex max-[960px]:flex-col w-full  justify-between  md:mt-0 ">
                        {footerLinks.map((footer) => (
                            <div
                                className={`flex max-[960px]:flex-col max-[960px]:text-center ss:my-0 my-4 min-w-[150px]`}
                                key={footer.id}
                            >
                                <ul className="list-none max-[960px]:mb-14">
                                    {footer.links.map((link, index) => (
                                        <li
                                            key={link.name}
                                            className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-[#72e485] cursor-pointer ${
                                                index !==
                                                footer.links.length - 1
                                                    ? "mb-4"
                                                    : "mb-0"
                                            }`}
                                        >
                                            {link.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
