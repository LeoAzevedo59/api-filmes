import styled from "styled-components";

export const Container = styled.div`
    h1 {
        text-align: center;
        margin-bottom: 2rem;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 200px;
        height: 280px;
    }

    span {
        width: 200px;
        padding: 1rem;
        text-align: center;
    }

    a {
        transition: ease-in 0.2s;
    }

    a:hover {
        transform: scale(1.1);
    }
`;