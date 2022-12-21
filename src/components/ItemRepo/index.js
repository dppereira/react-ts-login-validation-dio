import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name} ({repo.language})</p>
        <phttps>HTTPS: {repo.clone_url}</phttps><br />
        <pssh>SSH: {repo.ssh_url}</pssh><br /><br />
        <a href={repo.html_url} rel="noreferrer" target="_blank" className='mostrar'>Ver repositório</a><br />
        <a href="#"  rel="noreferrer" className="remover" onClick={handleRemove}>Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
