import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;

    & .categories{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 30%;
    }

    & #category{
        display: flex;
        align-items: row;
        justify-content: space-between;
        width: 100%;
    }
`