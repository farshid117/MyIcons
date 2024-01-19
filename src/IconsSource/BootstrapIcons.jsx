import React from 'react';

const BootstrapIcons = () => {
    return (
        <div className="container" style={{ width: "90vw", margin: "0 auto", display: "flex", gap: "2rem", fontSize: 30, direction: "ltr" }}>
            <i className="bi bi-toggle-on"></i>
            <i className="bi bi-list-nested"></i>
            <i className="services__icon bi bi-browser-chrome"></i>
            <i className="services__icon bi bi-browser-edge"></i>
            <i className="services__icon bi bi-browser-firefox"></i>
        </div>
    );
}

export default BootstrapIcons;
