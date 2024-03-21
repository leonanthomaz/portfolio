import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

export const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Tempo de <strong className="yellow">Código</strong>
      </h1>
      <GitHubCalendar
        username="leonanthomaz"
        blockSize={15}
        blockMargin={5}
        color="#6102ce"
        fontSize={16}
      />
    </Row>
  );
}