import React from "react";
import { useRouter } from "next/navigation";
import LinkedIn from "@/pubic/LinkedIn.svg"; // Assuming the correct path
import Github from "@/public/Github.svg";
import Discord from "@/public/Discord.svg";
import Image from "next/image";
import { collectRoutesUsingEdgeRuntime } from "next/dist/build/utils";

const Footer : React.FC = () => {
    const router = useRouter();

    const goToHome = () => {
        router.push('/');
    };

    const goToAbout = () => {
        router.push('/About');
    };

    const goToProjects = () => {
        router.push('/Projects');
    }

    const goToContact = () => {
        router.push('/Contact');
    }

    return (
        <footer className="footer">
          <div className="social-media">
            <button className="social-button" style={{backgroundColor: 'blue'}} >
              <a href="https://www.linkedin.com/in/iqra-abdul-qadir-735583301/">
                <Image src="/LinkedIn.svg" alt="LinkedIn Logo" width={20} height={20} />
                </a>
            </button>
            <button className="social-button" style={{backgroundColor: 'darkgray'}}>
              <a href="https://github.com/IqraAbdulQadir">
                <Image src="/Github.svg" alt="Github Logo" width={20} height={20} />
                
              </a>
            </button>
            <button className="social-button" style={{backgroundColor: 'black'}}>
              <a href="https://discord.com/channels/@bookiecookie0455_66894">
                <Image src="/Discord.svg" alt="Discord Logo" width={20} height={20} />
                
              </a>
            </button>
          </div>
            <p style={{color: 'light gray'}}>&copy; 2024 All Rights Reserved Iqra</p>
          
        </footer>
      );
    };
    
    export default Footer;