import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinkDesign = {
    color: "white",
    with: "150px",
    padding: "10px",
    backgroundColor: "red",
    border: "2px solid black",
    marginLeft:"20px"
}

const style1 = {
    marginTop:"25px",
    display: "flex",
    justifyContent:"center"
}

const Menu = () => {
    return (
        <>
            <div style={style1}>
                <NavLink style={navLinkDesign} exact to="/"> Home </NavLink>
                <NavLink style={navLinkDesign} exact to="/statewise"> Statewise </NavLink>
                <NavLink style={navLinkDesign} exact to="/casestimeseries"> CasesTimeSeries </NavLink>
                <NavLink style={navLinkDesign} exact to="/tested"> Tested </NavLink>
                <NavLink style={navLinkDesign} exact to="/other"> Other </NavLink>
                <NavLink style={navLinkDesign} exact to="/WIP"> WIP </NavLink>
            </div>

        </>
    );
}

export default Menu;