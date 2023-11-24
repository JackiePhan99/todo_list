import React from 'react';
import { Link } from 'react-router-dom';
import {StyledButton} from "../styles/styles";
import {paths} from "../constants/paths";

const Navbar = () => {

    return (
        <nav>
            <ul className="navbar">
                <li>
                    <StyledButton>
                        <Link to={paths.home}>Input</Link>
                    </StyledButton>
                </li>
                <li>
                    <StyledButton>
                        <Link to={paths.posts}>Posts</Link>
                    </StyledButton>
                </li>
                <li>
                    <StyledButton>
                        <Link to={paths.table}>Tables</Link>
                    </StyledButton>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;