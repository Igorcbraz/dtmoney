import styled from "styled-components"
import { darken } from "polished"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
`

export const PaginationStyle = styled.div`
    button {
        font-size: 1rem;
        color: var(--text-body);
        background: var(--shape);
        border: 2px solid ${darken(0.15, '#FFF')};
        padding: 0 1rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: 0.2s;

        &:hover {
            color: var(--blue);
            border-color: var(--blue);
        }   
    }

    .active{
        color: var(--blue);
        border-color: var(--blue);
    }
    .arrows {
        background: var(--blue);
        color: var(--shape);
        border: 2px solid ${darken(0.15, '#FFF')};

        transition: 0.2s;

        &:hover {
            color: var(--shape);
            border-color: var(--blue);
        } 
    }
    .buttonDisabled {
        pointer-events: none;
    }
`

export const RangePagination = styled.div`
    label{
        color: var(--text-title);
        margin-right: 1rem;
    }
    input {
        font-size: 1rem;
        color: var(--shape);
        background: var(--blue);
        border: 2px solid ${darken(0.15, '#FFF')};
        border-radius: 0.25rem;
        text-align: center;
        height: 2rem;
        width: 20%;

        transition: 0.2s;

        &:focus-visible{
            outline: 0;
            border-color: var(--blue) !important;
        }
        &::placeholder{
            color: var(--shape);
        }
        &:hover{
            background-color: var(--background);
            border: 2px solid var(--blue);
            color: var(--blue);
        }
    }
`