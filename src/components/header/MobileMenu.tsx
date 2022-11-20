import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import { ActiveLink } from "./ActiveLink";
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);
const SVGMENU = styled.svg`
  color: white;
`;
const MenuButton = ({ onClick, isOpen }) => {
  return (
    <motion.button
      className="menu-button"
      onClick={onClick}
      animate={isOpen ? "open" : "closed"}
      initial={false}
    >
      <SVGMENU
        width="23"
        height="23"
        style={{ margin: "4px 0 0 2px" }}
        viewBox="0 0 23 23"
        fill="#ffffff"
      >
        <Path
          fill="#AB7C94"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          fill="#AB7C94"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          fill="#AB7C94"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </SVGMENU>
    </motion.button>
  );
};

const leftMenu = [
  "Accessory",
  "Beanie",
  "Hoodie",
  "Long Sleeve",
  "Shirt",
  "Shorts",
];
const rightMenu = ["Small", "Medium", "Large", "X Large", "XX Large"];

const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring",
    },
    display: "block",
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const slideHorizontalAnimation = {
  left: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  right: {
    x: -250,
    transition: {
      duration: 0.3,
    },
  },
};
const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 5%;
  right: 5%;
  transform: translate(-50%, -50%);
  @media only screen and (min-width: 600px) {
    ${tw`hidden`};
  }
`;
const DropdowContainer = styled(motion.div)`
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.6);
  overflow-x: hidden;
  position: absolute;
  top: -1rem;
  right: 3rem;
  transition: height 0.5s;
  width: 18rem;
  z-index: 200;
  overflow-y: hidden;
  border: 0.2rem solid white;
  background: #333333;
`;

const Menu = styled.div`
display: flex;
flex-direction: column;
font-size: 1.6rem;
height: 100%;
position: relative;
width: 25rem;
`;

const MenuButtonDecoration = styled(MenuButton)``;
export const MobileMenu: React.FC = () => {
  const [isOpen, toggleDropdown] = useCycle(false, true);
  const [isLeftMenu, toggleMenu] = useCycle(true, false);
  const leftMenuHeight = (leftMenu.length + 1) * 65;
  const rightMenuHeight = (rightMenu.length + 1) * 65;
  const height = isLeftMenu ? leftMenuHeight : rightMenuHeight;

  return (
    <Wrapper>
      <MenuButtonDecoration onClick={toggleDropdown} isOpen={isOpen} />
      <DropdowContainer
        style={{ height }}
        initial="close"
        animate={isOpen ? "open" : "close"}
        variants={slideVerticalAnimation}
      >

        <Menu>
        <LinkItem key="Education" label="Home" href="/" />
        <LinkItem key="Portfolio" label="Portfolio" href="/Portfolio" />
        <LinkItem
          key="contact"
          label="Kontact"
          href="/Contact"
        />
        </Menu>
      </DropdowContainer>
    </Wrapper>
  );
};
const LinkItem: React.FC<{
    label: string;
    href: string;
    hasBgdColor?: boolean;
  }> = ({ label, href, hasBgdColor: hasBgdColor }) => {
    return (
      <ActiveLink href={href} passHref hasBgdColor={hasBgdColor}>
        {label}
      </ActiveLink>
    );
  };