import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const LINKS = ['/Home','/Resume','/Youtube', '/Contact','/Projects','/OtherWork'];
const ELINKS = ['https://github.com/daledezma2020','mailto:daledezma2020@gmail.com?subject=Contact%20Me&body=Say%20Something']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonLink,
  ebLink
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) 
  ? buttonSize 
  : SIZES[0];

const checkELINK = ELINKS.includes(ebLink)
const checkButtonLink = checkELINK //for external link use
  ? ebLink
  : LINKS.includes(buttonLink)
    ? buttonLink
    :LINKS[0]



  return (
    <>
      {checkELINK ? (
        <ExternalLink href={checkButtonLink} className='btn-mobile'>
          <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
          >
            {children}
          </button>
        </ExternalLink>
      ) : (
        <Link to={checkButtonLink} className='btn-mobile'>
          <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
          >
            {children}
          </button>
        </Link>
      )}
    </>
  );
};
