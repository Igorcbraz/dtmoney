import styled from 'styled-components';

export const LandingHeader = styled.header`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem;

    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .headerItem{
        img {
            height: 3rem;
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
    }

    div {        
        display: flex;
        gap: 1.5rem;

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

        #cadastrar{
            background: #f3f3f3;
            color: var(--blue-light);
        }
    }
`
