import * as React from "react";
import styled from "styled-components";

interface IStyledEllipse {
}

const StyledEllipse = styled.ellipse<IStyledEllipse>`
`;

const Dot: React.FC = () => {
    return (
        <StyledEllipse />
    )
}

export default Dot;
