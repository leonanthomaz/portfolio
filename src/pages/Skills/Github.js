import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';

const Github = () => {
    const [ list, setList ] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/leonanthomaz').then((response)=>{
            setList(response.data)
            console.log(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

  return (
    <Fragment >Github
        {list.map((e, i)=>{
            return (
                <div key={i}>
                    {e.public_repos}
                    <a href={e.repos_url}>Link</a>
                </div>
            )
        })}
    </Fragment>
  )
}

export default Github;
