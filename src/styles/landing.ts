import styled from 'styled-components';

export const Container = styled.div`
    background: var(--blue);
    height: 95vh;

    @media screen and (max-width:770px) {
        height: 135vh;
    }
`;

export const Introduction = styled.main`
    max-width: 1120px;
    padding: 0 1rem;
    margin: 0 auto 4.6rem auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width:770px) {
        flex-wrap: wrap-reverse;
    }

    .introduction{
        color: #fff;
        width: 50%;

        @media screen and (max-width:770px) {
            width: 100%;
        }   

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

    img{
        width: 100%;
        max-width: 450px;
    }
`

interface SectionStylesProps {
    witchWrap: string;
}
export const SectionStyles = styled.section<SectionStylesProps>`
    max-width: 1120px;
    margin: 2rem auto;
    width: 100%;
    height: 95vh;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    @media screen and (max-width:770px) {
        flex-wrap: ${props => props.witchWrap};
    }

    .container{
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
    #cellphone{
        display: block;
        width: 85%;
        margin: 0 auto;
    }
`

export const Features = styled.section`
    background: var(--blue);
    height: fit-content;
    padding: 4rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    
    .container{
        max-width: 1120px;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-direction: column;

        .header {
            h1 {
                font-size: 2.5rem;
                font-weight: 600;
                color: #fff;
                text-align: center;
            }
            p {
                font-size: 1.2rem;
                margin: 1rem 0 2rem 0;
                color: #fff;
                text-align: center;
            }
            h1 span {
                color: #8bd8a1;
            }

        }
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    gap: 2rem;

    div{
        background-color: var(--blue-light);
        width: 45%;
        padding: 1rem;
        border-radius: 0.25rem;

        h3{
            font-size: 1.3rem;
            font-weight: 700;
            color: #8bd8a1;
            text-align: center;
            margin-bottom: 1rem;
        }
        p {
            font-size: 0.9rem;
            color: #fff;
            text-align: center;
        }
        img {
            display: block;
            margin: 0 auto;
            width: 65%;
        }
    }
`

export const Sentence = styled.section`
    max-width: 1120px;
    margin: 0 auto;

    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;

    height: 90vh;

    h1 {
        font-size: 4rem;
        color: var(--blue);
        text-align: center;
        margin-bottom: 2rem;
    }
    h1 span {
        color: #8bd8a1;
    }
    button {
        font-size: 1.1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 2px solid transparent;
        padding: 0 2.3rem;
        border-radius: 0.25rem;
        height: 3.2rem;

        transition: 0.2s;
     
        &:hover{
            color: var(--blue-light);
            background: transparent;
            border: 2px solid var(--blue-light);
        }
    }
`

export const SocialMedias = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1.5rem;
    
    background-color: var(--blue-light);
    color: #FFF;

    ul {
        display: flex;
        gap: 2.5rem;

        li {
            list-style-type: none;

            a {
                transition: 0.2s;

                &:hover {
                    background-color: var(--blue);
                    padding: 0.5rem 0.5rem 0 0;
                    border-radius: 1rem 4.2rem 3.1rem 2rem;
                }
            }
        }
    }
`

export const Footer = styled.footer`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2.5rem;
    width: 100%;

    color: #FFF;
    background-color: var(--blue);

    div {
        h3 {
            display: inline-block;
            position: relative;

            margin-bottom: 2rem;
            font-size: 1.5rem;

            color: #FFF;

            /* effect-underline */
            &::after {
                content: '';
                position: absolute;
                display: inline-block;
                left: 0;
                height: 1em;
                width: 60%;
                border-bottom: 3px solid;
                margin-top: 1rem;
                color: var(--green);
            }
        }

        p {
            text-align: justify;
            font-size: 1rem;
            width: 85%;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            font-size: 1rem;

            li {
                list-style-type: none;
                
                a{
                    color: #FFF;
                }
            }
        }
    }
`

export const Final = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue);
    width: 100%;
    padding-bottom: 1rem;

    a {
        color: #FFF;
    }
`