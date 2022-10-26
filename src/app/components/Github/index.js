
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import * as G from './GithubStyles';

export const Github = () => {

    const [ user, setUser ] = useState([])
    const [ rep, setRep ] = useState([])

    useEffect(()=>{
        const LoadUser = async () =>{
            await axios.get('https://api.github.com/users/leonanthomaz')
            .then((response)=>{
                console.log('user', response.data)
                setUser([response.data])
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        LoadUser()
    },[])

    // useEffect(()=>{
    //     const LoadRepositories = async () =>{
    //         await axios.get('https://api.github.com/users/leonanthomaz')
    //         .then((response)=>{
    //             console.log('rep', response.data)
    //             setRep([response.data])
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //         })
    //     }
    //     LoadRepositories()
    // },[])
    return(
        <G.Container>
            <G.Wrapper>
                {user.map((item, index)=>{
                    return(
                    <Fragment key={index}>
                        <G.Left>
                            <G.Header>{item.name}</G.Header>
                            <G.Content>
                                Bio: {item.name}
                                location: {item.location}
                                login: @{item.login}
                                rep: {item.repos_url}
                                location: {item.location}

                                {/* {rep.map((i, index)=>{
                                    return(
                                        <div>

                                        </div>
                                    )
                                })} */}

                            </G.Content>
                            <G.Footer></G.Footer>
                        </G.Left>
                        <G.Right></G.Right>
                    </Fragment>
                    )
                })}
            </G.Wrapper>
        </G.Container>
    )
}