import PropTypes from "prop-types";
import React from "react";

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <React.StrictMode>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <h6>Humberto</h6>
      </React.StrictMode>
    </>
  );
};

FirstApp.defaultProps = {
  name: "Humberto",
  subtitle: "No hay subtitulo",
  title: "No hay titulo",
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
