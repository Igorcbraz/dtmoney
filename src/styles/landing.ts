import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
    background: var(--blue);
    height: 95vh;
`;

export const Header = styled.header`
    max-width: 1120px;
    margin: 0 auto;

    padding-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
        height: 3rem;
    }

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

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 3rem;
        height: 3rem;
        margin-left: 1rem;

        li {
            list-style-type: none;
            
            a {
                display: inline-block;
                position: relative;
                text-decoration: none;
                color: #fff;
            }
            /* effect-underline */
            a:after {
                content: '';
                position: absolute;
                display: inline-block;
                left: 0;
                height: 1em;
                width: 100%;
                border-bottom: 1px solid;
                margin-top: 10px;
                opacity: 0;
                -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
                transition: opacity 0.35s, transform 0.35s;
                -webkit-transform: scale(0,1);
                transform: scale(0,1);
            }
            a:hover:after {
                opacity: 1;
                -webkit-transform: scale(1);
                transform: scale(1);
            }
        }
    }

    div {
        display: flex;
        gap: 1.5rem;

        #cadastrar{
            background: #f3f3f3;
            color: var(--blue-light);
        }
    }

    #btn-light{
        background-color: ${lighten(0.05, '#6933FF')};
        border-radius: 0.25rem 0 0 0.25rem;
    }
`;

export const Introduction = styled.main`
    max-width: 1120px;
    margin: 0 auto 4.6rem auto;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .introduction{
        color: #fff;
        width: 50%;

        h1 {
            font-size: 3.4rem;
            font-weight: 700;
        }
        p {
            font-size: 1rem;
            margin: 1rem 0 2rem 0;
        }

        h1 span{
            color: #8bd8a1;
        }
        
        div {
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 1rem;

            button {
                display: flex;
                justify-content: space-between;
                align-items: center;

                font-size: 1rem;
                color: #FFF;
                background: var(--blue-light);
                border: 0;
                padding: 2rem;
                border-radius: 0.25rem;
                height: 3rem;

                transition: filter 0.2s;
            
                &:hover{
                    filter: brightness(0.9);
                }

                #chartUp {
                    width: 10%;
                }
                #phone{
                    width: 15%;
                }
            }
        }
    }
    .illustration{
        width: 40%;

        img{
            width: 100%;
        }
    }
`

export const DesktopSection = styled.section`
    max-width: 1120px;
    margin: 0 auto;
    width: 100%;
    height: 95vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    .dashboard{
        span{
            color: #fff;
            font-weight: 600;
            background: #a1ffdd;
            border-radius: 0.25rem;
            padding: 0.15rem 1rem;

            display: block;
            margin-bottom: 0.5rem
        }
        h1 {
            font-size: 3rem;
            font-weight: 700;
            color: var(--green);
        }
        p {
            font-size: 1rem;
            color: #717171;
            letter-spacing: 0.1rem;
            margin: 0.5rem 0 2rem 0;
        }
        
        div {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 1rem;

            button {
                display: flex;
                align-items: center;

                font-size: 1rem;
                color: #FFF;
                background: var(--blue-light);
                border: 0;
                padding: 1.4rem 1.7rem;
                border-radius: 0.25rem;
                height: 1rem;

                transition: filter 0.2s;
            
                &:hover{
                    filter: brightness(0.9);
                }
            }

            .outline{
                background: transparent;
                color: #baa1ff;
                text-decoration: underline;
                
                transition: 0.4s;

                &:hover {
                    color: #FFF;
                    background: #baa1ff;
                }
            }
        }
    }

    img{
        width: 100%;
    }
`