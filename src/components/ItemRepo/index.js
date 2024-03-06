/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ItemRepoContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id);
    }

    return (
        <ItemRepoContainer onClick={handleRemove}>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target="_blank" rel="noreferrer" >Ver repositório</a>
            <a href="#" rel="noreferrer" className="remover"> Remover </a>
            <hr />
        </ItemRepoContainer>
    )
}

export default ItemRepo;