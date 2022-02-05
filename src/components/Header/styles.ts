import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;
     
        &:hover{
            filter: brightness(0.9);
        }
    }

    #logout{
        background: var(--blue-light);
        border-radius: 0 0.25rem 0.25rem 0;
    }
    #btnUser{
        background-color: ${lighten(0.05, '#6933FF')};
        border-radius: 0.25rem 0 0 0.25rem;
    }
`;

export const MenuStyles = styled.div`
    #logout{
        background-color: ${lighten(0.13, '#E52E40')};
    }
    #page-wrap {
        text-align: center;

        /* Prevent sidebar from showing a scrollbar on page */
        overflow: auto;
    }
    #dtMoney {
        margin-bottom: 3rem;
    }

    .bm-menu-wrap{
        height: 100vh !important;
        top: 0 !important;
        left: 0 !important;
    }
    /* Individual item */
    .bm-item {
        display: flex !important;
        align-items: center !important;
        justify-content: center!important;

        text-decoration: none;
        margin-bottom: 1rem;

        width: 100%;

        transition: filter 0.2s;
     
        &:hover{
            filter: brightness(0.9);
        }
    }

    /* The rest copied directly from react-burger-menu docs */

    /* Position and sizing of burger button */
    .bm-burger-button {
        position: absolute;
        width: 36px;
        height: 30px;
        left: 36px;
        top: 36px;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
        background: #fff;
        border-radius: 0.25rem;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
        background: #bdc3c7;
    }

    /* General sidebar styles */
    .bm-menu {
        top: 0 !important;
        left: 0 !important;
        background: var(--blue);
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
        fill: #373a47;
    }

    /* Wrapper for item list */
    .bm-item-list {
        color: #b8b7ad;
    }

    /* Styling of overlay */
    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
        height: 100vh !important;
    }
`